import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  // ✅ Define galleryImages property
  galleryImages = [
    { src: 'assets/gallery/image1.jpg', alt: 'Gallery Image 1' },
    { src: 'assets/gallery/image2.jpg', alt: 'Gallery Image 2' },
    { src: 'assets/gallery/image3.jpg', alt: 'Gallery Image 3' }
  ];
}
