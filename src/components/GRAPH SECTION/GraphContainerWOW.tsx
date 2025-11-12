//4 graphs on one screen then one graph on full screen with a scroll effect
import { useEffect, useRef } from "react";
import Graph from "./Graph";
import { PAYMENTS_GRAPHS } from "../../helpers/Constants";
import { applyTimeRange } from "../../helpers/DynamicTime";
import { useTimeRange } from "../../contexts/TimeRangeContext";
import { useScrollControl } from "../../contexts/ScrollControlContext";


const INTERVAL_MS = 30000;

const GraphContainerWOW = () => {
  // const { country } = useParams();
  // const graphUrls = COUNTRY_GRAPHS[country ?? "uk"] ?? COUNTRY_GRAPHS["uk"];
  const graphUrls = PAYMENTS_GRAPHS;
  const { range } = useTimeRange();
  const { isPaused } = useScrollControl();

  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionIndexRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);


  const firstFour = graphUrls.slice(0, 4);
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
      {/* Screen 1: 4 Graphs Grid */}
      <div className="snap-start grid grid-cols-2 gap-0 h-[calc(100vh-4rem)]">
        {firstFour.map((url, i) => (
          <Graph
            key={i}
            iframeSrc={applyTimeRange(url, range)}
            fullScreen={false}
          />
        ))}
      </div>

      {/* Screen 2+: One Graph Per Screen */}
      {leftover.map((url, i) => (
        <div key={i} className="snap-start h-[calc(100vh-4rem)]">
          <Graph iframeSrc={applyTimeRange(url, range)} fullScreen={true} />
        </div>
      ))}
    </div>
  );
};

export default GraphContainerWOW;
