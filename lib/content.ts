export const SITE = { name: "DAEOL", url: "https://daeol.com", email: "hello@daeol.com" };
export type Card = { t: string; d: string; tag?: string };
export type Block = { k: "cards"; items: Card[]; note?: string } | { k: "steps"; items: Card[]; note?: string } | { k: "pricing" } | { k: "faq" } | { k: "form" };
export type PageData = { slug: string; nav: string; title: string; desc: string; h1: string; intro: string; blocks: Block[] };

export const FAQS = [
 ["What is AEO?","Answer Engine Optimization (AEO) is the practice of making your content answer-focused so AI-powered search tools like ChatGPT, Perplexity and Google Gemini can understand and reference it accurately."],
 ["What is GEO?","Generative Engine Optimization (GEO) improves your content's context, structure and brand information consistency so generative AI tools can interpret your business accurately."],
 ["How is GEO different from traditional SEO?","Traditional SEO helps pages rank in search results. GEO helps AI tools understand and represent your brand inside the answers they write. They complement each other, and we run them together."],
 ["Can DAEOL guarantee that ChatGPT or another AI tool will mention my business?","No. Nobody controls what an AI platform says, and no one can honestly guarantee a mention. We improve the signals these tools rely on and report what changes."],
 ["How long does AEO and GEO take to show results?","Usually a few months, not days. Timing depends on your starting point and competition, which is why Basic Answer has a 3-month minimum."],
 ["Do I need SEO before investing in GEO?","Solid technical SEO makes your content easier for both search engines and AI tools to find and understand. We check your foundations in the audit and fix gaps as part of the work."],
 ["What is included in the free audit?","A website audit covering technical, content and structure basics, an AI citation check across selected prompts, an initial competitor visibility review, and prioritized next steps."],
 ["How much do your services cost?","Audit Check is free. Basic Answer is $498/month with a 3-month minimum. Premium is $1,399/month on a 6-month term or $1,899/month on a 3-month term. Prices are in USD."],
 ["Will I receive monthly reports?","Yes. Every month you receive a report on what we did and what changed, including selected AI-answer visibility observations and search performance."],
 ["Do you work with businesses in Canada, the UK and Australia?","Yes. We serve businesses in the USA, Canada, the UK and Australia."],
];
export const PLANS = [
 { n:"Audit Check", p:"Free", d:"A one-time website audit and AI citation check to see where your brand stands.", f:["Website audit: technical, content and structure basics","AI citation check across selected prompts","Initial competitor visibility review","Prioritized opportunities and next steps"], cta:"Get your free audit" },
 { n:"Basic Answer", p:"$498", d:"AEO setup and strategy with schema and entity cleanup, priority page optimization, and AI prompt monitoring.", f:["AEO setup and strategy","Schema and entity cleanup","Priority page optimization (TODO: set number)","AI prompt monitoring (TODO: set number)","Monthly progress report"], cta:"Choose Basic" },
 { n:"Premium", p:"$1,399", d:"Full search and AI growth: technical SEO, content and authority building, conversion improvements, reports and strategy calls.", f:["Everything in Basic Answer","Full technical SEO","Ongoing content and authority building","Conversion improvements","Monthly reports and strategy calls"], cta:"Choose Premium" },
];
export const PAGES: PageData[] = [
 { slug:"why-daeol", nav:"Why DAEOL", title:"Why DAEOL | SEO, AEO & GEO Together", desc:"Customers research with Google and AI tools. DAEOL runs SEO, AEO and GEO as one strategy so your brand is found and cited in both.", h1:"Search Is Changing. Your Visibility Should Too.", intro:"Customers now research products and compare services in both traditional search engines and AI tools like ChatGPT, Gemini and Perplexity. A complete visibility strategy covers both.", blocks:[{k:"cards",items:[
  {tag:"Traditional",t:"SEO",d:"Technical website foundations, search intent and keyword relevance, helpful well-structured content, internal linking and organic visibility."},
  {tag:"AI-Powered",t:"AEO & GEO",d:"Clear answer-focused content, better structure and context, relevant well-supported brand information, and improved potential to be understood by AI search."}]}]},
 { slug:"services", nav:"Services", title:"AEO, GEO & SEO Services | DAEOL", desc:"AI visibility audits, answer engine optimization, generative engine optimization, technical SEO and schema, content and monthly reporting.", h1:"AEO, GEO and SEO services built to work together", intro:"DAEOL connects your website, content and brand signals into one visibility strategy built around the questions your customers actually ask.", blocks:[{k:"cards",items:[
  {tag:"01",t:"AI Visibility Audit",d:"Review selected AI-search prompts and customer questions, examine competitor visibility, identify website and content gaps, and provide prioritized recommendations."},
  {tag:"02",t:"Answer Engine Optimization (AEO)",d:"Improve answer-focused page structure, create clear responses to relevant questions, optimize FAQs and service pages, and clarify existing content."},
  {tag:"03",t:"Generative Engine Optimization (GEO)",d:"Improve content context and structure, strengthen topical coverage, and keep brand information consistent so AI systems can interpret it."},
  {tag:"04",t:"Technical SEO & Schema",d:"Technical reviews, crawlability and indexability checks, internal linking, structured-data implementation, and performance prioritization."},
  {tag:"05",t:"Answer-First Content & Authority",d:"Customer-question research, helpful informational and comparison content, brand entity consistency, and ethical digital PR."},
  {tag:"06",t:"Measurement & Reporting",d:"Baseline AI visibility checks, prompt and competitor monitoring, organic performance reviews, monthly reports and recommendations."}]}]},
 { slug:"platforms", nav:"Platforms", title:"AI Search Platforms We Optimize For | DAEOL", desc:"How DAEOL helps brands show up in Google Search, ChatGPT, Perplexity, Google Gemini and Microsoft Bing.", h1:"Show up where your customers ask for answers", intro:"DAEOL helps you evaluate and improve your presence across the discovery platforms your customers use. Visibility varies by query, location, platform, model and time.", blocks:[{k:"cards",note:"We don't claim control over these platforms, guaranteed placements, or official partnerships.",items:[
  {tag:"G",t:"Google Search",d:"Traditional search now blends AI-generated overviews with classic results. Strong SEO foundations still matter."},
  {tag:"AI",t:"ChatGPT",d:"Clear, well-structured brand information helps it reference your business accurately."},
  {tag:"P",t:"Perplexity",d:"An answer engine with cited AI summaries. Answer-focused content and clear sourcing can improve how your brand appears."},
  {tag:"✦",t:"Google Gemini",d:"Consistent brand information and helpful content support more accurate representation."},
  {tag:"B",t:"Microsoft Bing",d:"Technical SEO and structured data help both classic and Copilot results find your pages."}]}]},
 { slug:"process", nav:"Our Process", title:"Our Process: Audit to Action | DAEOL", desc:"DAEOL's four-step process: discover, audit and prioritize, optimize, then measure and improve.", h1:"How DAEOL works: from audit to action", intro:"Every engagement follows four steps: discover, audit and prioritize, optimize, then measure and improve.", blocks:[{k:"steps",items:[
  {tag:"01",t:"Discover",d:"Understand the business, audience, website, competitors and the customer questions that matter most."},
  {tag:"02",t:"Audit & Prioritize",d:"Assess technical SEO, content quality, AI-search opportunities and brand information. Create a prioritized plan."},
  {tag:"03",t:"Optimize",d:"Implement agreed improvements to content, page structure, technical foundations and brand information."},
  {tag:"04",t:"Measure & Improve",d:"Review agreed metrics, repeat selected visibility checks, and refine the strategy using available data."}]}]},
 { slug:"industries", nav:"Industries", title:"AI Search Optimization by Industry | DAEOL", desc:"AEO, GEO and SEO for SaaS, professional services, marketing, e-commerce, healthcare and local services.", h1:"AI search optimization for your industry", intro:"Every industry has different discovery challenges. We tailor AEO, GEO and SEO to the questions your audience asks.", blocks:[{k:"cards",note:"Illustrative use cases, not verified client results.",items:[
  {t:"SaaS & Technology",d:"Complex products are hard for AI to summarize. Answer-focused documentation and comparison content help engines represent your product clearly."},
  {t:"Professional Services",d:"Trust and expertise must be obvious. Clear authority signals and structured service pages help you surface in advisory queries."},
  {t:"Marketing & Creative",d:"Agencies get oversimplified or misattributed. Defined service categories and consistent brand info help AI represent your full offering."},
  {t:"E-commerce & Retail",d:"Product pages compete with AI buying advice. Structured product data and decision-stage content help you appear in comparisons."},
  {t:"Healthcare & Wellness",d:"Accuracy and trust are critical. Clear, authoritative, well-structured content helps reputable providers surface."},
  {t:"Home & Local Services",d:"Local queries blend maps, AI summaries and reviews. Local SEO, consistent business info and review signals strengthen visibility."}]}]},
 { slug:"pricing", nav:"Pricing", title:"AEO, GEO & SEO Pricing | DAEOL", desc:"Free audit, Basic Answer at $498/month, Premium from $1,399/month. Transparent USD pricing, no guaranteed rankings.", h1:"Simple packages for AEO, GEO and SEO growth", intro:"Three options: a free audit, Basic Answer at $498/month (3-month minimum), and Premium at $1,399/month on a 6-month term or $1,899/month on a 3-month term.", blocks:[{k:"pricing"}]},
 { slug:"faq", nav:"FAQ", title:"AEO & GEO FAQ | DAEOL", desc:"Answers about AEO, GEO, AI search optimization, timelines, guarantees, pricing and reporting.", h1:"Frequently asked questions", intro:"Clear answers about AEO, GEO, AI search optimization and how DAEOL works.", blocks:[{k:"faq"}]},
 { slug:"audit", nav:"Free Audit", title:"Free AI Visibility Audit | DAEOL", desc:"Request a free website audit and AI citation check. Get prioritized opportunities with no obligation.", h1:"Get your free AI visibility audit", intro:"We review where your brand stands in search and AI answers, then email prioritized opportunities. No obligation.", blocks:[{k:"form"}]},
];
