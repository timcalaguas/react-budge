import Icon from "../Icon";
import { formatToPeso } from "../../utils/general";

interface CardProps {
  money: number;
  icon?: string;
  title: string;
}

export default function Card({ money, icon, title }: CardProps) {
  return (
    <div className="bg-custom-teal p-4 rounded-3xl relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="text-xl font-semibold text-white flex items-center gap-2">
          {title}
          {title === "Vault" && <Icon icon="settings" size={16} />}
        </h2>
        <p className="text-2xl font-bold text-green-500">
          {formatToPeso(money)}
        </p>
      </div>
      <Icon
        icon={icon || "coin"}
        size={120}
        className="absolute text-custom-dark -right-3 -top-3 z-0"
      />
    </div>
  );
}
