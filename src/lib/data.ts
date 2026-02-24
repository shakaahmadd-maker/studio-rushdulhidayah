import { GraduationCap, Users, Monitor, ThumbsUp } from 'lucide-react';

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/tutors", label: "Tutors" },
  { href: "/courses", label: "Courses" },
  { href: "/read-quran", label: "Read Quran" },
  { href: "/register", label: "Register" },
  { href: "/certificates", label: "Certificate" },
  { href: "/faq", label: "FAQ" },
];

export const newCourses = [
    { 
        id: 1,
        slug: 'noorani-qaida',
        title: "Basic Noorani Qaida Course", 
        imageId: "new-course-1",
        shortDescription: "Suitable for beginners of all ages, both male and female students can join this course. It is the start of your beautiful learning journey." 
    },
    { 
        id: 2,
        slug: 'quran-reading',
        title: "Quran Reading Course", 
        imageId: "new-course-2",
        shortDescription: "This course is designed for both adults and children, to learn and improve your Quran recitation with Tajweed." 
    },
    { 
        id: 3,
        slug: 'quran-memorization',
        title: "Quran Memorization Course", 
        imageId: "new-course-3",
        shortDescription: "Our expert Quran teachers will help you memorize the surah and verses of this Holy book in the most effective manner." 
    },
    { 
        id: 4,
        slug: 'quran-translation',
        title: "Quran Translation Course", 
        imageId: "new-course-4",
        shortDescription: "We help students learn and understand the teachings of the Quran through verse by verse translation." 
    },
    { 
        id: 5,
        slug: 'islamic-studies-for-kids',
        title: "Islamic Studies For Kids", 
        imageId: "new-course-5",
        shortDescription: "Designed for kids of all ages, our course helps your children's hearts shine with the brightness of Islamic teachings." 
    },
    { 
        id: 6,
        slug: 'asaan-namaz-course',
        title: "Asaan Namaz Course", 
        imageId: "new-course-6",
        shortDescription: "We enable you to learn the right way of offering Salah through specialized online step-by-step guidance." 
    },
    { 
        id: 7,
        slug: '40-hadees-course',
        title: "40 Hadees Course", 
        imageId: "new-course-7",
        shortDescription: "Learn 40 of the most powerful Hadith and use them to inculcate a true Muslim character in yourself." 
    },
    { 
        id: 8,
        slug: '40-basic-duain-course',
        title: "40 Basic Dua'in Course", 
        imageId: "new-course-8",
        shortDescription: "Learn the best duas and small prayers for your daily routine and enrich your every act with Allah's blessings." 
    },
    { 
        id: 9,
        slug: 'additional-courses',
        title: "Additional Courses", 
        imageId: "new-course-9",
        shortDescription: "We also offer customized courses to suit your unique Quran learning needs. Get in touch with us for a detailed overview." 
    }
];

