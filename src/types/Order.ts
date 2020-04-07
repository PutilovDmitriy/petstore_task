export interface Order {
  info: OrderInfo | null;
  loading: boolean;
  error: any;
}

export interface OrderInfo {
  id: number;
  perId: number;
  quantity: number;
  shipDate: string;
  status: "placed" | "delivered";
  complete: boolean;
}
