import { PostedTweetList } from "@/components/posted-tweet-list";

export default function PostedPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Posted Tweets</h1>
      <PostedTweetList />
    </div>
  );
}