export const courses = [
    { 
        id: 1,
        slug: 'noorani-qaida',
        title: "Basic Noorani Qaida Course", 
        imageId: "new-course-1",
        shortDescription: "Suitable for beginners of all ages, both male and female students can join this course. It is the start of your beautiful learning journey.",
        description: "This foundational course is designed for absolute beginners, both kids and adults. Students will learn the basic Arabic alphabet, pronunciation (Makharij), and the essential rules of Tajweed, paving the way for fluent Quran reading.",
        targetAudience: 'All ages',
        duration: 'Self-paced',
        features: ['Arabic Alphabet', 'Pronunciation', 'Basic Tajweed'],
    },
    { 
        id: 2,
        slug: 'quran-reading',
        title: "Quran Reading Course", 
        imageId: "new-course-2",
        shortDescription: "This course is designed for both adults and children, to learn and improve your Quran recitation with Tajweed.",
        description: "This course is for students who have completed the Noorani Qaida and wish to improve their recitation. Our tutors focus on applying Tajweed rules, improving fluency, and building confidence in reading the Holy Quran.",
        targetAudience: 'Adults & Children',
        duration: 'Self-paced',
        features: ['Recitation Practice', 'Tajweed Rules', 'Fluency Improvement'],
    },
    { 
        id: 3,
        slug: 'quran-memorization',
        title: "Quran Memorization Course", 
        imageId: "new-course-3",
        shortDescription: "Our expert Quran teachers will help you memorize the surah and verses of this Holy book in the most effective manner.",
        description: "Our Hifz course helps students memorize the Quran through a structured and personalized plan. Tutors provide techniques for memorization and a schedule for revision to ensure long-term retention.",
        targetAudience: 'All levels',
        duration: 'Personalized',
        features: ['Memorization Techniques', 'Revision schedule', 'Expert Tutors'],
    },
    { 
        id: 4,
        slug: 'quran-translation',
        title: "Quran Translation Course", 
        imageId: "new-course-4",
        shortDescription: "We help students learn and understand the teachings of the Quran through verse by verse translation.",
        description: "Dive deeper into the message of the Quran. This course provides a word-to-word translation and explanation (Tafseer) of the Quranic verses, helping students connect with the divine message on a spiritual level.",
        targetAudience: 'Intermediate',
        duration: 'Self-paced',
        features: ['Verse-by-verse translation', 'Tafsir', 'Deeper understanding'],
    },
    { 
        id: 5,
        slug: 'islamic-studies-for-kids',
        title: "Islamic Studies For Kids", 
        imageId: "new-course-5",
        shortDescription: "Designed for kids of all ages, our course helps your children's hearts shine with the brightness of Islamic teachings.",
        description: "A fun and engaging course for children to learn the fundamentals of Islam, including basic beliefs, pillars of Islam, stories of the prophets, and Islamic manners (Akhlaq).",
        targetAudience: 'Kids',
        duration: 'Self-paced',
        features: ['Pillars of Islam', 'Stories of Prophets', 'Islamic Manners'],
    },
    { 
        id: 6,
        slug: 'asaan-namaz-course',
        title: "Asaan Namaz Course", 
        imageId: "new-course-6",
        shortDescription: "We enable you to learn the right way of offering Salah through specialized online step-by-step guidance.",
        description: "This course provides step-by-step guidance on how to perform Salah (Namaz) correctly according to the Sunnah, including ablution (Wudu), positions, and the meanings of what is recited.",
        targetAudience: 'Beginners',
        duration: 'Self-paced',
        features: ['Wudu Steps', 'Salah Positions', 'Recitation meanings'],
    },
    { 
        id: 7,
        slug: '40-hadees-course',
        title: "40 Hadees Course", 
        imageId: "new-course-7",
        shortDescription: "Learn 40 of the most powerful Hadith and use them to inculcate a true Muslim character in yourself.",
        description: "This course covers the famous collection of Imam Nawawi's 40 Hadith, explaining their meanings and practical applications in daily life.",
        targetAudience: 'All levels',
        duration: 'Self-paced',
        features: ['Imam Nawawi\'s 40 Hadith', 'Practical Application', 'Character Building'],
    },
    { 
        id: 8,
        slug: '40-basic-duain-course',
        title: "40 Basic Dua'in Course", 
        imageId: "new-course-8",
        shortDescription: "Learn the best duas and small prayers for your daily routine and enrich your every act with Allah's blessings.",
        description: "Memorize and understand the meanings of essential daily supplications (Duas) for various occasions, from waking up to going to sleep.",
        targetAudience: 'All levels',
        duration: 'Self-paced',
        features: ['Daily Duas', 'Prayers for occasions', 'Memorization'],
    },
    { 
        id: 9,
        slug: 'additional-courses',
        title: "Additional Courses", 
        imageId: "new-course-9",
        shortDescription: "We also offer customized courses to suit your unique Quran learning needs. Get in touch with us for a detailed overview.",
        description: "Have a specific learning goal? We can create a customized curriculum tailored to your needs, whether it's for a specific Surah, advanced Tajweed, or Islamic history.",
        targetAudience: 'Custom',
        duration: 'Personalized',
        features: ['Custom Curriculum', 'Flexible Timing', 'Specialized Topics'],
    }
];

export const features = [
    {
        icon: GraduationCap,
        title: "Online Quran Classes",
        description: "Designed several different online courses to help kids and adults learn to read, memorize and understand."
    },
    {
        icon: Users,
        title: "Tailor-Made Courses",
        description: "Realizing the uniqueness of your individual needs, we cater to small groups and families requiring specific learning."
    },
    {
        icon: Monitor,
        title: "Remote Learning",
        description: "With our online platform, you can opt for a variety of Quran classes no matter where you live in the world."
    },
    {
        icon: ThumbsUp,
        title: "Flexible and Convenient",
        description: "Our classes are flexible and convenient, allowing you to learn from home according to your preferred schedule."
    }
];

export const classTypes = [
    {
        title: "Noorani Qaida Classes",
        content: "Master the foundations of Quranic reading with our specialized instructors. This session covers phonetics, pronunciation, and basic grammar rules required for fluent recitation."
    },
    {
        title: "Convenient Quran Classes",
        content: "Learn at your own pace from anywhere in the world. Our flexible scheduling allows you to fit Quranic education into your busy life."
    },
    {
        title: "Online Quran Classes",
        content: "Interactive, one-on-one sessions with our qualified tutors using state-of-the-art video conferencing tools."
    },
    {
        title: "Quran Classes Via Skype & Zoom",
        content: "We use popular and easy-to-use platforms like Skype and Zoom for our live classes, ensuring a smooth learning experience."
    },
    {
        title: "Home Based Quran Classes",
        content: "Enjoy the comfort and convenience of learning from your own home. No need to travel, saving you time and effort."
    },
    {
        title: "Islamic Studies For Kids Classes",
        content: "Engaging and fun classes designed to teach children the fundamentals of Islam in an enjoyable way."
    },
    {
        title: "Self-paced Quran Classes",
        content: "Progress at a speed that suits you. Our tutors adapt their teaching methods to your individual learning style."
    },
    {
        title: "Benefits Of Online Quran Classes",
        content: "Access to the best tutors globally, flexible scheduling, personalized attention, and a safe learning environment."
    }
];

