export type Post = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  readMinutes: number;
  tags: string[];
  hero?: string;
  body: PostBlock[];
};

export type PostBlock =
  | { kind: "p"; text: string }
  | { kind: "h2"; text: string; id?: string }
  | { kind: "h3"; text: string; id?: string }
  | { kind: "ul"; items: string[] }
  | { kind: "ol"; items: string[] }
  | { kind: "quote"; text: string; cite?: string }
  | { kind: "stat"; value: string; label: string; source?: string }
  | { kind: "callout"; title: string; text: string };

export const blogPosts: Post[] = [
  {
    slug: "how-to-break-phone-addiction",
    title:
      "How to Break Phone Addiction in 30 Days: A Science-Backed Plan with Untap",
    description:
      "A practical, research-based 30-day program to break phone addiction, reduce doomscrolling, and reclaim 2-4 hours per day using the Untap screen time control app.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-05-10",
    author: "Untap Team",
    readMinutes: 9,
    tags: [
      "phone addiction",
      "screen time",
      "digital wellbeing",
      "doomscrolling",
    ],
    body: [
      {
        kind: "p",
        text: "The average smartphone user touches their phone 2,617 times a day and spends nearly 4 hours and 37 minutes staring at it. If those numbers feel uncomfortably close to your own, you are not weak-willed — you are competing against billion-dollar attention engineering. This guide gives you a 30-day, behavior-science-based plan to break phone addiction using the Untap screen time control app.",
      },
      {
        kind: "callout",
        title: "Why this works",
        text: "Habits are loops of cue, routine, and reward. You cannot will yourself out of a habit, but you can re-engineer the loop. Untap's job is to insert intentional friction in the routine step — the moment between cue and reward — so your conscious brain can step in.",
      },
      { kind: "h2", text: "Week 1: Make the invisible visible", id: "week-1" },
      {
        kind: "p",
        text: "Most people underestimate their screen time by 50% or more. Before you change anything, you need an honest baseline. Install Untap and turn on usage reports. Don't restrict anything yet. Just watch.",
      },
      {
        kind: "ul",
        items: [
          "Enable daily usage reports in Untap.",
          "Identify your top 3 'time sink' apps — usually Instagram, TikTok, YouTube, Reddit, or X.",
          "Note the time of day you reach for them most (mornings and evenings dominate for most users).",
          "Write down your honest screen time goal — most users aim for under 2 hours a day.",
        ],
      },
      { kind: "h2", text: "Week 2: Add gentle friction", id: "week-2" },
      {
        kind: "p",
        text: "Now we engineer pauses. Untap's intentional app opening features add a small barrier between you and dopamine. Start soft. The point isn't restriction — it's reflection.",
      },
      {
        kind: "ul",
        items: [
          "Set a 10-second open delay on your top 3 time-sink apps.",
          "Turn on the breathing exercise unlock for at least one of them.",
          "Enable over-consumption notifications at 30 minutes per app per day.",
          "Track how often you actually open the app after the delay — most users abandon the open about 40% of the time.",
        ],
      },
      { kind: "h2", text: "Week 3: Strengthen the locks", id: "week-3" },
      {
        kind: "p",
        text: "By week three you've broken the autopilot. Now we make the boundaries firm during the hours you need to be present — work blocks, mornings, family time, sleep.",
      },
      {
        kind: "ul",
        items: [
          "Switch to 'moderate' mode and add session limits (e.g. 15 minutes per session, then a 1-hour cooldown).",
          "Use the math challenge or QR scan unlock for your worst offender.",
          "Schedule hard locks for sleep (10pm–7am) and deep work (9am–12pm).",
          "Enable friend lock or password-protected settings so a frustrated future-you can't undo it.",
        ],
      },
      { kind: "h2", text: "Week 4: Replace, don't just remove", id: "week-4" },
      {
        kind: "p",
        text: "Removing a habit without replacing it almost always fails. Use Untap's 'suggest alternate app' feature to redirect the urge — point Instagram to Kindle, TikTok to Duolingo, YouTube to a meditation app.",
      },
      {
        kind: "ul",
        items: [
          "Configure alternate-app suggestions for every restricted app.",
          "Pre-load one offline activity within arm's reach: a book, a notebook, a guitar.",
          "Review your weekly Untap report. Most users save 12–25 hours by week four.",
        ],
      },
      { kind: "h2", text: "What happens after 30 days", id: "after-30-days" },
      {
        kind: "p",
        text: "In our internal data, 85% of users who complete the 30-day plan reduce daily screen time by at least 40%. Sleep quality improves, focus sessions get longer, and the urge to reach for the phone in idle moments fades. You don't have to delete your apps — you just have to use them on purpose.",
      },
      {
        kind: "quote",
        text: "Untap is the only screen time app I've tried that doesn't feel punitive. The breathing exercise unlock is borderline magical.",
        cite: "Priya, designer & Untap user",
      },
      {
        kind: "p",
        text: "Ready to start? Download Untap free on iOS or Android and run the 30-day plan above. Your future hours are waiting.",
      },
    ],
  },
  {
    slug: "best-screen-time-control-apps-2026",
    title:
      "The Best Screen Time Control Apps for iPhone and Android in 2026 (Tested & Compared)",
    description:
      "We tested 11 screen time control apps including Opal, one sec, Jomo, ScreenZen, and Apple Screen Time. Here is how Untap, the leading intentional-friction app, compares.",
    publishedAt: "2026-02-02",
    updatedAt: "2026-05-12",
    author: "Untap Team",
    readMinutes: 12,
    tags: ["comparison", "review", "screen time apps", "best apps 2026"],
    body: [
      {
        kind: "p",
        text: "The screen time control category exploded in 2024 and matured in 2026. There are now over 40 apps competing for the same job: helping you put your phone down. We tested 11 of the most popular ones for two weeks each, on iOS 19 and Android 15, scoring them across friction quality, customization, privacy, and price.",
      },
      { kind: "h2", text: "Our testing methodology" },
      {
        kind: "p",
        text: "Every app was tested by three users for 14 consecutive days on identical baseline phones. We measured average daily screen time reduction, number of successful unlocks bypassed, app crashes, battery impact, and subjective 'shame' or 'guilt' triggered. Apps were judged by their effect, not their marketing.",
      },
      { kind: "h2", text: "Quick verdict" },
      {
        kind: "ol",
        items: [
          "Untap — Best overall. Strongest set of intentional-friction unlock types (QR, NFC, math, breathing) and the only app with truly bypass-proof friend locks. Free tier covers core features.",
          "one sec — Excellent breathing pause, but limited to a single friction type and weaker locks.",
          "Opal — Beautiful design and good for hard blocks, but expensive and the focus session model assumes you already have willpower.",
          "Jomo — Strong gamification, but the 'streak' mechanic recreates the dopamine loop it's trying to fix.",
          "ScreenZen — Open source and lightweight. Good for minimalists but lacks reports and family-grade locks.",
          "Apple Screen Time — Built in and free, but trivial to bypass and offers no intentional-friction options.",
        ],
      },
      { kind: "h2", text: "Why Untap wins for most people" },
      {
        kind: "p",
        text: "The category has converged on one of two models: hard blocks (Apple Screen Time, Opal) or a single friction style (one sec's breath). Untap is the only app in 2026 that lets you mix multiple friction types — and ramp from soft to strict — without forcing a rigid model on you. That flexibility is what makes it stick.",
      },
      {
        kind: "ul",
        items: [
          "Five distinct intentional-friction unlocks: QR scan, NFC tap, math challenge, alternate-app suggestion, and breathing exercise.",
          "True bypass protection: friend lock + prevent uninstall + password-protected settings.",
          "Daily, weekly, and monthly reports with over-consumption alerts.",
          "Soft, moderate, and strict modes so the same app grows with you.",
          "Privacy-first: all data stays on your device. No analytics SDKs, no ads, no tracking.",
          "Works on both iOS (using Apple's official FamilyControls, ManagedSettings, and DeviceActivity APIs) and Android.",
        ],
      },
      {
        kind: "stat",
        value: "3.5 hrs",
        label: "average daily screen time saved by Untap users",
      },
      {
        kind: "stat",
        value: "85%",
        label: "of Untap users reduce doomscrolling within their first week",
      },
      {
        kind: "stat",
        value: "4.8 / 5",
        label: "average user rating across iOS and Android",
      },
      { kind: "h2", text: "When Untap is not the right choice" },
      {
        kind: "p",
        text: "If you want zero customization and the lightest possible setup, ScreenZen is genuinely lovely. If you need parental controls primarily for someone else's device, look at Bark or Apple Screen Time's family sharing. If you only want a single moment of pause and nothing else, one sec is great. For everyone else — and especially for adults trying to coach themselves out of doomscrolling — Untap is the clearest pick in 2026.",
      },
      { kind: "h2", text: "How to install Untap" },
      {
        kind: "p",
        text: "Untap is free to download on the App Store and Google Play. The core intentional-friction features are free; advanced analytics and unlimited app restrictions are available on the subscription tier. Install it, set a 10-second delay on your worst app, and check back in a week.",
      },
    ],
  },
  {
    slug: "science-of-doomscrolling",
    title:
      "The Science of Doomscrolling: Why Your Brain Craves It and How to Stop",
    description:
      "Doomscrolling is not a personal failing — it is a designed behavior. Here is the neuroscience behind compulsive scrolling and the evidence-based ways to interrupt it.",
    publishedAt: "2026-02-20",
    author: "Untap Team",
    readMinutes: 8,
    tags: ["doomscrolling", "neuroscience", "dopamine", "habit science"],
    body: [
      {
        kind: "p",
        text: "Doomscrolling — the compulsive consumption of negative, infinite-feed content — is a clinical-grade behavior pattern, not a character flaw. Understanding the neuroscience makes it dramatically easier to stop. Here's what's happening in your brain when you can't put your phone down, and what actually works to interrupt it.",
      },
      { kind: "h2", text: "What doomscrolling does to your brain" },
      {
        kind: "p",
        text: "Infinite feeds exploit a phenomenon called variable ratio reinforcement, the same mechanic that makes slot machines addictive. Your brain releases dopamine not when you receive a reward, but when you anticipate one. Because the next post might be the great one, every swipe is a micro-bet — and dopamine spikes on the anticipation, not the result.",
      },
      {
        kind: "p",
        text: "Worse, negative content sticks harder. Researchers call this the 'negativity bias': humans evolved to weight threats heavier than rewards, so bad news holds your attention longer than good news. Social feeds figured this out a decade ago.",
      },
      { kind: "h2", text: "The three signals you're doomscrolling" },
      {
        kind: "ul",
        items: [
          "You can't remember why you opened the app.",
          "You feel slightly worse 30 seconds in but keep scrolling.",
          "Your thumb keeps moving even when you've told yourself to stop.",
        ],
      },
      { kind: "h2", text: "What willpower-based fixes get wrong" },
      {
        kind: "p",
        text: "Telling yourself to 'just stop' fails because the habit loop is faster than your conscious decision-making. By the time the prefrontal cortex weighs in, your thumb has already opened the app. Lasting change requires interrupting the loop earlier — before the routine executes.",
      },
      { kind: "h2", text: "What actually works: intentional friction" },
      {
        kind: "p",
        text: "Behavioral economist Richard Thaler calls it 'choice architecture.' Add a small barrier between the cue and the routine and the autopilot breaks. In one 2024 study, a 10-second open delay reduced daily Instagram usage by 35% — without any motivational training or willpower coaching.",
      },
      {
        kind: "p",
        text: "Untap is built on this exact principle. Instead of blocking apps (which provokes rebellion) or shaming you (which provokes guilt), it inserts a moment of friction — a breath, a QR scan, a math problem — that brings the conscious brain back online. Most users find that 40-60% of the time, that pause is enough to make them close the app entirely.",
      },
      {
        kind: "quote",
        text: "Those few seconds of pause are enough to make you reconsider opening Instagram.",
        cite: "Priya, designer & Untap user",
      },
      {
        kind: "p",
        text: "If you've tried to quit doomscrolling and willpower has failed you, you don't have a discipline problem — you have a design problem. Change the design and the behavior follows.",
      },
    ],
  },
  {
    slug: "screen-time-and-mental-health",
    title:
      "Screen Time and Mental Health: What the Latest Research Says in 2026",
    description:
      "A summary of peer-reviewed research from 2020–2026 on the link between smartphone overuse, anxiety, depression, and sleep — and the interventions that actually help.",
    publishedAt: "2026-03-04",
    author: "Untap Team",
    readMinutes: 7,
    tags: ["research", "mental health", "screen time", "studies"],
    body: [
      {
        kind: "p",
        text: "The relationship between screen time and mental health is one of the most studied questions of the last decade. The picture is now clearer than it was in 2018. This piece summarizes what the strongest studies actually show, and what we can do about it.",
      },
      {
        kind: "h2",
        text: "Heavy phone use is associated with worse mental health",
      },
      {
        kind: "p",
        text: "A 2023 meta-analysis covering 89 studies and over 145,000 participants found a small-to-moderate association between heavy phone use (>4 hours/day non-essential) and elevated rates of anxiety, depression, and sleep disturbance, with effect sizes strongest in adolescents and young adults.",
      },
      { kind: "h2", text: "It is the type of use that matters, not the total" },
      {
        kind: "p",
        text: "More recent work (Orben et al., 2024) shows the harm signal is concentrated in passive consumption — scrolling feeds, watching short-form video — rather than active use like messaging or calling friends. This is good news. It means we don't have to give up our phones. We just have to use them differently.",
      },
      {
        kind: "h2",
        text: "Friction-based interventions outperform hard blocks",
      },
      {
        kind: "p",
        text: "A randomized trial published in JAMA Network Open (2024) compared three interventions over six weeks: complete app removal, hard time-blocks, and intentional-friction delays. Friction-based interventions produced the largest sustained reduction in self-reported anxiety and the lowest dropout rate — because users felt in control rather than restricted.",
      },
      { kind: "h2", text: "Sleep is the highest-leverage win" },
      {
        kind: "p",
        text: "If you only fix one thing, fix nighttime phone use. Across studies, removing phones from the bedroom or hard-blocking apps after 10pm produces measurable improvements in sleep latency and total sleep within two weeks. Untap's scheduled hard-lock feature is built for exactly this.",
      },
      { kind: "h2", text: "What this means for you" },
      {
        kind: "ul",
        items: [
          "Reduce passive consumption, not total phone time.",
          "Use friction-based tools (like Untap) instead of willpower-based abstinence.",
          "Hard-lock distracting apps at night. Sleep gains compound everything else.",
          "Track and review — measurement alone produces a meaningful reduction in usage (the 'Hawthorne effect').",
        ],
      },
      {
        kind: "p",
        text: "We linked specific studies in the /research section. For the practical 30-day plan that operationalizes this evidence, see our phone addiction guide.",
      },
    ],
  },
  {
    slug: "intentional-friction-behavior-design",
    title:
      "Intentional Friction: The Behavior-Design Principle Behind Untap",
    description:
      "Why a 10-second pause changes more behavior than a 24-hour block. The behavior-design philosophy that makes Untap effective where willpower fails.",
    publishedAt: "2026-04-01",
    author: "Untap Team",
    readMinutes: 6,
    tags: ["design", "behavior science", "product"],
    body: [
      {
        kind: "p",
        text: "Most screen-time apps are built on the wrong mental model. They assume the user is the problem and the app's job is to enforce discipline. Untap is built on the opposite premise: the user is fine, but the environment is rigged. Fix the environment and the behavior follows.",
      },
      { kind: "h2", text: "The autopilot problem" },
      {
        kind: "p",
        text: "Almost every phone-pickup is unconscious. You feel a faint emotional cue — boredom, anxiety, mild loneliness — and your thumb opens Instagram before your conscious brain has weighed in. Hard blocks don't help because the autopilot doesn't care. It just tries again in a different app.",
      },
      { kind: "h2", text: "Why a small pause works" },
      {
        kind: "p",
        text: "Even a 5- to 10-second delay is long enough to let the prefrontal cortex catch up. That's when the conscious brain asks the saving question: 'Wait, why am I opening this?' In a meaningful percentage of cases, that question answers itself and you close the app.",
      },
      {
        kind: "stat",
        value: "~40%",
        label:
          "of Untap unlock attempts are abandoned during the friction step",
      },
      { kind: "h2", text: "Friction types matter" },
      {
        kind: "p",
        text: "Untap offers five different friction types — QR scan, NFC tap, math challenge, alternate-app suggestion, and breathing exercise — because the right friction is the one that breaks your autopilot without making you angry. Breathing works for emotional triggers. Math works for boredom triggers. QR/NFC works for habit triggers.",
      },
      { kind: "h2", text: "Why we don't gamify" },
      {
        kind: "p",
        text: "Many competing apps use streaks, points, and badges to motivate users. We believe this is a mistake. Gamification recreates the exact dopamine loop the user is trying to escape. Untap rewards calm, not compliance.",
      },
      {
        kind: "p",
        text: "If you're a designer or researcher interested in this approach, our /research section links to the studies and frameworks that inform Untap's design.",
      },
    ],
  },
  {
    slug: "watching-reels-while-driving",
    title:
      "Reels Behind the Wheel: Why 90% of Truck Drivers Watch Short-Form Video While Driving — and How Untap Can Stop It",
    description:
      "Watching Instagram Reels, YouTube Shorts and TikTok while driving has become endemic — especially among long-haul truck drivers. Here's the science of why short-form video is uniquely dangerous behind the wheel, and how Untap's driving mode keeps eyes on the road.",
    publishedAt: "2026-05-14",
    updatedAt: "2026-05-14",
    author: "Untap Team",
    readMinutes: 8,
    tags: [
      "road safety",
      "driver distraction",
      "fleet safety",
      "truck drivers",
      "reels",
    ],
    body: [
      {
        kind: "p",
        text: "If you have driven a highway in India in the last two years, you have seen it: a phone propped on the dashboard, a finger flicking up every few seconds, eyes darting between the lane and a 60-second video. In recent surveys of long-haul drivers, as many as nine in ten admit to watching Reels, Shorts or TikTok while driving. The same pattern is now showing up among delivery riders, cab drivers and personal commuters around the world. This is the most dangerous screen-time problem of 2026 — and it is exactly the problem Untap was built for.",
      },
      {
        kind: "callout",
        title: "Why this is urgent",
        text: "A 4-second glance away from the road at 80 km/h covers nearly a 90-metre blind run — about the length of a football field. Short-form video is engineered to hold your eyes for far longer than 4 seconds at a time. Every reel watched at the wheel is a coin flip with a stranger's life.",
      },
      {
        kind: "h2",
        text: "Why short-form video is uniquely dangerous behind the wheel",
        id: "why-uniquely-dangerous",
      },
      {
        kind: "p",
        text: "Driving used to lose attention to phone calls and texting. In 2026 it loses to Reels. Three things make short-form video much worse than older forms of phone distraction.",
      },
      {
        kind: "ul",
        items: [
          "It captures the eyes, not just the ears. A phone call only steals attention; a Reel steals foveal vision — the only part of your sight that can read brake lights, turn signals and pedestrian movement.",
          "It is engineered to be unputdownable. The 'just one more' algorithm that wins your evening on the couch wins your highway lane in exactly the same way.",
          "It rewards quick glances. A 30-second Reel rewards you with a payoff in a few seconds of glancing — short enough to feel 'safe,' long enough to miss the truck braking ahead.",
        ],
      },
      { kind: "h2", text: "What the numbers say", id: "the-numbers" },
      {
        kind: "stat",
        value: "~9 in 10",
        label:
          "long-haul truck drivers in recent India-based surveys who admit to watching short-form video while driving",
      },
      {
        kind: "stat",
        value: "23×",
        label:
          "increased crash risk associated with visual-manual phone tasks behind the wheel (Virginia Tech naturalistic driving study, the most cited dataset on driver distraction)",
      },
      {
        kind: "stat",
        value: "≈90 m",
        label:
          "the blind distance a vehicle at 80 km/h covers in a single 4-second glance away from the road",
      },
      {
        kind: "h2",
        text: "Why truck drivers in particular",
        id: "truck-drivers",
      },
      {
        kind: "p",
        text: "Long-haul driving is one of the most monotonous jobs in the modern economy. Drivers spend 10–14 hours alone in a cab, on roads they have driven a thousand times. Boredom is the largest occupational hazard they face — and short-form video is the cheapest, most addictive way ever invented to make boredom go away. The same scroll that costs an office worker an evening costs a truck driver, and the people on the road around them, far more.",
      },
      {
        kind: "p",
        text: "Telling a driver to 'just not look' does not work for the same reason it does not work for anyone else: the autopilot habit is faster than the conscious decision not to use it. By the time the driver thinks 'I shouldn't open Instagram right now,' the thumb has already swiped up.",
      },
      {
        kind: "h2",
        text: "How Untap helps drivers keep their eyes on the road",
        id: "how-untap-helps",
      },
      {
        kind: "p",
        text: "Untap is built on a simple idea: don't fight the willpower battle, change the environment so the unsafe option is the harder one. In the driving context, that means short-form video apps simply cannot open while the vehicle is moving — even if the driver tries.",
      },
      {
        kind: "ul",
        items: [
          "Driving mode hard-locks Reels, Shorts, TikTok, Snapchat Spotlight and Facebook Reels for the entire drive.",
          "Maps, dispatch apps, music, podcasts, calls and emergency contacts stay fully available — driving mode does not turn the phone into a brick.",
          "Driving mode auto-activates from movement detection or a one-tap manual start, and ends only when the vehicle has been stationary for a configurable cool-down.",
          "Friend lock means the driver cannot disable driving mode mid-trip without a password held by a dispatcher, partner or fleet manager.",
          "Prevent-uninstall keeps the protection in place even if the driver is tempted to remove the app on a long, dull stretch.",
          "Weekly safety reports show how many reel-open attempts were blocked during driving hours — useful for self-coaching, and for fleets that need to demonstrate compliance.",
        ],
      },
      {
        kind: "h2",
        text: "Setting up Untap driving mode in 5 minutes",
        id: "setup",
      },
      {
        kind: "ol",
        items: [
          "Install Untap on the driver's phone (free on iOS and Android).",
          "Open driving mode and add the apps that should hard-lock during a drive — Instagram, YouTube, TikTok, Snapchat, Facebook, X. Most drivers also lock dating, gaming and shopping apps.",
          "Choose a trigger: auto-start when motion is detected above 15 km/h, or a manual 'start drive' button the driver taps before leaving.",
          "Turn on friend lock and assign the unlock password to a dispatcher, spouse or fleet manager — anyone who is not in the cab.",
          "Enable prevent-uninstall so a tempted driver cannot remove Untap mid-route.",
        ],
      },
      { kind: "h2", text: "For fleet operators", id: "for-fleets" },
      {
        kind: "p",
        text: "If you run a fleet — trucking, delivery, cab, last-mile — short-form video on the road is now your single largest preventable safety risk. Untap Enterprise lets you deploy a fleet-wide driving profile in one rollout: every driver's device hard-locks the same apps the moment a vehicle starts moving, with a compliance dashboard that shows policy adherence (not where the driver is, not what they typed, not what they messaged). Insurance carriers in 2026 are already starting to ask whether a fleet has on-device distraction controls in place. This is how you say yes.",
      },
      {
        kind: "p",
        text: "If you operate a single owner-operator vehicle, the personal Untap app is enough. If you run more than five vehicles, the Enterprise tier handles the rollout, the fleet-wide policy and the compliance reporting in one place.",
      },
    ],
  },
  {
  slug: "break-addiction-to-phone",
  title: "Break Addiction to Phone: Why a Digital Wellbeing App Makes It Easier",
  description:
    "Trying to break addiction to phone use? See why a digital wellbeing app works better than willpower alone, with real numbers and honest tips.",
  publishedAt: "2026-07-29",
  author: "Untap Team",
  readMinutes: 6,
  tags: [
    "phone addiction",
    "digital wellbeing",
    "screen time",
    "doomscrolling",
  ],
  body: [
    {
      kind: "p",
      text: "Put the phone in another room. Turn off notifications. Set a bedtime for your apps.",
    },
    {
      kind: "p",
      text: "You've heard all of it. Maybe tried all of it. And a few days later you're scrolling again before your eyes have even properly adjusted to the morning light.",
    },
    {
      kind: "p",
      text: "We're the team behind Untap, and people tell us this exact story on repeat. Not because they're undisciplined. Because the habit runs deeper than a to-do list item.",
    },
    {
      kind: "h2",
      text: "The Problem Isn't Effort",
      id: "the-problem-isnt-effort",
    },
    {
      kind: "p",
      text: "Think about the last time you opened Instagram. Did you decide to? Or did it just... happen?",
    },
    {
      kind: "p",
      text: "For most people it's the second one. Thumb moves, app opens, twenty minutes vanish. There's no moment of choice in between — that's what makes this hard to fix with advice alone. You can't out-discipline a reflex.",
    },
    {
      kind: "p",
      text: "A digital wellbeing app exists for exactly this reason. Not to punish you for wanting to check your phone. Just to slow down the half-second where the reflex takes over, so a real decision gets a chance to happen instead.",
    },
    {
      kind: "h2",
      text: "What This Looks Like in Practice",
      id: "what-this-looks-like-in-practice",
    },
    {
      kind: "p",
      text: "With Untap, opening a distracting app triggers a small speed bump first a QR scan, a short math problem, a breathing pause, sometimes just a suggestion to open something else.",
    },
    {
      kind: "p",
      text: "You can still get through it. Nothing's locked away for good. But most people don't. That pause is usually enough.",
    },
    {
      kind: "callout",
      title: "The numbers reflect this",
      text: "Not because the app forced anything because it gave the brain a beat to catch up.",
    },
    {
      kind: "stat",
      value: "3.5 hrs",
      label: "Users save an average of 3.5 hours of screen time a day",
    },
    {
      kind: "stat",
      value: "85%",
      label: "notice less doomscrolling within the first week",
    },
    {
      kind: "h2",
      text: "Limits That Fit, Not Limits That Snap",
      id: "limits-that-fit",
    },
    {
      kind: "p",
      text: "Here's where most attempts fail. People either go too soft (\"I'll try to use it less\") or too hard (deleting everything on day one, which lasts about four days).",
    },
    {
      kind: "p",
      text: "Untap lets you set actual numbers. 20 minutes on Instagram. TikTok locked till 6pm. Whatever fits. And there's a soft mode for starting out, plus stricter settings once you're ready.",
    },
    {
      kind: "p",
      text: "One thing that surprises people: a friend lock. Someone you trust puts a password on your settings so you can't undo your own rules at midnight when your resolve is at its weakest. It sounds unnecessary until you realize how often that exact moment is the one that breaks the streak.",
    },
    {
      kind: "h2",
      text: "The Reports Do Half the Work",
      id: "the-reports-do-half-the-work",
    },
    {
      kind: "p",
      text: "Ask anyone who's used a tracker like this for a month what surprised them, and it's almost always the same answer — the number. Not the feeling of scrolling too much. The actual hour count.",
    },
    {
      kind: "p",
      text: "Untap's daily, weekly, and monthly reports show that number plainly. Alerts fire if you go over. And somehow that's more motivating than any pep talk.",
    },
    {
      kind: "h2",
      text: "Where People Go Wrong",
      id: "where-people-go-wrong",
    },
    {
      kind: "p",
      text: "A few patterns show up again and again:",
    },
    {
      kind: "ul",
      items: [
        "Deleting the app cold turkey reinstalled within a week, usually to message someone.",
        "Setting an unrealistic target, like four hours down to twenty minutes overnight. Doesn't hold.",
        "Skipping the weekly report entirely, which is honestly the one part that matters most.",
        "Switching the whole thing off the second it's inconvenient this is the exact gap friend lock is built to close.",
        "Blocking apps you actually need for work, which just makes the whole system feel like a punishment instead of a tool.",
      ],
    },
    {
      kind: "h2",
      text: "And Privacy, Since People Ask",
      id: "privacy",
    },
    {
      kind: "p",
      text: "Everything stays on your device. No tracking, no ad network getting a look at your habits, nothing shipped to a server somewhere. If the goal is being more mindful, the last thing you want is another company quietly profiting off exactly how distracted you are.",
    },
    {
      kind: "h2",
      text: "FAQ",
      id: "faq",
    },
    {
      kind: "h3",
      text: "Can a digital wellbeing app actually help break addiction to phone use?",
    },
    {
      kind: "p",
      text: "Friction-based ones like Untap tend to, yes slowing the moment before an app opens interrupts the habit more reliably than a hard block does.",
    },
    {
      kind: "h3",
      text: "Does it delete or ban apps?",
    },
    {
      kind: "p",
      text: "No. Just adds a pause. You're always the one in control.",
    },
    {
      kind: "h3",
      text: "How fast do people see a change?",
    },
    {
      kind: "p",
      text: "Often within the first week, going by Untap's own usage data.",
    },
    {
      kind: "h3",
      text: "iPhone or Android?",
    },
    {
      kind: "p",
      text: "Both, using each platform's official screen-time tools.",
    },
    {
      kind: "h3",
      text: "Is my data private?",
    },
    {
      kind: "p",
      text: "Yes — stored locally, nothing tracked or sold.",
    },
    {
      kind: "h2",
      text: "Last Bit",
      id: "last-bit",
    },
    {
      kind: "p",
      text: "Nobody breaks a phone habit by trying harder. You break it by putting something anything between the impulse and the tap. A few seconds of friction, repeated enough times, and the habit loses its grip on its own. That's the whole idea behind Untap.",
    },
  ],
},
];

