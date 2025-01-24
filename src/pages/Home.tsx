import CardSlider from "../components/CardSlider";
import Header from "../components/Header";
import Icon from "../components/Icon";
import TradeLogs from "../components/TradeLogs";
import useTradeLogs from "../hook/useTradeLogs";
import TradeLogModal from "../components/TradeLogModal";
import { useState } from "react";

import { LogType } from "../hook/useTradeLogs";

export default function Home() {
  const { totals, addTradeLog, tradeLogs } = useTradeLogs({ limit: 5 });

  const [open, setOpen] = useState(false);
  const [type, setType] = useState<LogType>("loot");

  const openTradeLogModal = (type: LogType) => {
    setType(type);
    setOpen(!open);
  };

  return (
    <div className="min-h-screen bg-custom-dark z-0">
      <Header />
      <CardSlider totals={totals} />
      <div className="w-full px-4 pb-7 mb-3">
        <div className="flex text-white justify-between gap-2">
          <div
            className="flex flex-col items-center justify-center gap-2 w-1/3"
            onClick={() => openTradeLogModal("loot")}
          >
            <div className="relative bg-custom-teal p-4 rounded-full">
              <Icon icon="dollar" size={48} />
            </div>
            Add Loot
          </div>
          <div
            className="flex flex-col items-center justify-center gap-2 w-1/3"
            onClick={() => openTradeLogModal("save")}
          >
            <div className="relative bg-custom-teal p-4 rounded-full">
              <Icon icon="piggy" size={48} />
            </div>
            Move to Vault
          </div>
          <div
            className="flex flex-col items-center justify-center gap-2 w-1/3"
            onClick={() => openTradeLogModal("spend")}
          >
            <div className="relative bg-custom-teal p-4 rounded-full">
              <Icon icon="fire" size={48} />
            </div>
            Burn Loot
          </div>
        </div>
      </div>
      <TradeLogs tradeLogs={tradeLogs} recent={true} />
      <TradeLogModal
        open={open}
        type={type}
        close={setOpen}
        addTradeLog={addTradeLog}
      />
    </div>
  );
}
