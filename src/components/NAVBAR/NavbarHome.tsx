import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const NavbarHome = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-900 text-white px-6 py-7 flex items-center justify-between border-b border-gray-700">
      {/* Left Section — Logo + Title */}
      <div
        className="flex items-center gap-4 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={logo} alt="Datman Logo" className="h-8" />
        <h1 className="text-3xl font-semibold">
          DATMAN MONITORING
        </h1>
      </div>

      {/* Right Section — Links */}
      <div className="flex items-center gap-6">
        <button
          onClick={() => navigate("/ces")}
          className="hover:text-yellow-400 transition-colors text-lg font-medium"
        >
          CES
        </button>
        <button
          onClick={() => navigate("/payments")}
          className="hover:text-yellow-400 transition-colors text-lg font-medium"
        >
          Payments
        </button>
        <button
          onClick={() => navigate("/dbl")}
          className="hover:text-yellow-400 transition-colors text-lg font-medium"
        >
          DBL
        </button>
      </div>
    </nav>
  );
};

export default NavbarHome;
