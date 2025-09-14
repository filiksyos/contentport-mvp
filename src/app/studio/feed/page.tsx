import { TweetEditor } from "@/components/tweet-editor";
import { TweetList } from "@/components/tweet-list";

export default function FeedPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h1 className="text-2xl font-bold mb-4">Compose Tweet</h1>
        <TweetEditor />
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-4">Scheduled Tweets</h1>
        <TweetList />
      </div>
    </div>
  );
}