import { TIME_RANGE_MAP } from "./Constants";

export const applyTimeRange = (url: string, range: string) => {
  const now = Date.now();

  if (range === "today_so_far") {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    return `${url}&from=${startOfDay.getTime()}&to=${now}`;
  }

  const from = now - TIME_RANGE_MAP[range];
  return `${url}&from=${from}&to=${now}&refresh=5m&__feature.dashboardSceneSolo=true`;
};
