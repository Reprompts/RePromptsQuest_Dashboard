const techPosts = [
  {
    id: 1,
    title: "🧠 Google announces BERT: A breakthrough in natural language processing",
    summary: "Google introduces BERT to improve search understanding by processing language context bidirectionally.",
    description: `
Google launched BERT, an AI model that excels at interpreting query context by reading text both ways. Here's what Redditors highlighted:

➡️ **Improved Search**  
Contextual understanding of prepositions (“to”, “for”, “do”) leads to more accurate answers.

➡️ **Open‑Sourcing Impact**  
The model was released to the public, inviting community innovation and fine-tuning.

➡️ **SEO & Content Strategy**  
Marketers debated how BERT could change keyword targeting and content readability best practices.

🚀 This marks a step-change in AI‑powered search—reshaping how Google parses language.
`,
    subreddit: "r/MachineLearning",
    user: "u/ai_researcher2018",
    type: "AI Breakthrough",
    reason: "Major AI advancement publicly shared with deep learning community.",
    time: "2018-10-25T16:00:00Z",
    link: "https://www.reddit.com/r/MachineLearning/comments/bert_announcement/"
  },
  {
    id: 2,
    title: "🔒 Spectre & Meltdown: CPU bugs affecting nearly all modern processors",
    summary: "Critical security flaws in CPU speculative execution force massive patches and performance concerns.",
    description: `
Researchers disclosed Spectre and Meltdown vulnerabilities impacting Intel, AMD, and ARM CPUs. Reddit discussions noted:

➡️ **Scope of Exposure**  
Data leaks across privilege boundaries—including passwords and memory.

➡️ **Patch Trade-offs**  
Security patches could introduce 5–30% slowdowns for certain workloads.

➡️ **Hardware‑Software Transparency**  
Users demanded clearer transparency from hardware manufacturers regarding microarchitectural flaws.

👁️ This was a wake-up call for CPU vendors, OS developers, and cloud operators worldwide.
`,
    subreddit: "r/technology",
    user: "u/cybersecwatch",
    type: "Security Alert",
    reason: "High-impact flaw with global implications for computing security.",
    time: "2018-01-05T14:30:00Z",
    link: "https://www.reddit.com/r/technology/comments/spectre_meltdown/"
  },
  {
    id: 3,
    title: "🚗 Tesla rolls out Full Self-Driving Beta to early testers",
    summary: "A select group of Tesla owners starts testing FSD beta—sparking debate on ethics, safety, and regulation.",
    description: `
Tesla pushed its full self-driving (FSD) beta to limited users, unlocking features like automatic steering and lane changes. Reddit reactions included:

➡️ **Risk vs Reward**  
Beta testers reported smooth rides, but highlighted edge-case errors like phantom braking.

➡️ **Regulatory Gray Areas**  
Critics questioned whether early releases preceded approved government oversight.

➡️ **Ethical Concerns**  
Users debated moral responsibility if a crash occurred under FSD’s control.

⚠️ This marked a notable shift in autonomous vehicle development, reigniting safety debates.
`,
    subreddit: "r/technology",
    user: "u/ev_enthusiast8",
    type: "Autonomous Driving",
    reason: "Futuristic tech meets real-world roads—exciting and controversial.",
    time: "2018-10-20T12:15:00Z",
    link: "https://www.reddit.com/r/technology/comments/tesla_fsd_beta/"
  },
  {
    id: 4,
    title: "📱 Samsung debuts 4TB NVMe SSD—for consumers",
    summary: "Samsung's 4TB consumer SSD signals massive capacity growth, sparking debates on cost vs home usage.",
    description: `
Samsung releases a 4TB NVMe SSD aimed at home users and prosumers. Redditors discussed:

➡️ **Use Cases**  
Data-heavy workflows like video editing and VM storage were prime use cases.

➡️ **Price vs Value**  
At $1,000, enthusiasts weighed SSD benefits against traditional RAID setups.

➡️ **Tech Trend**  
Commenters note how consumer storage sizes have accelerated, forecasting mainstream 2TB+ as standard.

💾 This was a landmark moment for consumer-grade storage capability and pricing curves.
`,
    subreddit: "r/technology",
    user: "u/datastoragefan",
    type: "Hardware Release",
    reason: "Groundbreaking storage density sparks practical tech conversation.",
    time: "2018-05-09T09:00:00Z",
    link: "https://www.reddit.com/r/technology/comments/samsung_4tb_ssd/"
  },
  {
    id: 5,
    title: "🛰 SpaceX reflights Falcon 9 first stage—historic reuse",
    summary: "SpaceX lands and reuses a Falcon 9 booster, marking a major leap in reusable rockets and cost efficiency.",
    description: `
For the first time, SpaceX successfully reflights a recovered Falcon 9 first stage. Discussion highlights:

➡️ **Cost Disruption**  
Launch costs could fall by 30–70% with reusable rockets.

➡️ **Reliability Debates**  
Makers questioned hardware degradation effects across flights.

➡️ **Future Roadmap**  
A broader path to Starship and fully reusable heavy launches was theorized.

🚀 This achievement transformed space launch economics and aspirational talk of Mars missions.
`,
    subreddit: "r/technology",
    user: "u/space_enthusiast77",
    type: "Space Tech",
    reason: "Reusability milestone with industry-wide implications.",
    time: "2018-03-30T18:45:00Z",
    link: "https://www.reddit.com/r/technology/comments/spacex_reuse/"
  },
  {
    id: 6,
    title: "🕵️ Facebook privacy meltdown after Cambridge Analytica scandal",
    summary: "Revelations of improper data harvesting lead to global scrutiny of social media ethics and data use.",
    description: `
News hits that Cambridge Analytica exploited Facebook profiles to influence elections. Reddit reactions included:

➡️ **Data Trust Crisis**  
Users posted steps to delete Facebook and recover privacy.

➡️ **Regulatory Pressure**  
Calls for GDPR and U.S. data regulation grew louder in thread responses.

➡️ **Platform Responsibility**  
Redditors debated whether Facebook’s ad-based model inherently risks misuse.

🌐 A major turning point in social data awareness and policy discussion.
`,
    subreddit: "r/technology",
    user: "u/privacywarrior2018",
    type: "Tech Ethics",
    reason: "High-profile tech scandal with enduring ramifications.",
    time: "2018-03-17T08:20:00Z",
    link: "https://www.reddit.com/r/technology/comments/cambridge_analytica/"
  },
  {
    id: 7,
    title: "📡 Google unveils Duplex: AI voice calls appointments",
    summary: "Google showcases Duplex making eerily human-sounding calls for booking appointments—stunning yet creepy.",
    description: `
Google Duplex debuts by calling restaurants to book reservations. Reddit participants discussed:

➡️ **Uncanny Valley**  
Listeners noted how natural the AI sounded—a mix of nostalgia and alarm.

➡️ **Transparency Questions**  
Is it ethical for an AI to not identify itself during calls?

➡️ **Job Market Anxiety**  
Service-industry workers worried about automation replacing phone roles.

🤖 Duplex blurred the line between human and machine conversation—and raised big ethical red flags.
`,
    subreddit: "r/technology",
    user: "u/futurecaller",
    type: "AI Demonstration",
    reason: "Breakthrough conversative AI with social implications.",
    time: "2018-05-08T15:35:00Z",
    link: "https://www.reddit.com/r/technology/comments/google_duplex/"
  },
  {
    id: 8,
    title: "💡 GDPR enforcement: companies rush to comply",
    summary: "With GDPR in force, global firms revamp privacy approaches—users see sign-up pop-ups galore.",
    description: `
On GDPR day, websites worldwide updated consent notices and privacy statements. Reddit reactions included:

➡️ **Global Impact**  
Even non-EU sites updated compliance, citing risk of penalties.

➡️ **User Confusion**  
Pop-up fatigue triggered complaints—“scroll to agree” behaviours.

➡️ **Positive Shifts**  
Some saw transparency boosts and more control over personal data.

🛡️ Marked a new era in web user rights and data governance.
`,
    subreddit: "r/technology",
    user: "u/dataprivacy_nerd",
    type: "Regulation",
    reason: "All-around conversation starter on user rights online.",
    time: "2018-05-25T00:00:00Z",
    link: "https://www.reddit.com/r/technology/comments/gdpr_live/"
  },
  {
    id: 9,
    title: "🏥 Microsoft launches Azure Sphere: IoT security platform",
    summary: "To address rising IoT threats, Microsoft reveals Azure Sphere to secure connected devices from silicon to cloud.",
    description: `
Microsoft released Azure Sphere—a secure microcontroller and OS specifically for IoT protection. Highlights:

➡️ **Built-in Security**  
Includes hardware root-of-trust and regular cloud updates.

➡️ **Ecosystem Play**  
Azure Sphere aimed to make Azure the default IoT hub.

➡️ **Adoption Hurdles**  
Redditors questioned cost and real-world deployment.

🔐 It was a signal that cloud giants are doubling down on IoT safety.
`,
    subreddit: "r/technology",
    user: "u/secureiotfan",
    type: "IoT Security",
    reason: "Important step toward safer IoT design standards.",
    time: "2018-04-23T11:50:00Z",
    link: "https://www.reddit.com/r/technology/comments/azure_sphere/"
  },
  {
    id: 10,
    title: "💻 Intel’s 10 nm process falls behind—TSMC takes the lead",
    summary: "Intel delays in transistor tech allow TSMC and Samsung to gain foundry leadership.",
    description: `
Intel’s planned 10 nm node delays pushed the semiconductor narrative. Reddit insights included:

➡️ **Competitive Urgency**  
TSMC and Samsung’s lead raised questions about Intel’s roadmap.

➡️ **Industry Reactions**  
Investors feared supply bottlenecks and PC shortages.

➡️ **Road-block Remedies**  
Discussions included Intel’s pivot to external manufacturing and R&D reevaluation.

🔬 A pivotal moment in semiconductor competition and hardware supply chains.
`,
    subreddit: "r/technology",
    user: "u/techinvestigator",
    type: "Semiconductor Industry",
    reason: "Critical analysis of a disruption in chipmaking hierarchy.",
    time: "2018-03-01T13:25:00Z",
    link: "https://www.reddit.com/r/technology/comments/intel_10nm_delay/"
  },
];

export default techPosts;
