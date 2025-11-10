// const Graph = ({
//   iframeSrc,
//   fullScreen = false,
// }: {
//   iframeSrc: string;
//   fullScreen?: boolean;
// }) => {
//   return (
//     <div
//       className={`w-full h-full border rounded overflow-hidden bg-gray-800 shadow ${
//         fullScreen ? "col-span-2 row-span-2" : ""
//       }`}
//     >
//       <iframe
//         src={iframeSrc}
//         width="100%"
//         height="100%"
//         frameBorder="0"
//         title="Grafana Snapshots"
//         className="rounded-lg shadow-md"
//       />
//     </div>
//   );
// };

// export default Graph;


import { useEffect, useState } from "react";

const REFRESH_INTERVAL_MS = 5 * 60 * 1000; // 1 minute

const Graph = ({
  iframeSrc,
  fullScreen = false,
}: {
  iframeSrc: string;
  fullScreen?: boolean;
}) => {
  const [srcWithRefresh, setSrcWithRefresh] = useState("");

  const getRefreshedUrl = () => {
    const cacheBuster = `&_t=${Date.now()}`;
    return iframeSrc.includes("?")
      ? `${iframeSrc}${cacheBuster}`
      : `${iframeSrc}?${cacheBuster}`;
  };

  useEffect(() => {
    setSrcWithRefresh(getRefreshedUrl()); // initial load

    const interval = setInterval(() => {
      setSrcWithRefresh(getRefreshedUrl()); // update URL every minute
    }, REFRESH_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [iframeSrc]);

  return (
    <div
      className={`w-full h-full border rounded overflow-hidden bg-gray-800 shadow ${
        fullScreen ? "col-span-2 row-span-2" : ""
      }`}
    >
      <iframe
        key={srcWithRefresh} // ensures re-render
        src={srcWithRefresh}
        width="100%"
        height="100%"
        frameBorder="0"
        title="Grafana Dashboard"
        className="rounded-lg shadow-md"
      />
    </div>
  );
};

export default Graph;
