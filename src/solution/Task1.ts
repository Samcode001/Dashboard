interface UserDevice {
  deviceId: string;
  loggedIn: Date;
  loggedOut: Date | null;
  lastSeenAt: Date;
}

interface User {
  userId: string;
  devices: UserDevice[];
}

type MonthlyUserCount = {
  [month: string]: Set<string>; // To store unique user IDs
};

const getMonthlyLoggedInUsers = (users: User[]): MonthlyUserCount => {
  const monthlyUserCount: MonthlyUserCount = {};

  users.forEach((user) => {
    user.devices.forEach((device) => {
      let currentMonth = new Date(device.loggedIn);
      const loggedOut = device.loggedOut || new Date(); // Use current date if not logged out

      while (currentMonth <= loggedOut) {
        const monthKey = currentMonth.toISOString().slice(0, 7); // Format YYYY-MM

        if (!monthlyUserCount[monthKey]) {
          monthlyUserCount[monthKey] = new Set<string>();
        }

        monthlyUserCount[monthKey].add(user.userId);

        // Move to the next month
        currentMonth.setMonth(currentMonth.getMonth() + 1);
      }
    });
  });

  return monthlyUserCount;
};

const getActiveUsers = (users: User[], currentMonth: string): string[] => {
  const activeUsers = new Set<string>();

  users.forEach((user) => {
    user.devices.forEach((device) => {
      const lastSeenMonth = device.lastSeenAt.toISOString().slice(0, 7);
      const loggedOut = device.loggedOut || new Date(); // Use current date if not logged out

      if (
        lastSeenMonth === currentMonth &&
        device.lastSeenAt >= device.loggedIn &&
        device.lastSeenAt <= loggedOut
      ) {
        activeUsers.add(user.userId);
      }
    });
  });

  return Array.from(activeUsers);
};

// Example usage
const users: User[] = [
  {
    userId: "user1",
    devices: [
      {
        deviceId: "device1",
        loggedIn: new Date("2024-01-01T10:00:00Z"),
        loggedOut: null,
        lastSeenAt: new Date("2024-01-15T12:00:00Z"),
      },
    ],
  },
  {
    userId: "user2",
    devices: [
      {
        deviceId: "device2",
        loggedIn: new Date("2024-01-05T09:00:00Z"),
        loggedOut: new Date("2024-02-01T10:00:00Z"),
        lastSeenAt: new Date("2024-01-25T11:00:00Z"),
      },
    ],
  },
];

const monthlyLoggedInUsers = getMonthlyLoggedInUsers(users);
console.log("Monthly Logged In Users:", monthlyLoggedInUsers);

const currentMonth = "2024-01";
const activeUsers = getActiveUsers(users, currentMonth);
console.log("Active Users:", activeUsers);
