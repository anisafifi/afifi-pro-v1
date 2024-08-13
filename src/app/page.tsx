import { BellIcon, CheckIcon } from "@radix-ui/react-icons";
import { GiSpiderWeb } from "react-icons/gi"; 
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

type CardProps = React.ComponentProps<typeof Card>;

export default function Home({ className, ...props }: CardProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <Card className={cn("w-auto, p-6", className)} {...props}>
        <CardHeader className="flex flex-col items-center justify-between">
          <Avatar className="h-24 w-24">
            <AvatarImage src="https://marketing.afifi.pro/asset/1:avater"/>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <CardTitle className="text-center pt-2 text-xl">Anis Afifi</CardTitle>
          <CardDescription className="text-center">
            <span className="bg-blue-100 text-blue-500 px-2 py-0.5 rounded-md">
              Male
            </span>
          </CardDescription>
          <CardDescription className="text-center flex items-center justify-center">
          <GiSpiderWeb className="mr-2" /> 
          
          <Link className="text-blue-500" href="https://anisafifi.com">anisafifi.com</Link>

          </CardDescription>
          <CardDescription className="text-center">
            1998/03/07 - Present
          </CardDescription>
        </CardHeader>
        <hr className="py-3"/>
        <CardContent className="grid gap-4">
          
          <div>
            {notifications.map((notification, index) => (
              <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {notification.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <CheckIcon className="mr-2 h-4 w-4" /> Mark all as read
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
