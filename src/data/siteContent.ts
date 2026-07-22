export const products = [
  {
    title: 'BotPlus',
    description: 'Advanced conversational AI delivering human-like interactions across all digital channels. Perfect for 24/7 automated support without compromising quality.',
    icon: 'bi-robot',
    itemClass: 'item-cyan',
    features: ['Natural Language Understanding', 'Multi-platform Integration', '24/7 Customer Support', 'Emotion Detection', 'Remembers customer history'],
    href: '/products/#botplus-product'
  },
  {
    title: 'AvatarPlus',
    description: 'Photorealistic 3D avatars that engage customers through natural speech and expressions. Ideal for high-touch industries needing personalization at scale.',
    icon: 'bi-person-bounding-box',
    itemClass: 'item-orange',
    features: ['Photorealistic AI Avatars', 'Lip-Synced Speech', 'Customizable Appearance & Voice', 'Multi-language Support', 'Web, kiosks or mobile apps'],
    href: '/products/#avatarplus-product'
  },
  {
    title: 'Call Center Plus',
    description: 'AI voice agents that handle calls indistinguishably from humans. Reduce costs by 60% with 24/7 availability and perfect consistency.',
    icon: 'bi-telephone',
    itemClass: 'item-teal',
    features: ['Human-like Voice Conversations', '24/7 Availability', 'Zero Wait Times', '60% Cost Savings', 'Scalable to Handle Peak Volumes'],
    href: '/products/#callcenterplus-product'
  },
  {
    title: 'Retail Plus',
    description: 'Automates order taking via phone/WhatsApp while intelligently upselling. Syncs with your ERP to streamline operations.',
    icon: 'bi-shop',
    itemClass: 'item-red',
    features: ['Frictionless Ordering', 'Inventory & CRM integration', 'Contextual upselling', '24/7 Availability'],
    href: '/products/#retailplus-product'
  },
  {
    title: 'Virtual Plus',
    description: 'AR try-on experiences that let customers visualize jewelry, apparel and cosmetics, reducing returns by 40%.',
    icon: 'bi-eyeglasses',
    itemClass: 'item-indigo',
    features: ['Augmented Reality Try-On', 'Realistic Visualization', 'Mobile-Friendly', '40% Fewer Returns', 'Integration with E-commerce'],
    href: '/products/#virtualplus-product'
  }
];

