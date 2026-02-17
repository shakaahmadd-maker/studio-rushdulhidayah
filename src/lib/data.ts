import { GraduationCap, Clock, Users, Video, Globe, BookOpen, CheckCircle, Heart, LifeBuoy } from 'lucide-react';

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/read-quran", label: "Read Quran" },
  { href: "/tutors", label: "Tutors" },
  { href: "/certificates", label: "Certificates" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/contact", label: "Contact" },
];

export const features = [
  {
    icon: GraduationCap,
    title: 'Expert Tutors',
    description: 'Learn from qualified male and female tutors with years of experience in Quranic education.',
  },
  {
    icon: Clock,
    title: 'Flexible Schedule',
    description: 'Choose class timings that fit your schedule, available 24/7 for students worldwide.',
  },
  {
    icon: Users,
    title: 'One-on-One Classes',
    description: 'Get personalized attention and tailored lessons in our interactive one-on-one sessions.',
  },
  {
    icon: Globe,
    title: 'Global Community',
    description: 'Join thousands of students from the USA, UK, Canada, Australia, and more.',
  },
];

export const courses = [
  {
    id: 1,
    slug: 'noorani-qaida',
    title: 'Basic Noorani Qaida',
    shortDescription: 'The first step towards learning the Quran.',
    description: 'This foundational course is designed for absolute beginners, both kids and adults. Students will learn the basic Arabic alphabet, pronunciation (Makharij), and the essential rules of Tajweed, paving the way for fluent Quran reading.',
    targetAudience: 'Kids & Adults (Beginners)',
    duration: 'Self-paced',
    features: ['Arabic alphabet mastery', 'Correct pronunciation', 'Basic Tajweed rules', 'Live tutor guidance'],
    imageId: 'course-1',
  },
  {
    id: 2,
    slug: 'quran-reading',
    title: 'Quran Reading Course',
    shortDescription: 'Read the Quran with fluency and proper Tajweed.',
    description: 'This course is for students who have completed the Noorani Qaida and wish to improve their recitation. Our tutors focus on applying Tajweed rules, improving fluency, and building confidence in reading the Holy Quran.',
    targetAudience: 'Kids & Adults (Intermediate)',
    duration: 'Self-paced',
    features: ['Advanced Tajweed application', 'Recitation fluency practice', 'One-on-one sessions', 'Personalized feedback'],
    imageId: 'course-2',
  },
  {
    id: 3,
    slug: 'quran-memorization',
    title: 'Quran Memorization (Hifz)',
    shortDescription: 'Memorize the Holy Quran with a proven strategy.',
    description: 'Our Hifz course helps students memorize the Quran through a structured and personalized plan. Tutors provide techniques for memorization and a schedule for revision to ensure long-term retention.',
    targetAudience: 'Kids & Adults (All Levels)',
    duration: 'Personalized Plan',
    features: ['Structured memorization plan', 'Revision and retention techniques', 'Flexible scheduling', 'Certified Hifz tutors'],
    imageId: 'course-3',
  },
  {
    id: 4,
    slug: 'quran-translation',
    title: 'Quran Translation Course',
    shortDescription: 'Understand the meaning of the Quranic verses.',
    description: 'Dive deeper into the message of the Quran. This course provides a word-to-word translation and explanation (Tafseer) of the Quranic verses, helping students connect with the divine message on a spiritual level.',
    targetAudience: 'Adults (Intermediate/Advanced)',
    duration: 'Self-paced',
    features: ['Word-to-word translation', 'Basic Tafseer and context', 'One-on-one interactive sessions', 'Focus on meaning and interpretation'],
    imageId: 'course-4',
  },
  {
    id: 5,
    slug: 'islamic-studies',
    title: 'Islamic Studies for Kids',
    shortDescription: 'Basic Islamic teachings and faith education.',
    description: 'A fun and engaging course for children to learn the fundamentals of Islam, including basic beliefs, pillars of Islam, stories of the prophets, and Islamic manners (Akhlaq).',
    targetAudience: 'Kids',
    duration: 'Self-paced',
    features: ['Core Islamic beliefs', 'Pillars of Islam & Iman', 'Stories of the Prophets', 'Islamic manners and Duas'],
    imageId: 'course-5',
  },
  {
    id: 6,
    slug: 'asaan-namaz',
    title: 'Asaan Namaz Course',
    shortDescription: 'Learn the proper steps of Salah (prayer).',
    description: 'This course provides step-by-step guidance on how to perform Salah (Namaz) correctly according to the Sunnah, including ablution (Wudu), positions, and the meanings of what is recited.',
    targetAudience: 'Kids & New Muslims',
    duration: 'Self-paced',
    features: ['Method of Wudu and Salah', 'Memorization of short Surahs', 'Understanding prayer recitations', 'Practical guidance'],
    imageId: 'course-6',
  },
];

