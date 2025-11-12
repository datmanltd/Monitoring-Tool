import { useEffect, useRef } from "react";
import Graph from "./Graph";
import { COUNT_ERRORS_SNS_GRAPHS } from "../../helpers/Constants";
import { applyTimeRange } from "../../helpers/DynamicTime";
import { useTimeRange } from "../../contexts/TimeRangeContext";
import { useScrollControl } from "../../contexts/ScrollControlContext";

const INTERVAL_MS = 30000;

const Graph_ERROR_SNS_COUNTS = () => {
  const graphUrls = COUNT_ERRORS_SNS_GRAPHS;
  const { range } = useTimeRange();

  const containerRef = useRef<HTMLDivElement | null>(null);

  const section1 = graphUrls.slice(0, 6);
  const section2 = graphUrls.slice(6, 12);
  const section3 = graphUrls.slice(12, 18);
  const section4 = graphUrls.slice(18, 20);

  const sections = [section1, section2, section3, section4];

 const { isPaused } = useScrollControl();
 
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
      {sections.map((section, idx) => (
        <div
          key={idx}
          className="snap-start grid grid-cols-2 gap-0 h-[calc(100vh-4rem)]"
        >
          {/* {section.map((url, i) => (
            <Graph key={i} iframeSrc={applyTimeRange(url)} fullScreen={false} />
          ))} */}
          {section.map((url, i) => {
            const forceToday = idx > 0; // sections 2,3,4 use today_so_far
            const activeRange = forceToday ? "today_so_far" : range;
            return (
              <Graph
                key={i}
                iframeSrc={applyTimeRange(url, activeRange)}
                fullScreen={false}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Graph_ERROR_SNS_COUNTS;
