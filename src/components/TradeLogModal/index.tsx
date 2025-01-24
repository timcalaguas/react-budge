import { useState } from "react";
import { LogType } from "../../hook/useTradeLogs";
import { Input } from "../Input";
import Icon from "../Icon";

interface TradeModalProps {
  type: "loot" | "save" | "spend";
  open: boolean;
  close: (open: boolean) => void;
  addTradeLog: (
    title: string,
    date: number,
    amount: number,
    type: LogType
  ) => void;
}

const MODAL_TITLE = {
  loot: "ADD LOOT",
  save: "MOVE TO VAULT",
  spend: "BURN LOOT",
};

export default function TradeLogModal({
  type,
  open,
  close,
  addTradeLog,
}: TradeModalProps) {
  const [amount, setAmount] = useState(0);
  const [title, setTitle] = useState("");

  return (
    open && (
      <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-md grid place-items-center">
        <div className="relative w-11/12 bg-custom-teal p-3 rounded-md">
          <h5 className="uppercase mb-3">{MODAL_TITLE[type]}</h5>
          <Input label="entry" setValue={setTitle} value={title} type="text" />
          <Input
            label="amount"
            setValue={setAmount}
            value={amount}
            type="number"
          />

          <button
            className="bg-white text-custom-teal px-2 py-1 rounded w-full"
            onClick={() => {
              addTradeLog(
                title,
                new Date().getTime(),
                parseFloat(amount.toString()),
                type
              );
              close(false);
              setTitle("");
              setAmount(0);
            }}
          >
            Add Log
          </button>
          <div
            className="absolute bg-red-600 p-2 rounded-full -right-2 -top-2"
            onClick={() => close(false)}
          >
            <Icon icon="close" size={16} />
          </div>
        </div>
      </div>
    )
  );
}
