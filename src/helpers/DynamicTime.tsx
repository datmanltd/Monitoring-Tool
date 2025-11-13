export const applyTimeRange = (url: string, range: string) => {
  const now = Date.now();

  if (range === "today_so_far") {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    return `${url}&from=${startOfDay.getTime()}&to=${now}`;
  }

  // Convert range key to Grafana time format
  const timeRangeMap: Record<string, string> = {
    last_5m: "5m",
    last_15m: "15m",
    last_30m: "30m",
    last_1h: "1h",
    last_2h: "2h",
    last_3h: "3h",
    last_6h: "6h",
    last_12h: "12h",
    last_24h: "24h",
    last_7d: "7d",
    last_30d: "30d",
  };

  const from = timeRangeMap[range] || "3h"; // default to 3h
  return `${url}&from=now-${from}&to=now&refresh=5m&__feature.dashboardSceneSolo=true`;
};