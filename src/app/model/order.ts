import { User } from "./user";

export class Order {
  public id: number;
  public orderDate: Date;
  public shippingDate: Date;
  public totalAmount: number;
  public shippingAmount: number;
  public savedAmount: number;
  public paymentAmount: number;
  public currency: string = 'EUR';
  public method: string = 'paypal';
  public intent: string = 'sale';
  public payment: boolean;
  public paymentId: string;
  public user: User;
  public orders: Order[]
}