export const productDetails = [
  {
    id: 'botplus-product',
    title: 'BotPlus - The Smartest Chatbot Ever',
    icon: 'bi-robot',
    image: '/assets/img/doodles/chat-bot.svg',
    imageAlt: 'BotPlus chatbot',
    intro: 'BotPlus is an AI-powered chatbot that uses advanced intent, emotion and context analysis to carry on natural, unscripted conversations. It integrates seamlessly with your website, WhatsApp, social media, CRM or ERP.',
    body: 'BotPlus learns from every interaction, and instantly recalls past details so your customers never have to repeat themselves.',
    highlights: [
      'Natural conversations - no more scripted replies, just fluid, human-like dialogue.',
      'Emotion and context aware - detects frustration, happiness, or confusion and responds perfectly.',
      'Seamless integrations - works with WhatsApp, websites, social media, CRM, and ERP systems.',
      'Remembers everything - remembers customer history for truly personalized service.'
    ],
    features: [
      { icon: 'bi-chat-left-text', title: 'Natural Language Processing', description: 'Understands complex queries and responds with human-like accuracy' },
      { icon: 'bi-arrow-repeat', title: 'Context Retention', description: 'Remembers conversation history for seamless interactions' },
      { icon: 'bi-shield-check', title: 'Enterprise Security', description: 'Complies with strict data privacy regulations and standards' },
      { icon: 'bi-plugin', title: 'API Integration', description: 'Connects to all major platforms with minimal setup' }
    ],
    applications: [
      { icon: 'bi-headset', title: 'Customer Support', description: '24/7 instant responses to FAQs, troubleshooting, and account inquiries without human intervention' },
      { icon: 'bi-cart', title: 'E-commerce', description: 'Product recommendations, order tracking, and personalized shopping assistance' },
      { icon: 'bi-building', title: 'Banking & Finance', description: 'Account inquiries, transaction history, and basic financial advice with secure authentication' }
    ]
  },
  {
    id: 'avatarplus-product',
    title: 'AvatarPlus - Your Photorealistic AI Brand Ambassador',
    icon: 'bi-person-circle',
    image: '/assets/img/doodles/avatars.svg',
    imageAlt: 'AvatarPlus photorealistic avatar',
    intro: 'What if your customers could chat with a lifelike digital representative, one that smiles, gestures and speaks just like a real person? AvatarPlus brings photorealistic 3D avatars to your website, kiosks or tablets, backed by BotPlus conversational intelligence.',
    body: 'It is perfect for retail showrooms, hotel lobbies or corporate receptions, delivering an immersive, brand-consistent experience without hiring extra staff.',
    highlights: [
      'Lifelike 3D avatars - stunningly realistic digital agents for websites, kiosks, or tablets.',
      'Emotionally intelligent - adapts tone, expressions, and responses in real time.',
      'Flexible deployment - embed on web pages, touch-screen kiosks or mobile apps.'
    ],
    features: [
      { icon: 'bi-person-video3', title: 'Emotion Recognition', description: 'Responds appropriately to customer emotions detected through voice analysis' },
      { icon: 'bi-globe', title: 'Multilingual Support', description: 'Speaks 35+ languages with accent and cultural awareness' },
      { icon: 'bi-people', title: 'Brand Customization', description: 'Avatars designed to match your brand identity and values' },
      { icon: 'bi-cpu', title: 'Real-time Rendering', description: 'Ultra-low latency interactions for natural conversations' }
    ],
    applications: [
      { icon: 'bi-gem', title: 'Luxury Retail', description: 'Virtual shopping assistants in high-end stores providing personalized product consultations' },
      { icon: 'bi-building', title: 'Hotels & Resorts', description: 'Interactive concierge services in lobbies to assist guests with bookings and recommendations' },
      { icon: 'bi-briefcase', title: 'Corporate Reception', description: 'AI-powered front desk agents to greet visitors and direct them appropriately' }
    ]
  },
  {
    id: 'callcenterplus-product',
    title: 'Call Center Plus - Say Goodbye to Expensive Human Agents',
    icon: 'bi-telephone',
    image: '/assets/img/doodles/recording.svg',
    imageAlt: 'Call Center Plus voice automation',
    intro: 'Traditional call centers mean long hold times, high headcount costs and inconsistent service quality. Call Center Plus replaces that with intelligent voice agents that never tire, never take breaks and speak multiple languages fluently.',
    body: 'These AI agents handle everything from simple FAQs to complex troubleshooting, so you eliminate queues and elevate customer satisfaction.',
    highlights: [
      'Human-like voice agents - warm, natural, and infinitely patient.',
      'Zero-second wait time - no queues, no hold music, just instant support 24/7.',
      '60%-80% cost savings - no salaries, training, or breaks, just consistent service.',
      'End-to-end support - from inquiries and upselling to technical guidance.'
    ],
    features: [
      { icon: 'bi-cash-coin', title: '60% Cost Reduction', description: 'Eliminate salaries, training, benefits, and infrastructure costs' },
      { icon: 'bi-clock', title: '24/7 Availability', description: 'No holidays, sick days, or shift changes - consistent service always' },
      { icon: 'bi-graph-up-arrow', title: 'Performance Analytics', description: 'Real-time insights into call sentiment, resolution rates, and opportunities' },
      { icon: 'bi-shuffle', title: 'Seamless Escalation', description: 'Intelligent transfer to human agents when needed' }
    ],
    applications: [
      { icon: 'bi-headset', title: 'Customer Support', description: '24/7 issue resolution for common problems without human intervention' },
      { icon: 'bi-telephone-outbound', title: 'Sales Calls', description: 'AI that handles inbound inquiries and intelligently upsells products' },
      { icon: 'bi-tools', title: 'Technical Support', description: 'Step-by-step guidance for troubleshooting technical issues' }
    ]
  },
  {
    id: 'retailplus-product',
    title: 'Retail Plus - AI-Powered Order Management',
    icon: 'bi-cart',
    image: '/assets/img/doodles/shopping.svg',
    imageAlt: 'Retail Plus order management',
    intro: 'Managing high volumes of orders by phone or chat can overwhelm your staff and slow down fulfillment. Retail Plus automates order taking via voice calls or WhatsApp messages, entering orders, processing payments and confirming details instantly.',
    body: 'It syncs in real time with your ERP and inventory systems, upsells intelligently, and never misses a sale.',
    highlights: [
      'Automated order capture - AI takes orders through phone or WhatsApp and processes payments.',
      'Reduces staff workload - automates repetitive order-taking tasks.',
      'Seamless ERP integration - syncs with inventory and CRM in real time.',
      'Intelligent upselling - suggests add-ons contextually during the order flow.'
    ],
    features: [
      { icon: 'bi-speedometer2', title: 'Faster Processing', description: 'Automated order entry eliminates human errors and delays' },
      { icon: 'bi-arrow-up-circle', title: 'Intelligent Upselling', description: 'Context-aware product suggestions increase average order value' },
      { icon: 'bi-clock-history', title: '24/7 Availability', description: 'Never miss an order regardless of time or staff availability' },
      { icon: 'bi-currency-exchange', title: 'Payment Processing', description: 'Secure handling of credit cards, digital wallets and other payment methods' }
    ],
    applications: [
      { icon: 'bi-phone', title: 'Phone Orders', description: 'Automated processing of telephone orders with natural language understanding' },
      { icon: 'bi-whatsapp', title: 'WhatsApp Commerce', description: 'Complete order management through WhatsApp conversations' },
      { icon: 'bi-cart-plus', title: 'Upselling', description: 'Intelligent suggestions for complementary products during ordering' }
    ]
  },
  {
    id: 'virtualplus-product',
    title: 'Virtual Plus - Augmented Reality Try-On Experience',
    icon: 'bi-vr',
    image: '/assets/img/doodles/jewellery.svg',
    imageAlt: 'Virtual Plus augmented reality try-on',
    intro: 'Shoppers often hesitate when they cannot try on jewellery or apparel before buying. Virtual Plus solves that by overlaying AR try-on experiences on kiosks or tablets, letting customers see exactly how a necklace, ring or outfit looks on them in real time.',
    body: 'The immersive experience reduces purchase anxiety, cuts down on returns and increases average order values.',
    highlights: [
      'Virtual jewellery and clothing AR fitting - customers see themselves wearing products in real time.',
      'Self-service kiosks or tablets - easy setup in stores, showrooms or events.',
      'Boosts conversions - reduces returns by letting customers visualize purchases.',
      'Engaging experience - turns browsing into an interactive journey.'
    ],
    features: [
      { icon: 'bi-sunglasses', title: 'Realistic Visualization', description: 'Accurate representation of size, fit, and appearance' },
      { icon: 'bi-phone', title: 'Mobile-First Experience', description: 'Works on any smartphone without special hardware' },
      { icon: 'bi-arrow-left-right', title: 'Reduced Returns', description: 'Up to 40% decrease in product returns from better purchase decisions' },
      { icon: 'bi-cart-check', title: 'Conversion Boost', description: 'Increase conversion rates compared to static product images' }
    ],
    applications: [
      { icon: 'bi-gem', title: 'Jewellery Stores', description: 'Virtual try-on for necklaces, rings, and other accessories before purchase' },
      { icon: 'bi-person-check', title: 'Fashion Retail', description: 'See how outfits look on the customer before buying' },
      { icon: 'bi-palette', title: 'Cosmetics', description: 'Virtual makeup testing to try different looks without physical samples' }
    ]
  }
];

