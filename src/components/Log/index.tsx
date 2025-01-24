import { formatDate, formatToPeso } from "../../utils/general";
import Icon from "../Icon";

export interface LogProps {
  type: "loot" | "save" | "spend";
  title: string;
  date?: number;
  amount: number;
  icon?: string;
}

const TypeIcon = {
  loot: "dollar",
  save: "piggy",
  spend: "fire",
};

export default function Log({ type, title, date, amount }: LogProps) {
  const key: keyof typeof TypeIcon = type;
  const icon = TypeIcon[key];

  return (
    <div className="flex justify-between items-center px-4 py-3 bg-custom-slate rounded-xl">
      <div className="flex gap-3 items-center">
        <div className="grid place-items-center p-3 rounded-full bg-custom-dark">
          <Icon icon={icon} size={24} />
        </div>
        <div>
          <h6 className="text-white font-medium">{title}</h6>
          <p className=" text-xs opacity-55">
            {date ? formatDate(date) : "Today"}
          </p>
        </div>
      </div>
      <h3 className="text-lg">{formatToPeso(amount)}</h3>
    </div>
  );
}
