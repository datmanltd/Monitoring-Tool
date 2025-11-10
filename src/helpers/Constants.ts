export const TIME_RANGE_MAP: Record<string, number> = {
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
  today_so_far: -1,
};

export const TIME_RANGES = [
  { key: "last_5m", label: "Last 5 minutes", ms: 5 * 60 * 1000 },
  { key: "last_15m", label: "Last 15 minutes", ms: 15 * 60 * 1000 },
  { key: "last_30m", label: "Last 30 minutes", ms: 30 * 60 * 1000 },
  { key: "last_1h", label: "Last 1 hour", ms: 1 * 60 * 60 * 1000 },
  { key: "last_3h", label: "Last 3 hours", ms: 3 * 60 * 60 * 1000 },
  { key: "last_6h", label: "Last 6 hours", ms: 6 * 60 * 60 * 1000 },
  { key: "last_12h", label: "Last 12 hours", ms: 12 * 60 * 60 * 1000 },
  { key: "last_24h", label: "Last 24 hours", ms: 24 * 60 * 60 * 1000 },
  {
    key: "today_so_far",
    label: "Today so far",
    getRange: () => {
      const now = Date.now();
      const startOfToday = new Date();
      startOfToday.setHours(0, 0, 0, 0);
      return { from: startOfToday.getTime(), to: now };
    },
  },
];

export const COUNTRY_GRAPHS: Record<string, string[]> = {
  uk: [
    `https://grafana.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&panelId=panel-1`,
    `https://grafana.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&panelId=panel-3`,
    `https://grafana.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&panelId=panel-2`,
    `https://grafana.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&panelId=panel-4`,
    `https://grafana.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&panelId=panel-5`,
  ],
  aus: [
    `https://grafana.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&panelId=panel-7`,
    `https://grafana.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&panelId=panel-8`,
    `https://grafana.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&panelId=panel-9`,
    `https://grafana.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&panelId=panel-10`,
    `https://grafana.datman.tools/d-solo/kugxgcc/live-wow-per-country?orgId=1&panelId=panel-6`,
  ],
};

export const PAYMENTS_GRAPHS: string[] = [
  `https://grafana.datman.tools/d-solo/kugxgcb/live-wow?orgId=1&timezone=Europe%2FLondon&var-currency=$__all&panelId=panel-5&__feature.dashboardSceneSolo=true"`,
  `https://grafana.datman.tools/d-solo/kugxgcb/live-wow?orgId=1&timezone=Europe%2FLondon&var-currency=$__all&panelId=panel-1&__feature.dashboardSceneSolo=true`,
  `https://grafana.datman.tools/d-solo/kugxgcb/live-wow?orgId=1&timezone=Europe%2FLondon&var-currency=$__all&panelId=panel-3&__feature.dashboardSceneSolo=true`,
  `https://grafana.datman.tools/d-solo/kugxgcb/live-wow?orgId=1&timezone=Europe%2FLondon&var-currency=$__all&panelId=panel-2&__feature.dashboardSceneSolo=true`,
  `https://grafana.datman.tools/d-solo/kugxgcb/live-wow?orgId=1&timezone=Europe%2FLondon&var-currency=$__all&panelId=panel-4&__feature.dashboardSceneSolo=true`,
];

