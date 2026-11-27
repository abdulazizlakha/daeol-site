export type Post = { slug: string; title: string; description: string; date: string; read: string; body: string[] };

// Starter articles: edit freely. Dates are ISO strings.
export const POSTS: Post[] = [
  {
    slug: 'what-is-answer-engine-optimization',
    title: 'What is Answer Engine Optimization (AEO)?',
    description: 'AEO makes your pages easy for AI tools to quote. Here is what it covers and where to start.',
    date: '2026-11-20',
    read: '4 min read',
    body: [
      'Answer Engine Optimization is the work of shaping your content so AI-powered search tools can lift a clear, accurate answer from it. Where classic SEO asks “how do I rank this page?”, AEO asks “if a tool had to answer this question in two sentences, would it use my page?”',
      'Start with the questions customers actually ask before they buy: what does it cost, how long does it take, how is it different from the alternative. Put a direct answer in the first lines under each question, then add detail below it. Tools quote what is easy to quote.',
      'Next, label your pages. Structured data (schema) tells machines whether a page is an FAQ, a service, an article or an organization. It does not replace good writing, but it removes guesswork.',
      'Finally, keep facts consistent. If your name, services, locations and pricing differ across your site and profiles, generative tools have no stable picture of you. Pick the canonical version and align everything to it.',
      'No one can promise a mention in ChatGPT or Gemini. What you can do is improve the signals these tools rely on, check a fixed set of prompts every month, and keep what works.',
    ],
  },
  {
    slug: 'seo-aeo-geo-one-strategy',
    title: 'SEO, AEO and GEO: one strategy, not three',
    description: 'Why running search and answer-engine work separately wastes effort, and how to combine them.',
    date: '2026-11-12',
    read: '3 min read',
    body: [
      'SEO, AEO and GEO sound like three projects. In practice they draw from the same material: clear pages, sound technical foundations and consistent brand facts.',
      'SEO makes sure crawlers can reach and understand your pages and that they match search intent. AEO structures those pages so an answer can be lifted cleanly. GEO widens the context around your brand so generative tools describe you correctly.',
      'Treat them as layers. Foundations first, then answer-first structure, then topical and entity depth. Measuring all three together shows what is actually moving visibility.',
    ],
  },
  {
    slug: 'how-to-run-an-ai-visibility-check',
    title: 'How to run a simple AI visibility check',
    description: 'A repeatable way to see whether AI tools mention your brand for the questions that matter.',
    date: '2026-11-05',
    read: '4 min read',
    body: [
      'Pick ten questions a buyer would type before choosing a business like yours. Mix broad (“best agency for…”), comparison (“X vs Y”) and specific (“how much does… cost”).',
      'Ask each one in ChatGPT, Gemini, Perplexity and Copilot, in a fresh session. Record whether your brand is named, how it is described, and which sources are cited. Save the date: answers change.',
      'Repeat monthly with the same prompts. A fixed list is what turns a one-off look into a trend you can act on.',
      'If you want this done for you across selected prompts with competitors included, that is what the free audit covers.',
    ],
  },
];
