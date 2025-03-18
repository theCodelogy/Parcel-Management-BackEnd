
type DeliveryType = "Same Day" | "Next Day" | "Sub City" | "Outside City";
type PackagingType = "Poly" | "Bubble Poly" | "Box" | "Box Poly";
type PriorityType = "Normal" | "High";
type PaymentMethod = "COD";

export type TParcel = {
  TrakingId:string;
  merchantEmail: string;
  merchantName: string;
  merchantPhone:string;
  merchantAddress:string;
  cashCollection: number;
  sellingPrice: number;
  invoice: string;
  deliveryType: DeliveryType;
  Weight: number;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  note?: string;
  packaging: PackagingType;
  priority: PriorityType;
  paymentMethod: PaymentMethod;
  deliveryCharge: number;
  liquidORFragile?:number;
  codCharge: number;
  totalCharge: number;
  vat: number;
  netPayable: number;
  advance:number;
  currentPayable: number;
  currentStatus:string;
  parcelStatus:object[];
};