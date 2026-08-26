/**
 * EDEN CLIENT CONFIGURATION
 * Duplicate this file for each client. Client content stays here; layout and interactions stay reusable.
 */
export const weddingConfig = {
  meta: {
    templateName: "Eden Botanical Romance",
    slug: "olivia-and-ethan",
    language: "en",
    passwordProtected: false,
  },

  couple: {
    brideName: "Zoya Khan",
    brideShortName: "Zoya",
    brideParents: "Daughter of Rashid Khan & Farida Begum",
    groomName: "Shaikh Zaid",
    groomShortName: "Zaid",
    groomParents: "Son of Shaikh Tariq & Shabana Begum",
    monogram: "O · E",
  },

  copy: {
    heroKicker: "Together with their families",
    heroInvitationLineOne: "",
    heroInvitationLineTwo: "joyfully invite you to celebrate the beginning of their forever",
    heroClosingLine: "A garden ceremony filled with love, laughter, and the people who mean the most.",
    welcomeKicker: "Rooted in love",
    welcomeTitle: "Our story is blooming",
    welcomeBody:
      "Olivia Grace and Ethan James would be delighted to have you beside them as they exchange vows and begin their next beautiful chapter. Your presence will make this day even more meaningful.",
    dateIntro: "A beautiful day is waiting",
    datePrompt: "Scratch to reveal",
    dateRevealed: "Save our date",
    galleryKicker: "Collected moments",
    galleryTitle: "A glimpse of our journey",
    countdownKicker: "Until we say I do",
    countdownTitle: "Counting down to forever",
    timelineKicker: "The wedding day",
    timelineTitle: "A celebration in bloom",
    venueKicker: "Meet us in the garden",
    venueTitle: "Where we will celebrate",
    dressCodeKicker: "Dressed for the garden",
    dressCodeTitle: "Garden formal",
    preWeddingKicker: "The celebrations begin",
    preWeddingTitle: "Before the vows",
    giftsTitle: "Your presence is our present",
    giftsBody:
      "Your love, blessings, and presence are the greatest gifts we could ever ask for. We feel incredibly lucky to celebrate this beautiful moment with you.",
    rsvpTitle: "Will you celebrate with us?",
    rsvpSubtitle: "Kindly reply by May 1, 2027.",
    closingKicker: "And so the adventure begins",
    closingTitle: "We cannot wait to celebrate with you",
    closingBody:
      "Thank you for being part of our story. We look forward to a day filled with happy tears, warm embraces, and memories we will treasure forever.",
  },

  wedding: {
    isoDateTime: "2027-05-16T16:30:00+05:30",
    timezone: "Asia/Kolkata",
    displayDate: "May 16, 2027",
    day: "Sunday",
    time: "4:30 PM",
    endIsoDateTime: "2027-05-16T22:00:00+05:30",
  },

  media: {
    introVideo: "./assets/video/eden-intro-placeholder.mp4",
    introPoster: "./assets/video/eden-intro-poster.webp",
    backgroundMusic: "./bismillah.mp3",
    gallery: [
      { src: "./assets/gallery/gallery-01.jpg", alt: "Gallery placeholder one" },
      { src: "./assets/gallery/gallery-02.jpg", alt: "Gallery placeholder two" },
      { src: "./assets/gallery/gallery-03.jpg", alt: "Gallery placeholder three" },
      { src: "./assets/gallery/gallery-04.jpg", alt: "Gallery placeholder four" },
      { src: "./assets/gallery/gallery-05.jpg", alt: "Gallery placeholder five" },
    ],
  },

  experience: {
    introEnabled: true,
    namesAppearAtSeconds: 6,
    unlockScrollOnTap: true,
    musicButtonVisibleFromStart: true,
  },

  galleryOptions: {
    autoplay: true,
    intervalMs: 4200,
    pauseAfterInteractionMs: 5000,
  },

  venue: {
    name: "Noor Invites",
    address: "Mahal, Nagpur",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Mahal+Nagpur",
    note: "Please arrive by 4:00 PM so everyone is seated before the ceremony begins.",
  },

  dressCode: {
    title: "Garden Formal",
    description:
      "Light suits, flowing dresses, soft florals, and elegant garden-inspired colours are warmly encouraged.",
    palette: ["#7d927a", "#d7aaa7", "#f2dfd0", "#c9b17e", "#657062"],
  },

  preWeddingEvents: [
    {
      title: "Welcome Garden Supper",
      date: "May 15, 2027",
      time: "7:00 PM",
      venue: "The Orangery",
      note: "A relaxed evening of candlelight, conversation, and dinner beneath the trees.",
    },
    {
      title: "Morning Brunch",
      date: "May 16, 2027",
      time: "10:30 AM",
      venue: "The Courtyard Café",
      note: "A light gathering with family and close friends before the ceremony.",
    },
  ],

  program: [
    { time: "4:00 PM", title: "Guest arrival", detail: "Welcome drinks in the garden" },
    { time: "4:30 PM", title: "Wedding ceremony", detail: "The exchange of vows" },
    { time: "5:15 PM", title: "Garden photographs", detail: "Champagne, canapés, and portraits" },
    { time: "6:30 PM", title: "Dinner reception", detail: "A candlelit celebration" },
    { time: "8:00 PM", title: "Dancing", detail: "Music beneath the stars" },
  ],

  rsvp: {
    deadlineIso: "2027-05-01T23:59:59+05:30",
    endpoint: "",
    previewStorageKey: "eden-template-rsvps",
    mealOptions: ["Vegetarian", "Non-vegetarian", "Vegan", "No preference"],
  },

  sections: {
    welcome: true,
    scratchReveal: true,
    gallery: true,
    countdown: true,
    timeline: true,
    venue: true,
    dressCode: true,
    preWeddingEvents: true,
    gifts: true,
    rsvp: false,
    closing: true,
  },

  theme: {
    name: "Eden Garden Romance",
    colors: {
      sage: "#7d927a",
      sageDeep: "#435a48",
      cream: "#fbf7ef",
      paper: "#f3eadf",
      blush: "#d7aaa7",
      rose: "#b7777f",
      champagne: "#c9b17e",
      ink: "#344138",
      muted: "#737b72",
    },
    fonts: {
      names: '"Parisienne", "Brush Script MT", cursive',
      display: '"Cormorant Garamond", Georgia, serif',
      body: '"Manrope", Arial, sans-serif',
    },
    revealEffect: "soft-petals",
  },
};
