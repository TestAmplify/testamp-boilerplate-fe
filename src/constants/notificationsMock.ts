export const notificationsMock = {
  notifications: [
    {
      id: 1,
      title:
        "Your test run for ‘Release_v1.2’ completed successfully on Nov 4 at 10:45 AM.",
      timestamp: "2024-11-04T10:45:00Z",
      category: "Test Execution",
      read: false,
    },
    {
      id: 2,
      title: "Your weekly activity summary is ready!",
      timestamp: "2024-11-04T12:00:00Z",
      category: "Activity",
      read: true,
    },
    {
      id: 3,
      title:
        "A new login from IP [192.168.1.1] was detected. If this wasn't you, please review security settings.",
      timestamp: "2024-11-04T14:30:00Z",
      category: "Security",
      read: false,
    },
    {
      id: 4,
      title:
        "TestAmplify will be undergoing maintenance on Nov 6 from 1:00 AM to 3:00 AM. Expect minor downtime.",
      timestamp: "2024-12-04T14:30:00Z",
      category: "Activity",
      read: true,
    },
  ],
  unreadCounts: {
    all: 3,
    test_execution: 1,
    activity: 1,
    security: 1,
  },
};

export interface Notification {
  id: number;
  title: string;
  timestamp: string;
  category: string;
  read: boolean;
}

export interface NotificationValues {
  notifications: Notification[];
  unreadCounts: {
    all: number;
    test_execution: number;
    activity: number;
    security: number;
  };
}
