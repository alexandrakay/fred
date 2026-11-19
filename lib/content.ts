export const credentials = [
  { big: '2008', small: "Women's Ohio State Amateur Champion" },
  { big: 'Division I', small: 'Captain, Elon University' },
  { big: '8 years', small: 'Professional competition' },
  { big: 'Sean Foley', small: 'Continued training', italic: true },
];

export const principles = [
  { title: 'Individualized', body: 'Cues, drills, and explanations adapted to how you move and learn.' },
  { title: 'Repeatable', body: 'Mechanics that hold up on the course, not only in the lesson.' },
  { title: 'Sustainable', body: 'Efficient movement that respects your body for years of golf.' },
  { title: 'Confident', body: 'Self-belief that grows alongside technique.' },
];

export const programs = [
  { id: 'private', name: 'Private Instruction', blurb: 'One-on-one, built around your goals', who: 'Golfers of any age or level who want one-on-one attention.', work: 'Swing mechanics, ball striking, short game, and course management.', desc: 'One-on-one coaching shaped entirely around you: how you move, how you learn, and what you want from the game.' },
  { id: 'beginner', name: 'Beginner Development', blurb: 'Strong foundations, no intimidation', who: 'Children, teens, and adults new to golf.', work: 'Grip, setup, fundamentals, and the confidence to get on the course.', desc: 'A welcoming start with clear explanations and strong foundations, plus a plan for what comes after the first lessons.' },
  { id: 'juniors', name: 'Competitive Juniors', blurb: 'School teams and tournaments', who: 'Junior athletes preparing for school golf and tournaments.', work: 'Technique, consistency under pressure, course management, and long-term development.', desc: 'Structured player development for serious junior golfers and their families, from high school team tryouts to tournament play.' },
  { id: 'adults', name: 'Competitive Adults', blurb: 'Efficiency, consistency, performance', who: 'Experienced golfers in tournaments and club competitions.', work: 'Swing efficiency, repeatability, dispersion, and competitive preparation.', desc: 'Advanced instruction for adult competitors who want reliable mechanics that hold up when it counts.' },
  { id: 'women', name: "Women's Golf", italic: true, blurb: 'Clinics for every skill level', who: 'Women of every age and skill level.', work: 'Skills, confidence, and comfort in social, competitive, and corporate golf.', desc: 'Private lessons and group clinics in a supportive setting, with a community of women who play.' },
  { id: 'group', name: 'Group Instruction', blurb: 'Friends, family, and teammates', who: 'Friends, families, teams, and workplaces.', work: 'Fundamentals and shared practice in a small-group format.', desc: 'Learn alongside people you know, with instruction still adapted to each person in the group.' },
];

// SAMPLE events — replace with Frederique's schedule
export const clinics = [
  { d: '06', m: 'DEC', title: 'Short Game Social', time: 'Sat · 9:00 AM', level: 'All levels', spots: '4 spots left' },
  { d: '10', m: 'JAN', title: 'Nine & Network', time: 'Sat · 4:00 PM', level: 'Beginner', spots: '8 spots left' },
  { d: '24', m: 'JAN', title: 'First Swings for Women', time: 'Sat · 9:00 AM', level: 'Beginner', spots: '6 spots left' },
  { d: '07', m: 'FEB', title: 'Putting Lab & Coffee', time: 'Sat · 9:00 AM', level: 'All levels', spots: 'Waitlist' },
];

export const stories = [
  { cat: 'Competitive', title: "Zooey earns a spot on Viera High's top team", status: 'Draft · pending approval', body: [
    "Zooey came to Frederique as a junior with real potential and a clear goal: make the top team at Viera High School.",
    "Their work together focused on repeatable mechanics, preparation for tryout conditions, and the confidence to trust her swing under pressure.",
    "Zooey earned her place on Viera High's top golf team. Full story, quotes, and details to be confirmed with Zooey and her family.",
  ] },
  { cat: 'Adapted instruction', title: 'Golf after an MS diagnosis', status: 'Draft · pending approval', body: [
    "Living with multiple sclerosis, this golfer struggled with conventional cues. Some movements other coaches described simply could not be felt.",
    "Frederique kept exploring alternatives: different words, different drills, different ways to sense the same move, until one fit.",
    "The result was a swing built around their body, renewed confidence, and a golfer who kept playing. First-person version to come, with permission.",
  ] },
  { cat: "Women's clinics", title: 'Clinic friendships story', status: 'Placeholder', body: ["A story about women who met at a clinic and now play together. Coming once a participant approves it."] },
  { cat: 'Technical', title: 'Tighter dispersion, documented', status: 'Placeholder', body: ["A before-and-after look at shot dispersion, with real numbers from lessons. Coming once data and permission are confirmed."] },
  { cat: 'Competitive', title: 'Adult tournament player story', status: 'Placeholder', body: ["An adult competitor's path to more reliable mechanics in tournament play. Coming soon."] },
  { cat: 'Technical', title: 'More consistent contact', status: 'Placeholder', body: ["How a change in sequencing led to more consistent contact. Coming soon."] },
];

// SAMPLE topics
export const insights = [
  { cat: 'Swing', title: 'Sequencing: let the body lead the club', meta: 'VIDEO · 4 MIN' },
  { cat: 'Short game', title: 'One setup change for crisper chips', meta: 'VIDEO · 3 MIN' },
  { cat: 'Practice', title: 'A clubface awareness drill for home', meta: 'DRILL · 2 MIN' },
  { cat: 'Course mgmt', title: 'Playing to your miss, not away from it', meta: 'ARTICLE · 5 MIN' },
  { cat: 'Competition', title: 'Preparing for your first high school tournament', meta: 'ARTICLE · 6 MIN' },
  { cat: "Women's golf", title: 'Your first corporate golf outing', meta: 'ARTICLE · 4 MIN' },
];

export const msQuote = "With MS, I couldn't feel the moves other coaches described. I nearly quit. Frederique found another way in.";
export const manifesto = "Great golf instruction isn't about making every golfer swing the same way. It's about understanding the golfer and helping them build a better game.";
export const lessonTypes = ['Private Instruction', 'Beginner', 'Competitive Junior', 'Competitive Adult', "Women's Clinics", 'Group'];

export const nav = [
  { label: 'About', href: '/about' },
  { label: 'Coaching', href: '/coaching' },
  { label: "Women's Clinics", href: '/womens-clinics' },
  { label: 'Students', href: '/students' },
  { label: 'Insights', href: '/insights' },
];
