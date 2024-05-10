import { OrderProduct } from "./orderProduct";

export class OrderDto{
  public orderProduct: OrderProduct[];
  public discountCode: string;
}
