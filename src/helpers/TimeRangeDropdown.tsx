import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const TimeRangeDropdown = ({ range, setRange, TIME_RANGES }: any) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex 2xl:text-2xl items-center gap-2 bg-gray-800 px-3 py-1.5 rounded-md border border-gray-600 text-white text-sm hover:border-gray-400"
      >
        Time Range:{" "}
        <span className="text-blue-300">
          {TIME_RANGES.find((r: any) => r.key === range)?.label}
        </span>
        <ChevronDown size={14} className="text-gray-300" />
      </button>

      {open && (
        <div
          className="
            absolute left-0 mt-1 w-48 2xl:w-56
            bg-gray-800 border border-gray-600 rounded-md shadow-lg z-50
            max-h-60 overflow-y-auto
          "
        >
          {TIME_RANGES.map((r: any) => (
            <div
              key={r.key}
              onClick={() => {
                setRange(r.key);
                setOpen(false);
              }}
              className={`
                px-3 py-2 text-sm 2xl:text-2xl cursor-pointer
                hover:bg-gray-700
                ${
                  range === r.key
                    ? "text-blue-400 font-semibold"
                    : "text-gray-200"
                }
              `}
            >
              {r.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimeRangeDropdown;
