import { Component } from '@angular/core';
import { Footer } from '../../../components/footer/footer.component';
import { HeaderComponent } from '../../../components/header/header.component';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-home-layout',
  imports: [Footer, HeaderComponent, RouterOutlet],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.css'
})
export class HomeLayoutComponent {

}
