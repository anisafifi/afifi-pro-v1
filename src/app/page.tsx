import * as React from "react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center items-center p-4">
      <Card className="w-auto">
        <CardHeader>
          <Avatar>
            <AvatarImage
              src="https://marketing.afifi.pro/asset/1:avater"
              alt="Anis Afifi"
            />
            <AvatarFallback>Anis Afifi</AvatarFallback>
          </Avatar>
          <CardTitle className="flex justify-center items-center">
            Anis Afifi
          </CardTitle>
          <CardDescription className="flex justify-center items-center">
            This is a test. The website coming soon...
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
