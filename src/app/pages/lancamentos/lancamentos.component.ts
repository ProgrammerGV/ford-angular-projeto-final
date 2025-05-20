import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

class Car {
  constructor(
    public nome: string,
    public preco: number,
    public alturaCacamba: number,
    public alturaVeiculo: number,
    public alturaSolo: number,
    public capacidadeCarga: number,
    public motor: number,
    public potencia: number,
    public volumeCacamba: number,
    public roda: string,
    public image: string
  ) {}
}

@Component({
  selector: 'app-lancamentos',
  imports: [CommonModule],
  templateUrl: './lancamentos.component.html',
  styleUrl: './lancamentos.component.css'
})
export class LancamentosComponent {
  carArr: Car[] = [];
  showComparePopup = false;
  
  cars = [
    new Car(
      'XLS 2.2 Diesel 4X4 AT 2022',
      220690,
      511,
      1821,
      232,
      1076,
      2.2,
      160,
      1180,
      'Aço Estampado 16',
      'assets/xls 2.2 diesel.jpg'
    ),
    new Car(
      'XL Cabine Simples 2.2 Diesel 4X4 MT 2022',
      183850,
      511,
      1821,
      232,
      1234,
      2.2,
      160,
      1420,
      'Aço Estampado 16',
      'assets/XL Cabine.jpg'
    ),
    new Car(
      'Storm 3.2 Diesel 4X4 AT 2022',
      222790,
      511,
      1821,
      232,
      1040,
      3.2,
      200,
      1180,
      'Liga Leve 17',
      'assets/storm.jpg'
    )
  ];

  getCarArrPosition(car: Car): number {
    return this.carArr.findIndex(c => c.nome === car.nome);
  }

  setCarToCompare(event: any, car: Car) {
    if (event.target.checked) {
      if (this.carArr.length < 2) {
        this.carArr.push(car);
      } else {
        event.target.checked = false;
        alert('Máximo de 2 carros para comparação');
      }
    } else {
      const index = this.getCarArrPosition(car);
      if (index !== -1) {
        this.carArr.splice(index, 1);
      }
    }
  }

  showCompare() {
    if (this.carArr.length !== 2) {
      alert('Por favor, selecione exatamente 2 carros para comparar');
      return;
    }
    this.showComparePopup = true;
  }

  hideCompare() {
    this.showComparePopup = false;
  }

  formatPrice(value: number): string {
    return value.toLocaleString('pt-BR', { 
      style: 'currency', 
      currency: 'BRL',
      minimumFractionDigits: 2
    });
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    const popup = document.getElementById('compare-popup');
    if (event.target === popup) {
      this.hideCompare();
    }
  }
}