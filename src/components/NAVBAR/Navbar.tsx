import { useParams } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useTimeRange } from "../../contexts/TimeRangeContext";
import TimeRangeDropdown from "../../helpers/TimeRangeDropdown";

const COUNTRY_LABELS: Record<string, string> = {
  uk: "United Kingdom WOW Dashboard",
  aus: "Australia WOW Dashboard",
};

// Common preset ranges
const TIME_RANGES = [
  { key: "last_5m", label: "Last 5 minutes", ms: 5 * 60 * 1000 },
  { key: "last_15m", label: "Last 15 minutes", ms: 15 * 60 * 1000 },
  { key: "last_30m", label: "Last 30 minutes", ms: 30 * 60 * 1000 },
  { key: "last_1h", label: "Last 1 hour", ms: 1 * 60 * 60 * 1000 },
  { key: "last_3h", label: "Last 3 hours", ms: 3 * 60 * 60 * 1000 },
  { key: "last_6h", label: "Last 6 hours", ms: 6 * 60 * 60 * 1000 },
  { key: "last_12h", label: "Last 12 hours", ms: 12 * 60 * 60 * 1000 },
  { key: "last_24h", label: "Last 24 hours", ms: 24 * 60 * 60 * 1000 },
  // { key: "last_7d", label: "Last 7 days", ms: 7 * 24 * 60 * 60 * 1000 },
  // { key: "last_30d", label: "Last 30 days", ms: 30 * 24 * 60 * 60 * 1000 },
];

const Navbar = () => {
  const { country } = useParams();
  const { range, setRange } = useTimeRange();

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex items-center gap-6 border-b h-18 border-gray-300">
      <img src={logo} alt="Logo" className="h-8 2xl:h-10" />
      <h1 className="text-xl 2xl:text-4xl font-semibold flex-1">
        {COUNTRY_LABELS[country ?? "uk"]}
      </h1>

      {/* Time Range Selector */}
      <TimeRangeDropdown
        range={range}
        setRange={setRange}
        TIME_RANGES={TIME_RANGES}
      />
    </nav>
  );
};

export default Navbar;
