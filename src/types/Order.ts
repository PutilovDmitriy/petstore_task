export interface Order {
  info: OrderInfo | null;
  loading: boolean;
  error: any;
}

export interface OrderInfo {
  id: number;
  petId: number;
  quantity: number;
  shipDate: string;
  status: Status;
  complete: boolean;
}

export type Status = "placed" | "approved" | "delivered";
