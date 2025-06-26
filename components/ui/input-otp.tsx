"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface OtpInputProps {
  length: number
  onChange: (otp: string) => void
}

const OtpInput = ({ length, onChange }: OtpInputProps) => {
  const [otp, setOtp] = useState(Array(length).fill(""))
  const inputRefs = useRef<Array<HTMLInputElement | null>>([])

  useEffect(() => {
    // Focus on the first input field on mount
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus()
    }
  }, [length])

  const handleChange = (index: number, value: string) => {
    // Only allow one digit
    const newValue = value.slice(0, 1)

    const newOtp = [...otp]
    newOtp[index] = newValue
    setOtp(newOtp)

    // Move focus to the next input field if a digit is entered
    if (newValue && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus()
    }

    onChange(newOtp.join(""))
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      // Move focus to the previous input field if the current field is empty
      if (!otp[index] && index > 0 && inputRefs.current[index - 1]) {
        inputRefs.current[index - 1].focus()
      }
    }
  }

  return (
    <div className="flex items-center justify-center">
      {Array.from({ length }, (_, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={otp[index] || ""}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          className="w-12 h-16 text-4xl font-semibold text-center rounded border border-gray-300 focus:outline-none focus:border-blue-500 mx-2"
          ref={(el) => (inputRefs.current[index] = el)}
        />
      ))}
    </div>
  )
}

export default OtpInput
