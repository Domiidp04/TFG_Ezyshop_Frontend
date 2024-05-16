import { Assessment } from "./assessment";
import { Category } from "./category";
import { ImageProduct } from "./imageProduct";

export class Product {
  constructor(
   public id: number,
   public title: string,
   public description: string,
   public price: number,
   public discountPrice: number | null | undefined,
   public stock: number,
   public disabled: boolean | null | undefined,
   public category: Category,
   public imageProducts: ImageProduct[],
   public assessments: Assessment[] | null | undefined,
  ){ }
}
