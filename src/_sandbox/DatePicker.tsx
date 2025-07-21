import React from "react";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { DayPicker, type ClassNames } from "react-day-picker";

import { CalendarIcon } from "lucide-react"; // 캘린더 아이콘 (옵션)
import { cn } from "@/utils/utils";

const DAYPICKER_CLASSES: Partial<ClassNames> = {
  root: "",
  chevron: "hidden",
  nav: "",
  button_next: "",
  button_previous: "",

  month: "space-y-4",
  months: "",
  month_grid: "",
  week: "",
  weeks: "",
  weekday: "",
  weekdays: "",
  week_number: "",
  week_number_header: "",

  day: cn(
    "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
    "rounded-md hover:bg-accent hover:text-accent-foreground"
  ),
  day_button: "w-full h-full",

  caption_label: "hidden",
  month_caption: "text-accent-green",
  dropdowns: "flex gap-2",
  dropdown: "bg-background rounded-md px-2 py-1 border",
  dropdown_root: "",
  months_dropdown: "",

  years_dropdown: "",

  disabled: "",
  hidden: "",
  outside: "",
  focused: "",
  today: "",
  selected: "",

  range_end: "",
  range_middle: "",
  range_start: "",

  weeks_before_enter: "",
  weeks_before_exit: "",
  weeks_after_enter: "",
  weeks_after_exit: "",
  caption_before_enter: "",
  caption_before_exit: "",
  caption_after_enter: "",
  caption_after_exit: "",

  footer: "",
};

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
              ...DAYPICKER_CLASSES,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default DatePickerWithCalendar;
