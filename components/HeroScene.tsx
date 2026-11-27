'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VERT = /* glsl */ `
uniform float uProgress; uniform float uTime; uniform float uPixel; uniform float uScroll;
attribute vec3 aStart; attribute vec3 aRand;
varying float vMix; varying float vDepth;
void main(){
  float p = clamp((uProgress - aRand.x * 0.45) / 0.55, 0.0, 1.0);
  p = p * p * (3.0 - 2.0 * p);
  vec3 pos = mix(aStart, position, p);
  float n = sin(position.y * 3.0 + uTime * 1.1 + aRand.y * 6.28) * 0.5 + cos(position.x * 2.4 + uTime * 0.8) * 0.5;
  pos += normalize(position + 0.001) * n * 0.07 * p;
  pos += normalize(position + 0.001) * uScroll * 3.0 * aRand.z;
  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = (aRand.y * 2.6 + 1.3) * uPixel * (7.5 / -mv.z);
  vMix = aRand.z; vDepth = clamp((-mv.z - 4.5) / 5.0, 0.0, 1.0);
}`;
const FRAG = /* glsl */ `
varying float vMix; varying float vDepth;
void main(){
  vec2 c = gl_PointCoord - 0.5; float d = length(c);
  if(d > 0.5) discard;
  float a = smoothstep(0.5, 0.15, d);
  vec3 navy = vec3(0.035, 0.192, 0.553);
  vec3 coral = vec3(1.0, 0.42, 0.357);
  vec3 col = vMix > 0.8 ? coral : navy;
  gl_FragColor = vec4(col, a * (1.0 - vDepth * 0.65));
}`;

export default function HeroScene() {
  const mount = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = mount.current!;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: 'high-performance' });
    } catch { return; }
    const small = window.innerWidth < 800;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(dpr);
    renderer.setClearColor(0x000000, 0);
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 50);
    camera.position.z = 8;

    const N = small ? 3500 : 8000, RING = small ? 350 : 800, total = N + RING;
    const target = new Float32Array(total * 3), start = new Float32Array(total * 3), rnd = new Float32Array(total * 3);
    const R = 1.75;
    for (let i = 0; i < total; i++) {
      let x: number, y: number, z: number;
      if (i < N) {
        const k = i + 0.5, phi = Math.acos(1 - (2 * k) / N), th = Math.PI * (1 + Math.sqrt(5)) * k;
        const r = R * (0.97 + Math.random() * 0.06);
        x = r * Math.cos(th) * Math.sin(phi); y = r * Math.cos(phi); z = r * Math.sin(th) * Math.sin(phi);
      } else {
        const a = Math.random() * Math.PI * 2, r = 2.55 + (Math.random() - 0.5) * 0.12;
        x = r * Math.cos(a); z = r * Math.sin(a); y = (Math.random() - 0.5) * 0.05;
      }
      target.set([x, y, z], i * 3);
      start.set([(Math.random() - 0.5) * 16, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10 - 2], i * 3);
      const coral = i >= N ? 0.95 : Math.random() < 0.16 ? 0.9 : Math.random() * 0.7;
      rnd.set([Math.random(), Math.random(), coral], i * 3);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(target, 3));
    geo.setAttribute('aStart', new THREE.BufferAttribute(start, 3));
    geo.setAttribute('aRand', new THREE.BufferAttribute(rnd, 3));
    const mat = new THREE.ShaderMaterial({
      vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthWrite: false,
      uniforms: { uProgress: { value: reduce ? 1 : 0 }, uTime: { value: 0 }, uPixel: { value: dpr * 1.5 }, uScroll: { value: 0 } },
    });
    const points = new THREE.Points(geo, mat);
    const group = new THREE.Group();
    group.rotation.z = -0.35;
    group.add(points);
    scene.add(group);

    const place = () => {
      const w = host.clientWidth, h = host.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h; camera.updateProjectionMatrix();
      const wide = w / h > 1.1;
      group.position.set(wide ? 2.2 : 0, wide ? 0.1 : 1.6, 0);
      group.scale.setScalar(wide ? 1 : 0.8);
    };
    place();
    const ro = new ResizeObserver(place); ro.observe(host);

    const mouse = { x: 0, y: 0 }, eased = { x: 0, y: 0 };
    const onMove = (e: PointerEvent) => { mouse.x = (e.clientX / window.innerWidth - 0.5) * 2; mouse.y = (e.clientY / window.innerHeight - 0.5) * 2; };
    window.addEventListener('pointermove', onMove);

    let visible = true;
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0 });
    io.observe(host);

    const intro = reduce ? null : gsap.to(mat.uniforms.uProgress, { value: 1, duration: 3.2, ease: 'power2.inOut', delay: 0.15 });
    const scroll = reduce ? null : ScrollTrigger.create({
      trigger: host.parentElement, start: 'top top', end: 'bottom top', scrub: true,
      onUpdate: (s) => { mat.uniforms.uScroll.value = s.progress; host.style.opacity = String(1 - s.progress * 0.9); },
    });

    const clock = new THREE.Clock();
    const loop = () => {
      const t = clock.getElapsedTime();
      mat.uniforms.uTime.value = t;
      if (visible) {
        eased.x += (mouse.x - eased.x) * 0.05; eased.y += (mouse.y - eased.y) * 0.05;
        if (!reduce) { points.rotation.y = t * 0.12 + eased.x * 0.5; points.rotation.x = eased.y * 0.25; }
        renderer.render(scene, camera);
      }
    };
    gsap.ticker.add(loop);

    return () => {
      gsap.ticker.remove(loop);
      intro?.kill(); scroll?.kill(); ro.disconnect(); io.disconnect();
      window.removeEventListener('pointermove', onMove);
      geo.dispose(); mat.dispose(); renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={mount} className="hero-canvas" aria-hidden="true" style={{ position: 'absolute', inset: 0 }} />;
}
