import Header from "../components/Header";
import TradeLogs from "../components/TradeLogs";
import useTradeLogs from "../hook/useTradeLogs";

export default function TradeLogsPage() {
  const { years, tradeLogs } = useTradeLogs({
    limit: null,
  });

  return (
    <div className="min-h-screen bg-custom-dark z-0">
      <Header />
      <TradeLogs tradeLogs={tradeLogs} recent={false} years={years} />
    </div>
  );
}
