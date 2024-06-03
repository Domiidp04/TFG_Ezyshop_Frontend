import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  NgModel,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { Category } from '../../../../../model/category';
import { Product } from '../../../../../model/product';
import { CategoryService } from '../../../../../services/category.service';
import { ProductService } from '../../../../../services/product.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { StepperModule } from 'primeng/stepper';
import { PasswordModule } from 'primeng/password'


@Component({
  selector: 'app-admin-create-products',
  standalone: true,
  imports: [ReactiveFormsModule, DropdownModule, StepperModule,
    ButtonModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    CommonModule, PasswordModule],
  templateUrl: './admin-create-products.component.html',
  styleUrl: './admin-create-products.component.scss',
  styles: [
    `.p-stepper {
        flex-basis: 40rem;
    }
    `
]
})
export class AdminCreateProductsComponent {

  active: number | undefined = 0;

    name: string | undefined = null;

    email: string | undefined = null;

    password: string | undefined = null;

    option1: boolean | undefined = false;

    option2: boolean | undefined = false;

    option3: boolean | undefined = false;

    option4: boolean | undefined = false;

    option5: boolean | undefined = false;

    option6: boolean | undefined = false;

    option7: boolean | undefined = false;

    option8: boolean | undefined = false;

    option9: boolean | undefined = false;

    option10: boolean | undefined = false;



  public product: Product;
  public createForm: FormGroup;
  public categories: Category[];

  constructor(
    private route: Router,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.initForm();
  }

  private initForm() {
    this.createForm = new FormGroup({
      id: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      discountPrice: new FormControl(null, Validators.required),
      stock: new FormControl('', Validators.required),
      categoryId: new FormControl('', Validators.required),
    });

    this.createForm.valueChanges.subscribe((form) => {
      if (form.discountPrice == '') {
        this.createForm.get('discountPrice').setValue(null);
      }
    });
  }

  public getCategories() {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  public async create(product: Product): Promise<void>{
    const productCreated = await this.productService.create(product);
    console.log(productCreated);

    this.route.navigate(['/dashboard/products/image/', productCreated.id])
  }
}
