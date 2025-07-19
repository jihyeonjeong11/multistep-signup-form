import React from "react";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { DayPicker } from "react-day-picker";

import { CalendarIcon } from "lucide-react"; // 캘린더 아이콘 (옵션)
import { cn } from "@/lib/utils";

interface DatePickerWithCalendarProps {
  selected?: Date;
  onSelect: (date: Date | undefined) => void;
  placeholder?: string;
}

const DatePickerWithCalendar: React.FC<DatePickerWithCalendarProps> = ({
  selected,
  onSelect,
  placeholder = "날짜를 선택하세요",
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const popoverRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDaySelect = (date: Date | undefined) => {
    console.log(date, typeof date);
    onSelect(date);
    setIsOpen(false);
  };

  return (
    <div className="relative mt-1" ref={popoverRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex h-10 w-[240px] items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          "text-left font-normal",
          !selected && "text-muted-foreground"
        )}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        {selected ? (
          format(selected, "PPP", { locale: ko })
        ) : (
          <span>{placeholder}</span>
        )}
        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />{" "}
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-2 p-2 bg-background border border-border rounded-md shadow-lg">
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={handleDaySelect}
            disabled={(date) =>
              date > new Date() || date < new Date("1900-01-01")
            }
            captionLayout="dropdown"
            locale={ko}
            classNames={{
              caption_dropdowns: "flex justify-center gap-1",
              caption_label: "hidden",
              vhidden: "hidden",
              month: "space-y-4",
              head_row: "flex",
              head_cell:
                "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
              row: "flex w-full mt-2",
              cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
              day: cn(
                "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
                "rounded-md hover:bg-accent hover:text-accent-foreground",
                "day-selected:bg-primary day-selected:text-primary-foreground",
                "day-today:bg-accent day-today:text-accent-foreground",
                "day-outside:text-muted-foreground day-outside:opacity-50",
                "day-disabled:text-muted-foreground day-disabled:opacity-50"
              ),
              day_selected:
                "bg-accent-green text-white hover:bg-accent-green hover:text-white focus:bg-accent-green focus:text-white",
              day_today:
                "font-bold border border-accent-green text-accent-green",
              dropdown: "bg-background rounded-md px-2 py-1 border",
              dropdown_icon: "ml-1",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default DatePickerWithCalendar;