export const COUNT_ERRORS_SNS_GRAPHS: string[] = [
  // Count
  `https://grafana.datman.tools/d-solo/ku8s6kf/business-live-monitoring?orgId=1&timezone=Europe%2FLondon&panelId=panel-1&__feature.dashboardSceneSolo=true`,
  `https://grafana.datman.tools/d-solo/ku8s6kf/business-live-monitoring?orgId=1&timezone=Europe%2FLondon&panelId=panel-2&__feature.dashboardSceneSolo=true`,
  `https://grafana.datman.tools/d-solo/ku8s6kf/business-live-monitoring?orgId=1&timezone=Europe%2FLondon&panelId=panel-3&__feature.dashboardSceneSolo=true`,
  `https://grafana.datman.tools/d-solo/ku8s6kf/business-live-monitoring?orgId=1&timezone=Europe%2FLondon&panelId=panel-4&__feature.dashboardSceneSolo=true`,
  `https://grafana.datman.tools/d-solo/ku8s6kf/business-live-monitoring?orgId=1&timezone=Europe%2FLondon&panelId=panel-5&__feature.dashboardSceneSolo=true`,
  `https://grafana.datman.tools/d-solo/ku8s6kf/business-live-monitoring?orgId=1&timezone=Europe%2FLondon&panelId=panel-6&__feature.dashboardSceneSolo=true`,
  // Error
  `https://grafana.datman.tools/d-solo/ku8s6kf/business-live-monitoring?orgId=1&from=now%2Fd&to=now&timezone=Europe%2FLondon&panelId=panel-7&__feature.dashboardSceneSolo=true`,
  `https://grafana.datman.tools/d-solo/ku8s6kf/business-live-monitoring?orgId=1&from=now%2Fd&to=now&timezone=Europe%2FLondon&panelId=panel-10&__feature.dashboardSceneSolo=true`,
  `https://grafana.datman.tools/d-solo/ku8s6kf/business-live-monitoring?orgId=1&from=now%2Fd&to=now&timezone=Europe%2FLondon&panelId=panel-11&__feature.dashboardSceneSolo=true`,
  `https://grafana.datman.tools/d-solo/ku8s6kf/business-live-monitoring?orgId=1&from=now%2Fd&to=now&timezone=Europe%2FLondon&panelId=panel-8&__feature.dashboardSceneSolo=true`,
  `https://grafana.datman.tools/d-solo/ku8s6kf/business-live-monitoring?orgId=1&from=now%2Fd&to=now&timezone=Europe%2FLondon&panelId=panel-9&__feature.dashboardSceneSolo=true`,
  `https://grafana.datman.tools/d-solo/ku8s6kf/business-live-monitoring?orgId=1&from=now%2Fd&to=now&timezone=Europe%2FLondon&panelId=panel-15&__feature.dashboardSceneSolo=true`,
  `https://grafana.datman.tools/d-solo/ku8s6kf/business-live-monitoring?orgId=1&from=now%2Fd&to=now&timezone=Europe%2FLondon&panelId=panel-14&__feature.dashboardSceneSolo=true`,
  `https://grafana.datman.tools/d-solo/ku8s6kf/business-live-monitoring?orgId=1&from=now%2Fd&to=now&timezone=Europe%2FLondon&panelId=panel-13&__feature.dashboardSceneSolo=true`,
  `https://grafana.datman.tools/d-solo/ku8s6kf/business-live-monitoring?orgId=1&from=now%2Fd&to=now&timezone=Europe%2FLondon&panelId=panel-16&__feature.dashboardSceneSolo=true`,
  `https://grafana.datman.tools/d-solo/ku8s6kf/business-live-monitoring?orgId=1&from=now%2Fd&to=now&timezone=Europe%2FLondon&panelId=panel-18&__feature.dashboardSceneSolo=true`,
  `https://grafana.datman.tools/d-solo/ku8s6kf/business-live-monitoring?orgId=1&from=now%2Fd&to=now&timezone=Europe%2FLondon&panelId=panel-17&__feature.dashboardSceneSolo=true`,
  `https://grafana.datman.tools/d-solo/ku8s6kf/business-live-monitoring?orgId=1&from=now%2Fd&to=now&timezone=Europe%2FLondon&panelId=panel-19&__feature.dashboardSceneSolo=true`,
  // SNS
  `https://grafana.datman.tools/d-solo/ku2fnwv/sns-monitoring?orgId=1&from=1759926864697&to=1762522464697&timezone=Europe%2FLondon&panelId=panel-1&__feature.dashboardSceneSolo=true`,
  `https://grafana.datman.tools/d-solo/ku2fnwv/sns-monitoring?orgId=1&from=1759926864697&to=1762522464697&timezone=Europe%2FLondon&panelId=panel-2&__feature.dashboardSceneSolo=true`,
];

export const LAMBDA_AND_DATABASE_GRAPHS: string[] = [
  // Lambda
  `https://grafana.datman.tools/d-solo/kugvv2w/lambda-monitoring?orgId=1&timezone=browser&panelId=panel-2&__feature.dashboardSceneSolo=true`,
  `https://grafana.datman.tools/d-solo/kugvv2w/lambda-monitoring?orgId=1&timezone=browser&panelId=panel-1&__feature.dashboardSceneSolo=true`,
  `https://grafana.datman.tools/d-solo/kugvv2w/lambda-monitoring?orgId=1&timezone=browser&panelId=panel-4&__feature.dashboardSceneSolo=true`,
  `https://grafana.datman.tools/d-solo/kugvv2w/lambda-monitoring?orgId=1&timezone=browser&panelId=panel-3&__feature.dashboardSceneSolo=true`,
  // Database -- Gateway -- 1
  `https://grafana.datman.tools/d-solo/kutmzwl/database-monitoring?orgId=1&timezone=browser&panelId=panel-1&__feature.dashboardSceneSolo=true`,
  `https://grafana.datman.tools/d-solo/kutmzwl/database-monitoring?orgId=1&timezone=browser&panelId=panel-2&__feature.dashboardSceneSolo=true`,
  // Database -- CP --1
  `https://grafana.datman.tools/d-solo/kutmzwl/database-monitoring?orgId=1&timezone=browser&panelId=panel-4&__feature.dashboardSceneSolo=true`,
  `https://grafana.datman.tools/d-solo/kutmzwl/database-monitoring?orgId=1&timezone=browser&panelId=panel-5&__feature.dashboardSceneSolo=true`,
  // Database -- Gateway -- 2
  `https://grafana.datman.tools/d-solo/kutmzwl/database-monitoring?orgId=1&timezone=browser&panelId=panel-6&__feature.dashboardSceneSolo=true`,
  `https://grafana.datman.tools/d-solo/kutmzwl/database-monitoring?orgId=1&timezone=browser&panelId=panel-7&__feature.dashboardSceneSolo=true`,
  // Database -- CP --2
  `https://grafana.datman.tools/d-solo/kutmzwl/database-monitoring?orgId=1&timezone=browser&panelId=panel-8&__feature.dashboardSceneSolo=true`,
  `https://grafana.datman.tools/d-solo/kutmzwl/database-monitoring?orgId=1&timezone=browser&panelId=panel-9&__feature.dashboardSceneSolo=true`,
];
