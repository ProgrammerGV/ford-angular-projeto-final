import { Component, inject, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Offcanvas } from 'bootstrap';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @ViewChild('fordMenuOffcanvas') offcanvasElement!: ElementRef;
  router = inject(Router);

  private hideOffcanvas() {
    const backdrop = document.querySelector('.offcanvas-backdrop');
    
    if (this.offcanvasElement) {
      const offcanvas = Offcanvas.getInstance(this.offcanvasElement.nativeElement);
      
      if (offcanvas) {
        offcanvas.hide();
        if (backdrop) backdrop.remove();
        document.body.classList.remove('offcanvas-open');
      }
    }
  }

  goToDashboard() {
    this.hideOffcanvas();
    this.router.navigate(["/dashboard"]);
  }

  goToHome() {
    this.hideOffcanvas();
    this.router.navigate(["/home"]);
  }

  goToContacts() {
    this.hideOffcanvas();
    this.router.navigate(["/contato"]);
  }

  goToReleases() {
    this.hideOffcanvas();
    this.router.navigate(["/lancamentos"]);
  }

  logout() {
  this.hideOffcanvas();
  sessionStorage.clear();
  this.router.navigate(['/']);
}

}