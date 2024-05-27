import { Order } from "./order";
import { Product } from "./product";

export class OrderProduct{
  public amount: number;
  public price: number;
  public order: Order;
  public product: Product;
}
