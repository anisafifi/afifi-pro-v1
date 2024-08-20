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
import { familyTree } from "@/data/familyTree";
import { FaFacebook } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center items-center">
      {familyTree.map((member, index) => (
      <Card key={index} className="w-auto max-w-[340px] p-10 m-4">
        <CardHeader className="flex justify-center items-center">

          <Avatar
          className=""
          >
            <AvatarImage
            src={member.avatar ? `${member.avatar}` : (member.gender === 'Male' ? 'memberImg/malePlaceholder.jpg' : 'memberImg/femalePlaceholder.jpg')}
            alt={member.name}
            />
            <AvatarFallback>{member.name}</AvatarFallback>
          </Avatar>

          <CardTitle>
          {member.name}
          </CardTitle>
          <div>
            <span className="bg-blue-100 text-blue-500 rounded p-1 px-1 py-0.5">
            {member.gender}
            </span>
          </div>
          <div className="italic text-emerald-500">
            {member.dob} {member.death ? `- ${member.death}` : '- Present'}
          </div>
          <CardDescription
          className="text-justify"
          >
          {member.bio}
          </CardDescription>
      
        </CardHeader>

        <hr className="my-6" />
        <CardContent>
        <FaFacebook className="w-6 h-6" />


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
      ))}
    </main>
  );
}