export const sidebarItems = [
    "Leading Online Quran Academy",
    "Effective Quran Teaching Methodology",
    "Trustworthy and Reliable Quran Academy",
    "Internationally Acclaimed Quran Academy"
];

export const tutors = [
  {
    id: 1,
    name: 'Hafiz Anas Yousuf',
    specialty: 'Admin & General Tutoring',
    bio: 'Admin with Hifz & Dars-e-Nizami qualifications and 5 years of experience. Offers a beginner-friendly approach. Speaks English and Urdu.',
    gender: 'Male',
    imageId: 'tutor-1'
  },
  {
    id: 2,
    name: 'Qari Umair',
    specialty: 'Norani Qaida & Memorization',
    bio: 'Hifz & Dars-e-Nizami qualified with 3 years of experience. Provides personalized teaching. Speaks English and Urdu.',
    gender: 'Male',
    imageId: 'tutor-1'
  },
  {
    id: 3,
    name: 'Hafiz Zaid Ahmed',
    specialty: 'Quran Memorization & Reading',
    bio: 'DPT, Hifz qualified with 2 years of experience. Uses an interactive and beginner-friendly approach. Speaks English and Urdu.',
    gender: 'Male',
    imageId: 'tutor-1'
  },
  {
    id: 4,
    name: 'Asad Ullah Mubashir',
    specialty: 'Norani Qaida & Quran Reading',
    bio: 'Hifz qualified with 5 years of experience. Employs an interactive & personalized style. Speaks English, Urdu, and Punjabi.',
    gender: 'Male',
    imageId: 'tutor-1'
  },
  {
    id: 5,
    name: 'Hafiz Musab',
    specialty: 'Quranic & Islamic Studies',
    bio: 'Hifz & Islamic Studies qualified with 1 year of experience. Beginner-friendly teaching approach. Speaks Urdu.',
    gender: 'Male',
    imageId: 'tutor-1'
  },
  {
    id: 6,
    name: 'Umair Imtyaz',
    specialty: 'Norani Qaida & Quran Memorization',
    bio: 'Hifz & Dars-e-Nizami qualified with 4 years of online teaching experience. Beginner-friendly approach. Speaks English and Urdu.',
    gender: 'Male',
    imageId: 'tutor-1'
  },
  {
    id: 7,
    name: 'Hafiz Muhammad Ibrahim',
    specialty: 'Quran Translation & Memorization',
    bio: 'Double M.A in Islamiat, Hifz & Dars-e-Nizami. 15 years of experience with a beginner-friendly style. Speaks English, Urdu, and Arabic.',
    gender: 'Male',
    imageId: 'tutor-1'
  },
  {
    id: 8,
    name: 'Mrs.Hafiz Muhammad Ibrahim',
    specialty: 'Quran Translation & Reading',
    bio: 'B.A in Islamiat & Dars-e-Nizami with 10 years of experience. Beginner-friendly & interactive style. Speaks English, Urdu, and Arabic.',
    gender: 'Female',
    imageId: 'tutor-2'
  },
  {
    id: 9,
    name: 'Hafiz Abdul Qudoos',
    specialty: 'Quran Reading & Islamic Studies',
    bio: 'B.A in Islamiat & Hifz with 10 years of experience. Interactive and personalized methodology. Speaks English, Urdu, and Arabic.',
    gender: 'Male',
    imageId: 'tutor-1'
  },
  {
    id: 10,
    name: 'Fatima Ahmed',
    specialty: 'Noorani Qaida & Tajweed',
    bio: 'Expert in teaching children and beginners with a patient and engaging style. Hafiza with 5 years experience. Speaks English and Urdu.',
    gender: 'Female',
    imageId: 'tutor-2'
  },
  {
    id: 11,
    name: 'Aisha Khan',
    specialty: 'Islamic Studies for Kids',
    bio: 'Makes learning Islam fun and interactive for young minds. Holds a degree in Islamic Studies. 4 years experience. Speaks English and Arabic.',
    gender: 'Female',
    imageId: 'tutor-2'
  },
  {
    id: 12,
    name: 'Zainab Ali',
    specialty: 'Quran Reading & Translation',
    bio: 'Passionate about helping students understand the Quran. Dars-e-Nizami graduate with 6 years experience. Speaks English, Urdu, and Arabic.',
    gender: 'Female',
    imageId: 'tutor-2'
  }
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
