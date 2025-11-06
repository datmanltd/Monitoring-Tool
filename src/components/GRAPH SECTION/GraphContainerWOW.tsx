// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Graph from "./Graph";
// import { useTimeRange } from "../../contexts/TimeRangeContext";

// // Map country to URLs
// const COUNTRY_GRAPHS: Record<string, string[]> = {
//   uk: [
//     // GPAY WOW - UK
//     `https://grafana.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&ezone=Europe%2FLondon&refresh=5m&panelId=panel-1&__feature.dashboardSceneSolo=true`,
//     // ExpressPay WOW - UK
//     `https://grafana.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&&timezone=Europe%2FLondon&refresh=5m&panelId=panel-3&__feature.dashboardSceneSolo=true`,
//     // APAY WOW - UK
//     `https://grafana.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&&timezone=Europe%2FLondon&refresh=5m&panelId=panel-2&__feature.dashboardSceneSolo=true`,
//     // New Card WOW - UK
//     `https://grafana.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&&timezone=Europe%2FLondon&refresh=5m&panelId=panel-4&__feature.dashboardSceneSolo=true`,
//     // All Methods WOW - UK
//     `https://grafana.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&&timezone=Europe%2FLondon&refresh=5m&panelId=panel-5&__feature.dashboardSceneSolo=true`,
//   ],
//   aus: [
//     // GPAY WOW - AUS
//     `https://grafana.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&&timezone=Europe%2FLondon&refresh=5m&panelId=panel-7&__feature.dashboardSceneSolo=true`,
//     // ExpressPay WOW - AUS
//     `https://grafana.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&&timezone=Europe%2FLondon&refresh=5m&panelId=panel-8&__feature.dashboardSceneSolo=true`,
//     // APAY WOW - AUS
//     `https://grafana.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&&timezone=Europe%2FLondon&refresh=5m&panelId=panel-9&__feature.dashboardSceneSolo=true`,
//     // New Card WOW - AUS
//     `https://grafana.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&&timezone=Europe%2FLondon&refresh=5m&panelId=panel-10&__feature.dashboardSceneSolo=true`,
//     // All Methods WOW - AUS
//     `https://grafana.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&&timezone=Europe%2FLondon&refresh=5m&panelId=panel-6&__feature.dashboardSceneSolo=true`,
//   ],
// };



// const BATCH_SIZE = 4;
// const INTERVAL_MS = 30000;

// const GraphContainerWOW = () => {

//   const { range } = useTimeRange();

//   const TIME_RANGE_MAP: Record<string, number> = {
//     last_5m: 5 * 60 * 1000,
//     last_15m: 15 * 60 * 1000,
//     last_30m: 30 * 60 * 1000,
//     last_1h: 1 * 60 * 60 * 1000,
//     last_3h: 3 * 60 * 60 * 1000,
//     last_6h: 6 * 60 * 60 * 1000,
//     last_12h: 12 * 60 * 60 * 1000,
//     last_24h: 24 * 60 * 60 * 1000,
//     last_7d: 7 * 24 * 60 * 60 * 1000,
//     last_30d: 30 * 24 * 60 * 60 * 1000,
//   };

//   const applyTimeRange = (url: string) => {
//     const now = Date.now();
//     const from = now - TIME_RANGE_MAP[range];
//     return `${url}&from=${from}&to=${now}`;
//   };

//   const { country } = useParams();
//   const graphUrls = COUNTRY_GRAPHS[country ?? "uk"] ?? COUNTRY_GRAPHS["uk"];
 
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const fullBatchesCount = Math.floor(graphUrls.length / BATCH_SIZE);
//   const leftoverGraphs = graphUrls.length % BATCH_SIZE;

//   const totalFrames =
//     fullBatchesCount + (leftoverGraphs > 0 ? leftoverGraphs : 0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % totalFrames);
//     }, INTERVAL_MS);

//     return () => clearInterval(interval);
//   }, [totalFrames]);

//   let currentGraphs: string[] = [];
//   let isSingle = false;

//   if (currentIndex < fullBatchesCount) {
//     const start = currentIndex * BATCH_SIZE;
//     currentGraphs = graphUrls.slice(start, start + BATCH_SIZE);
//   } else {
//     const leftoverIndex = currentIndex - fullBatchesCount;
//     const start = fullBatchesCount * BATCH_SIZE;
//     currentGraphs = [graphUrls[start + leftoverIndex]];
//     isSingle = true;
//   }

