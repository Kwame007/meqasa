"use client"


import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Textarea } from "./ui/textarea"

export function CardWithForm() {
  return (
    <div className="bg-white">
      <div className="relative isolate  lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <Card className="w-full rounded-xl text-b-accent md:w-[770px]">
          <CardHeader>
            <CardTitle className="font-bold">Feedback</CardTitle>
            <CardDescription className="text-b-muted">
              We love to hear from you! Whether you want to drop a line to
              compliment what we do, have an issue during your search process or
              have an idea to share, we appreciate your feedback.
            </CardDescription>
          </CardHeader>
          <form>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label
                    htmlFor="name"
                    className="after:pl-1 after:text-b-primary after:content-['*']"
                  >
                    Name
                  </Label>
                  <Input id="name" placeholder="Enter name" required className="placeholder:text-b-muted"/>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label
                    htmlFor="email"
                    className="after:pl-1 after:text-b-primary after:content-['*']"
                  >
                    Email
                  </Label>
                  <Input id="email" placeholder="Enter email" required className="placeholder:text-b-muted"/>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label
                    htmlFor="message"
                    className="after:pl-1 after:text-b-primary after:content-['*']"
                  >
                    Message
                  </Label>
                  <Textarea
                    className="h-28 placeholder:text-b-muted"
                    placeholder="Type your message here."
                    id="message"
                    required
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="w-full bg-primary md:w-28">
                Send
              </Button>
            </CardFooter>
          </form>
        </Card>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  )
}
