import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  CountrySelector,
  PhoneInput,
  usePhoneInput,
} from "react-international-phone"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import "react-international-phone/style.css"
import Image from "next/image"
import { parsePhoneNumber } from "libphonenumber-js"

import { useMounted } from "@/hooks/useUnMounted"

import { Icons } from "./icons"
import { IntlPhone } from "./intl-phone-input"

// data for agent or developer
type FormDataType = {
  name: string
  phone: string
  email: string
  logo: string
}

type FormPropsType = {
  isVertical?: boolean
  top?: boolean
  data: FormDataType
  children: React.ReactElement
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

export default function ContactModal({ children, data }: FormPropsType) {
  const [isEmails, setIsEmails] = React.useState(false)
  const [profile, setProfile] = React.useState(true)
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  React.useEffect(() => {
    setProfile(true)

    return () => {
      setIsEmails(false)
      setProfile(false)
    }
  }, [open])

  const handleActionButtonClick = (emailMode: boolean) => {
    setIsEmails(emailMode)
    setProfile(false)
  }

  const renderProfileSection = () => (
    <div
      className={cn(
        !open && "opacity-0 transition-opacity ",
        "flex w-full flex-col items-center justify-center"
      )}
    >
      <div className="my-2 h-20 w-20 overflow-hidden shadow-sm rounded-full border">
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
      <div className="mt-1">
        <span className="text-sm font-medium text-b-blue">
          {maskPhoneNumber(
            parsePhoneNumber(data?.phone, "GH")?.formatInternational()
          )}
        </span>
        <Button
          variant="outline"
          size="sm"
          className="w-80px mb-1.5 ml-3 h-6 rounded-md border-blue-500 text-xs font-semibold capitalize text-b-blue hover:bg-b-blue-light hover:text-b-blue"
          onClick={() => handleActionButtonClick(false)}
        >
          show number
        </Button>
      </div>
    </div>
  )

  const renderActionButtons = () => (
    <div className="grid w-full grid-cols-1 gap-3">
      <Button
        className="flex h-[46px] items-center gap-2 rounded-md bg-green-500 font-bold text-white hover:bg-green-500"
        onClick={() => handleActionButtonClick(false)}
      >
        <Icons.whatsapp className="h-5 w-5" />
        WhatsApp
      </Button>

      <Button
        className="flex h-[46px] items-center gap-2 rounded-md bg-b-blue font-bold text-white hover:bg-b-blue"
        onClick={() => handleActionButtonClick(true)}
      >
        <Icons.mail className="h-5 w-5" />
        Enquire now
      </Button>
    </div>
  )

  return isDesktop ? (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="w-full md:w-fit">{children}</DialogTrigger>
      {/* ... (same as before) */}
      <DialogContent className="sm:max-w-[450px] rounded-xl">
        {profile && (
          <>
            {renderProfileSection()}
            <div className="grid grid-cols-1 p-0">
              {renderActionButtons()}
              <div className="">
                <p className="pt-3 text-xs text-b-muted">
                  <span className="font-semibold">NB:</span> First submit your
                  contact info once. If you are unable to reach the developer,
                  then they can reach you.
                </p>
              </div>
            </div>
          </>
        )}
        {!profile && <ProfileForm isEmail={isEmails} />}
      </DialogContent>
    </Dialog>
  ) : (
    <Drawer open={open} onOpenChange={setOpen}>
      <DialogTrigger className="w-full md:w-fit">{children}</DialogTrigger>
      <DrawerContent className="px-4">
        {profile && (
          <>
            {renderProfileSection()}
            <div className="grid grid-cols-1 p-0">
              {renderActionButtons()}
              <div className="">
                <p className="pt-3 text-xs text-b-muted">
                  <span className="font-semibold">NB:</span> First submit your
                  contact info once. If you are unable to reach the developer,
                  then they can reach you.
                </p>
              </div>
            </div>
          </>
        )}
        {!profile && <ProfileForm isEmail={isEmails} />}
        <DrawerFooter className="px-0 pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function ProfileForm({ isEmail }: { isEmail: boolean }) {
  const [intlPhone, setIntlPhone] = React.useState("(+233) ")
  const [isValidPhone, setIsValidPhone] = React.useState(false)
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

  return (
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
          className="w-full bg-primary font-semibold hover:bg-b-primary md:w-fit"
        >
          {isEmail ? "Send message" : "Get number"}
        </Button>
      </form>
    </Form>
  )
}
