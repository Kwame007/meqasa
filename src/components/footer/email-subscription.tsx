import React from "react"

import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Icons } from "../icons"
import { Card } from "../ui/card"
import { Mail } from "lucide-react"

/**
 * Renders the EmailSubscription component.
 *
 * @return {JSX.Element} The rendered EmailSubscription component
 */
export default function EmailSubscription() {
  return (
    <aside className="bg-slate-50 px-4 text-b-accent lg:p-0">
      <div className="grid items-center justify-center gap-3 py-8 lg:mx-auto lg:max-w-5xl lg:grid-cols-2">
        <div className="flex justify-center">
          <div className="w-fit">
            <h5 className="text-lg font-extrabold lg:leading-[38px]">
              Get Property Alerts from meQasa
            </h5>
            <p className="text-sm">
              Stay up to date with the latest properties, news and articles
            </p>
          </div>
        </div>
        <Card className="max-w-[600px] rounded-lg bg-white">
          <form
            className="grid grid-cols-[2fr_1fr] items-center"
            action="/subscription"
          >
            <Label htmlFor="email" className="relative">
              <Mail className="absolute left-2 top-[18px] h-5 w-5 text-b-accent" strokeWidth="1.3"/>
              <Input
                placeholder="kwame007@meqasa.com"
                id="email"
                name="email"
                type="email"
                className="min-h-[54px] rounded-r-none border-none bg-transparent px-10 py-2 shadow-none placeholder:text-b-muted focus-visible:border-none focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                required
              />
            </Label>

            <Button
              type="submit"
              className={buttonVariants({
                className: "mr-2 grow",
              })}
            >
              Subscribe
            </Button>
          </form>
        </Card>
      </div>
    </aside>
  )
}
