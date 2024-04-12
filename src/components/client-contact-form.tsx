"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
} from "@/components/ui/drawer"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import "react-international-phone/style.css"

import React, { useState } from "react"
import Image from "next/image"
import { parsePhoneNumber } from "libphonenumber-js"

import { Icons } from "./icons"
import { IntlPhone } from "./intl-phone-input"
import { Card, CardContent } from "./ui/card"

// data for agent or developer
type FormDataType = {
  name: string
  phone: string
  email: string
  logo: string
}

type FormPropsType = {
  isVertical?: boolean
  offset?: boolean
  data: FormDataType
  children?: React.ReactElement
}

const formSchema = z.object({
  email: z.string().email({ message: "Provide a valid email" }).optional(),
  name: z.string().min(3, { message: "Please provide a valid name" }),
  phone: z.string().min(9, { message: "Please provide a valid phone number" }),
  message: z.string().min(10).optional(),
})

function maskPhoneNumber(phoneNumber: string | undefined) {
  if (!phoneNumber || typeof phoneNumber !== "string") {
    return "" // Return an empty string if the phone number is not valid
  }

  const lastFourDigits = phoneNumber.slice(-4) // Get the last four digits
  const maskedPart = "x".repeat(4) // Create a string of four asterisks

  // Replace the last four digits with asterisks
  const maskedPhoneNumber = phoneNumber.replace(lastFourDigits, maskedPart)

  return maskedPhoneNumber
}

export function ClientContactForm({ data, isVertical, offset }: FormPropsType) {
  const [isEmail, setIsEmail] = React.useState(false)
  console.log(offset)

  return (
    <Card
      className={cn(
        isVertical
          ? " rounded-none border-none bg-transparent shadow-none"
          : "sticky top-[150px] w-full rounded-xl lg:mx-auto lg:max-w-[380px]"
      )}
    >
      <CardContent
        className={cn(
          isVertical && "px-0 py-6",
          "flex w-full flex-col items-center justify-center "
        )}
      >
        <div className="my-2 h-20 w-20 overflow-hidden rounded-full border shadow-sm">
          <Image
            alt={data?.name}
            src={data?.logo}
            width={80}
            height={80}
            className="h-full w-full object-contain"
          />
        </div>
        <p className="text-base font-bold uppercase text-b-accent">
          {data?.name}
        </p>
        <div className="my-2 flex items-center gap-6">
          <div className="grid h-full grid-cols-2 items-center">
            <div className="text-sm font-semibold text-b-blue">
              {maskPhoneNumber(
                parsePhoneNumber(data.phone, "GH")?.formatInternational()
              )}
            </div>

            <ProfileForm isEmail={isEmail}>
              <Button
                variant="outline"
                size="sm"
                className="ml-3 h-6 rounded-md border-blue-500 text-xs font-semibold capitalize text-b-blue hover:bg-b-blue-light hover:text-b-blue"
                onClick={() => setIsEmail(false)}
              >
                show number
              </Button>
            </ProfileForm>
          </div>
        </div>

        <div className="grid grid-cols-1 p-0">
          <div
            className={cn(
              !isVertical ? "grid-cols-1 " : "grid-cols-2",
              "grid w-full gap-3"
            )}
          >
            <ProfileForm isEmail={isEmail}>
              <Button
                className="flex w-full items-center gap-2 rounded-md bg-green-500 font-bold text-white hover:bg-green-500"
                onClick={() => setIsEmail(false)}
              >
                <Icons.whatsapp className="h-5 w-5" />
                WhatsApp
              </Button>
            </ProfileForm>
            <ProfileForm isEmail={isEmail}>
              <Button
                className="flex w-full items-center gap-2 rounded-md bg-b-blue font-bold text-white hover:bg-b-blue"
                onClick={() => setIsEmail(true)}
              >
                <Icons.mail className="h-5 w-5" />
                Enquire now
              </Button>
            </ProfileForm>
          </div>
          <div className="">
            <p className="pt-3 text-xs text-b-muted">
              <span className="font-semibold">NB:</span> First submit your
              contact info once. If you are unable to reach the developer, then
              they can reach you.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function ProfileForm({
  isEmail,
  children,
}: {
  isEmail: boolean
  children: React.ReactNode
}) {
  const [intlPhone, setIntlPhone] = useState("(+233) ")
  const [isValidPhone, setIsValidPhone] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  // console.log(isValidPhone)

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      phone: "",
      message: "",
    },
  })
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return isDesktop ? (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[450px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <header>
              <h2 className="mb-2 text-lg font-bold text-b-accent">
                {isEmail ? "Contact Agent" : "Get Number"}
              </h2>
              <p className="text-sm text-b-accent">
                {isEmail
                  ? " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad impeditrepudiandae."
                  : " To view number, first enter your contact info (Do this once only). If you are unable to reach the owner/broker, then they can reach you."}
              </p>
            </header>
            {isEmail && (
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-0">
                    <FormLabel className="text-b-accent">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="info@meqasa.com" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-0">
                  <FormLabel className="text-b-accent">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="meqasa" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="space-y-0">
                  <FormLabel className="text-b-accent">Phone number</FormLabel>
                  <FormControl>
                    <IntlPhone
                      {...field}
                      value={intlPhone}
                      onChange={setIntlPhone}
                      setIsValidPhone={setIsValidPhone}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            {isEmail && (
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="space-y-0">
                    <FormLabel className="text-b-accent">Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="message" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            )}
            <Button
              type="submit"
              className="w-full bg-primary font-semibold md:w-fit"
            >
              {isEmail ? "Send message" : "Get number"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  ) : (
    <Drawer>
      <DialogTrigger className="w-full md:w-fit">{children}</DialogTrigger>
      <DrawerContent className="px-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <header>
              <h2 className="mb-2 text-lg font-bold text-b-accent">
                {isEmail ? "Contact Agent" : "Get Number"}
              </h2>
              <p className="text-sm text-b-accent">
                {isEmail
                  ? " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad impeditrepudiandae."
                  : " To view number, first enter your contact info (Do this once only). If you are unable to reach the owner/broker, then they can reach you."}
              </p>
            </header>
            {isEmail && (
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-0">
                    <FormLabel className="text-b-accent">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="info@meqasa.com" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-0">
                  <FormLabel className="text-b-accent">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="meqasa" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="space-y-0">
                  <FormLabel className="text-b-accent">Phone number</FormLabel>
                  <FormControl>
                    <IntlPhone
                      {...field}
                      value={intlPhone}
                      onChange={() => {
                        setIntlPhone

                        if (!isValidPhone) {
                          form.trigger("phone", { shouldFocus: true })
                        }
                      }}
                      setIsValidPhone={setIsValidPhone}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            {isEmail && (
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="space-y-0">
                    <FormLabel className="text-b-accent">Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="message" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            )}
            <Button
              type="submit"
              className="w-full bg-primary font-semibold md:w-fit"
            >
              {isEmail ? "Send message" : "Get number"}
            </Button>
          </form>
        </Form>

        <DrawerFooter className="px-0 pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
