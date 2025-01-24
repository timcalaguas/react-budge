// Utility function to format integer as Philippine pesos
export function formatToPeso(amount: number) {
  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
  }).format(amount);
}

export const formatDate = (date: Date | string | number) => {
  const options = {
    month: "2-digit",
    day: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  return new Date(date).toLocaleString("en-US", options as any);
};
