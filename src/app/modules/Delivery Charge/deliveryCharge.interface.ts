export type TDeliveryCharge = {
  category: string;
  weight?: number;
  sameDay: number;
  nextDay: number;
  subCity: number;
  outsideCity: number;
  status: "Active" | "Inactive";
  position: number;
};
