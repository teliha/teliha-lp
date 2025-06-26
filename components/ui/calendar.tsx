"use client"

import type * as React from "react"
import { Calendar as CalendarPrimitive } from "react-day-picker"

import { cn } from "@/lib/utils"

export type CalendarProps = React.ComponentProps<typeof CalendarPrimitive>

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <CalendarPrimitive
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn("h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),
        nav_icon: "relative h-4 w-4",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "text-center text-sm p-0 relative [&:has([data-selected])]:bg-accent first:[&:has([data-selected])]:rounded-l-md last:[&:has([data-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100 data-[selected]:font-semibold data-[today]:bg-accent data-[today]:text-accent-foreground data-[today]:font-normal text-muted-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        ),
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        day_disabled: "opacity-50",
        day_outside: "opacity-50",
        day_highlighted:
          "bg-accent text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        ...classNames,
      }}
      showOutsideDays={showOutsideDays}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
