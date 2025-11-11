import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useTimeRange } from "../../contexts/TimeRangeContext";
import TimeRangeDropdown from "../../helpers/TimeRangeDropdown";
import { TIME_RANGES } from "../../helpers/Constants";
import { Clock } from "lucide-react";

const PAGE_TITLES: Record<string, string> = {
  payments: "Payments WOW MONITORING",
  ces: "COUNTS, ERRORS & SNS MONITORING",
  dbl: "LAMBDA & DATABASE MONITORING",
};

const REFRESH_INTERVAL_MS = 60 * 1000; // 1 minute auto-refresh

const Navbar = () => {
  const location = useLocation();
  const { range, setRange } = useTimeRange();
  const [timeRangeDisplay, setTimeRangeDisplay] = useState("");

  const currentPath = location.pathname.split("/")[1];
  const title = PAGE_TITLES[currentPath] || "Dashboard";

  const updateTimeDisplay = () => {
    const selectedRange = TIME_RANGES.find((r) => r.key === range);
    const durationMs = selectedRange?.ms ?? 3 * 60 * 60 * 1000; // fallback to 3hr

    const now = new Date();
    const endTimeUK = new Date(
      now.toLocaleString("en-GB", { timeZone: "Europe/London" })
    );
    const startTimeUK = new Date(endTimeUK.getTime() - durationMs);

    const formatTime = (date: Date) =>
      date.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      });

    setTimeRangeDisplay(
      `${formatTime(startTimeUK)} - ${formatTime(endTimeUK)} (UK Time)`
    );
  };

  useEffect(() => {
    updateTimeDisplay(); // initial call
    const interval = setInterval(updateTimeDisplay, REFRESH_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [range]);

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex flex-col gap-2 border-b h-auto border-gray-300">
      <div className="flex items-center gap-6">
        <img src={logo} alt="Logo" className="h-8" />
        <h1 className="text-xl 2xl:text-3xl font-semibold flex-1">{title}</h1>

        <TimeRangeDropdown
          range={range}
          setRange={setRange}
          TIME_RANGES={TIME_RANGES}
        />
        {/* <div className="text-2xl text-bold text-white text-right whitespace-nowrap">
          {timeRangeDisplay}
        </div> */}
        <div className="flex items-center gap-2 text-2xl font-extrabold text-white text-right whitespace-nowrap bg-gray-700 px-3 py-1 rounded-xl">
          <Clock className="w-5 h-5 text-yellow-400" />
          {timeRangeDisplay}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
