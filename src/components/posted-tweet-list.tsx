"use client";

import { useLocalStorage } from "@/hooks/use-local-storage";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";
import { Button } from "./ui/button";

export function PostedTweetList() {
  const [scheduledTweets, setScheduledTweets] = useLocalStorage<any[]>("scheduled-tweets", []);
  const [postedTweets, setPostedTweets] = useLocalStorage<any[]>("posted-tweets", []);

  const handlePostTweet = (tweet: any) => {
    setPostedTweets([...postedTweets, { ...tweet, postedAt: new Date() }]);
    setScheduledTweets(scheduledTweets.filter((t) => t.id !== tweet.id));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-end">
        <Button 
          onClick={() => {
            if(scheduledTweets.length > 0) {
              handlePostTweet(scheduledTweets[0])
            }
          }}
          disabled={scheduledTweets.length === 0}
        >
          Post Scheduled Tweet
        </Button>
      </div>
      {postedTweets.map((tweet) => (
        <Card key={tweet.id}>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">@shadcn</p>
                <p className="text-sm text-gray-500">Posted on {format(new Date(tweet.postedAt), "PPP p")}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p>{tweet.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}