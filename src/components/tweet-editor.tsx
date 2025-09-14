"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useLocalStorage } from "@/hooks/use-local-storage";

export function TweetEditor() {
  const [tweet, setTweet] = useState("");
  const [scheduledTweets, setScheduledTweets] = useLocalStorage<any[]>("scheduled-tweets", []);

  const handleScheduleTweet = () => {
    if (tweet.trim()) {
      const newTweet = {
        id: new Date().toISOString(),
        content: tweet,
        scheduledAt: new Date(),
      };
      setScheduledTweets([...scheduledTweets, newTweet]);
      setTweet("");
    }
  };

  return (
    <div className="space-y-4">
      <Textarea
        value={tweet}
        onChange={(e) => setTweet(e.target.value)}
        placeholder="What's happening?"
        className="min-h-[120px]"
      />
      <div className="flex justify-end">
        <Button onClick={handleScheduleTweet}>Schedule</Button>
      </div>
    </div>
  );
}