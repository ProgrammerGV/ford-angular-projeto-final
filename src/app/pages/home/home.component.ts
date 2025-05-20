import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  router = inject(Router);

  logout() {
    sessionStorage.clear();
    this.router.navigate([""]);
  }

  slides: any[] = [
    {
      image: 'assets/fordranger2.webp',
      alt: 'Slide 1',
      title: 'Ford Ranger',
      description: 'Esta é a nova Ranger Ford 2022. Verifique novidades.',
      link: '/lancamentos'
    },
    {
      image: 'assets/imagem_2.jpg',
      alt: 'Slide 2',
      title: 'Ford, a nossa história.',
      description: 'Conheça a nossa origem.',
      link: '/contato' 
    },
    {
      image: 'assets/bronco.jpg',
      alt: 'Slide 3',
      title: 'Ford Bronco',
      description: 'Nova Ford Bronco Sport 2022',
      link: '/lancamentos' 
    }
  ];

  currentIndex: number = 0;
  private interval: any;

  onSlideClick(index: number): void {
    const slide = this.slides[index];
    if (slide.link) {
      this.router.navigate([slide.link]);
    }
  }

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  startAutoPlay(): void {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 5000); 
  }

  stopAutoPlay(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}