"use client"

import React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import ProfileForm from "@/components/client-contact-form"
import { Icons } from "@/components/icons"

export default function ContactFixed() {
  const [isEmail, setIsEmail] = React.useState(false)
  return (
    <Card className="fixed inset-x-3 bottom-2 z-30 flex  items-center gap-4 overflow-hidden rounded-none border-0 bg-transparent shadow-none md:hidden">
      <div className="w-24">
        <ProfileForm isEmail={isEmail}>
          <Button
            size="icon"
            className="h-11 bg-orange-500 hover:bg-orange-500"
            onClick={() => setIsEmail(false)}
          >
            <Icons.phone className="h-5 w-5" />
          </Button>
        </ProfileForm>
      </div>
      <ProfileForm isEmail={isEmail}>
        <Button
          size="lg"
          className="flex w-full items-center gap-2 bg-blue-500 hover:bg-blue-500"
          onClick={() => setIsEmail(true)}
        >
          <Icons.mail className="h-5 w-5" />
          <span> Email</span>
        </Button>
      </ProfileForm>
      <ProfileForm isEmail={isEmail}>
        <Button
          size="lg"
          className="flex w-full items-center gap-2 bg-green-500 hover:bg-green-500"
          onClick={() => setIsEmail(false)}
        >
          <Icons.whatsapp className="h-5 w-5" />
          <span>WhatsApp</span>
        </Button>
      </ProfileForm>
    </Card>
  )
}
