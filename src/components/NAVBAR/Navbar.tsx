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

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex items-center gap-6 border-b h-18 border-gray-300">
      <img src={logo} alt="Logo" className="h-8" />
      <h1 className="text-xl 2xl:text-3xl font-semibold flex-1">{title}</h1>

      <TimeRangeDropdown
        range={range}
        setRange={setRange}
        TIME_RANGES={TIME_RANGES}
      />
    </nav>
  );
};

export default Navbar;
