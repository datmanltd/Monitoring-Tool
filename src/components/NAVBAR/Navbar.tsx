import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useTimeRange } from "../../contexts/TimeRangeContext";
import TimeRangeDropdown from "../../helpers/TimeRangeDropdown";
import { TIME_RANGES } from "../../helpers/Constants";

const PAGE_TITLES: Record<string, string> = {
  payments: "Payments WOW MONITORING",
  ces: "COUNTS, ERRORS & SNS MONITORING",
  dbl: "LAMBDA & DATABASE MONITORING",
};

const Navbar = () => {
  const location = useLocation();
  const { range, setRange } = useTimeRange();

  const currentPath = location.pathname.split("/")[1];
  const title = PAGE_TITLES[currentPath] || "Dashboard";

  // Find selected range details
  const selectedRange = TIME_RANGES.find((r) => r.key === range);
  const durationMs = selectedRange?.ms ?? 3 * 60 * 60 * 1000; // fallback to 3hr

  // Get current & start time in UK timezone
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

  const timeRangeDisplay = `${formatTime(startTimeUK)} - ${formatTime(
    endTimeUK
  )} (UK Time)`;

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
        <div className="text-xl text-gray-300 text-right">
          {timeRangeDisplay}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
