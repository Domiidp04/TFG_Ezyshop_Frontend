import { Component, OnInit } from '@angular/core';
import { Category } from '../../model/category';
import { CategoryService } from '../../services/category.service';
import { ProductCategoriesComponent } from '../../components/product-categories/product-categories.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [ProductCategoriesComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit{

  public categories: Category[] = [];

  constructor(private categoryService: CategoryService){ }

  ngOnInit(): void {
    this.getCategories();
  }

  private getCategories(): void{
    this.categoryService.getCategories().subscribe(
      (categories) =>{
        this.categories = categories;
      }
    );
  }

}