//   return (
//     <div
//       className={
//         isSingle
//           ? "h-[calc(100vh-4rem)]"
//           : "grid grid-cols-2 h-[calc(100vh-4rem)]"
//       }
//     >
//       {currentGraphs.map((url, idx) => (
//         <Graph
//           key={`${currentIndex}-${idx}`}
//           iframeSrc={applyTimeRange(url)}
//           fullScreen={isSingle}
//         />
//       ))}
//     </div>
//   );
// };

// export default GraphContainerWOW;






import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Graph from "./Graph";
import { useTimeRange } from "../../contexts/TimeRangeContext";

const COUNTRY_GRAPHS: Record<string, string[]> = {
  uk: [
    `https://grafana.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&timezone=Europe%2FLondon&refresh=5m&panelId=panel-5&__feature.dashboardSceneSolo=true`,
    `https://grafana.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&ezone=Europe%2FLondon&refresh=5m&panelId=panel-1&__feature.dashboardSceneSolo=true`,
    `https://grafana.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&timezone=Europe%2FLondon&refresh=5m&panelId=panel-3&__feature.dashboardSceneSolo=true`,
    `https://grafana.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&timezone=Europe%2FLondon&refresh=5m&panelId=panel-2&__feature.dashboardSceneSolo=true`,
    `https://grafana.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&timezone=Europe%2FLondon&refresh=5m&panelId=panel-4&__feature.dashboardSceneSolo=true`,
  ],
  aus: [
    `https://grafana.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&timezone=Europe%2FLondon&refresh=5m&panelId=panel-6&__feature.dashboardSceneSolo=true`,
    `https://grafana.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&timezone=Europe%2FLondon&refresh=5m&panelId=panel-7&__feature.dashboardSceneSolo=true`,
    `https://grafana.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&timezone=Europe%2FLondon&refresh=5m&panelId=panel-8&__feature.dashboardSceneSolo=true`,
    `https://grafana.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&timezone=Europe%2FLondon&refresh=5m&panelId=panel-9&__feature.dashboardSceneSolo=true`,
    `https://grafana.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&timezone=Europe%2FLondon&refresh=5m&panelId=panel-10&__feature.dashboardSceneSolo=true`,
  ],
};

const INTERVAL_MS = 30000;

const GraphContainerWOW = () => {
  const { range } = useTimeRange();
  const { country } = useParams();
  const graphUrls = COUNTRY_GRAPHS[country ?? "uk"] ?? COUNTRY_GRAPHS["uk"];

  const TIME_RANGE_MAP: Record<string, number> = {
    last_5m: 5 * 60 * 1000,
    last_15m: 15 * 60 * 1000,
    last_30m: 30 * 60 * 1000,
    last_1h: 1 * 60 * 60 * 1000,
    last_3h: 3 * 60 * 60 * 1000,
    last_6h: 6 * 60 * 60 * 1000,
    last_12h: 12 * 60 * 60 * 1000,
    last_24h: 24 * 60 * 60 * 1000,
    last_7d: 7 * 24 * 60 * 60 * 1000,
    last_30d: 30 * 24 * 60 * 60 * 1000,
  };

  const applyTimeRange = (url: string) => {
    const now = Date.now();
    const from = now - TIME_RANGE_MAP[range];
    return `${url}&from=${from}&to=${now}`;
  };

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (!containerRef.current) return;

      index = (index + 1) % graphUrls.length;

      containerRef.current.scrollTo({
        top: index * window.innerHeight,
        behavior: "smooth",
      });
    }, INTERVAL_MS);

    return () => clearInterval(interval);
  }, [graphUrls.length]);

  return (
    <div
      ref={containerRef}
      className="overflow-y-scroll snap-y snap-mandatory h-[calc(100vh-4rem)]"
    >
      {graphUrls.map((url, idx) => (
        <div key={idx} className="snap-start h-[calc(100vh-4rem)]">
          <Graph iframeSrc={applyTimeRange(url)} fullScreen={true} />
        </div>
      ))}
    </div>
  );
};

export default GraphContainerWOW;
