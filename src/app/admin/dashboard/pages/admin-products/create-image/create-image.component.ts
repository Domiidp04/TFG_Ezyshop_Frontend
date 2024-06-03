import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageProductService } from '../../../../../services/image-product.service';
import { FileUploadModule } from 'primeng/fileupload';
import { BadgeModule } from 'primeng/badge';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api/messageservice';


@Component({
  selector: 'app-create-image',
  standalone: true,
  imports: [FileUploadModule, BadgeModule, CommonModule, ToastModule],
  templateUrl: './create-image.component.html',
  styleUrl: './create-image.component.scss',
})
export class CreateImageComponent implements OnInit {
  public productId: number;
  public selectedFile: File | null = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ImageProductService,
    private router: Router,
  ) {}


  ngOnInit(): void {
    this.productId = parseInt(
      this.activatedRoute.snapshot.paramMap.get('productId')
    );
  }
  totalSize: number = 0;
  totalSizePercent: number = 0;
  selectedFiles: File[] = [];

  onSelectedFiles(event: any) {
    this.selectedFiles = Array.from(event.files);
    this.calculateTotalSize();
  }


  calculateTotalSize() {
    this.totalSize = this.selectedFiles.reduce((acc: number, file: File) => acc + file.size, 0);
    this.totalSizePercent = (this.totalSize / 1000000) * 100; // Assuming maxFileSize is 1MB
  }

  uploadEvent(uploadCallback: any) {
    const formData = new FormData();
    this.selectedFiles.forEach(file => formData.append('imageFiles', file, file.name));

    this.productService.uploadImage(formData, this.productId).subscribe(
      (response) => {
        uploadCallback();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onTemplatedUpload() {
    this.calculateTotalSize();
  }

  // image-upload.component.ts
formatSize(bytes: number): string {
  if (bytes === 0) {
    return '0 B';
  }
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

}
