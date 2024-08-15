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
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center items-center">
      <Card className="w-auto max-w-[340px] p-4">
        <CardHeader className="flex justify-center items-center">

          <Avatar
          className=""
          >
            <AvatarImage
              src="https://marketing.afifi.pro/asset/1:avater"
              alt="Anis Afifi"
            />
            <AvatarFallback>Anis Afifi</AvatarFallback>
          </Avatar>

          <CardTitle>
            Anis Afifi

          </CardTitle>

          <CardDescription
          className="text-justify"
          >
          Entrepreneur and businessman with a big dream to make the world a better place for humankind.
          </CardDescription>
      
        </CardHeader>
        <hr className="my-4" />
        <CardContent>
        <Link
          href="https://anisafifi.com"
          >  
          <Button 
          variant="outline"
          className="text-end"
          >Go to main site</Button>
          </Link>
        </CardContent>
        <CardFooter className="flex justify-between">
          
        </CardFooter>
      </Card>
    </main>
  );
}
