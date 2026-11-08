// components/audit/data/checklistData.js
export const INITIAL_CHECKLIST_DATA = [
  {
    id: 1,
    title: "1. Page Identity & Branding",
    icon: "ShieldCheck",
    items: [
      { id: "1_1", name: "Page Name", description: "Clear, recognizable business name" },
      { id: "1_2", name: "Username (@handle)", description: "Short, memorable, and relevant" },
      { id: "1_3", name: "Profile Picture", description: "High-quality logo or business identity" },
      { id: "1_4", name: "Cover Photo", description: "Clearly communicates the business and offerings" },
      { id: "1_5", name: "Bio / Description", description: "Explains what business does and who it serves" },
      { id: "1_6", name: "Page Category", description: "Correct business category" },
      { id: "1_7", name: "Contact Number", description: "Correct and working phone number" },
      { id: "1_8", name: "Email Address", description: "Valid business email" },
      { id: "1_9", name: "Website", description: "Working website link, if applicable" },
      { id: "1_10", name: "Business Address", description: "Accurate physical address or service area" },
      { id: "1_11", name: "Business Hours", description: "Updated and accurate" },
      { id: "1_12", name: "Action Button", description: "Appropriate CTA (e.g., WhatsApp, Call Now)" },
      { id: "1_13", name: "Branding Consistency", description: "Consistent logo, colors, fonts, tone" }
    ]
  },
  {
    id: 2,
    title: "2. Page Settings & Security",
    icon: "ShieldCheck",
    items: [
      { id: "2_1", name: "Page Access", description: "Only authorized people have access" },
      { id: "2_2", name: "Admin Roles", description: "Appropriate permissions for each person" },
      { id: "2_3", name: "Two-Factor Authentication", description: "Enabled for all access holders" },
      { id: "2_4", name: "Page Quality", description: "No unresolved violations or restrictions" },
      { id: "2_5", name: "Messaging Settings", description: "Messenger enabled if used for customer enquiries" },
      { id: "2_6", name: "Instagram Connection", description: "Correct Instagram account connected" },
      { id: "2_7", name: "WhatsApp Connection", description: "Correct business WhatsApp connected" },
      { id: "2_8", name: "Notifications", description: "Important messages/comments aren't missed" },
      { id: "2_9", name: "Privacy & Visibility", description: "Page is publicly visible" },
      { id: "2_10", name: "Business Ownership", description: "Page controlled by the actual business" }
    ]
  },
  {
    id: 3,
    title: "3. Content Quality (Last 15–20 Posts)",
    icon: "Image",
    items: [
      { id: "3_1", name: "Posting Frequency", description: "Consistent and realistic schedule" },
      { id: "3_2", name: "Visual Quality", description: "Clear, professional, and readable" },
      { id: "3_3", name: "Image Resolution", description: "No blurry or pixelated images" },
      { id: "3_4", name: "Caption Quality", description: "Clear, understandable, and relevant" },
      { id: "3_5", name: "Grammar & Spelling", description: "No obvious errors" },
      { id: "3_6", name: "Call To Action (CTA)", description: "Tells the audience what to do next" },
      { id: "3_7", name: "Content Variety", description: "Mix of promo, educational & engagement posts" },
      { id: "3_8", name: "Brand Consistency", description: "Posts follow a recognizable visual identity" },
      { id: "3_9", name: "Content Relevance", description: "Relevant to target audience" },
      { id: "3_10", name: "Reels & Videos", description: "Used effectively where they add value" },
      { id: "3_11", name: "Hashtags", description: "Relevant and non-excessive" },
      { id: "3_12", name: "Pinned Post", description: "Important information easily accessible" },
      { id: "3_13", name: "Promotional Balance", description: "Not every post is a direct sales pitch" }
    ]
  },
  {
    id: 4,
    title: "4. Audience & Engagement",
    icon: "BarChart2",
    items: [
      { id: "4_1", name: "Follower Count", description: "Reasonable for business size/maturity" },
      { id: "4_2", name: "Audience Location", description: "Matches target geographic market" },
      { id: "4_3", name: "Audience Demographics", description: "Matches intended customer profiles" },
      { id: "4_4", name: "Engagement Rate", description: "Healthy interaction relative to reach" },
      { id: "4_5", name: "Comments", description: "Genuine conversations and questions" },
      { id: "4_6", name: "Shares", description: "Content is valuable enough to share" },
      { id: "4_7", name: "Reactions", description: "Active positive audience responses" },
      { id: "4_8", name: "Follower Quality", description: "No suspicious or bot follower patterns" },
      { id: "4_9", name: "Negative Comments", description: "Addressed professionally and quickly" },
      { id: "4_10", name: "Community Interaction", description: "Page actively participates in conversations" }
    ]
  },
  {
    id: 5,
    title: "5. Customer Communication",
    icon: "MessageSquare",
    items: [
      { id: "5_1", name: "Messenger Availability", description: "Customers can easily message" },
      { id: "5_2", name: "Response Time", description: "Enquiries receive timely replies" },
      { id: "5_3", name: "Unanswered Messages", description: "No neglected customer conversations" },
      { id: "5_4", name: "Response Quality", description: "Helpful, polite, and accurate answers" },
      { id: "5_5", name: "Automated Greeting", description: "Welcomes new customers automatically" },
      { id: "5_6", name: "FAQs Setup", description: "Common questions have instant answers" },
      { id: "5_7", name: "Away Message", description: "Sets response expectations after hours" },
      { id: "5_8", name: "Order Instructions", description: "Clear order guidance provided" },
      { id: "5_9", name: "Complaint Handling", description: "Escalations handled professionally" },
      { id: "5_10", name: "Comment Responses", description: "Public questions answered promptly" },
      { id: "5_11", name: "WhatsApp Sync", description: "Working contact & ordering workflow" }
    ]
  },
  {
    id: 6,
    title: "6. Performance & Analytics",
    icon: "TrendingUp",
    items: [
      { id: "6_1", name: "Page Reach", description: "Reaching relevant potential customers" },
      { id: "6_2", name: "Impressions", description: "Content receives standard organic visibility" },
      { id: "6_3", name: "Engagement Metrics", description: "Sustained audience interactions" },
      { id: "6_4", name: "Follower Growth", description: "Consistent organic/paid trajectory" },
      { id: "6_5", name: "Content Performance", description: "Top content identified and replicated" },
      { id: "6_6", name: "Link Clicks", description: "Relevant web/destination traffic" },
      { id: "6_7", name: "Messaging Activity", description: "Consistent inbound lead flow" },
      { id: "6_8", name: "Video Views", description: "Videos hold viewers' attention" },
      { id: "6_9", name: "Audience Growth Quality", description: "Targeted audience vs random growth" },
      { id: "6_10", name: "Conversion Tracking", description: "Business outcomes measured" }
    ]
  },
  {
    id: 7,
    title: "7. Advertising & Marketing",
    icon: "Megaphone",
    items: [
      { id: "7_1", name: "Ad Account Setup", description: "Connected to business account correctly" },
      { id: "7_2", name: "Payment Method", description: "Valid and controlled by business" },
      { id: "7_3", name: "Campaign Objectives", description: "Aligned with actual business metrics" },
      { id: "7_4", name: "Target Audience", description: "Relevant location, interests & demog" },
      { id: "7_5", name: "Ad Creatives", description: "Clear, attractive, high quality" },
      { id: "7_6", name: "Ad Copy", description: "Compelling value proposition & offer" },
      { id: "7_7", name: "Call To Action", description: "Direct and single next step" },
      { id: "7_8", name: "Landing Page", description: "Matches ad creative & functions well" },
      { id: "7_9", name: "Meta Pixel / Dataset", description: "Configured and receiving events" },
      { id: "7_10", name: "CPM Benchmark", description: "Evaluated against industry standards" },
      { id: "7_11", name: "CPC Benchmark", description: "Cost per click within acceptable range" },
      { id: "7_12", name: "CTR Benchmark", description: "Healthy click-through rates on creatives" },
      { id: "7_13", name: "Cost Per Lead", description: "Profitable relative to unit economics" },
      { id: "7_14", name: "Conversion Tracking", description: "Leads/sales accurately attributed" }
    ]
  }
];