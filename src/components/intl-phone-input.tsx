import { PhoneNumberUtil } from "google-libphonenumber"
import { CountrySelector, usePhoneInput } from "react-international-phone"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type IntlPhoneProps = {
  setIsValidPhone: (value: boolean) => void
  value: string
  onChange: (phone: string) => void
}

const phoneUtil = PhoneNumberUtil.getInstance()

const isPhoneValid = (phone: string) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone))
  } catch (error) {
    return false
  }
}

export const IntlPhone: React.FC<IntlPhoneProps> = ({
  value,
  setIsValidPhone,
  onChange,
}) => {
  const { country, setCountry, phone, handlePhoneValueChange, inputRef } =
    usePhoneInput({
      defaultCountry: "gh",
      value,

      forceDialCode: true,
      onChange: ({ phone }) => {
        onChange(phone)
      },
    })

  // verify number
  const validPhone = isPhoneValid(phone)
  setIsValidPhone(validPhone)

  return (
    <div className="relative flex items-center gap-2">
      <CountrySelector
        selectedCountry={country.iso2}
        onSelect={(country) => setCountry(country.iso2)}
        renderButtonWrapper={({ children, rootProps }) => (
          <Button {...rootProps} variant="outline" type="button">
            {children}
          </Button>
        )}
      />
      <Input
        placeholder="Enter phone"
        type="tel"
        value={phone}
        onChange={handlePhoneValueChange}
        ref={inputRef}
      />
    </div>
  )
}
