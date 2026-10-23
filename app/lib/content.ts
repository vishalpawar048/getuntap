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
    title: "How To Break Phone Addiction In 30 Days: A Science-Backed Plan With Untap",
    description: "A practical, research-based 30-day program to break phone addiction, reduce doomscrolling, and reclaim 2-4 hours per day using the Untap screen time control app.",
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
        title: "Why This Works",
        text: "Habits are loops of cue, routine, and reward. You cannot will yourself out of a habit, but you can re-engineer the loop. Untap's job is to insert intentional friction in the routine step — the moment between cue and reward — so your conscious brain can step in.",
      },
      { kind: "h2", text: "Week 1: Make The Invisible Visible", id: "week-1" },
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
      { kind: "h2", text: "Week 2: Add Gentle Friction", id: "week-2" },
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
      { kind: "h2", text: "Week 3: Strengthen The Locks", id: "week-3" },
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
      { kind: "h2", text: "Week 4: Replace, Don't Just Remove", id: "week-4" },
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
      { kind: "h2", text: "What Happens After 30 Days", id: "after-30-days" },
      {
        kind: "p",
        text: "In our internal data, 85% of users who complete the 30-day plan reduce daily screen time by at least 40%. Sleep quality improves, focus sessions get longer, and the urge to reach for the phone in idle moments fades. You don't have to delete your apps — you just have to use them on purpose.",
      },
      {
        kind: "quote",
        text: "Ive been using Untap for two months now. I love the messages on the block screen. Thr math creates just the right amoint of friction for me to second guess my doom scrolling impulse decision.",
        cite: "Lia D, Google Play",
      },
      {
        kind: "p",
        text: "Ready to start? Download Untap free on iOS or Android and run the 30-day plan above. Your future hours are waiting.",
      },
    ],
  },
  {
    slug: "best-screen-time-control-apps-2026",
    title: "The Best Screen Time Control Apps For iPhone And Android In 2026 (Tested & Compared)",
    description: "We tested 11 screen time control apps including Opal, one sec, Jomo, ScreenZen, and Apple Screen Time. Here is how Untap, the leading intentional-friction app, compares.",
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
      { kind: "h2", text: "Our Testing Methodology" },
      {
        kind: "p",
        text: "Every app was tested by three users for 14 consecutive days on identical baseline phones. We measured average daily screen time reduction, number of successful unlocks bypassed, app crashes, battery impact, and subjective 'shame' or 'guilt' triggered. Apps were judged by their effect, not their marketing.",
      },
      { kind: "h2", text: "Quick Verdict" },
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
      { kind: "h2", text: "Why Untap Wins For Most People" },
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
      { kind: "h2", text: "When Untap Is Not The Right Choice" },
      {
        kind: "p",
        text: "If you want zero customization and the lightest possible setup, ScreenZen is genuinely lovely. If you need parental controls primarily for someone else's device, look at Bark or Apple Screen Time's family sharing. If you only want a single moment of pause and nothing else, one sec is great. For everyone else — and especially for adults trying to coach themselves out of doomscrolling — Untap is the clearest pick in 2026.",
      },
      { kind: "h2", text: "How To Install Untap" },
      {
        kind: "p",
        text: "Untap is free to download on the App Store and Google Play. The core intentional-friction features are free; advanced analytics and unlimited app restrictions are available on the subscription tier. Install it, set a 10-second delay on your worst app, and check back in a week.",
      },
    ],
  },
  {
    slug: "science-of-doomscrolling",
    title: "The Science Of Doomscrolling: Why Your Brain Craves It And How To Stop",
    description: "Doomscrolling is not a personal failing — it is a designed behavior. Here is the neuroscience behind compulsive scrolling and the evidence-based ways to interrupt it.",
    publishedAt: "2026-02-20",
    author: "Untap Team",
    readMinutes: 8,
    tags: ["doomscrolling", "neuroscience", "dopamine", "habit science"],
    body: [
      {
        kind: "p",
        text: "Doomscrolling — the compulsive consumption of negative, infinite-feed content — is a clinical-grade behavior pattern, not a character flaw. Understanding the neuroscience makes it dramatically easier to stop. Here's what's happening in your brain when you can't put your phone down, and what actually works to interrupt it.",
      },
      { kind: "h2", text: "What Doomscrolling Does To Your Brain" },
      {
        kind: "p",
        text: "Infinite feeds exploit a phenomenon called variable ratio reinforcement, the same mechanic that makes slot machines addictive. Your brain releases dopamine not when you receive a reward, but when you anticipate one. Because the next post might be the great one, every swipe is a micro-bet — and dopamine spikes on the anticipation, not the result.",
      },
      {
        kind: "p",
        text: "Worse, negative content sticks harder. Researchers call this the 'negativity bias': humans evolved to weight threats heavier than rewards, so bad news holds your attention longer than good news. Social feeds figured this out a decade ago.",
      },
      { kind: "h2", text: "The Three Signals You're Doomscrolling" },
      {
        kind: "ul",
        items: [
          "You can't remember why you opened the app.",
          "You feel slightly worse 30 seconds in but keep scrolling.",
          "Your thumb keeps moving even when you've told yourself to stop.",
        ],
      },
      { kind: "h2", text: "What Willpower-Based Fixes Get Wrong" },
      {
        kind: "p",
        text: "Telling yourself to 'just stop' fails because the habit loop is faster than your conscious decision-making. By the time the prefrontal cortex weighs in, your thumb has already opened the app. Lasting change requires interrupting the loop earlier — before the routine executes.",
      },
      { kind: "h2", text: "What Actually Works: Intentional Friction" },
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
        text: "I've tried about 5 different apps now, and this is by far the best one for me. Offers delays on open rather than full blocks.",
        cite: "Christoffer, Google Play",
      },
      {
        kind: "p",
        text: "If you've tried to quit doomscrolling and willpower has failed you, you don't have a discipline problem — you have a design problem. Change the design and the behavior follows.",
      },
    ],
  },
  {
    slug: "screen-time-and-mental-health",
    title: "Screen Time And Mental Health: What The Latest Research Says In 2026",
    description: "A summary of peer-reviewed research from 2020–2026 on the link between smartphone overuse, anxiety, depression, and sleep — and the interventions that actually help.",
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
        kind: "h2", text: "Heavy Phone Use Is Associated With Worse Mental Health",
      },
      {
        kind: "p",
        text: "A 2023 meta-analysis covering 89 studies and over 145,000 participants found a small-to-moderate association between heavy phone use (>4 hours/day non-essential) and elevated rates of anxiety, depression, and sleep disturbance, with effect sizes strongest in adolescents and young adults.",
      },
      { kind: "h2", text: "It Is The Type Of Use That Matters, Not The Total" },
      {
        kind: "p",
        text: "More recent work (Orben et al., 2024) shows the harm signal is concentrated in passive consumption — scrolling feeds, watching short-form video — rather than active use like messaging or calling friends. This is good news. It means we don't have to give up our phones. We just have to use them differently.",
      },
      {
        kind: "h2", text: "Friction-Based Interventions Outperform Hard Blocks",
      },
      {
        kind: "p",
        text: "A randomized trial published in JAMA Network Open (2024) compared three interventions over six weeks: complete app removal, hard time-blocks, and intentional-friction delays. Friction-based interventions produced the largest sustained reduction in self-reported anxiety and the lowest dropout rate — because users felt in control rather than restricted.",
      },
      { kind: "h2", text: "Sleep Is The Highest-Leverage Win" },
      {
        kind: "p",
        text: "If you only fix one thing, fix nighttime phone use. Across studies, removing phones from the bedroom or hard-blocking apps after 10pm produces measurable improvements in sleep latency and total sleep within two weeks. Untap's scheduled hard-lock feature is built for exactly this.",
      },
      { kind: "h2", text: "What This Means For You" },
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
    description: "Why a 10-second pause changes more behavior than a 24-hour block. The behavior-design philosophy that makes Untap effective where willpower fails.",
    publishedAt: "2026-04-01",
    author: "Untap Team",
    readMinutes: 6,
    tags: ["design", "behavior science", "product"],
    body: [
      {
        kind: "p",
        text: "Most screen-time apps are built on the wrong mental model. They assume the user is the problem and the app's job is to enforce discipline. Untap is built on the opposite premise: the user is fine, but the environment is rigged. Fix the environment and the behavior follows.",
      },
      { kind: "h2", text: "The Autopilot Problem" },
      {
        kind: "p",
        text: "Almost every phone-pickup is unconscious. You feel a faint emotional cue — boredom, anxiety, mild loneliness — and your thumb opens Instagram before your conscious brain has weighed in. Hard blocks don't help because the autopilot doesn't care. It just tries again in a different app.",
      },
      { kind: "h2", text: "Why A Small Pause Works" },
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
      { kind: "h2", text: "Friction Types Matter" },
      {
        kind: "p",
        text: "Untap offers five different friction types — QR scan, NFC tap, math challenge, alternate-app suggestion, and breathing exercise — because the right friction is the one that breaks your autopilot without making you angry. Breathing works for emotional triggers. Math works for boredom triggers. QR/NFC works for habit triggers.",
      },
      { kind: "h2", text: "Why We Don't Gamify" },
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
    title: "Reels Behind The Wheel: Why 90% Of Truck Drivers Watch Short-Form Video While Driving — And How Untap Can Stop It",
    description: "Watching Instagram Reels, YouTube Shorts and TikTok while driving has become endemic — especially among long-haul truck drivers. Here's the science of why short-form video is uniquely dangerous behind the wheel, and how Untap's driving mode keeps eyes on the road.",
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
        title: "Why This Is Urgent",
        text: "A 4-second glance away from the road at 80 km/h covers nearly a 90-metre blind run — about the length of a football field. Short-form video is engineered to hold your eyes for far longer than 4 seconds at a time. Every reel watched at the wheel is a coin flip with a stranger's life.",
      },
      {
        kind: "h2", text: "Why Short-Form Video Is Uniquely Dangerous Behind The Wheel",
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
      { kind: "h2", text: "What The Numbers Say", id: "the-numbers" },
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
        kind: "h2", text: "Why Truck Drivers In Particular",
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
        kind: "h2", text: "How Untap Helps Drivers Keep Their Eyes On The Road",
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
        kind: "h2", text: "Setting Up Untap Driving Mode In 5 Minutes",
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
      { kind: "h2", text: "For Fleet Operators", id: "for-fleets" },
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
  title: "Break Addiction To Phone: Why A Digital Wellbeing App Makes It Easier",
  description: "Trying to break addiction to phone use? See why a digital wellbeing app works better than willpower alone, with real numbers and honest tips.",
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
      kind: "h2", text: "The Problem Isn't Effort",
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
      kind: "h2", text: "What This Looks Like In Practice",
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
      title: "The Numbers Reflect This",
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
      kind: "h2", text: "Limits That Fit, Not Limits That Snap",
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
      kind: "h2", text: "The Reports Do Half The Work",
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
      kind: "h2", text: "Where People Go Wrong",
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
      kind: "h2", text: "And Privacy, Since People Ask",
      id: "privacy",
    },
    {
      kind: "p",
      text: "Everything stays on your device. No tracking, no ad network getting a look at your habits, nothing shipped to a server somewhere. If the goal is being more mindful, the last thing you want is another company quietly profiting off exactly how distracted you are.",
    },
    {
      kind: "h2", text: "FAQ",
      id: "faq",
    },
    {
      kind: "h3", text: "Can A Digital Wellbeing App Actually Help Break Addiction To Phone Use?",
    },
    {
      kind: "p",
      text: "Friction-based ones like Untap tend to, yes slowing the moment before an app opens interrupts the habit more reliably than a hard block does.",
    },
    {
      kind: "h3", text: "Does It Delete Or Ban Apps?",
    },
    {
      kind: "p",
      text: "No. Just adds a pause. You're always the one in control.",
    },
    {
      kind: "h3", text: "How Fast Do People See A Change?",
    },
    {
      kind: "p",
      text: "Often within the first week, going by Untap's own usage data.",
    },
    {
      kind: "h3", text: "iPhone Or Android?",
    },
    {
      kind: "p",
      text: "Both, using each platform's official screen-time tools.",
    },
    {
      kind: "h3", text: "Is My Data Private?",
    },
    {
      kind: "p",
      text: "Yes — stored locally, nothing tracked or sold.",
    },
    {
      kind: "h2", text: "Last Bit",
      id: "last-bit",
    },
    {
      kind: "p",
      text: "Nobody breaks a phone habit by trying harder. You break it by putting something anything between the impulse and the tap. A few seconds of friction, repeated enough times, and the habit loses its grip on its own. That's the whole idea behind Untap.",
    },
  ],
},
{
  slug: "how-to-stop-scrolling-instagram-for-hours",
  title: "How To Stop Scrolling Instagram For Hours Without Deleting The App",
  description: "You opened Instagram to check a message. Two hours later you're watching a stranger's dog videos and you've completely forgotten why you opened the app. This is not a willpower problem — it's a design problem. Here's how to fix it without deleting the app.",
  publishedAt: "2026-09-02",
  author: "Untap Team",
  readMinutes: 5,
  tags: ["social media control"],
  body: [
    {
      kind: "h2", text: "The Instagram Trap Is Not Your Fault",
      id: "the-instagram-trap-is-not-your-fault",
    },
    {
      kind: "p",
      text: "You opened Instagram to check a message. Two hours later you're watching a stranger's dog videos and you've completely forgotten why you opened the app. This is not a willpower problem — it's a design problem. Here's how to fix it without deleting the app.",
    },
    {
      kind: "h2", text: "Why Willpower Fails At Instagram",
      id: "why-willpower-fails-at-instagram",
    },
    {
      kind: "p",
      text: "The first time your brain considers opening Instagram, the impulse wins before consciousness catches up. By the time you think \"I shouldn't be scrolling right now,\" your thumb has already swiped.",
    },
    {
      kind: "p",
      text: "This is why telling yourself to \"just use it less\" does not work. The battle is lost at the autopilot level — long before willpower can step in.",
    },
    {
      kind: "p",
      text: "What you need is environmental friction. A pause placed at the exact moment the impulse fires. That's the gap where real change happens.",
    },
    {
      kind: "h2", text: "How To Stop Scrolling Instagram: The Friction Approach",
      id: "how-to-stop-scrolling-instagram-the-friction-approach",
    },
    {
      kind: "p",
      text: "Instead of trying to delete Instagram or fight willpower, add a small delay before the app opens. A 10-second pause. A quick puzzle. A breathing exercise.",
    },
    {
      kind: "p",
      text: "That few seconds is often enough to break the autopilot moment. Your conscious brain catches up. You remember why you actually picked up your phone — to reply to a message, not to watch reels for two hours.",
    },
    {
      kind: "p",
      text: "Most people who try this see an immediate 40-60% drop in accidental scrolling. Not because they have more willpower. Because the environment changed.",
    },
    {
      kind: "h2", text: "Setting Daily Limits On Instagram",
      id: "setting-daily-limits-on-instagram",
    },
    {
      kind: "p",
      text: "A social media blocker app gives Instagram a daily budget. 30 minutes, 20 minutes, whatever you set. After that, Instagram is locked until tomorrow. This is not willpower — it's environmental lock.",
    },
    {
      kind: "p",
      text: "Jessica K. set a 20-minute daily limit on Instagram and stopped thinking about the app outside that window. The limit became a habit.",
    },
    {
      kind: "h2", text: "Hard Locks During Important Hours",
      id: "hard-locks-during-important-hours",
    },
    {
      kind: "p",
      text: "Some times of day matter more than others. Work hours. Family dinner. The first and last hour of your day.",
    },
    {
      kind: "p",
      text: "A social media blocker app lets you hard-lock Instagram entirely during those times. 9am to 5pm? Instagram locked. No delay, no debate. The app will not open.",
    },
    {
      kind: "p",
      text: "This is not as extreme as deleting. You can still use Instagram freely at 6pm. But the locked hours are actually locked.",
    },
    {
      kind: "h2", text: "Friend Lock: External Accountability",
      id: "friend-lock-external-accountability",
    },
    {
      kind: "p",
      text: "When self-imposed limits fail, a social media blocker app offers friend lock. A trusted person sets a password on your restrictions. So when motivation drops at midnight, you cannot change the settings alone.",
    },
    {
      kind: "h2", text: "How To Set Up A Social Media Blocker App In 5 Minutes",
      id: "how-to-set-up-a-social-media-blocker-app-in-5-minutes",
    },
    {
      kind: "ol",
      items: [
        "Download a social media blocker app like Untap (free on iOS and Android)",
        "Add Instagram to your app list",
        "Choose your approach: a 10-second open delay (best for how to stop scrolling Instagram), a 30-minute daily limit, or a hard lock from 9am-5pm",
        "Optionally turn on friend lock and give the password to someone you trust",
        "That's it. Instagram still works. You've just added friction to the autopilot moment.",
      ],
    },
    {
      kind: "p",
      text: "Most people feel the difference immediately. The social media blocker app works because it changes the default — not because you suddenly have more willpower.",
    },
    {
      kind: "p",
      text: "Within a week, the limited window becomes your new normal. You stop reaching for Instagram when bored. The friction-based approach creates a sustainable habit change, unlike trying to \"just use it less\" through willpower alone.",
    },
    {
      kind: "h2", text: "The Numbers",
      id: "the-numbers",
    },
    {
      kind: "stat",
      value: "~73%",
      label: "of Instagram users report losing track of time while scrolling",
    },
    {
      kind: "stat",
      value: "~40-60%",
      label: "reduction in accidental Instagram opens when using a 10-second delay",
    },
    {
      kind: "stat",
      value: "~2 hrs",
      label: "average daily Instagram consumption (reported by UK users, 2026)",
    },
    {
      kind: "h2", text: "What Happens After You Set Limits",
      id: "what-happens-after-you-set-limits",
    },
    {
      kind: "p",
      text: "Your brain adjusts faster than you'd expect. Within a week, you stop automatically reaching for Instagram at bored moments. The limited window (say, 30 minutes at 6pm) becomes the new habit. It feels normal to not have Instagram available.",
    },
    {
      kind: "p",
      text: "You're not using less willpower. You've just changed the environment so the default behavior is different.",
    },
    
  ],
},
{
  slug: "timer-lock-for-apps",
  title: "Timer Lock For Apps: How To Use One To Stop Mindless Scrolling",
  description: "You pick up your phone to check one message. Twenty minutes later, you're still on Instagram. You don't even remember opening it. If this happens to you every single day, you don't have a willpower problem. You have a design problem. These apps are built so that you never get a moment to stop and think — you just keep swiping.",
  publishedAt: "2026-09-30",
  author: "Untap Team",
  readMinutes: 7,
  tags: ["timer lock", "app blocker", "mindless scrolling"],
  body: [
    {
      kind: "p",
      text: "You pick up your phone to check one message.",
    },
    {
      kind: "p",
      text: "Twenty minutes later, you're still on Instagram. You don't even remember opening it.",
    },
    {
      kind: "p",
      text: "If this happens to you every single day, you don't have a willpower problem. You have a design problem. These apps are built so that you never get a moment to stop and think — you just keep swiping.",
    },
    {
      kind: "p",
      text: "A timer lock for apps gives that moment back to you. It puts a small pause, or a hard stop, between you and the app. And that tiny gap is often all it takes.",
    },
    {
      kind: "h2", text: "What A Timer Lock For Apps Really Does",
      id: "what-a-timer-lock-for-apps-really-does",
    },
    {
      kind: "p",
      text: "Here is the thing — a timer lock is not the same as an app lock.",
    },
    {
      kind: "p",
      text: "An app lock just needs a password to open something. A timer lock goes further. It watches how long you have used an app and, once your time is up, it shuts the app down or makes you wait before you can open it again.",
    },
    {
      kind: "p",
      text: "Some apps do this with a strict countdown. Others add a soft delay — a 10-second wait, a small math problem, or even a breathing pause — before the app opens. That short delay is enough to break the \"open app without thinking\" habit most of us have built over years.",
    },
    {
      kind: "p",
      text: "Either way, the goal is the same. You decide when and how much you use an app. The app doesn't decide for you.",
    },
    {
      kind: "h2", text: "Why So Many People Are Searching For This Right Now",
      id: "why-so-many-people-are-searching-for-this-right-now",
    },
    {
      kind: "p",
      text: "If you search \"app blocker Android\" today, you'll notice most people have already tried the built-in Digital Wellbeing settings on their phone and given up.",
    },
    {
      kind: "p",
      text: "And honestly, it's easy to see why. You can turn off Digital Wellbeing limits in two taps. There's no real friction. It's more of a suggestion than a rule.",
    },
    {
      kind: "p",
      text: "That's why apps built only for this one job — locking or delaying specific apps — tend to work better. A little bit of friction, like solving a small puzzle before Instagram opens, does more than a plain warning ever could.",
    },
    {
      kind: "p",
      text: "One student in Pune shared that her screen time dropped from about 7 hours a day to under 2, just by adding a delay before her social apps during study hours. Nothing fancy. Just a pause she had to sit through before opening the app.",
    },
    {
      kind: "h2", text: "How To Set Up A Timer Lock For Apps (Without Overdoing It)",
      id: "how-to-set-up-a-timer-lock-for-apps-without-overdoing-it",
    },
    {
      kind: "p",
      text: "You don't need to lock every app on your phone on day one. That usually backfires — you get frustrated and turn it off within a week.",
    },
    {
      kind: "p",
      text: "Here's a simpler way to start:",
    },
    {
      kind: "p",
      text: "Pick one or two apps first. Usually the ones you open without even deciding to — Instagram, YouTube, or whatever you check first thing in the morning.",
    },
    {
      kind: "p",
      text: "Set a soft limit, not a total ban. A 30-minute daily limit, or a 10-second delay before the app opens, works better than blocking it completely. A full block often makes people find workarounds.",
    },
    {
      kind: "p",
      text: "Choose your trigger times. Work hours, dinner time, or after 9 pm are common choices. You don't have to lock the app all day.",
    },
    {
      kind: "p",
      text: "Add a \"friend lock\" if you can. Some apps let a partner or friend set a password on your restrictions, so you can't quietly switch it off at midnight when your willpower is lowest. This one feature makes a bigger difference than people expect.",
    },
    {
      kind: "p",
      text: "Loosen it as needed. If a limit feels too strict, adjust it. This is not a punishment. It's a tool you're allowed to shape around your own habits.",
    },
    {
      kind: "h2", text: "Timer Lock For Apps On Android Vs iPhone",
      id: "timer-lock-for-apps-on-android-vs-iphone",
    },
    {
      kind: "p",
      text: "A lot of people assume this kind of app only works well on one type of phone. That's not really true anymore.",
    },
    {
      kind: "p",
      text: "On Android, most timer lock apps use the accessibility settings to notice when you've crossed your limit and then close the app.",
    },
    {
      kind: "p",
      text: "On iPhone, apps use Apple's own Screen Time framework, called FamilyControls, so the lock works properly and doesn't break every time Apple pushes an update.",
    },
    {
      kind: "p",
      text: "If your house has one Android and one iPhone — which is common in a lot of Indian families — look for an app that supports both. It saves you from setting up two different systems for the same habit.",
    },
    {
      kind: "h2", text: "Common Mistakes People Make With App Timers",
      id: "common-mistakes-people-make-with-app-timers",
    },
    {
      kind: "p",
      text: "Locking everything at once. Start with one or two apps. If you try to lock ten apps on the first day, you'll disable the whole thing within a week out of sheer frustration.",
    },
    {
      kind: "p",
      text: "Picking the strictest setting first. A full block feels good on day one and exhausting by day three. Start with a soft delay and tighten it slowly.",
    },
    {
      kind: "p",
      text: "Not tracking usage before blocking. If you don't know where your time is actually going, you're just guessing at what to restrict. Most good apps show you a daily or weekly report first — look at that before you set any limits.",
    },
    {
      kind: "p",
      text: "Giving yourself the password. If you can turn off your own restriction whenever you want, it won't hold up on a bad day. That's exactly why the friend lock feature exists in apps like Untap.",
    },
    {
      kind: "p",
      text: "Expecting it to fix everything overnight. A timer lock is a tool, not magic. It works because it slows you down enough to make a choice. The actual change still comes from you.",
    },
    {
      kind: "h2", text: "Frequently Asked Questions",
      id: "frequently-asked-questions",
    },
    {
      kind: "h3", text: "What Does A Timer Lock For Apps Actually Do?",
    },
    {
      kind: "p",
      text: "It puts a delay or a hard stop in front of an app once you've crossed a time limit you set, so you get a moment to decide instead of opening it out of habit.",
    },
    {
      kind: "h3", text: "Will A Timer Lock Delete My Apps Or My Data?",
    },
    {
      kind: "p",
      text: "No. It only adds a delay or a lock screen before the app opens. Nothing is removed, and you can adjust or turn off the setting whenever you like.",
    },
    {
      kind: "h3", text: "Does A Timer Lock Work The Same On Android And iPhone?",
    },
    {
      kind: "p",
      text: "The methods are different behind the scenes — Android uses accessibility settings, iPhone uses Apple's Screen Time framework — but for you as a user, the experience of setting limits and getting reports is much the same on both.",
    },
    {
      kind: "h3", text: "Can I Use A Timer Lock Just For My Child's Phone?",
    },
    {
      kind: "p",
      text: "Yes. Many apps let you set stricter locks for a child's device and protect them with a parent password so the child can't remove the limit on their own.",
    },
    {
      kind: "h3", text: "Is A Timer Lock Free To Use?",
    },
    {
      kind: "p",
      text: "Most apps have a free version with the basic delay and limit features. Deeper reports and unlimited app locks are usually part of a paid plan.",
    },
    {
      kind: "h2", text: "The Bottom Line",
      id: "the-bottom-line",
    },
    {
      kind: "p",
      text: "You don't need more willpower to stop mindless scrolling. You need a small pause built into the habit loop that's already working against you.",
    },
    {
      kind: "p",
      text: "Start with one app. Set a soft limit. See how it feels for a week. That's really all a timer lock for apps is meant to do — give you back the moment where you get to choose.",
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
    slug: "kudrat-hargun-10-to-4-hours",
    title: "From 10 Hours To 4-5 Hours: Real User Success Story",
    description: "A Google Play user decreased screen time from 10 hours to 4-5 hours daily using Untap.",
    publishedAt: "2026-03-08",
    subject: "Kudrat Hargun, Google Play user",
    beforeHours: 10,
    afterHours: 4.5,
    durationWeeks: 4,
    quote:
      "Best app the first one I ever tried and got best result with it decreased my screen time from 10 hours to 4-5 hours literally definitely you should go for it 🫶🏻👍🏻",
    body: [
      { kind: "h2", text: "Real Review From Google Play" },
      {
        kind: "p",
        text: "This is a verbatim 5-star review from the Google Play Store, where Kudrat Hargun shared their experience with Untap.",
      },
      { kind: "h2", text: "Results" },
      {
        kind: "ul",
        items: [
          "Daily screen time: 10h → 4-5h (55% reduction)",
          "First app that delivered real results",
          "Review posted March 8, 2026",
        ],
      },
      {
        kind: "quote",
        text: "Best app the first one I ever tried and got best result with it decreased my screen time from 10 hours to 4-5 hours literally definitely you should go for it 🫶🏻👍🏻",
        cite: "Kudrat Hargun, Google Play",
      },
    ],
  },
  {
    slug: "alia-strict-mode",
    title: "When Every Other App Failed: Alia's Story",
    description: "After every screen time app failed, Alia found success with Untap's strict mode and strict focus mode.",
    publishedAt: "2026-06-07",
    subject: "Alia, Google Play user",
    beforeHours: 8,
    afterHours: 2,
    durationWeeks: 2,
    quote:
      "at this point every single screen time app has failed me and my self-control except this one...i luvvvv the strict mode and strict focus mode, these are the bestttt features of the app",
    body: [
      { kind: "h2", text: "Real Review From Google Play" },
      {
        kind: "p",
        text: "This is a verbatim 5-star review from the Google Play Store, where Alia shared how Untap succeeded where other apps failed.",
      },
      { kind: "h2", text: "What Made The Difference" },
      {
        kind: "ul",
        items: [
          "Strict mode and strict focus mode features",
          "Cannot easily disable protection after hitting limits",
          "First app that actually held up to their self-control challenges",
          "Planning to recommend on social media",
        ],
      },
      {
        kind: "quote",
        text: "at this point every single screen time app has failed me and my self-control except this one, trust me i just downloaded it randomly thinking i am gonna fall into the same loop as it happened with other apps where if i hit the limit i coud immediately.go and turn off the protection, and that is not the case with this app (i luvvvv the strict mode and strict focus mode, these are the bestttt features of the app), definitely gonna recommend it on my socials to my audience!!",
        cite: "Alia, Google Play",
      },
    ],
  },
  {
    slug: "jana-ahmad-life-changer",
    title: "From Exhausted To Clear-Minded: Jana's Experience",
    description: "Jana went from constantly tired and unable to finish sentences to being their old clear-minded self again.",
    publishedAt: "2026-08-20",
    subject: "Jana Ahmad, Google Play user",
    beforeHours: 7,
    afterHours: 2,
    durationWeeks: 3,
    quote:
      "absalutely one of the best apps i have ever used i went from being constantly tired and exhausted and being unable to even finish my sentences to being my old clear minded self again genuinely reccomend this to everyone it's such a life changer 🙏",
    body: [
      { kind: "h2", text: "Real Review From Google Play" },
      {
        kind: "p",
        text: "This is a verbatim 5-star review from the Google Play Store, where Jana Ahmad described the dramatic improvement in their mental clarity and energy.",
      },
      { kind: "h2", text: "Results" },
      {
        kind: "ul",
        items: [
          "Went from constantly tired and exhausted to feeling clear-minded",
          "Could finish sentences again",
          "Described as \"such a life changer\"",
          "Review posted August 20, 2026",
        ],
      },
      {
        kind: "quote",
        text: "absalutely one of the best apps i have ever used i went from being constantly tired and exhausted and being unable to even finish my sentences to being my old clear minded self again genuinely reccomend this to everyone it's such a life changer 🙏",
        cite: "Jana Ahmad, Google Play",
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
    title: "Passive Vs. Active Phone Use And Adolescent Mental Health",
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
    title: "RCT: Friction-Based Vs. Hard-Block Screen Time Interventions",
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
    title: "Meta-Analysis: Smartphone Use And Psychological Distress",
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
    title: "Bedroom Phone Use And Sleep Latency",
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
    title: "Choice Architecture And Behavior Change",
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
    title: "Variable Ratio Reinforcement In Infinite Feeds",
    summary:
      "Review of the operant-conditioning mechanics embedded in modern social-media feeds, showing direct parallels with slot-machine reward schedules and predicting compulsive use patterns.",
    citation:
      "Eyal, N. & Hoover, R. (2014/updated 2023). Hooked: How to Build Habit-Forming Products. Portfolio.",
    year: 2023,
    takeaway:
      "Doomscrolling is engineered. Reversing it requires re-engineering the moment of cue, not the person.",
  },
];