export const adaptiveFeatures = [
  {
    icon: 'bi-chat-dots',
    title: 'Intent Analysis',
    caption: 'What do they really need?',
    description: 'Our AI analyses and understands customer needs like a mind reader, and generates precise responses.'
  },
  {
    icon: 'bi-emoji-heart-eyes',
    title: 'Sentiment Analysis',
    caption: 'Hear the emotion behind the words.',
    description: 'Agents track customer mood in real time, adapting responses to keep customers heard.'
  },
  {
    icon: 'bi-clock-history',
    title: 'Context Analysis',
    caption: 'Remember what they asked 3 months ago? We do.',
    description: 'AI analyzes past chats, purchases, and customer profiles to deliver hyper-relevant responses.'
  }
];

export const enterpriseFeatures = [
  { icon: 'bi-plug', title: 'Unified System Integration', description: 'Embed photorealistic avatars anywhere - websites, apps, kiosks, WhatsApp/Instagram. Bi-directional sync with CRM/ERP systems for real-time data accuracy.' },
  { icon: 'bi-shield-lock', title: 'Compliance & Protection', description: 'Orchestrator-level authorization and access control. GDPR/ISO compliant infrastructure ensuring data never leaves your region.' },
  { icon: 'bi-cpu', title: 'Zero-Hallucination', description: 'Our multi-agent system is designed with guardrails and validation layers to protect against hallucinations. We maintain 99% content adherence across 40+ languages.' },
  { icon: 'bi-arrow-left-right', title: 'Smart Handover', description: 'Seamless human handoff with full interaction history - customers never repeat themselves.' },
  { icon: 'bi-palette', title: 'Brand Customization', description: 'Craft unique digital ambassadors matching your visual identity. Create sales or support workflows that suit your specific needs.' },
  { icon: 'bi-globe2', title: 'Global Reach', description: 'Multilingual support including Emirati Arabic and regional dialects. Real-time dynamic translation of your data into new languages.' }
];

