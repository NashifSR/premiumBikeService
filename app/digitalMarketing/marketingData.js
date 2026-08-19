export const marketingRoles = [
    {
        id: "smm",
        title: "Social Media Marketing",
        short: "SMM",
        icon: "📱",
        description:
            "Plan, create, publish, manage, and analyze social media content.",

        tasks: [
            "Define measurable social media goals based on business objectives, target audience, and desired outcomes",
            "Research the target audience to understand demographics, interests, behaviors, pain points, and content preferences",
            "Analyze competitors to identify their platforms, content strategies, posting patterns, engagement tactics, and opportunities",
            "Evaluate social platforms and select the channels that best match the target audience and business objectives",
            "Develop a social media strategy covering objectives, audience, positioning, content, posting frequency, engagement, and measurement",
            "Create content pillars that organize posts around the main topics, themes, products, services, and audience interests",
            "Build a content calendar showing topics, formats, platforms, publishing dates, campaigns, and responsible team members",
            "Research content ideas using audience questions, trends, competitors, keywords, customer feedback, and industry developments",
            "Write platform-specific post copy with strong hooks, clear messaging, appropriate tone, and relevant calls to action",
            "Design branded social media graphics optimized for the dimensions and visual requirements of each platform",
            "Create short-form videos using hooks, storytelling, captions, branding, and calls to action appropriate for each platform",
            "Schedule approved content using social media management tools according to the publishing calendar",
            "Publish content and verify that captions, links, tags, visuals, hashtags, and formatting appear correctly",
            "Engage with followers by responding to relevant conversations and encouraging meaningful community interaction",
            "Respond to comments professionally while answering questions, addressing concerns, and encouraging further engagement",
            "Respond to direct messages and route sales, support, or business inquiries to the appropriate person when necessary",
            "Monitor brand mentions, tags, keywords, and relevant conversations to identify opportunities and potential issues",
            "Analyze reach, impressions, engagement, clicks, follower growth, leads, and conversions to evaluate content performance",
            "Optimize the content strategy by increasing successful formats and topics while improving or removing underperforming content",
            "Prepare monthly social media reports summarizing performance, key insights, successful content, problems, and recommended actions",
        ],

        tools: [
            {
                name: "Meta Business Suite",
                url: "https://business.facebook.com/",
                description:
                    "Manage Facebook and Instagram content, messages, insights, and scheduling.",
                guide:
                    "https://www.facebook.com/business/tools/meta-business-suite",
            },
            {
                name: "Canva",
                url: "https://www.canva.com/",
                description:
                    "Create social media graphics, presentations, thumbnails, and marketing creatives.",
                guide: "https://www.canva.com/designschool/",
            },
            {
                name: "Buffer",
                url: "https://buffer.com/",
                description:
                    "Schedule and manage social media content across multiple platforms.",
                guide: "https://buffer.com/resources/",
            },
            {
                name: "Hootsuite",
                url: "https://www.hootsuite.com/",
                description:
                    "Manage multiple social accounts, scheduling, monitoring, and reporting.",
                guide: "https://education.hootsuite.com/",
            },
            {
                name: "Google Analytics",
                url: "https://analytics.google.com/",
                description:
                    "Measure website traffic and conversions generated from social media.",
                guide:
                    "https://support.google.com/analytics/",
            },
        ],

        workflow: [
            {
                step: "Research",
                description:
                    "Understand the business, audience, competitors, platforms, and market.",
            },
            {
                step: "Strategy",
                description:
                    "Define goals, content pillars, posting frequency, tone, and KPIs.",
            },
            {
                step: "Content",
                description:
                    "Research ideas, write copy, design creatives, and produce videos.",
            },
            {
                step: "Publishing",
                description:
                    "Schedule and publish content using the appropriate platform tools.",
            },
            {
                step: "Engagement",
                description:
                    "Reply to comments and messages and actively engage with the community.",
            },
            {
                step: "Analysis",
                description:
                    "Review reach, engagement, clicks, followers, leads, and conversions.",
            },
            {
                step: "Optimization",
                description:
                    "Use performance data to improve future content.",
            },
        ],

        kpis: [
            "Reach",
            "Impressions",
            "Engagement Rate",
            "Followers",
            "Profile Visits",
            "Link Clicks",
            "Leads",
            "Conversions",
        ],

        deliverables: [
            "Social Media Strategy",
            "Content Calendar",
            "Social Media Posts",
            "Creative Assets",
            "Monthly Performance Report",
        ],
    },

    {
        id: "seo",
        title: "SEO Specialist",
        short: "SEO",
        icon: "🔎",
        description:
            "Improve search visibility, organic traffic, rankings, and conversions.",

        tasks: [
            "Understand the website, business model, products, services, customers, competitors, and organic search objectives",
            "Perform a comprehensive SEO audit to identify technical, on-page, content, indexing, performance, and authority issues",
            "Research the target audience to understand their search behavior, problems, questions, needs, and purchasing journey",
            "Perform keyword research to identify relevant search terms based on search volume, competition, relevance, and business value",
            "Analyze search intent to determine whether users are looking for information, comparisons, products, services, or specific websites",
            "Analyze competitors to identify their highest-performing pages, keywords, content strategies, backlinks, and search visibility",
            "Identify content gaps where competitors rank for valuable searches that the website does not adequately target",
            "Audit technical SEO elements including site architecture, HTTPS, mobile usability, canonicalization, redirects, structured data, and crawl issues",
            "Check search engine indexing to identify pages that are missing, incorrectly indexed, duplicated, or unnecessarily indexed",
            "Check website crawlability by reviewing robots.txt, XML sitemaps, internal links, response codes, and crawl errors",
            "Optimize page titles using relevant keywords while keeping titles descriptive, compelling, and aligned with search intent",
            "Write and optimize meta descriptions that accurately summarize pages and encourage qualified users to click",
            "Optimize heading structures so pages have clear hierarchy and headings that help users and search engines understand the content",
            "Optimize URLs to make them concise, descriptive, readable, and aligned with the page topic",
            "Improve website content by matching search intent, covering important subtopics, demonstrating expertise, and providing genuine value",
            "Improve internal linking to connect related pages and distribute relevance and authority throughout the website",
            "Optimize images using appropriate formats, dimensions, filenames, alt text, compression, and loading techniques",
            "Identify and resolve page-speed and Core Web Vitals issues that negatively affect user experience",
            "Create an SEO content strategy based on keyword opportunities, search intent, business priorities, and content gaps",
            "Develop a legitimate backlink strategy focused on earning relevant and authoritative links through useful content and outreach",
            "Monitor keyword rankings to identify ranking improvements, declines, new opportunities, and competitive changes",
            "Review Google Search Console for search queries, impressions, clicks, CTR, indexing problems, and search performance changes",
            "Analyze organic traffic and conversions to determine which pages, keywords, and landing pages generate business value",
            "Identify and prioritize SEO problems according to their potential impact, difficulty, urgency, and business importance",
            "Prepare monthly SEO reports showing traffic, rankings, technical health, completed work, results, problems, and next actions",
        ],

        tools: [
            {
                name: "Google Search Console",
                url: "https://search.google.com/search-console/",
                description:
                    "Monitor search performance, indexing, queries, pages, and technical search issues.",
                guide:
                    "https://support.google.com/webmasters/",
            },
            {
                name: "Google Analytics",
                url: "https://analytics.google.com/",
                description:
                    "Analyze organic traffic, user behavior, engagement, and conversions.",
                guide:
                    "https://support.google.com/analytics/",
            },
            {
                name: "Google Keyword Planner",
                url: "https://ads.google.com/home/tools/keyword-planner/",
                description:
                    "Discover keyword ideas and estimate search demand.",
                guide:
                    "https://support.google.com/google-ads/topic/3119138",
            },
            {
                name: "Ahrefs",
                url: "https://ahrefs.com/",
                description:
                    "Research keywords, backlinks, competitors, content opportunities, and rankings.",
                guide:
                    "https://help.ahrefs.com/",
            },
            {
                name: "Semrush",
                url: "https://www.semrush.com/",
                description:
                    "Perform keyword research, competitor research, site audits, and SEO analysis.",
                guide:
                    "https://www.semrush.com/kb/",
            },
            {
                name: "Screaming Frog",
                url: "https://www.screamingfrog.co.uk/seo-spider/",
                description:
                    "Crawl websites and identify technical SEO problems.",
                guide:
                    "https://www.screamingfrog.co.uk/seo-spider/user-guide/",
            },
            {
                name: "PageSpeed Insights",
                url: "https://pagespeed.web.dev/",
                description:
                    "Analyze page performance and Core Web Vitals.",
                guide:
                    "https://developers.google.com/speed/docs/insights/v5/about",
            },
        ],

        workflow: [
            {
                step: "Audit",
                description:
                    "Identify technical, on-page, content, and authority problems.",
            },
            {
                step: "Keyword Research",
                description:
                    "Find relevant keywords and group them according to search intent.",
            },
            {
                step: "Competitor Research",
                description:
                    "Analyze competing websites, keywords, backlinks, and content.",
            },
            {
                step: "On-Page SEO",
                description:
                    "Optimize titles, descriptions, headings, content, URLs, images, and internal links.",
            },
            {
                step: "Technical SEO",
                description:
                    "Fix crawling, indexing, speed, mobile, structured data, and technical problems.",
            },
            {
                step: "Content",
                description:
                    "Create useful content targeting valuable search queries.",
            },
            {
                step: "Authority",
                description:
                    "Build legitimate backlinks and improve website authority.",
            },
            {
                step: "Monitor",
                description:
                    "Track rankings, traffic, indexing, and conversions.",
            },
        ],

        kpis: [
            "Organic Traffic",
            "Keyword Rankings",
            "Search Impressions",
            "CTR",
            "Indexed Pages",
            "Backlinks",
            "Domain Authority",
            "Organic Conversions",
        ],

        deliverables: [
            "SEO Audit",
            "Keyword Research Sheet",
            "Competitor Analysis",
            "On-Page SEO Report",
            "Technical SEO Report",
            "Content Plan",
            "Monthly SEO Report",
        ],
    },

    {
        id: "google-ads",
        title: "Google Ads",
        short: "Google Ads",
        icon: "🎯",
        description:
            "Create, manage, optimize, and report on Google advertising campaigns.",

        tasks: [
            "Understand the business model, products, services, customers, sales process, and desired advertising outcomes",
            "Define the campaign objective such as leads, sales, website traffic, app actions, or brand awareness",
            "Research the target audience and identify their needs, demographics, search behavior, problems, and buying intent",
            "Research commercial keywords that potential customers use when searching for the products or services",
            "Analyze search intent to separate high-value purchase searches from informational or low-intent searches",
            "Analyze competitors to understand their offers, messaging, keywords, landing pages, and advertising positioning",
            "Create a campaign structure that separates objectives, products, services, locations, audiences, and search themes logically",
            "Create focused ad groups containing closely related keywords and advertisements",
            "Write multiple ad variations with relevant headlines, descriptions, benefits, differentiators, and calls to action",
            "Configure geographic targeting based on the locations the business actually serves",
            "Configure audience targeting and observation settings based on customer characteristics and campaign objectives",
            "Set campaign budgets based on business goals, expected demand, customer value, and available advertising spend",
            "Select and configure an appropriate bidding strategy based on campaign objectives and available conversion data",
            "Define conversion actions such as purchases, form submissions, calls, bookings, or other valuable business actions",
            "Configure conversion tracking and verify that important conversions are being recorded accurately",
            "Connect Google Analytics with Google Ads to improve campaign measurement and understand post-click behavior",
            "Launch campaigns after checking targeting, keywords, ads, budgets, tracking, landing pages, and policy compliance",
            "Review search terms to identify valuable queries, irrelevant traffic, and new keyword opportunities",
            "Monitor CTR to determine whether ads are relevant and compelling enough for the targeted searches",
            "Monitor CPC and identify changes in auction competition, keyword costs, and budget efficiency",
            "Monitor conversion rate to determine how effectively advertising traffic completes the desired action",
            "Analyze CPA to determine how much the campaign spends to acquire each lead or customer",
            "Add negative keywords to prevent advertising spend on irrelevant or low-value searches",
            "Test and optimize advertisements based on CTR, conversion rate, message relevance, and business results",
            "Adjust bids and budget allocation based on performance by keyword, location, device, audience, campaign, and time",
            "Improve landing pages to increase relevance, user experience, trust, and conversion rate",
            "Prepare campaign reports explaining spend, traffic, conversions, CPA, ROAS, key findings, and recommended actions",
        ],
        tools: [
            {
                name: "Google Ads",
                url: "https://ads.google.com/",
                description:
                    "Create and manage paid search, display, video, shopping, and other Google campaigns.",
                guide:
                    "https://support.google.com/google-ads/",
            },
            {
                name: "Keyword Planner",
                url: "https://ads.google.com/home/tools/keyword-planner/",
                description:
                    "Research keywords and estimate search demand.",
                guide:
                    "https://support.google.com/google-ads/topic/3119138",
            },
            {
                name: "Google Analytics",
                url: "https://analytics.google.com/",
                description:
                    "Measure campaign traffic, engagement, and conversions.",
                guide:
                    "https://support.google.com/analytics/",
            },
            {
                name: "Google Tag Manager",
                url: "https://tagmanager.google.com/",
                description:
                    "Deploy and manage tracking tags without constantly editing website code.",
                guide:
                    "https://support.google.com/tagmanager/",
            },
            {
                name: "Looker Studio",
                url: "https://lookerstudio.google.com/",
                description:
                    "Build marketing dashboards and campaign reports.",
                guide:
                    "https://support.google.com/looker-studio/",
            },
        ],

        workflow: [
            {
                step: "Research",
                description:
                    "Understand the business, audience, competitors, keywords, and customer journey.",
            },
            {
                step: "Planning",
                description:
                    "Define campaign structure, objectives, budget, targeting, and KPIs.",
            },
            {
                step: "Tracking",
                description:
                    "Set up conversion tracking before spending significant budget.",
            },
            {
                step: "Build",
                description:
                    "Create campaigns, ad groups, keywords, ads, audiences, and extensions.",
            },
            {
                step: "Launch",
                description:
                    "Launch the campaign and verify that ads and conversions are working.",
            },
            {
                step: "Optimize",
                description:
                    "Review search terms, CTR, CPC, conversions, CPA, and budget allocation.",
            },
            {
                step: "Report",
                description:
                    "Turn campaign data into business-focused insights and recommendations.",
            },
        ],

        kpis: [
            "Impressions",
            "CTR",
            "CPC",
            "Conversions",
            "Conversion Rate",
            "CPA",
            "ROAS",
            "Cost",
        ],

        deliverables: [
            "Keyword Research",
            "Campaign Structure",
            "Ad Copy",
            "Campaign Setup",
            "Tracking Setup",
            "Optimization Report",
            "Campaign Report",
        ],
    },

    {
        id: "meta-ads",
        title: "Meta Ads",
        short: "Meta Ads",
        icon: "📣",
        description:
            "Run and optimize Facebook and Instagram advertising campaigns.",

        tasks: [
            "Understand the business model, offer, target customer, sales process, and desired advertising outcome",
            "Define the campaign objective according to whether the business wants awareness, traffic, engagement, leads, sales, or app actions",
            "Research the target audience including demographics, interests, behaviors, needs, pain points, and purchasing motivations",
            "Create customer personas representing the most valuable audience segments for advertising",
            "Research competitors to analyze their offers, creative styles, messaging, targeting approaches, and advertising angles",
            "Design a campaign structure that separates objectives, audiences, products, offers, and testing requirements",
            "Create audience sets for prospecting, remarketing, customer retention, and other campaign purposes",
            "Create custom audiences using website visitors, customer lists, engagement, video views, or other available first-party signals",
            "Create lookalike audiences when sufficient source data exists and a similar prospecting audience is appropriate",
            "Prepare advertising creatives including images, videos, carousels, product visuals, and other platform-appropriate formats",
            "Write primary ad text that communicates the problem, benefit, offer, proof, and desired action clearly",
            "Write concise headlines that reinforce the main offer or value proposition",
            "Create multiple creative variations to test different hooks, visuals, messages, formats, and offers",
            "Configure Meta Pixel and relevant tracking infrastructure for website-based campaigns",
            "Configure conversion events for important actions such as leads, purchases, registrations, or checkout activity",
            "Verify event tracking and ensure that important conversions are being received correctly",
            "Set campaign and ad-set budgets based on objectives, audience size, expected conversion volume, and available spend",
            "Launch campaigns after checking creative quality, targeting, tracking, budget, placements, links, and policy compliance",
            "Monitor CTR to determine whether the creative and message are generating sufficient interest",
            "Monitor CPC to evaluate the cost of generating traffic or engagement from targeted audiences",
            "Analyze CPM to identify changes in audience competition and media costs",
            "Analyze CPA or CPL to determine the cost of acquiring customers or leads",
            "Analyze ROAS to evaluate advertising revenue relative to advertising spend",
            "Run controlled creative tests comparing hooks, formats, visuals, copy, offers, and calls to action",
            "Optimize audience targeting by identifying audience segments that generate stronger business results",
            "Optimize budget allocation by moving spend toward campaigns, audiences, and creatives producing better results",
            "Prepare campaign reports showing spend, reach, CTR, CPC, leads, sales, CPA, ROAS, insights, and next actions",
        ],

        tools: [
            {
                name: "Meta Ads Manager",
                url: "https://www.facebook.com/adsmanager/",
                description:
                    "Create, manage, test, and optimize Facebook and Instagram advertising campaigns.",
                guide:
                    "https://www.facebook.com/business/help/",
            },
            {
                name: "Meta Business Suite",
                url: "https://business.facebook.com/",
                description:
                    "Manage Facebook and Instagram business activities.",
                guide:
                    "https://www.facebook.com/business/tools/meta-business-suite",
            },
            {
                name: "Meta Events Manager",
                url: "https://www.facebook.com/events_manager/",
                description:
                    "Configure and monitor website and app events.",
                guide:
                    "https://www.facebook.com/business/help/",
            },
            {
                name: "Canva",
                url: "https://www.canva.com/",
                description:
                    "Create advertising graphics and video creatives.",
                guide:
                    "https://www.canva.com/designschool/",
            },
        ],

        workflow: [
            {
                step: "Research",
                description:
                    "Understand audience, offer, competitors, customer pain points, and buying behavior.",
            },
            {
                step: "Offer",
                description:
                    "Define what is being promoted and why the customer should care.",
            },
            {
                step: "Creative",
                description:
                    "Create multiple hooks, images, videos, headlines, and copy variations.",
            },
            {
                step: "Tracking",
                description:
                    "Configure Pixel and conversion events and verify they work.",
            },
            {
                step: "Launch",
                description:
                    "Launch campaigns with controlled budgets and clear objectives.",
            },
            {
                step: "Testing",
                description:
                    "Compare audiences, creatives, offers, placements, and messaging.",
            },
            {
                step: "Optimization",
                description:
                    "Move budget toward winning combinations and remove poor performers.",
            },
        ],

        kpis: [
            "Reach",
            "Impressions",
            "CPM",
            "CTR",
            "CPC",
            "CPL",
            "CPA",
            "ROAS",
        ],

        deliverables: [
            "Audience Research",
            "Campaign Structure",
            "Ad Creatives",
            "Ad Copy",
            "Tracking Setup",
            "Testing Plan",
            "Campaign Report",
        ],
    },

    {
        id: "content",
        title: "Content Marketing",
        short: "Content",
        icon: "✍️",
        description:
            "Research, plan, create, distribute, promote, and optimize marketing content.",

        tasks: [
            "Define content goals based on business objectives such as awareness, organic traffic, authority, leads, or sales",
            "Research the target audience to understand their questions, problems, interests, objections, and information needs",
            "Create customer personas that describe the audience segments the content strategy is designed to attract",
            "Research competitors to identify successful topics, formats, channels, gaps, and opportunities",
            "Research content topics using customer questions, search demand, industry trends, social discussions, and competitor analysis",
            "Research keywords to identify topics with meaningful search demand and business relevance",
            "Identify content gaps where valuable audience questions or search topics are not adequately covered",
            "Create content pillars that organize content around major themes relevant to the business and audience",
            "Develop a content strategy covering objectives, audience, topics, formats, channels, distribution, and measurement",
            "Create a content calendar with topics, formats, deadlines, publishing dates, platforms, campaigns, and responsibilities",
            "Write useful and audience-focused content that provides clear information and supports the intended marketing objective",
            "Create supporting graphics that improve comprehension, engagement, branding, and shareability",
            "Create videos that communicate educational, promotional, entertaining, or storytelling content effectively",
            "Publish content according to the approved content calendar and platform requirements",
            "Distribute content across relevant channels such as websites, search engines, social media, email, and communities",
            "Promote high-value content through organic distribution, partnerships, social media, email, and paid promotion when appropriate",
            "Measure content engagement using traffic, views, time on page, interactions, shares, leads, and conversions",
            "Analyze traffic and conversion data to identify content that attracts and converts valuable audiences",
            "Update older content to improve accuracy, usefulness, search visibility, freshness, and conversion performance",
            "Repurpose successful content into different formats such as social posts, videos, emails, graphics, and downloadable resources",
        ],

        tools: [
            {
                name: "Google Trends",
                url: "https://trends.google.com/",
                description:
                    "Discover search trends and compare topic interest.",
                guide:
                    "https://support.google.com/trends/",
            },
            {
                name: "Google Search",
                url: "https://www.google.com/",
                description:
                    "Research search results, questions, competitors, and content opportunities.",
                guide:
                    "https://support.google.com/websearch/",
            },
            {
                name: "Canva",
                url: "https://www.canva.com/",
                description:
                    "Create visual content for social media, blogs, presentations, and campaigns.",
                guide:
                    "https://www.canva.com/designschool/",
            },
            {
                name: "Google Docs",
                url: "https://docs.google.com/",
                description:
                    "Write and collaborate on marketing content.",
                guide:
                    "https://support.google.com/docs/",
            },
            {
                name: "Notion",
                url: "https://www.notion.so/",
                description:
                    "Organize content research, calendars, campaigns, and documentation.",
                guide:
                    "https://www.notion.com/help",
            },
        ],

        workflow: [
            {
                step: "Research",
                description:
                    "Find audience problems, questions, interests, keywords, and competitor content.",
            },
            {
                step: "Planning",
                description:
                    "Turn research into content pillars, topics, formats, and publishing schedules.",
            },
            {
                step: "Creation",
                description:
                    "Write, design, record, edit, and prepare the content.",
            },
            {
                step: "Distribution",
                description:
                    "Publish content on the channels where the target audience exists.",
            },
            {
                step: "Promotion",
                description:
                    "Use social media, email, communities, SEO, and paid promotion to increase reach.",
            },
            {
                step: "Optimization",
                description:
                    "Update content based on performance and audience behavior.",
            },
        ],

        kpis: [
            "Organic Traffic",
            "Page Views",
            "Engagement",
            "Time on Page",
            "Social Shares",
            "Leads",
            "Conversions",
        ],

        deliverables: [
            "Content Strategy",
            "Content Calendar",
            "Blog Posts",
            "Social Posts",
            "Graphics",
            "Videos",
            "Content Performance Report",
        ],
    },

    {
        id: "analytics",
        title: "Analytics & Tracking",
        short: "Analytics",
        icon: "📊",
        description:
            "Track marketing performance and turn data into actionable business insights.",

        tasks: [
            "Define business objectives and determine which customer actions need to be measured",
            "Define marketing KPIs and establish how each metric connects to business performance",
            "Configure Google Analytics 4 to collect accurate website and marketing performance data",
            "Configure Google Tag Manager to manage analytics, advertising, and conversion tracking tags",
            "Configure conversion events for important actions such as purchases, leads, registrations, calls, and form submissions",
            "Create a consistent UTM tracking structure for campaigns, sources, mediums, and marketing content",
            "Verify tracking implementation by testing events, parameters, conversions, and attribution data",
            "Connect advertising platforms with analytics systems so campaign traffic and conversions can be evaluated together",
            "Create dashboards that present the most important marketing and business KPIs in an easy-to-understand format",
            "Monitor website traffic to identify growth, decline, unusual activity, and changes in user behavior",
            "Analyze traffic sources to determine which channels, campaigns, and platforms generate valuable visitors",
            "Monitor conversions and identify which channels, campaigns, pages, and audiences contribute to business outcomes",
            "Analyze campaign performance by comparing spend, traffic, engagement, conversions, revenue, and return",
            "Analyze user behavior to identify important journeys, drop-off points, high-performing pages, and engagement patterns",
            "Identify tracking or performance problems that could cause inaccurate data or inefficient marketing decisions",
            "Find growth opportunities by analyzing trends, high-performing channels, customer behavior, and conversion opportunities",
            "Create weekly performance reports summarizing important changes, insights, problems, and immediate actions",
            "Create monthly reports comparing results against previous periods, targets, and business objectives",
        ],

        tools: [
            {
                name: "Google Analytics 4",
                url: "https://analytics.google.com/",
                description:
                    "Analyze website and app traffic, user behavior, events, and conversions.",
                guide:
                    "https://support.google.com/analytics/",
            },
            {
                name: "Google Tag Manager",
                url: "https://tagmanager.google.com/",
                description:
                    "Manage analytics and advertising tags.",
                guide:
                    "https://support.google.com/tagmanager/",
            },
            {
                name: "Looker Studio",
                url: "https://lookerstudio.google.com/",
                description:
                    "Create interactive marketing dashboards and reports.",
                guide:
                    "https://support.google.com/looker-studio/",
            },
            {
                name: "Google Search Console",
                url: "https://search.google.com/search-console/",
                description:
                    "Analyze Google search performance and indexing.",
                guide:
                    "https://support.google.com/webmasters/",
            },
            {
                name: "Microsoft Clarity",
                url: "https://clarity.microsoft.com/",
                description:
                    "Analyze user behavior using recordings and heatmaps.",
                guide:
                    "https://learn.microsoft.com/en-us/clarity/",
            },
        ],

        workflow: [
            {
                step: "Measurement Plan",
                description:
                    "Define what business actions need to be measured.",
            },
            {
                step: "Tracking",
                description:
                    "Implement analytics, events, conversions, and UTM tracking.",
            },
            {
                step: "Verification",
                description:
                    "Test events and make sure the data is accurate.",
            },
            {
                step: "Dashboard",
                description:
                    "Create dashboards showing the KPIs that matter.",
            },
            {
                step: "Analysis",
                description:
                    "Look for trends, problems, opportunities, and anomalies.",
            },
            {
                step: "Reporting",
                description:
                    "Explain what happened, why it happened, and what should happen next.",
            },
        ],

        kpis: [
            "Users",
            "Sessions",
            "Engagement Rate",
            "Traffic Sources",
            "Conversions",
            "Conversion Rate",
            "Revenue",
            "ROAS",
        ],

        deliverables: [
            "Tracking Plan",
            "GA4 Setup",
            "GTM Setup",
            "UTM Structure",
            "Marketing Dashboard",
            "Weekly Report",
            "Monthly Report",
        ],
    },

    {
        id: "email",
        title: "Email Marketing",
        short: "Email",
        icon: "✉️",
        description:
            "Build email lists, create campaigns, automate communication, and generate conversions.",

        tasks: [
            "Define email marketing goals such as lead nurturing, customer retention, product promotion, education, or revenue generation",
            "Define the target audience and determine which customer segments should receive specific email communications",
            "Select an email marketing platform based on list size, automation requirements, integrations, deliverability, and budget",
            "Create a valuable lead magnet that gives prospects a clear reason to subscribe to the email list",
            "Create signup forms and strategically place them on relevant website pages and marketing channels",
            "Build an email list using permission-based acquisition methods and maintain appropriate subscriber records",
            "Create audience segments based on demographics, interests, lifecycle stage, purchase history, engagement, and behavior",
            "Create a welcome sequence that introduces new subscribers, establishes trust, and guides them toward the next action",
            "Create newsletters containing useful information, updates, educational content, promotions, or curated resources",
            "Write persuasive email copy with relevant subject lines, clear benefits, concise messaging, and strong calls to action",
            "Create responsive email templates that maintain consistent branding and work across common devices",
            "Configure automated workflows for onboarding, nurturing, abandoned actions, purchases, follow-ups, and retention",
            "Configure email tracking for opens, clicks, conversions, unsubscribes, and other meaningful interactions",
            "Test email content, links, personalization, formatting, mobile appearance, and automation logic before sending",
            "Send email campaigns according to the marketing calendar, audience segment, and communication objective",
            "Monitor open rate to evaluate subject-line effectiveness and subscriber engagement",
            "Monitor click rate to determine whether email content and calls to action are generating interest",
            "Monitor conversions to determine whether email traffic produces the intended business outcome",
            "Clean the email list by managing inactive, invalid, bounced, and unsubscribed contacts",
            "Optimize campaigns by testing subject lines, content, segmentation, timing, personalization, offers, and calls to action",
        ],

        tools: [
            {
                name: "Mailchimp",
                url: "https://mailchimp.com/",
                description:
                    "Create email campaigns, audiences, forms, and automations.",
                guide:
                    "https://mailchimp.com/help/",
            },
            {
                name: "Brevo",
                url: "https://www.brevo.com/",
                description:
                    "Email marketing, automation, CRM, and transactional messaging.",
                guide:
                    "https://help.brevo.com/",
            },
            {
                name: "MailerLite",
                url: "https://www.mailerlite.com/",
                description:
                    "Create newsletters, forms, landing pages, and automations.",
                guide:
                    "https://www.mailerlite.com/help",
            },
        ],

        workflow: [
            {
                step: "Audience",
                description:
                    "Define who should receive emails and segment them by needs or behavior.",
            },
            {
                step: "Lead Capture",
                description:
                    "Create useful offers and forms to collect qualified subscribers.",
            },
            {
                step: "Content",
                description:
                    "Write useful emails with clear subject lines and calls to action.",
            },
            {
                step: "Automation",
                description:
                    "Create sequences for onboarding, nurturing, abandoned actions, and follow-up.",
            },
            {
                step: "Campaign",
                description:
                    "Send campaigns and monitor performance.",
            },
            {
                step: "Optimization",
                description:
                    "Improve subject lines, content, timing, segmentation, and CTAs.",
            },
        ],

        kpis: [
            "Subscribers",
            "Open Rate",
            "Click Rate",
            "CTR",
            "Unsubscribe Rate",
            "Leads",
            "Conversions",
            "Revenue",
        ],

        deliverables: [
            "Email Strategy",
            "Lead Magnet",
            "Email Templates",
            "Welcome Sequence",
            "Newsletter",
            "Automation Workflow",
            "Email Report",
        ],
    },

    {
        id: "local-seo",
        title: "Local SEO & Google Business",
        short: "Local SEO",
        icon: "📍",
        description:
            "Improve local search visibility and generate calls, visits, directions, and local leads.",

        tasks: [
            "Create or claim the business's Google Business Profile and ensure ownership and access are correctly configured",
            "Verify business information including name, address, phone number, website, and other important details",
            "Select the most appropriate primary and secondary business categories based on the services offered",
            "Write an accurate business description that communicates the company's services, location, and value proposition",
            "Add and maintain complete service listings with clear descriptions and relevant information",
            "Add relevant products, offers, or service items where appropriate to improve local visibility",
            "Upload high-quality business, team, product, interior, exterior, and location photographs",
            "Configure accurate business hours, holiday hours, service areas, and other availability information",
            "Research local keywords that customers use when searching for products or services in the target location",
            "Optimize the website for local search using relevant location signals, content, structured data, and contact information",
            "Create useful location pages for different service areas when there is genuine local relevance",
            "Build and maintain accurate local citations across relevant business directories and industry websites",
            "Research reputable local directories and identify citation opportunities relevant to the business",
            "Monitor customer reviews and identify recurring feedback, complaints, and reputation opportunities",
            "Respond professionally to positive, neutral, and negative reviews without using inappropriate or misleading language",
            "Create useful Google Business Profile posts to communicate updates, offers, events, products, and other relevant information",
            "Monitor local keyword rankings to evaluate visibility across important locations and search terms",
            "Track calls, website visits, direction requests, profile interactions, and other local customer actions",
            "Prepare local SEO reports showing visibility, profile activity, reviews, traffic, leads, and recommended improvements",
        ],

        tools: [
            {
                name: "Google Business Profile",
                url: "https://www.google.com/business/",
                description:
                    "Manage how a business appears on Google Search and Maps.",
                guide:
                    "https://support.google.com/business/",
            },
            {
                name: "Google Search Console",
                url: "https://search.google.com/search-console/",
                description:
                    "Monitor website search visibility.",
                guide:
                    "https://support.google.com/webmasters/",
            },
            {
                name: "Google Maps",
                url: "https://maps.google.com/",
                description:
                    "Research local businesses, competitors, locations, and search results.",
                guide:
                    "https://support.google.com/maps/",
            },
        ],

        workflow: [
            {
                step: "Profile",
                description:
                    "Fully optimize the Google Business Profile.",
            },
            {
                step: "Local Keywords",
                description:
                    "Research what customers search for in the target location.",
            },
            {
                step: "Website",
                description:
                    "Optimize website content and pages for local intent.",
            },
            {
                step: "Citations",
                description:
                    "Maintain consistent business information across relevant directories.",
            },
            {
                step: "Reviews",
                description:
                    "Encourage genuine reviews and respond professionally.",
            },
            {
                step: "Monitor",
                description:
                    "Track rankings, calls, directions, visits, and leads.",
            },
        ],

        kpis: [
            "Local Rankings",
            "Profile Views",
            "Searches",
            "Calls",
            "Website Clicks",
            "Direction Requests",
            "Reviews",
            "Leads",
        ],

        deliverables: [
            "Google Business Profile",
            "Local Keyword Research",
            "Local SEO Audit",
            "Citation List",
            "Review Strategy",
            "Local SEO Report",
        ],
    },

    {
        id: "cro",
        title: "Conversion Rate Optimization",
        short: "CRO",
        icon: "⚡",
        description:
            "Improve landing pages and websites so more visitors become leads or customers.",

        tasks: [
            "Define the primary conversion goal and determine the specific action visitors should complete",
            "Identify the primary call to action and ensure it clearly communicates the desired next step",
            "Analyze landing pages for messaging, structure, usability, trust, relevance, friction, and conversion opportunities",
            "Map the user journey from the original traffic source through the landing page to the final conversion",
            "Review analytics data to understand traffic sources, user behavior, drop-offs, and conversion performance",
            "Review heatmaps to identify areas users interact with, ignore, or struggle to understand",
            "Review session recordings to identify usability problems, hesitation, confusion, and friction in the user journey",
            "Identify conversion barriers such as unclear messaging, excessive form fields, weak trust signals, poor navigation, or technical problems",
            "Improve headlines so visitors immediately understand the offer, benefit, audience, and value proposition",
            "Improve calls to action by making them visible, specific, compelling, and aligned with user intent",
            "Improve page structure so important information, benefits, proof, objections, and calls to action appear in an effective sequence",
            "Improve forms by reducing unnecessary fields, improving labels, removing friction, and making completion easier",
            "Add relevant trust signals such as guarantees, credentials, security information, testimonials, case studies, or client logos",
            "Improve social proof using authentic reviews, testimonials, ratings, customer results, and case studies",
            "Improve page speed and technical usability to reduce friction and improve the visitor experience",
            "Create a clear A/B testing hypothesis based on evidence and a specific expected conversion improvement",
            "Run controlled experiments comparing different page elements, messages, layouts, offers, or calls to action",
            "Analyze experiment results using appropriate conversion metrics and sufficient data before making a decision",
            "Implement the winning variation and document the result for future optimization work",
        ],

        tools: [
            {
                name: "Microsoft Clarity",
                url: "https://clarity.microsoft.com/",
                description:
                    "Use heatmaps and session recordings to understand user behavior.",
                guide:
                    "https://learn.microsoft.com/en-us/clarity/",
            },
            {
                name: "Google Analytics",
                url: "https://analytics.google.com/",
                description:
                    "Analyze funnels, traffic, behavior, and conversions.",
                guide:
                    "https://support.google.com/analytics/",
            },
            {
                name: "Google Optimize Alternatives",
                url: "https://www.optimizely.com/",
                description:
                    "Experimentation and optimization platform.",
                guide:
                    "https://docs.developers.optimizely.com/",
            },
        ],

        workflow: [
            {
                step: "Measure",
                description:
                    "Understand the current conversion rate and user journey.",
            },
            {
                step: "Research",
                description:
                    "Use analytics, recordings, heatmaps, surveys, and user feedback.",
            },
            {
                step: "Hypothesis",
                description:
                    "Identify a specific change that should improve conversion.",
            },
            {
                step: "Test",
                description:
                    "Run a controlled experiment where possible.",
            },
            {
                step: "Analyze",
                description:
                    "Determine whether the change actually improved business results.",
            },
        ],

        kpis: [
            "Conversion Rate",
            "Lead Rate",
            "Form Completion",
            "CTA Click Rate",
            "Bounce Rate",
            "Revenue per Visitor",
        ],

        deliverables: [
            "Conversion Audit",
            "Landing Page Audit",
            "Testing Hypotheses",
            "A/B Test Plan",
            "CRO Report",
        ],
    },

    {
        id: "lead-generation",
        title: "Lead Generation",
        short: "Lead Gen",
        icon: "🎣",
        description:
            "Generate qualified leads through organic, paid, social, website, and outbound channels.",

        tasks: [
            "Understand the target customer's problems, needs, buying process, decision criteria, and preferred communication channels",
            "Define the ideal customer profile based on company size, industry, location, needs, budget, or other relevant characteristics",
            "Create buyer personas representing the different types of prospects the business wants to attract",
            "Define lead qualification criteria so marketing and sales teams agree on what constitutes a valuable lead",
            "Research potential lead sources including search, social media, advertising, referrals, partnerships, content, and outbound channels",
            "Create a lead magnet that solves a relevant problem and provides enough value to motivate prospects to submit their information",
            "Create a focused landing page that explains the offer and encourages visitors to complete the desired conversion action",
            "Create lead forms that collect the minimum information necessary for qualification and follow-up",
            "Create lead generation campaigns using appropriate organic, paid, social, email, or partnership channels",
            "Configure conversion tracking to measure form submissions, calls, bookings, downloads, and other lead actions",
            "Create a lead follow-up process defining what happens immediately after a prospect submits their information",
            "Connect lead generation forms and campaigns with a CRM so leads can be stored, assigned, tracked, and managed",
            "Create automated email follow-up sequences to nurture prospects who are not yet ready to purchase",
            "Qualify leads based on agreed criteria such as need, budget, authority, timing, location, or purchase intent",
            "Monitor cost per lead and compare acquisition costs across campaigns, audiences, channels, and offers",
            "Monitor lead quality by tracking how many generated leads become qualified opportunities or customers",
            "Optimize lead generation campaigns by improving targeting, offers, landing pages, forms, messaging, and follow-up",
            "Prepare lead generation reports showing lead volume, quality, CPL, conversion rates, sources, and business outcomes",
        ],

        tools: [
            {
                name: "HubSpot",
                url: "https://www.hubspot.com/",
                description:
                    "CRM, lead management, marketing automation, and sales tools.",
                guide:
                    "https://knowledge.hubspot.com/",
            },
            {
                name: "Google Ads",
                url: "https://ads.google.com/",
                description:
                    "Generate leads through search and other Google advertising campaigns.",
                guide:
                    "https://support.google.com/google-ads/",
            },
            {
                name: "Meta Ads",
                url: "https://www.facebook.com/adsmanager/",
                description:
                    "Generate leads through Facebook and Instagram advertising.",
                guide:
                    "https://www.facebook.com/business/help/",
            },
            {
                name: "Google Forms",
                url: "https://forms.google.com/",
                description:
                    "Create simple lead collection forms.",
                guide:
                    "https://support.google.com/docs/topic/6063584",
            },
        ],

        workflow: [
            {
                step: "ICP",
                description:
                    "Define exactly who qualifies as a valuable prospect.",
            },
            {
                step: "Offer",
                description:
                    "Create an offer that gives prospects a reason to provide their information.",
            },
            {
                step: "Landing Page",
                description:
                    "Build a focused landing page with one clear conversion action.",
            },
            {
                step: "Traffic",
                description:
                    "Bring targeted visitors through SEO, social media, advertising, partnerships, or outreach.",
            },
            {
                step: "Qualification",
                description:
                    "Separate high-quality prospects from low-quality leads.",
            },
            {
                step: "Follow-up",
                description:
                    "Move qualified leads into an appropriate sales or nurturing process.",
            },
        ],

        kpis: [
            "Leads",
            "Qualified Leads",
            "CPL",
            "Lead Conversion Rate",
            "Lead-to-Customer Rate",
            "Customer Acquisition Cost",
        ],

        deliverables: [
            "ICP",
            "Buyer Persona",
            "Lead Magnet",
            "Landing Page",
            "Lead Form",
            "Lead Campaign",
            "Lead Report",
        ],
    },

    {
        id: "ecommerce",
        title: "E-commerce Marketing",
        short: "E-commerce",
        icon: "🛒",
        description:
            "Drive traffic, sales, repeat purchases, and revenue for online stores.",

        tasks: [
            "Understand the product catalog, pricing, margins, inventory, customers, competitors, promotions, and business objectives",
            "Research target customers to understand their needs, buying behavior, objections, motivations, and preferred channels",
            "Analyze competitors' products, pricing, offers, product pages, advertising, reviews, promotions, and customer experience",
            "Research product-related keywords to identify valuable search opportunities and customer demand",
            "Optimize product titles so they clearly communicate the product, key attributes, and relevant search terms",
            "Optimize product descriptions to communicate benefits, features, specifications, use cases, objections, and buying information",
            "Optimize product images using high-quality visuals, appropriate dimensions, multiple angles, and relevant product context",
            "Configure analytics and e-commerce tracking to accurately measure product views, carts, checkouts, purchases, and revenue",
            "Configure conversion tracking across advertising and analytics platforms to measure purchases and other valuable actions",
            "Create product audiences for prospecting, remarketing, customer retention, and cross-selling campaigns",
            "Create Google Ads campaigns to promote products through appropriate search, shopping, display, or other campaign types",
            "Create Meta Ads campaigns using product creatives, prospecting audiences, remarketing, and relevant campaign objectives",
            "Create retargeting campaigns for visitors, product viewers, cart abandoners, and other high-intent audiences",
            "Create abandoned cart campaigns that remind customers about products and address common purchase objections",
            "Create email campaigns for promotions, new products, customer education, retention, and repeat purchases",
            "Create promotional campaigns around discounts, bundles, seasonal events, launches, and limited-time offers",
            "Monitor ROAS to determine whether advertising revenue justifies the associated marketing spend",
            "Monitor conversion rate to identify problems and opportunities throughout the product and checkout journey",
            "Monitor average order value and identify opportunities for bundles, upsells, cross-sells, and improved offers",
            "Analyze customer acquisition cost to determine the cost of acquiring new customers across marketing channels",
            "Prepare e-commerce reports showing revenue, orders, conversion rate, AOV, CAC, ROAS, retention, and recommended actions",
        ],

        tools: [
            {
                name: "Shopify",
                url: "https://www.shopify.com/",
                description:
                    "Build and manage an online store.",
                guide:
                    "https://help.shopify.com/",
            },
            {
                name: "Google Merchant Center",
                url: "https://merchants.google.com/",
                description:
                    "Manage product feeds and product visibility across Google.",
                guide:
                    "https://support.google.com/merchants/",
            },
            {
                name: "Google Ads",
                url: "https://ads.google.com/",
                description:
                    "Run shopping, search, display, and other campaigns.",
                guide:
                    "https://support.google.com/google-ads/",
            },
            {
                name: "Meta Ads",
                url: "https://www.facebook.com/adsmanager/",
                description:
                    "Advertise products across Facebook and Instagram.",
                guide:
                    "https://www.facebook.com/business/help/",
            },
        ],

        workflow: [
            {
                step: "Store",
                description:
                    "Make sure products, checkout, tracking, and mobile experience work correctly.",
            },
            {
                step: "Product",
                description:
                    "Optimize product pages, images, descriptions, pricing, and trust signals.",
            },
            {
                step: "Traffic",
                description:
                    "Use SEO, Google, Meta, content, email, and partnerships.",
            },
            {
                step: "Conversion",
                description:
                    "Improve product pages, checkout, offers, and customer trust.",
            },
            {
                step: "Retention",
                description:
                    "Use email, remarketing, promotions, and customer experience to drive repeat purchases.",
            },
            {
                step: "Analysis",
                description:
                    "Monitor revenue, ROAS, CAC, conversion rate, and customer value.",
            },
        ],

        kpis: [
            "Revenue",
            "Orders",
            "Conversion Rate",
            "AOV",
            "CAC",
            "ROAS",
            "Repeat Purchase Rate",
            "Customer Lifetime Value",
        ],

        deliverables: [
            "Product Audit",
            "Product Feed",
            "Advertising Campaigns",
            "Retargeting Campaign",
            "Email Campaign",
            "E-commerce Report",
        ],
    },

    {
        id: "influencer",
        title: "Influencer Marketing",
        short: "Influencer",
        icon: "🤝",
        description:
            "Find, evaluate, manage, and measure influencer partnerships.",

        tasks: [
            "Define the campaign objective such as awareness, engagement, traffic, leads, sales, product launches, or content generation",
            "Define the target audience that the influencer campaign needs to reach",
            "Define influencer selection criteria including niche, audience, location, size, engagement, content quality, and brand fit",
            "Research relevant influencers across social platforms and identify creators whose audiences match the target customer",
            "Evaluate influencer audience quality by reviewing relevance, authenticity, demographics, engagement, and suspicious activity",
            "Calculate and compare engagement rates to determine whether creators have genuinely active audiences",
            "Analyze influencer content to evaluate quality, tone, consistency, storytelling ability, and brand compatibility",
            "Create an influencer shortlist ranked according to audience fit, content quality, expected results, and campaign requirements",
            "Contact selected influencers with a professional and personalized collaboration proposal",
            "Negotiate compensation, deliverables, usage rights, timelines, exclusivity, and other campaign terms",
            "Create a detailed campaign brief explaining objectives, target audience, key messages, deliverables, deadlines, and restrictions",
            "Provide creative direction while allowing influencers enough flexibility to communicate naturally with their audience",
            "Track published influencer content to verify that agreed deliverables, links, tags, disclosures, and messaging are correctly implemented",
            "Track influencer-generated traffic using unique URLs, UTM parameters, discount codes, or other appropriate tracking methods",
            "Track leads and conversions generated from each influencer or campaign placement",
            "Measure campaign performance against objectives using reach, engagement, traffic, leads, sales, and revenue",
            "Prepare an influencer marketing report showing creator performance, campaign results, costs, ROI, lessons learned, and recommendations",
        ],

        tools: [
            {
                name: "Instagram",
                url: "https://www.instagram.com/",
                description:
                    "Research creators, content, audiences, and influencer opportunities.",
                guide:
                    "https://help.instagram.com/",
            },
            {
                name: "TikTok",
                url: "https://www.tiktok.com/",
                description:
                    "Research creators and short-form content opportunities.",
                guide:
                    "https://support.tiktok.com/",
            },
            {
                name: "Google Analytics",
                url: "https://analytics.google.com/",
                description:
                    "Measure website traffic and conversions from influencer campaigns.",
                guide:
                    "https://support.google.com/analytics/",
            },
        ],

        workflow: [
            {
                step: "Goal",
                description:
                    "Define awareness, engagement, traffic, leads, or sales objectives.",
            },
            {
                step: "Research",
                description:
                    "Find influencers whose audience matches the target customer.",
            },
            {
                step: "Evaluation",
                description:
                    "Review content quality, audience authenticity, engagement, and previous partnerships.",
            },
            {
                step: "Outreach",
                description:
                    "Contact suitable creators with a professional campaign proposal.",
            },
            {
                step: "Campaign",
                description:
                    "Provide clear briefs, deadlines, deliverables, and tracking links.",
            },
            {
                step: "Measure",
                description:
                    "Track reach, engagement, traffic, leads, and sales.",
            },
        ],

        kpis: [
            "Reach",
            "Impressions",
            "Engagement",
            "Engagement Rate",
            "Traffic",
            "Leads",
            "Conversions",
            "Revenue",
        ],

        deliverables: [
            "Influencer Research",
            "Influencer Shortlist",
            "Campaign Brief",
            "Outreach Message",
            "Tracking Links",
            "Campaign Report",
        ],
    },

    {
        id: "affiliate",
        title: "Affiliate Marketing",
        short: "Affiliate",
        icon: "🔗",
        description:
            "Build and manage partnerships that generate measurable traffic, leads, and sales.",

        tasks: [
            "Define the affiliate program objective and determine whether the focus is traffic, leads, sales, customer acquisition, or revenue",
            "Research relevant affiliate networks and programs that match the business model and target market",
            "Research competitor affiliate programs to understand commissions, offers, partners, promotional methods, and positioning",
            "Identify potential affiliate partners such as publishers, creators, websites, communities, comparison sites, and industry specialists",
            "Create a competitive affiliate offer with appropriate commissions, incentives, promotional periods, and partner benefits",
            "Create unique tracking links so clicks, leads, sales, and revenue can be attributed to individual affiliates",
            "Create affiliate-focused landing pages containing relevant offers, product information, proof, and conversion opportunities",
            "Contact potential affiliates with a clear explanation of the program, offer, commission, and audience fit",
            "Onboard approved affiliates by providing tracking information, terms, promotional resources, and campaign guidance",
            "Provide affiliates with approved banners, graphics, product information, copy, links, videos, and other promotional materials",
            "Track affiliate clicks to understand traffic volume and partner-level performance",
            "Track affiliate leads and determine which partners generate qualified prospects",
            "Track affiliate sales and revenue to identify the most valuable partners",
            "Calculate commissions accurately according to the agreed affiliate terms and confirmed conversions",
            "Analyze affiliate performance by traffic, conversion rate, revenue, commission, customer quality, and profitability",
            "Optimize the partner strategy by expanding successful relationships and improving or removing underperforming partnerships",
            "Prepare affiliate reports showing partner performance, traffic, conversions, commissions, revenue, and recommendations",
        ],

        tools: [
            {
                name: "Impact",
                url: "https://impact.com/",
                description:
                    "Manage partnerships, affiliates, creators, and performance marketing.",
                guide:
                    "https://help.impact.com/",
            },
            {
                name: "Google Analytics",
                url: "https://analytics.google.com/",
                description:
                    "Track affiliate traffic and conversions.",
                guide:
                    "https://support.google.com/analytics/",
            },
        ],

        workflow: [
            {
                step: "Offer",
                description:
                    "Define commission structure and promotional offer.",
            },
            {
                step: "Partners",
                description:
                    "Find publishers, creators, websites, and partners with relevant audiences.",
            },
            {
                step: "Tracking",
                description:
                    "Set up unique tracking links and conversion measurement.",
            },
            {
                step: "Activation",
                description:
                    "Give partners the assets and information needed to promote effectively.",
            },
            {
                step: "Optimization",
                description:
                    "Identify high-performing partners and improve the program.",
            },
        ],

        kpis: [
            "Clicks",
            "Leads",
            "Sales",
            "Conversion Rate",
            "Commission",
            "Revenue",
            "ROI",
        ],

        deliverables: [
            "Affiliate Strategy",
            "Partner List",
            "Affiliate Offer",
            "Tracking Links",
            "Promotional Assets",
            "Affiliate Report",
        ],
    },

    {
        id: "marketing-research",
        title: "Marketing Research",
        short: "Research",
        icon: "🧠",
        description:
            "Research markets, customers, competitors, trends, and opportunities.",

        tasks: [
            "Understand the business objective and determine what marketing decision the research needs to support",
            "Define the research question clearly so data collection remains focused on a specific business problem",
            "Research the target market to understand size, trends, demand, customer behavior, and competitive conditions",
            "Define customer segments based on relevant characteristics, needs, behaviors, purchasing patterns, or business value",
            "Create buyer personas based on research rather than assumptions about customer needs and behavior",
            "Research competitors to understand their products, positioning, pricing, content, advertising, customer experience, and strengths",
            "Analyze competitor websites to identify offers, messaging, content, SEO strategies, user experience, and conversion methods",
            "Analyze competitor social media to identify content themes, audience engagement, publishing patterns, and promotional approaches",
            "Analyze competitor advertising to identify active campaigns, creative approaches, offers, messaging, and positioning",
            "Research keywords to understand customer demand, search behavior, topics, and commercial opportunities",
            "Research market trends to identify growing, declining, seasonal, or emerging areas of customer demand",
            "Research customer pain points through search behavior, reviews, forums, surveys, interviews, and other available evidence",
            "Research customer questions to identify information gaps, objections, needs, and content opportunities",
            "Identify market gaps where customer needs are underserved or competitors have weak offerings",
            "Create a SWOT analysis covering strengths, weaknesses, opportunities, and threats relevant to the business",
            "Summarize research findings using evidence, patterns, important observations, and supporting data",
            "Create practical marketing recommendations that translate research findings into specific business and marketing actions",
        ],

        tools: [
            {
                name: "Google Trends",
                url: "https://trends.google.com/",
                description:
                    "Research trends and compare search interest.",
                guide:
                    "https://support.google.com/trends/",
            },
            {
                name: "Google Search",
                url: "https://www.google.com/",
                description:
                    "Research competitors, questions, products, and market topics.",
                guide:
                    "https://support.google.com/websearch/",
            },
            {
                name: "AnswerThePublic",
                url: "https://answerthepublic.com/",
                description:
                    "Discover questions and topics people search around a subject.",
                guide:
                    "https://answerthepublic.com/",
            },
            {
                name: "Meta Ad Library",
                url: "https://www.facebook.com/ads/library/",
                description:
                    "Research active advertisements from businesses on Meta platforms.",
                guide:
                    "https://www.facebook.com/business/help/",
            },
        ],

        workflow: [
            {
                step: "Question",
                description:
                    "Define exactly what decision the research needs to support.",
            },
            {
                step: "Market",
                description:
                    "Understand the market, audience, competitors, and trends.",
            },
            {
                step: "Evidence",
                description:
                    "Collect data from search, analytics, social platforms, competitors, and customers.",
            },
            {
                step: "Analysis",
                description:
                    "Identify patterns, opportunities, threats, and customer needs.",
            },
            {
                step: "Recommendation",
                description:
                    "Turn research into practical marketing decisions.",
            },
        ],

        kpis: [
            "Market Size",
            "Search Demand",
            "Competitor Share",
            "Customer Demand",
            "Market Opportunities",
        ],

        deliverables: [
            "Market Research",
            "Competitor Analysis",
            "Customer Persona",
            "Keyword Research",
            "SWOT Analysis",
            "Marketing Recommendations",
        ],
    },

    {
        id: "reporting",
        title: "Marketing Reporting & Client Management",
        short: "Reporting",
        icon: "📋",
        description:
            "Turn marketing activity and data into professional reports clients and managers can understand.",

        tasks: [
            "Define reporting objectives so the report focuses on the business questions that matter to the client or manager",
            "Identify the most important KPIs and connect each metric to a marketing or business objective",
            "Collect campaign data from advertising, analytics, social media, SEO, email, CRM, and other relevant platforms",
            "Verify data accuracy by checking tracking, date ranges, attribution settings, duplicated values, and inconsistent metrics",
            "Compare current performance with previous periods to identify meaningful increases, decreases, and trends",
            "Compare actual results against campaign targets, budgets, forecasts, and business objectives",
            "Identify the best-performing campaigns, channels, audiences, creatives, products, and content",
            "Identify poor-performing campaigns and determine whether the problem is targeting, creative, offer, budget, conversion, or tracking",
            "Explain significant performance changes using campaign data, market conditions, audience behavior, and other available evidence",
            "Identify performance problems that require immediate attention or further investigation",
            "Create actionable recommendations based on the evidence rather than simply describing the numbers",
            "Create dashboards that present important KPIs, trends, comparisons, and campaign performance clearly",
            "Prepare monthly reports summarizing performance, achievements, problems, insights, and recommended actions",
            "Prepare client presentations that translate marketing data into clear business outcomes and decisions",
            "Create an action plan showing the next priorities, responsible tasks, expected outcomes, and timeline",
        ],

        tools: [
            {
                name: "Looker Studio",
                url: "https://lookerstudio.google.com/",
                description:
                    "Create professional marketing dashboards.",
                guide:
                    "https://support.google.com/looker-studio/",
            },
            {
                name: "Google Sheets",
                url: "https://sheets.google.com/",
                description:
                    "Analyze marketing data and create campaign reports.",
                guide:
                    "https://support.google.com/docs/topic/9054603",
            },
            {
                name: "Canva",
                url: "https://www.canva.com/",
                description:
                    "Create client-friendly presentations and visual reports.",
                guide:
                    "https://www.canva.com/designschool/",
            },
        ],

        workflow: [
            {
                step: "Collect",
                description:
                    "Collect relevant data from all marketing platforms.",
            },
            {
                step: "Verify",
                description:
                    "Check that numbers are accurate and comparable.",
            },
            {
                step: "Analyze",
                description:
                    "Identify trends, wins, losses, and changes.",
            },
            {
                step: "Explain",
                description:
                    "Explain what happened and why.",
            },
            {
                step: "Recommend",
                description:
                    "Give clear next actions based on the data.",
            },
        ],

        kpis: [
            "Traffic",
            "Leads",
            "Conversions",
            "CPL",
            "CPA",
            "ROAS",
            "Revenue",
            "ROI",
        ],

        deliverables: [
            "Weekly Report",
            "Monthly Report",
            "Marketing Dashboard",
            "Client Presentation",
            "Action Plan",
        ],
    },
];