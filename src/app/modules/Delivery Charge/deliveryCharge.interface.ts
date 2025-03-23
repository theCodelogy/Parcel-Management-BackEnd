export type TDeliveryCharge = {
  chargeList?: {
    sameDay: number;
    nextDay: number;
    subCity: number;
    outsideCity: number;
  };
  increasePerKG?: {
    sameDay: number;
    nextDay: number;
    subCity: number;
    outsideCity: number;
  };
};
