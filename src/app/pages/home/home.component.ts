import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [ CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  router = inject(Router)

  logout() {
    sessionStorage.clear()
    this.router.navigate([""])
  }

  slides: any[] = [
    {
      image: 'img/imagem_1.jpg',
      alt: 'Slide 1',
      title: 'Primeiro Slide',
      description: 'Descrição do primeiro slide'
    },
    {
      image: 'img/imagem_2.jpg',
      alt: 'Slide 2',
      title: 'Segundo Slide',
      description: 'Descrição do segundo slide'
    },
    {
      image: 'img/imagem_3.jpg',
      alt: 'Slide 3',
      title: 'Terceiro Slide',
      description: 'Descrição do terceiro slide'
    }
  ];

  currentIndex: number = 0;
  private interval: any;

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




