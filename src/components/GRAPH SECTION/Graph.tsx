const Graph = ({
  iframeSrc,
  fullScreen = false,
}: {
  iframeSrc: string;
  fullScreen?: boolean;
}) => {
  return (
    <div
      className={`w-full h-full border rounded overflow-hidden bg-gray-800 shadow ${
        fullScreen ? "col-span-2 row-span-2" : ""
      }`}
    >
      <iframe
        src={iframeSrc}
        width="100%"
        height="100%"
        frameBorder="0"
        title="Grafana Snapshots"
        className="rounded-lg shadow-md"
      />
    </div>
  );
};

export default Graph;

