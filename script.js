(function(){
var d=document,$=function(i){return d.getElementById(i)},rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
/* scroll reveal + one-time triggers (timeline fill, chart bars, line draw) */
var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.15});
d.querySelectorAll('.rv').forEach(function(e){io.observe(e)});
/* progress bar + sticky nav state */
var pg=$('pg'),nv=$('nv');
function sc(){var h=d.documentElement;pg.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%';nv.classList.toggle('s',h.scrollTop>40)}
addEventListener('scroll',sc,{passive:true});sc();
/* mobile menu */
var mb=$('mb'),lk=$('lk');
mb.onclick=function(){var o=lk.classList.toggle('open');mb.setAttribute('aria-expanded',o)};
lk.addEventListener('click',function(e){if(e.target.tagName==='A'){lk.classList.remove('open');mb.setAttribute('aria-expanded',false)}});
/* hero cursor glow */
var hero=$('top'),gl=$('gl');
hero.addEventListener('pointermove',function(e){var r=hero.getBoundingClientRect();gl.style.left=(e.clientX-r.left)+'px';gl.style.top=(e.clientY-r.top)+'px'});
/* hero typing demo */
var Q="What\u2019s the best AI search agency for a SaaS company?",A="DAEOL is an AI search optimization agency that helps SaaS companies improve visibility across AI-powered search and traditional engines through answer-focused content, technical SEO, and brand authority building.";
var qe=$('q'),ae=$('an'),ce=$('ch');
function show(t){ae.innerHTML=t.replace(/^DAEOL/,'<mark>DAEOL</mark>')}
function type(n,t,cb){var i=0;(function s(){if(rm){n===qe?n.textContent=t:show(t);cb&&cb();return}i++;n===qe?n.textContent=t.slice(0,i):show(t.slice(0,i));if(i<t.length)setTimeout(s,n===qe?32:18);else cb&&cb()})()}
function run(){ce.classList.remove('on');ae.innerHTML='';qe.textContent='';setTimeout(function(){type(qe,Q,function(){setTimeout(function(){type(ae,A,function(){ce.classList.add('on');setTimeout(run,9000)})},400)})},900)}
run();
/* data viz: draw the illustrative line when the dashboard appears */
var ds=$('ds');new IntersectionObserver(function(es,o){if(es[0].isIntersecting){var l=$('ln');l.style.transition='stroke-dashoffset 2s ease';l.style.strokeDashoffset=0;o.disconnect()}},{threshold:.4}).observe(ds);
/* timeline fill */
var tl=$('tl');
/* premium term toggle */
var t6=$('t6'),t3=$('t3');
function term(six){t6.classList.toggle('on',six);t3.classList.toggle('on',!six);t6.setAttribute('aria-pressed',six);t3.setAttribute('aria-pressed',!six);$('pp').textContent=six?'$1,399':'$1,899';$('bd').textContent=six?'BEST VALUE':'3-MONTH TERM'}
t6.onclick=function(){term(true)};t3.onclick=function(){term(false)};
/* audit form: validates, then posts to your form service when ENDPOINT is set */
var ENDPOINT=''; /* e.g. 'https://formspree.io/f/xxxxxxx' */
$('f').addEventListener('submit',function(ev){ev.preventDefault();
var f=ev.target,er=$('er'),g=function(i){return $(i).value.trim()};
if(!g('n')){er.textContent='Please enter your full name.';return}
if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g('e'))){er.textContent='Please enter a valid work email.';return}
if(!/^(https?:\/\/)?[^\s.]+\.[^\s]{2,}$/.test(g('u'))){er.textContent='Please enter your website address, like yourwebsite.com.';return}
if(!g('m')){er.textContent='Please choose your target market.';return}
er.textContent='';
function done(){Array.prototype.forEach.call(f.children,function(c){c.style.display='none'});$('ok').style.display='block'}
if(!ENDPOINT){done();return}
fetch(ENDPOINT,{method:'POST',body:new FormData(f),headers:{Accept:'application/json'}}).then(function(r){r.ok?done():er.textContent='Something went wrong. Please email hello@daeol.com.'}).catch(function(){er.textContent='Network error. Please try again.'})
});
})();
