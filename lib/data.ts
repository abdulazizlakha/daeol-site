export const PLATFORMS = ['ChatGPT', 'Perplexity', 'Google Gemini', 'Google Search', 'Microsoft Bing', 'Copilot'];

export const LAYERS = [
  {
    key: 'SEO',
    title: 'Be found',
    body: 'Classic search still sends buyers to your site. We fix the technical foundations, search intent and internal linking that rankings are built on.',
    points: ['Crawlability and indexability checks', 'Search-intent mapped pages', 'Internal linking and site structure', 'Performance priorities'],
  },
  {
    key: 'AEO',
    title: 'Be the direct answer',
    body: 'Answer Engine Optimization shapes pages so tools can lift a clear, accurate answer to a customer’s question.',
    points: ['Answer-first page structure', 'FAQ and service pages built around real questions', 'Structured data that labels what each page is', 'Clear, quotable definitions and facts'],
  },
  {
    key: 'GEO',
    title: 'Be understood',
    body: 'Generative Engine Optimization improves context, topical coverage and brand-fact consistency so generative tools can describe your business correctly.',
    points: ['Topical coverage around your category', 'Consistent brand facts across the web', 'Entity clarity for people, products and places', 'Prompt and competitor monitoring'],
  },
];

export const SERVICES = [
  { slug: 'ai-visibility-audit', title: 'AI Visibility Audit', short: 'See where you stand', body: 'Review selected AI-search prompts and customer questions, examine competitor visibility, identify website and content gaps, and provide prioritized recommendations.', items: ['Selected prompt review', 'Competitor visibility check', 'Website and content gaps', 'Prioritized action list'] },
  { slug: 'aeo', title: 'Answer Engine Optimization', short: 'AEO', body: 'Improve answer-focused page structure, create clear responses to relevant questions, optimize FAQs and service pages, and clarify existing content.', items: ['Answer-first rewrites', 'FAQ and service page optimization', 'Question mapping', 'Content clarity edits'] },
  { slug: 'geo', title: 'Generative Engine Optimization', short: 'GEO', body: 'Improve content context and structure, strengthen topical coverage, and keep brand information consistent so AI systems can interpret it.', items: ['Context and structure', 'Topical coverage', 'Brand-fact consistency', 'Entity clarity'] },
  { slug: 'technical-seo-schema', title: 'Technical SEO & Schema', short: 'Foundations', body: 'Technical reviews, crawlability and indexability checks, internal linking, structured-data implementation, and performance prioritization.', items: ['Technical review', 'Structured data', 'Internal linking', 'Performance priorities'] },
  { slug: 'content-authority', title: 'Answer-First Content & Authority', short: 'Authority', body: 'Customer-question research, helpful informational and comparison content, brand entity consistency, and ethical digital PR.', items: ['Question research', 'Comparison content', 'Entity consistency', 'Ethical digital PR'] },
  { slug: 'measurement', title: 'Measurement & Reporting', short: 'Proof', body: 'Baseline AI visibility checks, prompt and competitor monitoring, organic performance reviews, monthly reports and recommendations.', items: ['Baseline checks', 'Prompt monitoring', 'Organic performance reviews', 'Monthly reports'] },
];

export const STEPS = [
  { title: 'Discover', body: 'Understand the business, audience, website, competitors and the customer questions that matter most.' },
  { title: 'Audit & Prioritize', body: 'Assess technical SEO, content quality, AI-search opportunities and brand information. Create a prioritized plan.' },
  { title: 'Optimize', body: 'Implement agreed improvements to content, page structure, technical foundations and brand information.' },
  { title: 'Measure & Improve', body: 'Review agreed metrics, repeat selected visibility checks, and refine the strategy using available data.' },
];

export const INDUSTRIES = [
  { title: 'SaaS & Technology', body: 'Complex products are hard for AI to summarize. Answer-focused documentation and comparison content help engines represent your product clearly.' },
  { title: 'Professional Services', body: 'Trust and expertise must be obvious. Clear authority signals and structured service pages help you surface in advisory queries.' },
  { title: 'Marketing & Creative', body: 'Agencies get oversimplified or misattributed. Defined service categories and consistent brand info help AI represent your full offering.' },
  { title: 'E-commerce & Retail', body: 'Product pages compete with AI buying advice. Structured product data and decision-stage content help you appear in comparisons.' },
  { title: 'Healthcare & Wellness', body: 'Accuracy and trust are critical. Clear, authoritative, well-structured content helps reputable providers surface.' },
  { title: 'Home & Local Services', body: 'Local queries blend maps, AI summaries and reviews. Local SEO, consistent business info and review signals strengthen visibility.' },
];

export const FAQS = [
  { q: 'What is AEO?', a: 'Answer Engine Optimization (AEO) is the practice of making your content answer-focused so AI-powered search tools like ChatGPT, Perplexity and Google Gemini can understand and reference it accurately.' },
  { q: 'What is GEO?', a: 'Generative Engine Optimization (GEO) improves your content’s context, structure and brand information consistency so generative AI tools can interpret your business accurately.' },
  { q: 'How is GEO different from traditional SEO?', a: 'Traditional SEO helps pages rank in search results. GEO helps AI tools understand and represent your brand inside the answers they write. They complement each other, and we run them together.' },
  { q: 'Can DAEOL guarantee that ChatGPT or another AI tool will mention my business?', a: 'No. Nobody controls what an AI platform says, and no one can honestly guarantee a mention. We improve the signals these tools rely on and report what changes.' },
  { q: 'How long does AEO and GEO take to show results?', a: 'Usually a few months, not days. Timing depends on your starting point and competition, which is why Basic Answer has a 3-month minimum.' },
  { q: 'How much do your services cost?', a: 'Audit Check is free. Basic Answer is $498/month with a 3-month minimum. Premium is $1,399/month on a 6-month term or $1,899/month on a 3-month term. Prices are in USD.' },
  { q: 'Which countries do you serve?', a: 'We work with brands in the USA, Canada, the UK and Australia.' },
];

export const PLANS = {
  audit: { name: 'Audit Check', price: 'Free', blurb: 'A one-time website audit and AI citation check to see where your brand stands.', features: ['Website audit: technical, content and structure basics', 'AI citation check across selected prompts', 'Initial competitor visibility review', 'Prioritized opportunities and next steps'], cta: 'Get your free audit' },
  basic: { name: 'Basic Answer', price: '$498', blurb: 'AEO setup and strategy with schema and entity cleanup, priority page optimization, and AI prompt monitoring.', features: ['AEO setup and strategy', 'Schema and entity cleanup', 'Priority page optimization', 'AI prompt monitoring', 'Monthly progress report'], cta: 'Choose Basic' },
  premium: { name: 'Premium', price6: '$1,399', price3: '$1,899', blurb: 'Full search and AI growth: technical SEO, content and authority building, conversion improvements, reports and strategy calls.', features: ['Everything in Basic Answer', 'Full technical SEO', 'Ongoing content and authority building', 'Conversion improvements', 'Monthly reports and strategy calls'], cta: 'Choose Premium' },
};