export const tutors = [
  {
    id: 1,
    name: 'Hafiz Ahmed Raza',
    specialty: 'Quran Memorization & Tajweed',
    bio: 'A certified Hafiz with over 10 years of teaching experience. Ahmed specializes in helping students of all ages memorize the Quran with perfect Tajweed.',
    country: 'Pakistan',
    gender: 'Male',
    imageId: 'tutor-1'
  },
  {
    id: 2,
    name: 'Aalima Fatima Zahra',
    specialty: 'Quran Translation & Tafseer',
    bio: 'An Aalima with a degree in Islamic Studies. Fatima is passionate about helping students understand the deeper meaning of the Quran.',
    country: 'Egypt',
    gender: 'Female',
    imageId: 'tutor-2'
  },
  {
    id: 3,
    name: 'Qari Omar Abdullah',
    specialty: 'Noorani Qaida & Basic Reading',
    bio: 'An expert in teaching beginners, Omar has a unique ability to make learning Arabic and Quran reading simple and engaging for children.',
    country: 'USA',
    gender: 'Male',
    imageId: 'tutor-3'
  },
  {
    id: 4,
    name: 'Ustadha Ayesha Khan',
    specialty: 'Islamic Studies for Kids & Women',
    bio: 'Ayesha has a gentle and friendly teaching style, making her a favorite among kids and female students for Islamic Studies and Quran reading.',
    country: 'UK',
    gender: 'Female',
    imageId: 'tutor-4'
  },
];

export const testimonials = [
  {
    quote: 'The one-on-one classes have been a blessing for my son. His reading has improved so much in just a few months. Highly recommended!',
    name: 'Aisha Rahman',
    location: 'Toronto, Canada',
    imageId: 'student-1'
  },
  {
    quote: 'As an adult learner, I was nervous to start. But my tutor, Sister Fatima, was so patient and encouraging. I can now understand the Quran directly.',
    name: 'John Williams',
    location: 'London, UK',
    imageId: 'student-2'
  },
  {
    quote: 'The flexible schedule is perfect for our busy family life. The teachers are excellent and my kids are always excited for their class.',
    name: 'Mariam Al-Farsi',
    location: 'Dubai, UAE',
    imageId: 'student-3'
  },
];

export const quranChapters = [
    { number: 1, name: 'Al-Fatihah', englishName: 'The Opening', verses: 7 },
    { number: 2, name: 'Al-Baqarah', englishName: 'The Cow', verses: 286 },
    { number: 3, name: 'Aal-E-Imran', englishName: 'The Family of Imran', verses: 200 },
    { number: 4, name: 'An-Nisa', englishName: "The Women", verses: 176 },
    { number: 5, name: 'Al-Maidah', englishName: "The Table Spread", verses: 120 },
    { number: 6, name: 'Al-Anam', englishName: "The Cattle", verses: 165 },
    { number: 7, name: 'Al-Araf', englishName: "The Heights", verses: 206 },
    { number: 8, name: 'Al-Anfal', englishName: "The Spoils of War", verses: 75 },
    { number: 9, name: 'At-Tawbah', englishName: "The Repentance", verses: 129 },
    { number: 10, name: 'Yunus', englishName: "Jonah", verses: 109 },
    { number: 11, name: 'Hud', englishName: "Hud", verses: 123 },
    { number: 12, name: 'Yusuf', englishName: "Joseph", verses: 111 },
    { number: 13, name: 'Ar-Rad', englishName: "The Thunder", verses: 43 },
    { number: 14, name: 'Ibrahim', englishName: "Abraham", verses: 52 },
    { number: 15, name: 'Al-Hijr', englishName: "The Rocky Tract", verses: 99 },
    { number: 16, name: 'An-Nahl', englishName: "The Bee", verses: 128 },
    { number: 17, name: 'Al-Isra', englishName: "The Night Journey", verses: 111 },
    { number: 18, name: 'Al-Kahf', englishName: "The Cave", verses: 110 },
    { number: 19, name: 'Maryam', englishName: "Mary", verses: 98 },
    { number: 20, name: 'Ta-Ha', englishName: "Ta-Ha", verses: 135 },
    // ... up to 114
];
