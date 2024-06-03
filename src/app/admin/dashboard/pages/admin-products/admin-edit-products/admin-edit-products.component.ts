import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../../../model/user';
import { AuthService } from '../../../../../services/auth.service';
import { UserService } from '../../../../../services/user.service';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CategoryService } from '../../../../../services/category.service';
import { Category } from '../../../../../model/category';
import { Product } from '../../../../../model/product';
import { ProductService } from '../../../../../services/product.service';

@Component({
  selector: 'app-admin-edit-products',
  standalone: true,
  imports: [ReactiveFormsModule, DropdownModule],
  templateUrl: './admin-edit-products.component.html',
  styleUrl: './admin-edit-products.component.scss'
})
export class AdminEditProductsComponent {

  public product: Product;
  public productId: number;
  public updateForm: FormGroup;
  public categories: Category[];

  constructor(private route: Router, private productService: ProductService, private activatedRoute: ActivatedRoute, private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.productId = parseInt(this.activatedRoute.snapshot.paramMap.get('productId'));
    this.getProductById(this.productId);
    this.getCategories();
    this.initForm();
  }

  private initForm() {
    this.updateForm = new FormGroup({
      id: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      discountPrice: new FormControl(null, Validators.required),
      stock: new FormControl('', Validators.required),
      categoryId: new FormControl('', Validators.required),
    });

    this.updateForm.valueChanges.subscribe(
      (form)=> {
        if (form.discountPrice == "") {
          this.updateForm.get('discountPrice').setValue(null);
        }

      }
    )
  }

  private initFormData(): void {
    this.updateForm.get('id').setValue(this.product?.id);
    this.updateForm.get('title').setValue(this.product?.title);
    this.updateForm.get('title').setValue(this.product?.title || '');
    this.updateForm.get('description').setValue(this.product?.description || '');
    this.updateForm.get('price').setValue(this.product?.price || '');
    this.updateForm.get('discountPrice').setValue(this.product?.discountPrice || '');
    this.updateForm.get('stock').setValue(this.product?.stock || '');
    this.updateForm.get('categoryId').setValue(this.product?.category.id || null);
  }

  public getProductById(productId: number){
    this.productService.getProduct(productId).subscribe(
      (product)=>{
        this.product = product;
        this.initFormData();
      }
    )
  }

  public getCategories(){
    this.categoryService.getCategories().subscribe(
      (categories)=>{
        this.categories = categories;
      }
    )
  }

  public updateProduct(productId: number, product:Product) {
    console.log(product);

    this.productService.updateProduct(productId, product).subscribe(
      (response) => {
        this.route.navigate(['/dashboard/products'])
      }
    );
  }

}