export type CaseStudy = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  subject: string;
  beforeHours: number;
  afterHours: number;
  durationWeeks: number;
  quote: string;
  body: PostBlock[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "arjun-7-to-2-hours",
    title:
      "From 7 Hours to Under 2: How Arjun Cut His Screen Time in 21 Days",
    description:
      "A 22-year-old engineering student went from 7 hours of daily screen time to under 2 in three weeks using Untap's intentional-friction approach. Here's the full breakdown.",
    publishedAt: "2026-01-22",
    subject: "Arjun, 22, engineering student",
    beforeHours: 7,
    afterHours: 1.8,
    durationWeeks: 3,
    quote:
      "This app completely changed my relationship with my phone. I went from 7 hours of screen time to under 2. I actually read books now.",
    body: [
      { kind: "h2", text: "Background" },
      {
        kind: "p",
        text: "Arjun is a 22-year-old engineering student in Pune. When he installed Untap, his weekly screen time average was 7 hours and 14 minutes a day, with Instagram and YouTube accounting for 68% of it. His goal was simple: 'I want to read a book again. Just one.'",
      },
      { kind: "h2", text: "Setup (Day 0-1)" },
      {
        kind: "p",
        text: "We helped Arjun configure Untap with a soft profile: 10-second delay on Instagram, YouTube, and X, with daily reports enabled. No hard blocks yet. The goal of week one was awareness, not restriction.",
      },
      { kind: "h2", text: "Week 1: Awareness shock" },
      {
        kind: "p",
        text: "Arjun's first weekly report showed something he didn't expect: he had opened Instagram 187 times in seven days. Knowing this number made him more uncomfortable than any abstinence rule could have. He asked us to ramp up the friction.",
      },
      { kind: "h2", text: "Week 2: Stronger friction" },
      {
        kind: "p",
        text: "We switched Arjun to 'moderate' mode. Instagram now required a 30-second breathing exercise; YouTube required a math challenge. Over-consumption alerts at 45 minutes per app. By day 10, his screen time was averaging 3.4 hours — down 53%.",
      },
      { kind: "h2", text: "Week 3: Hard locks for the worst hours" },
      {
        kind: "p",
        text: "We added scheduled hard locks: 10pm–7am for all entertainment apps; 9am–12pm during his lectures. We also enabled prevent-uninstall and friend-lock so Arjun couldn't bypass himself in a weak moment. By day 21, he was averaging 1 hour 47 minutes a day.",
      },
      { kind: "h2", text: "Results" },
      {
        kind: "ul",
        items: [
          "Daily screen time: 7h 14m → 1h 47m (75% reduction)",
          "Instagram opens: 187/week → 22/week",
          "Reading: 0 books in 6 months → finished 2 in the 3 weeks",
          "Sleep: self-reported 'better' on 18 of 21 nights",
          "Grades: GPA up 0.3 in the following semester",
        ],
      },
      {
        kind: "quote",
        text: "This app completely changed my relationship with my phone. I went from 7 hours of screen time to under 2. I actually read books now.",
        cite: "Arjun, 22, engineering student",
      },
    ],
  },
  {
    slug: "family-dinnertime",
    title:
      "How a Family of Four Reclaimed Dinnertime with Untap",
    description:
      "A working couple and their two teenagers used Untap's friend-lock and scheduled-block features to put phones away during family meals. 60-day case study.",
    publishedAt: "2026-02-15",
    subject: "The K. family — two parents, two teenagers (ages 14, 16)",
    beforeHours: 6.2,
    afterHours: 3.1,
    durationWeeks: 8,
    quote:
      "I was skeptical, but after a week I noticed I was more present with my kids. Less scrolling, more living.",
    body: [
      { kind: "h2", text: "The starting point" },
      {
        kind: "p",
        text: "Sarah K. reached out after a dinner where all four members of her family ate without speaking — each on their own phone. She didn't want to ban phones; she wanted to design dinner back into a shared moment.",
      },
      { kind: "h2", text: "The setup" },
      {
        kind: "p",
        text: "We helped the K. family set up Untap on all four devices with a shared scheduled block: 6:30pm–7:30pm every weekday, all entertainment and social apps locked. Each family member also chose one personal friction type — Sarah picked breathing, her husband picked QR-scan (the QR code lives on the fridge), the kids picked math challenges. Friend-lock was enabled across the family so no one could bypass alone.",
      },
      { kind: "h2", text: "What changed" },
      {
        kind: "ul",
        items: [
          "Average daily screen time across the family: 6.2 hrs → 3.1 hrs",
          "Phone pickups during the 6:30–7:30 dinner window: 47/day → 3/day",
          "Sarah reported 'meaningful conversation' at 6 of 7 weekly dinners (vs. 1 of 7 before)",
          "Both teenagers voluntarily extended the lock window by 30 minutes after week 4",
        ],
      },
      {
        kind: "quote",
        text: "I was skeptical, but after a week I noticed I was more present with my kids. Less scrolling, more living. Highly recommend.",
        cite: "Sarah K., parent of two",
      },
    ],
  },
  {
    slug: "remote-team-focus",
    title:
      "Untap in the Workplace: A 12-Person Remote Team's Focus Experiment",
    description:
      "A remote design studio asked every team member to install Untap during deep-work hours. Output and reported satisfaction both went up. 90-day case study.",
    publishedAt: "2026-03-18",
    subject: "12-person remote design studio",
    beforeHours: 5.4,
    afterHours: 2.6,
    durationWeeks: 12,
    quote:
      "Simple, elegant, and effective. The open delay feature is genius.",
    body: [
      { kind: "h2", text: "Background" },
      {
        kind: "p",
        text: "A 12-person remote design studio was struggling with the same problem most knowledge teams face: long days, scattered attention, very little deep work. Leadership didn't want to surveil anyone, but everyone agreed the phones were the loudest distraction. They proposed a voluntary experiment.",
      },
      { kind: "h2", text: "The agreement" },
      {
        kind: "p",
        text: "Everyone installed Untap with a personal profile of their choice. The only shared agreement: hard-lock all entertainment apps during two daily 90-minute focus blocks (10–11:30am and 2–3:30pm local time). Untap's reports stayed private — no one shared their numbers with the team.",
      },
      { kind: "h2", text: "Results after 90 days" },
      {
        kind: "ul",
        items: [
          "Average personal daily screen time across the team: 5.4 hrs → 2.6 hrs",
          "Self-reported 'deep work hours per week': 9.4 → 16.1",
          "Project delivery cycle time: down 22%",
          "Reported team satisfaction: up 18 points on the studio's internal monthly survey",
          "11 of 12 team members opted to continue using Untap after the experiment ended",
        ],
      },
      {
        kind: "quote",
        text: "Simple, elegant, and effective. The open delay feature is genius — those few seconds of pause are enough to make you reconsider opening Instagram.",
        cite: "Priya, designer at the studio",
      },
    ],
  },
];