export const solutions = [
  {
    id: 'call-center',
    title: 'AI Call Center Replacement',
    intro: 'Transform your customer support with AI agents that never sleep, never get tired, and speak every language.',
    body: 'Our AI voice agents handle everything from simple inquiries to complex technical support with human-like warmth and understanding. They integrate seamlessly with your existing phone systems while providing detailed analytics on every interaction.',
    image: '/assets/img/doodles/call_center.svg',
    imageAlt: 'AI voice agent handling customer calls',
    features: [
      { icon: 'bi-cash-coin', title: '60% Cost Reduction', description: 'Eliminate salaries, training, benefits, and infrastructure costs of human call centers' },
      { icon: 'bi-lightning', title: '0 Second Wait Time', description: 'Every call answered immediately - no hold music, no queue position announcements' },
      { icon: 'bi-lightning-charge', title: 'Instant Deployment', description: 'No training period - your AI agents are ready immediately' },
      { icon: 'bi-emoji-smile', title: 'Consistent Quality', description: 'No mood swings, biases, or bad days - just perfect service every time' }
    ]
  },
  {
    id: 'website',
    title: 'Website Integration',
    intro: 'Embed lifelike avatars directly into your website for real-time customer assistance. Our AI agents guide visitors, answer queries, and convert leads 24/7 without human intervention.',
    body: 'With seamless integration, the avatar becomes a natural extension of your website, providing personalized experiences based on user behavior and previous interactions.',
    image: '/assets/img/doodles/website.svg',
    imageAlt: 'Photorealistic AI avatar having natural website conversation',
    reverse: true,
    features: [
      { icon: 'bi-chat-dots', title: 'Real-time Engagement', description: 'Instant response to visitor queries with human-like conversation flow' },
      { icon: 'bi-person-circle', title: 'Personalized Experiences', description: 'Tailor conversations based on user behavior and history' },
      { icon: 'bi-globe2', title: 'Multi-language Support', description: 'Serve global customers in their preferred language' },
      { icon: 'bi-graph-up', title: 'Conversion Optimization', description: 'Guide visitors through sales funnels with intelligent prompts' }
    ]
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp Integration',
    intro: 'Why force customers to call or email when they can message a human-like AI assistant 24/7 on the platform they already use daily?',
    body: 'Our AI avatars transform WhatsApp into a premium service channel, recognizing customers by number, continuing website conversations, and handling complex requests with human-like comprehension while maintaining your brand voice.',
    image: '/assets/img/doodles/whatsapp.svg',
    imageAlt: 'AI avatar chatting on WhatsApp',
    features: [
      { icon: 'bi-whatsapp', title: 'Instant Messaging', description: '24/7 availability with immediate response to customer inquiries' },
      { icon: 'bi-person-check', title: 'Customer Recognition', description: 'Identifies customers by number and recalls previous interactions' },
      { icon: 'bi-mic', title: 'Voice & Media Support', description: 'Processes voice notes, images and documents shared via WhatsApp' },
      { icon: 'bi-arrow-repeat', title: 'Cross-platform Continuity', description: 'Seamlessly continues conversations started on your website' }
    ]
  },
  {
    id: 'kiosk',
    title: 'Interactive Kiosk Solutions',
    intro: 'Transform physical spaces with AI-powered kiosks that deliver immersive, personalized experiences for retail, hospitality, and corporate environments.',
    body: 'Our photorealistic avatars bring digital kiosks to life, handling everything from hotel check-ins to retail product recommendations. The AI remembers repeat visitors, provides multilingual support, and connects with your backend systems for real-time information.',
    image: '/assets/img/doodles/kiosk_short.svg',
    imageAlt: 'AI avatar interacting with users through kiosk',
    reverse: true,
    features: [
      { icon: 'bi-shop', title: 'Retail Experience', description: 'Photorealistic shopping assistants that recommend products and answer questions' },
      { icon: 'bi-door-open', title: 'Hotel Check-in', description: '24/7 receptionists that handle reservations, check-ins, and local information' },
      { icon: 'bi-arrow-left-right', title: 'Omnichannel Continuity', description: 'Continue conversations started on website or mobile app' },
      { icon: 'bi-people', title: 'Visitor Management', description: 'Corporate reception kiosks that register guests and notify hosts' }
    ]
  },
  {
    id: 'social-media',
    title: 'Social Media Engagement',
    intro: 'Transform your online presence with AI-powered social engagement that never sleeps.',
    body: 'Our intelligent agents manage DMs, comments, and customer inquiries across Instagram, Facebook, and LinkedIn, responding instantly, consistently, and always in your brand voice.',
    image: '/assets/img/doodles/social_media.svg',
    imageAlt: 'AI managing social media interactions',
    features: [
      { icon: 'bi-clock-history', title: '24/7 Engagement', description: 'Always active, ensuring your brand never misses a comment or query' },
      { icon: 'bi-megaphone', title: 'Brand-Consistent Tone', description: 'Adapts responses to match your voice and personality' },
      { icon: 'bi-collection', title: 'Cross-Platform Management', description: 'Handles multiple social accounts simultaneously' },
      { icon: 'bi-graph-up-arrow', title: 'Lead Conversion', description: 'Turns casual messages into qualified leads through smart dialogue' }
    ]
  },
  {
    id: 'retail-pos',
    title: 'Retail & POS Systems',
    intro: 'Enhance your in-store experience with AI-powered retail assistants that manage live inventory, recommend products, and process orders in real time.',
    body: 'Connected directly with your POS and ERP systems, these intelligent agents deliver frictionless shopping experiences personalized for each customer.',
    image: '/assets/img/doodles/retail.svg',
    imageAlt: 'AI retail assistant helping customers',
    reverse: true,
    features: [
      { icon: 'bi-arrow-repeat', title: 'Real-Time Inventory Sync', description: 'Always up-to-date product data across channels' },
      { icon: 'bi-stars', title: 'Smart Recommendations', description: 'Suggests complementary or trending items' },
      { icon: 'bi-bag-check', title: 'Frictionless Checkout', description: 'Guides customers through orders and payments seamlessly' },
      { icon: 'bi-person-heart', title: 'In-Store Personalization', description: 'Recognizes repeat shoppers for tailored experiences' }
    ]
  },
  {
    id: 'events',
    title: 'Events & Exhibitions',
    intro: 'Transform trade shows and exhibitions with AI avatars that attract, engage, and inform visitors through immersive interaction.',
    body: 'From automated visitor registration to live product demos, these avatars deliver memorable brand experiences while collecting valuable engagement data.',
    image: '/assets/img/doodles/event.svg',
    imageAlt: 'AI avatar supporting event and exhibition visitors',
    features: [
      { icon: 'bi-person-video3', title: 'Interactive Avatars', description: 'Captivate attendees with human-like digital hosts' },
      { icon: 'bi-qr-code-scan', title: 'Visitor Registration', description: 'Automate check-ins, badge printing, and data collection' },
      { icon: 'bi-display', title: 'Product Demonstrations', description: 'Deliver dynamic, voice-guided demos for each visitor' },
      { icon: 'bi-bar-chart-line', title: 'Analytics Dashboard', description: 'Track engagement, interests, and visitor sentiment in real time' }
    ]
  }
];

