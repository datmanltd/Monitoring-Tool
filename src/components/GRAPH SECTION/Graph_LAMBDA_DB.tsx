import { useEffect, useRef } from "react";
import Graph from "./Graph";
import { LAMBDA_AND_DATABASE_GRAPHS } from "../../helpers/Constants";
import { applyTimeRange } from "../../helpers/DynamicTime";
import { useTimeRange } from "../../contexts/TimeRangeContext";
import { useScrollControl } from "../../contexts/ScrollControlContext";

const INTERVAL_MS = 30000;

const Graph_LAMBDA_DB = () => {
  const graphUrls = LAMBDA_AND_DATABASE_GRAPHS;
  const { range } = useTimeRange();
  
  const g1 = graphUrls[0];
  const g2 = graphUrls[1];
  const g3 = graphUrls[2];
  const g4 = graphUrls[3];

  const extraGraphs = graphUrls.slice(4, 12); // these 8 graphs

const { isPaused } = useScrollControl();

  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionIndexRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);


  const leftover = graphUrls.slice(4); // usually 1

  const sectionsCount = 1 + leftover.length; // 1 grid + N leftover

 useEffect(() => {
   // Always clear old interval before starting a new one
   if (intervalRef.current) clearInterval(intervalRef.current);

   if (isPaused) return; // Stop auto-scroll while paused

   // Reset index when resuming — ensures it restarts properly
   sectionIndexRef.current = 0;
   if (containerRef.current) {
     containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
   }

   // Start auto-scroll
   intervalRef.current = setInterval(() => {
     if (!containerRef.current) return;

     sectionIndexRef.current = (sectionIndexRef.current + 1) % sectionsCount;

     containerRef.current.scrollTo({
       top: sectionIndexRef.current * window.innerHeight,
       behavior: "smooth",
     });
   }, INTERVAL_MS);

   // Cleanup
   return () => {
     if (intervalRef.current) clearInterval(intervalRef.current);
   };
 }, [isPaused, sectionsCount]);


  return (
    <div
      ref={containerRef}
      className="overflow-y-scroll snap-y snap-mandatory h-[calc(100vh-4rem)]"
    >
      {/* Screen 1: Full screen Graph 1 */}
      <div className="snap-start h-[calc(100vh-4rem)]">
        <Graph iframeSrc={applyTimeRange(g1, range)} fullScreen={true} />
      </div>

      {/* Screen 2: Graph2 + Graph3 + Graph4 horizontally */}
      <div className="snap-start h-[calc(100vh-4rem)] flex">
        <div className="flex-1">
          <Graph iframeSrc={applyTimeRange(g2, range)} fullScreen={false} />
        </div>
        <div className="flex-1">
          <Graph iframeSrc={applyTimeRange(g3, range)} fullScreen={false} />
        </div>
        <div className="flex-[2]">
          <Graph iframeSrc={applyTimeRange(g4, range)} fullScreen={false} />
        </div>
      </div>

      {/* Screen 3: 8 Graphs → 4x2 Grid */}
      <div className="snap-start grid grid-cols-4 grid-rows-2 gap-0 h-[calc(100vh-4rem)]">
        {extraGraphs.map((url, i) => (
          <div
            key={i}
            className={
              i === 1 || i === 5 ? "border-r-[15px] border-yellow-600" : ""
            }
          >
            <Graph iframeSrc={applyTimeRange(url, range)} fullScreen={false} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Graph_LAMBDA_DB;
