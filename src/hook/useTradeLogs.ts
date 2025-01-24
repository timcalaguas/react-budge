import { useState, useEffect } from "react";
import { LogProps } from "../components/Log";
import { toast } from "react-toastify";

interface useTradeLogProps {
  limit: number | null;
}

export type LogType = "spend" | "loot" | "save";

// Custom hook to manage trade logs
function useTradeLogs({ limit = null }: useTradeLogProps) {
  const [tradeLogs, setTradeLogs] = useState<LogProps[]>([]);
  const [totals, setTotals] = useState<LogProps[]>([]);
  const [years, setYears] = useState<number[]>([]);

  // Function to add a new trade log
  const addTradeLog = (
    title: string,
    date: number,
    amount: number,
    type: LogType
  ) => {
    const storedTradeLogs =
      JSON.parse(localStorage.getItem("tradeLogs")!) || [];
    const storedTotals = JSON.parse(localStorage.getItem("totals")!);

    const currentLoot = storedTotals[0].amount;

    // Allow 'spend' and 'save' only if loot > 0
    if (
      (type === "spend" || type === "save") &&
      (currentLoot < amount || currentLoot == 0)
    ) {
      toast.error("Insuffiecient Loot");
      return; // Optionally, show an alert or message here
    }

    const newLog = { title, date, amount, type };
    const updatedLogs =
      tradeLogs.length == 5
        ? [newLog, ...tradeLogs.slice(0, tradeLogs.length - 1)]
        : [newLog, ...tradeLogs];

    // Save updated logs to localStorage
    localStorage.setItem(
      "tradeLogs",
      JSON.stringify([newLog, ...storedTradeLogs])
    );
    setTradeLogs(updatedLogs);
    calculateTotals(newLog);
    toast.success("Nice one!");
  };

  const calculateTotals = (newLog: LogProps | null) => {
    const storedTotals = JSON.parse(localStorage.getItem("totals")!) || [
      {
        type: "loot",
        amount: 0,
        title: "Loot in Hand",
        icon: "hand-coin",
      },
      {
        type: "save",
        amount: 0,
        title: "Vault",
        icon: "piggy",
      },
      {
        type: "spend",
        amount: 0,
        title: "Damage Done",
        icon: "fire",
      },
    ];

    if (newLog) {
      switch (newLog.type) {
        case "loot":
          storedTotals[0].amount =
            parseFloat(storedTotals[0].amount) + newLog.amount;
          break;
        case "save":
          if (parseFloat(storedTotals[0].amount) < newLog.amount) break;
          storedTotals[0].amount =
            parseFloat(storedTotals[0].amount) - newLog.amount;
          storedTotals[1].amount =
            parseFloat(storedTotals[1].amount) + newLog.amount;
          break;
        case "spend":
          if (storedTotals[0].amount < newLog.amount) break;
          storedTotals[0].amount =
            parseFloat(storedTotals[0].amount) - newLog.amount;
          storedTotals[2].amount =
            parseFloat(storedTotals[2].amount) + newLog.amount;
          break;
      }
    }

    // Save totals to localStorage
    localStorage.setItem("totals", JSON.stringify(storedTotals));
    setTotals(storedTotals);
  };

  const getUniqueYearsFromLogs = (tradeLogs: LogProps[]) => {
    const uniqueYears = Array.from(
      new Set(
        tradeLogs.map((log: LogProps) => new Date(log.date!).getFullYear())
      )
    ).sort((a, b) => b - a);

    setYears(uniqueYears);
  };

  useEffect(() => {
    const storedLogs = JSON.parse(localStorage.getItem("tradeLogs")!) || [];
    calculateTotals(storedLogs);

    const sortedLogs = storedLogs.sort(
      (a: LogProps, b: LogProps) =>
        new Date(a.date!).getTime() - new Date(b.date!).getTime()
    );

    const limitedLogs = limit ? sortedLogs.slice(0, limit) : sortedLogs;
    getUniqueYearsFromLogs(sortedLogs);
    setTradeLogs(limitedLogs);
  }, []);

  return { years, totals, tradeLogs, addTradeLog };
}

export default useTradeLogs;
