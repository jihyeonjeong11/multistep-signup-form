import React from "react";
import { format } from "date-fns";
import { ko } from "date-fns/locale"; // 한국어 로케일
import { DayPicker } from "react-day-picker"; // react-day-picker에서 직접 DayPicker 임포트
// 'react-day-picker/dist/style.css'는 최상위 CSS 파일에 임포트하는 것이 좋습니다.

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
  // 팝오버(캘린더)의 열림/닫힘 상태를 관리하는 state
  const [isOpen, setIsOpen] = React.useState(false);

  // 팝오버 외부 클릭 감지 및 닫기
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
    setIsOpen(false); // 날짜 선택 후 팝오버 닫기
  };

  return (
    // relative: 자식 요소인 캘린더 팝업을 absolute로 위치시키기 위함
    <div className="relative" ref={popoverRef}>
      {/* 팝오버를 열고 닫는 트리거 버튼 */}
      <button
        type="button" // 폼 제출 방지를 위해 type="button" 명시
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex h-10 w-[240px] items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          "text-left font-normal", // 텍스트 정렬 및 폰트 두께
          !selected && "text-muted-foreground" // 날짜가 선택되지 않았을 때 텍스트 색상
        )}
        aria-expanded={isOpen} // 접근성을 위한 aria 속성
        aria-haspopup="dialog" // 접근성을 위한 aria 속성
      >
        {selected ? (
          format(selected, "PPP", { locale: ko }) // 선택된 날짜 포맷팅
        ) : (
          <span>{placeholder}</span> // 플레이스홀더 텍스트
        )}
        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />{" "}
        {/* 캘린더 아이콘 */}
      </button>

      {/* 캘린더 팝업 내용 (isOpen 상태에 따라 렌더링) */}
      {isOpen && (
        <div
          className="absolute z-50 mt-2 p-2 bg-background border border-border rounded-md shadow-lg"
          // 추가적인 iOS 스타일링을 여기에 적용할 수 있습니다.
          // 예: backdrop-filter: blur(20px); background-color: rgba(255,255,255,0.8);
        >
          <DayPicker
            mode="single" // 단일 날짜 선택 모드
            selected={selected} // 현재 선택된 날짜
            onSelect={handleDaySelect} // 날짜 선택 시 콜백 호출
            disabled={(date) =>
              date > new Date() || date < new Date("1900-01-01")
            } // 날짜 비활성화 로직
            initialFocus // 팝업 열렸을 때 캘린더에 포커스
            captionLayout="dropdown-buttons" // 연도와 월 드롭다운 활성화
            fromYear={1900} // 연도 드롭다운 시작 연도
            toYear={new Date().getFullYear()} // 연도 드롭다운 끝 연도 (현재 연도)
            locale={ko} // 캘린더 UI에 한국어 로케일 적용
            // react-day-picker의 내부 요소에 Tailwind 클래스를 적용하기 위한 classNames prop.
            // iOS 스타일링을 위해서는 이 부분을 더 정교하게 커스터마이징해야 합니다.
            classNames={{
              // 기본적으로 shadcn/ui의 캘린더 스타일을 참고하여 적용합니다.
              // react-day-picker의 기본 CSS를 오버라이드하게 됩니다.
              caption_dropdowns: "flex justify-center gap-1",
              caption_label: "hidden", // 드롭다운 사용 시 기본 라벨 숨김
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
                "day-selected:bg-primary day-selected:text-primary-foreground", // 선택된 날짜 기본 스타일
                "day-today:bg-accent day-today:text-accent-foreground", // 오늘 날짜 기본 스타일
                "day-outside:text-muted-foreground day-outside:opacity-50",
                "day-disabled:text-muted-foreground day-disabled:opacity-50"
              ),
              // 커스텀 색상 테마 (iOS 스타일 녹색을 가정)
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
