import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Activity, CreditCard, Database } from "lucide-react";

const HomePage = () => {
  const navigate = useNavigate();

  const cards = [
    {
      id: 1,
      title: "CES Monitoring",
      desc: "Counts, Errors, and SNS Alerts in one place.",
      route: "/ces",
      icon: Activity,
    },
    {
      id: 2,
      title: "Payments Dashboard",
      desc: "Payments WOW monitoring made easy.",
      route: "/payments",
      icon: CreditCard,
    },
    {
      id: 3,
      title: "DBL Monitoring",
      desc: "Lambda & Database performance at your fingertips.",
      route: "/dbl",
      icon: Database,
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-10 text-white overflow-hidden">
      {/* Background GIF */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-78"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/originals/88/15/63/881563d6444b370fa4ceea0c3183bb4c.gif')",
        }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Title */}
      <h1 className="text-4xl font-bold text-white mb-3 z-10">
        Datman Monitoring
      </h1>

      {/* Typewriter Quotes */}
      <div className="text-gray-300 text-2xl mb-10 text-center max-w-2xl font-medium min-h-[70px] italic z-10">
        <Typewriter
          options={{
            strings: [
              "“Empowering insights. Enabling performance. Monitor smarter, react faster.”",
              "“Turning data into action — every second counts.”",
            ],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 30,
          }}
        />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-20 lg:grid-cols-3 gap-8 w-full max-w-6xl z-10">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="bg-gray-600/80 hover:bg-gray-700/90 rounded-2xl shadow-lg p-6 flex flex-col items-center cursor-pointer border border-gray-700 transition"
            onClick={() => navigate(card.route)}
          >
            <card.icon className="h-16 w-16 text-blue-400 mb-6" />
            <h2 className="text-2xl font-semibold text-white mb-2 text-center">
              {card.title}
            </h2>
            <p className="text-gray-400 text-xl text-center">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <p className="text-gray-400 text-sm mt-12 z-10">
        © {new Date().getFullYear()} Datman Monitoring | System Status Overview
      </p>
    </div>
  );
};

export default HomePage;

