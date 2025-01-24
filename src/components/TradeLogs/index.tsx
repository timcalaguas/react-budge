import { Link } from "react-router-dom";
import Log, { LogProps } from "../Log";
import { useState } from "react";
import Icon from "../Icon";

interface TradeLogsProps {
  tradeLogs: LogProps[];
  recent: boolean;
  years?: number[];
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function TradeLogs({
  tradeLogs,
  recent,
  years,
}: TradeLogsProps) {
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear()
  );

  console.log(years);

  return (
    <div className="w-full px-4 pb-7">
      <div className="flex justify-between items-center mb-3">
        <h4 className="text-lg text-white">{recent && "Recent "}Trade Logs</h4>

        {recent && (
          <Link to={"/trade-logs"} className="text-sm text-white/60 underline">
            View all
          </Link>
        )}
      </div>
      {!recent && tradeLogs.length > 0 && (
        <div className="flex gap-2 mb-6">
          {years && (
            <div className="relative w-full">
              <select
                id="year"
                value={selectedYear}
                onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                className="w-full appearance-none bg-custom-teal px-3 py-2 rounded"
              >
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <Icon
                className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2"
                icon="chevron-down"
                size={16}
              />
            </div>
          )}
          {years && (
            <div className="relative w-full">
              <select
                id="year"
                value={selectedYear}
                onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                className="w-full appearance-none bg-custom-teal px-3 py-2 rounded"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <Icon
                className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2"
                icon="chevron-down"
                size={16}
              />
            </div>
          )}
        </div>
      )}

      <div className="flex flex-col gap-2">
        {tradeLogs.length > 0 ? (
          tradeLogs.map((tradeLog: LogProps) => (
            <Log
              amount={tradeLog.amount}
              date={tradeLog.date}
              title={tradeLog.title}
              type={tradeLog.type}
            />
          ))
        ) : (
          <div className="text-center text-white/60 p-4 border-white/60 border">
            No Trade Logs yet
          </div>
        )}
      </div>
    </div>
  );
}