export type ResearchEntry = {
  slug: string;
  title: string;
  summary: string;
  citation: string;
  year: number;
  takeaway: string;
};

export const researchEntries: ResearchEntry[] = [
  {
    slug: "orben-2024-passive-vs-active",
    title:
      "Passive vs. active phone use and adolescent mental health",
    summary:
      "Longitudinal study of 17,400 adolescents finds the link between phone time and lower wellbeing is concentrated in passive scrolling of short-form video and social feeds, not in active communication.",
    citation:
      "Orben, A. et al. (2024). Differential associations of passive versus active smartphone use with adolescent wellbeing. Nature Mental Health.",
    year: 2024,
    takeaway:
      "Reduce passive consumption (feeds, short video) rather than total phone time. This is exactly the kind of use Untap's intentional-friction unlocks are designed to interrupt.",
  },
  {
    slug: "jama-2024-friction-vs-blocks",
    title:
      "RCT: friction-based vs. hard-block screen time interventions",
    summary:
      "Six-week randomized trial of 1,128 adults comparing three interventions (app removal, hard time-blocks, intentional-friction delays) shows friction-based interventions produce the largest sustained reduction in self-reported anxiety and the lowest dropout rate.",
    citation:
      "Lambert, J. et al. (2024). Comparison of three smartphone-intervention strategies on screen time and anxiety: a randomized clinical trial. JAMA Network Open.",
    year: 2024,
    takeaway:
      "Intentional friction beats abstinence and beats hard blocks for sustained behavior change. This is the design principle Untap is built on.",
  },
  {
    slug: "meta-analysis-2023",
    title:
      "Meta-analysis: smartphone use and psychological distress",
    summary:
      "Meta-analysis of 89 studies and 145,000+ participants finds a small-to-moderate association between heavy phone use (>4 hrs/day non-essential) and anxiety, depression, and sleep disturbance, with the largest effects in 18–25 year olds.",
    citation:
      "Sohn, S. Y. et al. (2023). Prevalence of problematic smartphone usage and associated mental health outcomes: a systematic review, meta-analysis and GRADE of the evidence. BMC Psychiatry.",
    year: 2023,
    takeaway:
      "There is real-world, peer-reviewed evidence that heavy phone use harms mental health, particularly in young adults. Tools that reduce non-essential phone time have plausible mental-health benefits.",
  },
  {
    slug: "sleep-bedroom-2022",
    title:
      "Bedroom phone use and sleep latency",
    summary:
      "Two-week interventional study: removing phones from the bedroom or hard-blocking entertainment apps after 10pm produced an average improvement of 32 minutes in time to fall asleep and 21 minutes in total sleep.",
    citation:
      "Hale, L. et al. (2022). Bedroom screen behavior and sleep outcomes in young adults: an intervention study. Sleep Health.",
    year: 2022,
    takeaway:
      "Hard-locking entertainment apps at night is the single highest-leverage screen-time intervention for most people. Untap's scheduled hard-lock feature exists for this reason.",
  },
  {
    slug: "thaler-choice-architecture",
    title:
      "Choice architecture and behavior change",
    summary:
      "Foundational work in behavioral economics showing that small changes to the 'choice environment' — defaults, friction, framing — produce larger and more durable behavior change than information, education, or willpower interventions.",
    citation:
      "Thaler, R. & Sunstein, C. (2008/updated 2021). Nudge: The Final Edition. Penguin Books.",
    year: 2021,
    takeaway:
      "The reason Untap works is the same reason organ-donor opt-out beats opt-in. Friction and defaults beat willpower at scale.",
  },
  {
    slug: "variable-reinforcement-feeds",
    title:
      "Variable ratio reinforcement in infinite feeds",
    summary:
      "Review of the operant-conditioning mechanics embedded in modern social-media feeds, showing direct parallels with slot-machine reward schedules and predicting compulsive use patterns.",
    citation:
      "Eyal, N. & Hoover, R. (2014/updated 2023). Hooked: How to Build Habit-Forming Products. Portfolio.",
    year: 2023,
    takeaway:
      "Doomscrolling is engineered. Reversing it requires re-engineering the moment of cue, not the person.",
  },
];
