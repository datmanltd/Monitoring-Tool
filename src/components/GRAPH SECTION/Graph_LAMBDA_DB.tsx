import { useEffect, useRef } from "react";
import Graph from "./Graph";
import { LAMBDA_AND_DATABASE_GRAPHS } from "../../helpers/Constants";
import { applyTimeRange } from "../../helpers/DynamicTime";
import { useTimeRange } from "../../contexts/TimeRangeContext";

const INTERVAL_MS = 30000;

const Graph_LAMBDA_DB = () => {
  const graphUrls = LAMBDA_AND_DATABASE_GRAPHS;
  const { range } = useTimeRange();
  
  const g1 = graphUrls[0];
  const g2 = graphUrls[1];
  const g3 = graphUrls[2];
  const g4 = graphUrls[3];

  const extraGraphs = graphUrls.slice(4, 12); // these 8 graphs

  const containerRef = useRef<HTMLDivElement | null>(null);

  // Total screens = 3 now
  const sectionsCount = 3;

  useEffect(() => {
    let sectionIndex = 0;

    const interval = setInterval(() => {
      if (!containerRef.current) return;

      sectionIndex = (sectionIndex + 1) % sectionsCount;

      containerRef.current.scrollTo({
        top: sectionIndex * window.innerHeight,
        behavior: "smooth",
      });
    }, INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

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
