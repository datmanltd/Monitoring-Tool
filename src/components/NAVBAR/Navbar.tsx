import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useTimeRange } from "../../contexts/TimeRangeContext";
import TimeRangeDropdown from "../../helpers/TimeRangeDropdown";
import { TIME_RANGES } from "../../helpers/Constants";
import { Clock, Pause, Play } from "lucide-react";
import { useScrollControl } from "../../contexts/ScrollControlContext";

const PAGE_TITLES: Record<string, string> = {
  payments: `Payments "Week-Over-Week" MONITORING`,
  ces: "PAYMENTS METHOD COUNTS, ERRORS & SNS",
  dbl: "LAMBDA LATENCY & DB MONITORING",
};

const REFRESH_INTERVAL_MS = 60 * 1000; // 1 minute auto-refresh

const Navbar = () => {
  const location = useLocation();
  const { range, setRange } = useTimeRange();
  const [timeRangeDisplay, setTimeRangeDisplay] = useState("");
  const navigate = useNavigate();
  const { isPaused, togglePause } = useScrollControl();

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
      `${formatTime(startTimeUK)} - ${formatTime(endTimeUK)} BST`
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
        <img
          src={logo}
          alt="Logo"
          className="h-8 cursor-pointer"
          onClick={() => navigate("/home")}
        />
        <h1 className="text-xl 2xl:text-3xl font-semibold flex-1">{title}</h1>

        <button
          onClick={togglePause}
          className="flex items-center text-lg gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded-xl font-semibold text-white transition"
        >
          {isPaused ? (
            <>
              <Play className="w-5 h-5" /> Replay
            </>
          ) : (
            <>
              <Pause className="w-5 h-5" /> Pause
            </>
          )}
        </button>

        <TimeRangeDropdown
          range={range}
          setRange={setRange}
          TIME_RANGES={TIME_RANGES}
        />
        {/* <div className="text-2xl text-bold text-white text-right whitespace-nowrap">
          {timeRangeDisplay}
        </div> */}

        <div className="flex items-center gap-2 text-4xl font-extrabold text-white text-right whitespace-nowrap bg-gray-700 px-3 py-1 rounded-xl">
          <Clock className="w-5 h-5 text-yellow-400" />
          {timeRangeDisplay}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
