"use client";

import { useLocalStorage } from "@/hooks/use-local-storage";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";

export function TweetList() {
  const [scheduledTweets] = useLocalStorage<any[]>("scheduled-tweets", []);

  return (
    <div className="space-y-4">
      {scheduledTweets.map((tweet) => (
        <Card key={tweet.id}>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">@shadcn</p>
                <p className="text-sm text-gray-500">Scheduled for {format(new Date(tweet.scheduledAt), "PPP p")}</p>
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