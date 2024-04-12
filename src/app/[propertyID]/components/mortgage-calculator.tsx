"use client"

import React, { ReactNode } from "react"

import { formatNumberToCedis, parseCommaSeparatedNumber } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { SliderInterest } from "@/components/ui/slider-interest"
import { SliderTenure } from "@/components/ui/slider-tenure"

export default function MortgageCalculator({ price }: { price: string }) {
  const [tenure, setTenure] = React.useState([10])
  const [interest, setInterest] = React.useState([18])
  const [propertyPrice, setPropertyPrice] = React.useState(price)
  const [loanAmount, setLoanAmount] = React.useState(0)
  const [downPayment, setDownPayment] = React.useState("0")
  const [monthlyPayment, setMonthlyPayment] = React.useState(0)
  const [downPaymentPercent, setDownPaymentPercent] = React.useState(0)
  const [loanPercent, setLoanPercent] = React.useState(0)
  const [principalAmount, setPrincipalAmount] = React.useState(0)
  const [interestAmount, setInterestAmount] = React.useState(0)

  /**
   * calculate loan amount.
   * @todo Calculate loan amount by subtracting parsedPropertyPrice from parsedDownPayment.
   */
  const calculateLoanAmount = React.useCallback(() => {
    const formattedPropertyPrice = formatNumberToCedis(propertyPrice, "en-GH")
    const parsedPropertyPrice = parseCommaSeparatedNumber(
      formattedPropertyPrice
    )

    const formattedDownPayment = formatNumberToCedis(downPayment, "en-GH")
    const parsedDownPayment = parseCommaSeparatedNumber(formattedDownPayment)

    setPropertyPrice(formattedPropertyPrice)
    setDownPayment(formattedDownPayment)

    setLoanAmount(parsedPropertyPrice - parsedDownPayment)

    // Note: Avoid returning loanAmount due to asynchronous state updates
  }, [downPayment, propertyPrice])

  // calculate monthly payment
  const calculateMonthlyPayment = React.useCallback(() => {
    //percentage to decimal
    function percentageToDecimal(percentage: number) {
      return percentage / 12 / 100
    }

    //years to months
    function yearsToMonths(year: number) {
      return year * 12
    }

    // set monthly payment
    setMonthlyPayment(
      percentageToDecimal(interest[0] * loanAmount) /
        (1 -
          Math.pow(
            1 + percentageToDecimal(interest[0]),
            -yearsToMonths(tenure[0])
          ))
    )

    // calculate principal amount
    setInterestAmount((loanAmount * percentageToDecimal(interest[0])) / 12)

    // calculate interest amount
    setPrincipalAmount(monthlyPayment - interestAmount)

    return monthlyPayment
  }, [loanAmount, monthlyPayment, interest, tenure, interestAmount])

  React.useEffect(() => {
    calculateLoanAmount()
    calculateMonthlyPayment()

    const parsedPropertyPrice = parseCommaSeparatedNumber(propertyPrice)
    const parsedDownPayment = parseCommaSeparatedNumber(downPayment)

    // calculate percentage
    function calculatePercentage(a: number, b: number) {
      return Math.round(100 / (a / b))
    }
    setDownPaymentPercent(
      calculatePercentage(parsedPropertyPrice, parsedDownPayment)
    )

    setLoanPercent(calculatePercentage(parsedPropertyPrice, loanAmount))
  }, [
    propertyPrice,
    downPayment,
    loanAmount,
    calculateLoanAmount,
    calculateMonthlyPayment,
  ])

  return (
    <div className="flex h-full flex-col gap-8 md:flex-row">
      <Card className="h-full w-full rounded-xl border-[#50a3ff] p-[13px] text-b-accent md:max-w-[448px]">
        <div>
          <div>
            <div className="mb-6">
              <Label
                htmlFor="minPrice"
                className="mb-2 block text-base font-semibold"
              >
                {" "}
                Property Price
              </Label>
              <Label htmlFor="minPrice" className="flex">
                <span className="flex items-center rounded-l-md border border-r-0 bg-[#f8f8f8] px-2 text-xs text-b-accent">
                  GH₵
                </span>
                <Input
                  id="minPrice"
                  pattern="[0-9]*"
                  className="h-[42px] w-full rounded-md rounded-l-none shadow-none"
                  placeholder="Min.price"
                  value={propertyPrice}
                  onKeyUp={() => calculateLoanAmount()}
                  onChange={(e) => {
                    const parsedValue = parseCommaSeparatedNumber(
                      e.target.value
                    )

                    // Convert parsed value to string and update property price state
                    setPropertyPrice(String(parsedValue))
                    calculateMonthlyPayment()
                  }}
                />
              </Label>
            </div>
            <div className="mb-6">
              <Label
                htmlFor="initial-price"
                className="mb-2 block text-base font-semibold"
              >
                Down Payment
              </Label>
              <Label htmlFor="initial-price" className="flex">
                <span className="flex items-center rounded-l-md border border-r-0 bg-[#f8f8f8] px-2 text-xs text-b-accent">
                  GH₵
                </span>
                <Input
                  id="initial-price"
                  pattern="[0-9]*"
                  className="h-[42px] w-full rounded-md rounded-l-none shadow-none"
                  placeholder="Enter value"
                  value={downPayment}
                  onKeyUp={() => calculateLoanAmount()}
                  onChange={(e) => {
                    const parsedValue = parseCommaSeparatedNumber(
                      e.target.value
                    )

                    // Convert parsed value to string and update down payment state
                    setDownPayment(String(parsedValue))
                    calculateMonthlyPayment()
                  }}
                />
              </Label>
            </div>

            {/* sliders */}
            <div className="mb-6">
              <div className="mb-4 flex items-center gap-2">
                <Label
                  htmlFor="years"
                  className="w-fit whitespace-nowrap text-base font-semibold"
                >
                  Tenure <span className="text-sm font-normal">(yrs)</span>
                </Label>
                <SliderTenure
                  defaultValue={[10]}
                  max={35}
                  min={5}
                  step={1}
                  value={tenure}
                  className="border-none"
                  aria-readonly
                  onValueChange={(value) => {
                    setTenure(value)
                  }}
                />
                <Input
                  className="ml- h-[42px] w-[65px] rounded-md shadow-none"
                  pattern="[0-9]*"
                  id="years"
                  value={String(tenure[0])}
                />
              </div>
              <div className="flex items-center gap-2">
                <Label
                  htmlFor="years"
                  className="w-fit whitespace-nowrap text-base font-semibold"
                >
                  Interest <span className="text-sm font-normal">(%)</span>
                </Label>
                <SliderInterest
                  defaultValue={[18]}
                  max={30}
                  step={0.1}
                  value={interest}
                  onValueChange={(value) => {
                    setInterest(value)
                  }}
                  aria-readonly
                  className="border-none"
                />
                <Input
                  className="ml- h-[42px] w-[65px] rounded-md shadow-none"
                  pattern="[0-9]*"
                  id="years"
                  value={[String(interest[0])]}
                />
              </div>
            </div>
            <div className="mt-3 flex h-full w-fit items-start justify-between gap-3 rounded-lg border border-[#50a3ff] bg-[#d7e9ff] p-3 text-xs font-light shadow-sm md:text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatem consectetur beatae, excepturi facere velit magnam nisi,
            </div>
          </div>
        </div>
      </Card>
      <Card className="w-full rounded-xl  p-[13px] text-b-accent">
        <div className="h-full w-full rounded-xl bg-[#F8F8FA] px-3 py-4 md:px-6">
          <div>
            <div className="flex items-center justify-between">
              <p className="font-semibold text-inherit">Mortgage calculation</p>
              <p className="text-sm text-inherit md:text-base md:font-semibold">
                on {Math.ceil(interest[0])}% interest rate
              </p>
            </div>
            <Separator className="my-4" />
            <div className="grid grid-cols-2">
              <div className="">
                <div className="mx-auto h-[220px] max-w-[220px]">
                  <SvgDoughnut>
                    <text
                      textAnchor="middle"
                      x="0"
                      y="0"
                      style={{ pointerEvents: "none" }}
                    >
                      <tspan
                        x="0"
                        dy="0"
                        className="fill-b-accent text-2xl font-extrabold"
                        style={{ fontSize: "1.2%" }}
                      >
                        {formatNumberToCedis(loanAmount, "en-GH", {
                          style: "currency",
                          currency: "GHS",
                          maximumSignificantDigits: 3,
                        })}
                      </tspan>
                      <tspan
                        x="0"
                        dy="0.4"
                        className="fill-b-accent text-lg font-light"
                        style={{ fontSize: "0.8%" }}
                      >
                        Loan Amount ({loanPercent}%)
                      </tspan>
                    </text>
                  </SvgDoughnut>
                </div>
                <div className="md:mt-5">
                  <p className="text-center text-sm font-light text-inherit">
                    Down Payment ( {downPaymentPercent}% )
                  </p>
                  <p className="mt-2 text-center font-bold leading-[31px] text-inherit md:text-[23px]">
                    {formatNumberToCedis(downPayment, "en-GH", {
                      style: "currency",
                      currency: "GHS",
                      maximumSignificantDigits: 3,
                    })}
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="mx-auto h-[220px] max-w-[220px]">
                  <SvgDoughnut>
                    <text
                      textAnchor="middle"
                      x="0"
                      y="0"
                      style={{ pointerEvents: "none" }}
                    >
                      <tspan
                        x="0"
                        dy="0"
                        className="fill-b-accent text-2xl font-extrabold"
                        style={{ fontSize: "1.4%" }}
                      >
                        {formatNumberToCedis(monthlyPayment, "en-GH", {
                          style: "currency",
                          currency: "GHS",
                          maximumSignificantDigits: 3,
                        })}
                      </tspan>
                      <tspan
                        x="0"
                        dy="0.4"
                        className="fill-b-accent text-lg font-light"
                        style={{ fontSize: "0.8%" }}
                      >
                        /month
                      </tspan>
                    </text>
                  </SvgDoughnut>
                </div>
                <div className="block md:mt-6">
                  <p className="text-center text-sm font-light text-inherit">
                    Monthly Payment
                  </p>
                </div>
                <div className="-ml-9 flex md:m-0 md:justify-end">
                  <div className="mt-2 flex h-full items-start justify-between gap-2 rounded-lg border bg-white p-1 shadow-sm md:mt-3 md:w-fit md:p-3">
                    <div className="flex gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-[#ff609c] md:mt-2 md:h-2 md:w-2" />
                      <div>
                        <p className="text-xs font-normal text-inherit md:text-base">
                          Principal
                        </p>
                        <h4 className="text-[13px] font-semibold leading-8 text-inherit md:mt-2 md:text-base">
                          {formatNumberToCedis(principalAmount, "en-GH", {
                            style: "currency",
                            currency: "GHS",
                            maximumSignificantDigits: 3,
                          })}
                        </h4>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-[#216AFF] md:mt-2 md:h-2 md:w-2" />
                      <div>
                        <p className="text-xs font-normal text-inherit md:text-base">
                          Interest
                        </p>
                        <h4 className="text-[13px] font-semibold leading-8 text-inherit md:mt-2 md:text-base">
                          {formatNumberToCedis(interestAmount, "en-GH", {
                            style: "currency",
                            currency: "GHS",
                            maximumSignificantDigits: 3,
                          })}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

function SvgDoughnut({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="-1 -1 2 2" className="w-full">
      <defs>
        <linearGradient
          id="grad1"
          x1="0"
          y1="0"
          x2="100%"
          y2="0"
          gradientTransform="rotate(90)"
        >
          <stop offset="0%" stopColor="rgb(253, 53, 114)"></stop>
          <stop offset="100%" stopColor="rgb(20, 146, 243)"></stop>
        </linearGradient>
      </defs>
      <circle cx="0" cy="0" r="1" fill="transparent"></circle>
      <circle
        cx="0"
        cy="0"
        r="0.9"
        fill="transparent"
        stroke="#d8e5ff"
        strokeWidth="0.08"
        className=""
      ></circle>
      <circle
        x="0"
        y="0"
        r="0.9"
        fill="transparent"
        stroke="#216bff"
        strokeWidth="0.08"
        style={{
          //  strokeDashoffset: 995,
          strokeDasharray: 1000,
          animation: "",
        }}
      ></circle>
      <circle
        className="-scale-y-100 hover:animate-donut"
        x="0"
        y="0"
        r="0.9"
        fill="transparent"
        stroke="#d8e5ff"
        strokeWidth="0.08"
        style={{ strokeDashoffset: 997.7, strokeDasharray: 1000 }}
      ></circle>
      {children}
    </svg>
  )
}
