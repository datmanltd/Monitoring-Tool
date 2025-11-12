import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/NAVBAR/Navbar';
import NavbarHome from './components/NAVBAR/NavbarHome';


const Layout = () => {
  // const [latestRule, setLatestRule] = useState(null);
   const location = useLocation();
   const isHomePage = location.pathname === "/home";


  return (
    <div className="h-screen w-screen flex flex-col">
      {/* <Navbar /> */}
      {isHomePage ? <NavbarHome /> : <Navbar />}

      <div className="flex flex-1 overflow-hidden">
        {/* Left panel with routed graphs */}
        <div className="w-full border-r border-gray-300 overflow-auto">
          <Outlet />
        </div>

        {/* Right panel: Alerts & Rule Engine */}
        {/* <div className="w-1/4  bg-gray-700 p-3 flex flex-col"> */}
        {/* Alert section (more height) */}
        {/* <div className="flex-[2] overflow-y-auto mb-5">
            <AlertContainer onNewAlert={(rule) => setLatestRule(rule)} />
          </div> */}

        {/* Rule Engine (less height) */}
        {/* <div className="flex-[1] border-t overflow-y-auto">
            <RuleContainer currentRule={latestRule} />
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Layout;
