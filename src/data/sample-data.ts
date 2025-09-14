export const sampleScheduledTweets = [
  {
    id: "1",
    content: "Just built a simplified MVP of ContentPort! Check it out! 🚀",
    scheduledAt: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
  },
  {
    id: "2",
    content: "What are your favorite tools for building MVPs quickly? I'm a big fan of Next.js and Tailwind CSS.",
    scheduledAt: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000),
  },
];

export const samplePostedTweets = [
  {
    id: "3",
    content: "Hello world! This is my first tweet from my new ContentPort MVP.",
    postedAt: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
  },
];