export const workflowFeatures = [
  { icon: 'bi-emoji-smile', title: 'Intent & Emotion Analysis', description: "Advanced NLP detects both what the customer wants and how they're feeling to provide empathetic responses." },
  { icon: 'bi-diagram-3', title: 'Dynamic Routing', description: 'Automatically routes queries to knowledge base, APIs, or human agents' },
  { icon: 'bi-database', title: 'Context Integration', description: 'Pulls relevant customer history and documents for personalized responses' },
  { icon: 'bi-arrow-repeat', title: 'Continuous Learning', description: 'Improves responses over time by analyzing interaction outcomes' },
  { icon: 'bi-signpost-split', title: 'Contextual Decision Making', description: 'Dynamically routes conversations based on intent clarity and customer emotion state.' },
  { icon: 'bi-people', title: 'Human Handoff Intelligence', description: 'Seamlessly transfers frustrated customers to human agents with full context preservation.' },
  { icon: 'bi-collection', title: 'Multi-Source Knowledge', description: 'Integrates internal knowledge bases with external APIs for comprehensive answers.' },
  { icon: 'bi-gear', title: 'Dynamic Parameter Handling', description: 'Intelligently collects missing information needed for API calls or complex queries.' },
  { icon: 'bi-chat-square-text', title: 'Unified Response Generation', description: 'Formulates consistent, brand-aligned responses regardless of data source.' }
];

export const faqs = [
  {
    question: 'What makes BotPlus different from traditional chatbots?',
    answer: 'BotPlus uses intent, emotion, and context analysis to carry on natural conversations, remember customer history, and respond with brand-aligned answers instead of scripted chatbot loops.'
  },
  {
    question: 'Can BotPlus integrate with CRM, ERP, WhatsApp, and websites?',
    answer: 'Yes. BotPlus is built for multi-platform integration across websites, WhatsApp, social media, CRM, ERP, kiosks, and call center workflows.'
  },
  {
    question: 'Does BotPlus support multilingual customer service?',
    answer: 'Yes. BotPlus supports 40+ languages and regional dialects, including Emirati Arabic, with real-time tone adaptation for customer support and sales conversations.'
  }
];
