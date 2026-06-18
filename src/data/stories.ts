import aarav from "@/assets/story-aarav.jpg.asset.json";
import priya from "@/assets/story-priya.jpg.asset.json";
import nisha from "@/assets/story-nisha.jpg.asset.json";
import rajesh from "@/assets/story-rajesh.jpg.asset.json";

export type Story = {
  slug: string;
  name: string;
  role: string;
  title: string;
  summary: string;
  image: string;
  timeline: { phase: string; text: string }[];
  body: { heading: string; text: string }[];
  lessons: string[];
};

export const STORIES: Story[] = [
  {
    slug: "aarav-student-anxiety",
    name: "Aarav Sharma",
    role: "Engineering Student, Delhi",
    title: "Student Anxiety Recovery",
    summary: "AuraAlign helped Aarav overcome severe academic stress and regain confidence.",
    image: aarav.url,
    timeline: [
      { phase: "The Pressure", text: "Crushing expectations from family, college and competitive peers." },
      { phase: "First Signs", text: "Sleepless nights, racing thoughts, panic before every exam." },
      { phase: "Reaching Out", text: "Joined an AuraAlign student wellness circle on campus." },
      { phase: "Counselling", text: "Six months of guided sessions with a trained mental health professional." },
      { phase: "Today", text: "Mentoring junior students and leading a peer-support group." },
    ],
    body: [
      { heading: "Academic Pressure", text: "Aarav grew up in a family where engineering was the only acceptable path. By his second year, the weight of CGPA targets, internship deadlines and his parents' silent expectations had begun to feel unbearable. He stopped eating with friends and started skipping classes whenever he felt overwhelmed." },
      { heading: "Anxiety Symptoms", text: "He experienced racing heartbeats before lectures, frequent stomach pains and persistent insomnia. What he once dismissed as 'exam stress' had quietly become a chronic anxiety disorder that affected every part of his daily life." },
      { heading: "Seeking Support", text: "A friend forwarded him an AuraAlign Instagram post on student burnout. The honesty of the message convinced Aarav to attend an on-campus awareness session, where he met counsellors he could actually talk to without judgment." },
      { heading: "The Counselling Process", text: "Over six months, Aarav worked with an AuraAlign-affiliated therapist on cognitive techniques, breathing exercises and small, realistic study routines. The team also held two conversations with his parents to help them understand what he was experiencing." },
      { heading: "Recovery Journey", text: "He learned to separate his self-worth from his marks. Sleep returned. Panic attacks reduced from weekly episodes to almost none. He began journaling and reconnected with his old love for sketching." },
      { heading: "Today", text: "Aarav has completed his degree and now volunteers with AuraAlign's college outreach team, helping other students recognise early signs of anxiety and ask for help without shame." },
    ],
    lessons: [
      "Asking for help is a strength, not a weakness.",
      "Mental health support works best when it is consistent.",
      "Family conversations are part of the healing process.",
    ],
  },
  {
    slug: "priya-burnout-recovery",
    name: "Priya Mehta",
    role: "Software Engineer, Bengaluru",
    title: "Working Professional Burnout Recovery",
    summary: "After experiencing burnout, Priya learned healthy coping strategies through AuraAlign.",
    image: priya.url,
    timeline: [
      { phase: "The Climb", text: "Three promotions in four years, working 70-hour weeks." },
      { phase: "Breakdown", text: "Lost interest in everything she once loved." },
      { phase: "Workplace Workshop", text: "Attended AuraAlign's corporate wellness programme." },
      { phase: "Coaching", text: "Weekly sessions to rebuild boundaries and rest routines." },
      { phase: "Today", text: "Leads her team's mental wellness initiatives." },
    ],
    body: [
      { heading: "The Pressure of Performing", text: "Priya was praised for being 'the reliable one'. She rarely said no to extra work, took calls late into the night, and considered weekends a luxury she had not earned." },
      { heading: "Burnout Symptoms", text: "She began missing deadlines for the first time in her career. Mornings felt impossible. Even small decisions left her drained. She lost interest in cooking, music and meeting friends." },
      { heading: "Finding AuraAlign", text: "Her company hosted an AuraAlign workplace wellness workshop. The facilitator's description of burnout felt like a mirror, and Priya signed up for the follow-up coaching programme that same day." },
      { heading: "Healing Through Boundaries", text: "Through guided sessions she learned to protect non-working hours, schedule rest as seriously as meetings, and ask for help from colleagues. A mental health professional helped her process years of suppressed exhaustion." },
      { heading: "Recovery", text: "Within four months, Priya's sleep, appetite and curiosity returned. She rediscovered painting and began going for morning walks with her sister." },
      { heading: "Today", text: "Priya now anchors her company's internal mental wellness committee and partners with AuraAlign on annual workshops for new joiners." },
    ],
    lessons: [
      "Rest is part of productivity, not the opposite of it.",
      "Burnout is a signal, not a personal failure.",
      "Workplaces heal faster when leaders model boundaries.",
    ],
  },
  {
    slug: "nisha-womens-support",
    name: "Nisha Verma",
    role: "Homemaker & Community Volunteer, Pune",
    title: "Women's Mental Health Support",
    summary: "Nisha found emotional support and confidence through AuraAlign programs.",
    image: nisha.url,
    timeline: [
      { phase: "Isolation", text: "Years of silent emotional exhaustion at home." },
      { phase: "First Circle", text: "Joined an AuraAlign women's support group in her neighbourhood." },
      { phase: "Therapy", text: "Began structured counselling for anxiety and self-worth." },
      { phase: "Empowerment", text: "Started a small tailoring business with two friends." },
      { phase: "Today", text: "Leads weekend awareness sessions for women in nearby colonies." },
    ],
    body: [
      { heading: "A Quiet Struggle", text: "Nisha had spent two decades putting her family first. The pressure of being the emotional anchor for everyone left her feeling invisible. She rarely spoke about how tired she was, even to herself." },
      { heading: "Stepping Out", text: "A neighbour invited her to an AuraAlign women's circle held in a community hall every Saturday. For the first time, she heard other women describing exactly what she had been feeling for years." },
      { heading: "Counselling and Healing", text: "She began one-on-one sessions with a female counsellor. Slowly, she learned to name her emotions, set small boundaries at home, and rebuild a sense of identity beyond her roles." },
      { heading: "Confidence and Community", text: "With encouragement from the group, Nisha and two friends started a small tailoring venture. The earnings mattered, but the sisterhood mattered more." },
      { heading: "Today", text: "Nisha now hosts AuraAlign's monthly 'Bol Do' women's circle, where she gently encourages others to share what they have carried alone for too long." },
    ],
    lessons: [
      "Women's mental health needs dedicated, safe spaces.",
      "Community is a powerful form of therapy.",
      "Healing creates ripple effects across families.",
    ],
  },
  {
    slug: "rajesh-teacher-wellness",
    name: "Rajesh Kulkarni",
    role: "Senior School Teacher, Nashik",
    title: "Teacher Wellness Journey",
    summary: "AuraAlign helped Rajesh manage stress and become a stronger educator.",
    image: rajesh.url,
    timeline: [
      { phase: "Overload", text: "Forty student files, two boards and constant parent calls." },
      { phase: "Quiet Crisis", text: "Irritability, sleeplessness, lost patience with students." },
      { phase: "Training", text: "Enrolled in AuraAlign's Teacher Wellness Program." },
      { phase: "Practice", text: "Daily five-minute classroom mindfulness routine." },
      { phase: "Today", text: "Mentor for new teachers across his district." },
    ],
    body: [
      { heading: "The Weight of the Classroom", text: "After 18 years in teaching, Rajesh found himself dreading Monday mornings. Administrative load had grown, and he was carrying the emotional weight of students whose own struggles often surfaced in the classroom." },
      { heading: "Recognising the Signs", text: "He had become short-tempered at home, slept poorly and felt guilty for losing patience with students he genuinely cared about. He knew something had to change." },
      { heading: "Joining the Program", text: "Through his school's tie-up with AuraAlign, Rajesh joined a six-week Teacher Wellness Program covering stress management, classroom emotional safety and recognising student distress." },
      { heading: "New Tools", text: "He introduced a one-minute breathing exercise at the start of every class, started weekly check-ins with a mentor counsellor, and learned to leave school worries at the school gate." },
      { heading: "A Stronger Educator", text: "His students reported feeling calmer in his class. His own family noticed his energy returning. Rajesh now feels equipped not just to teach a syllabus, but to hold a safer room for every child in it." },
      { heading: "Today", text: "Rajesh trains new teachers in his district on classroom wellness and partners with AuraAlign on annual educator retreats." },
    ],
    lessons: [
      "Teachers carry emotional labour that needs care too.",
      "Small daily rituals create big classroom shifts.",
      "When teachers heal, students thrive.",
    ],
  },
];

export const STORY_BY_SLUG = Object.fromEntries(STORIES.map((s) => [s.slug, s]));