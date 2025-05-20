import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

class Contato {
  constructor(
    public nome: string,
    public email: string,
    public telefone: string,
    public tipoContato: string,
    public mensagem: string
  ) {}
}

@Component({
  selector: 'app-contato',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})

export class ContactFormComponent {
  contactForm: FormGroup;
  showPopup = false;
  popupMessage = '';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      tipoContato: ['elogio'],
      mensagem: ['', Validators.required],
      termosAceitos: [false, Validators.requiredTrue],
      receberNovidades: [false]
    });
  }

  formatarTelefone(event: any): void {
    let valor = event.target.value.replace(/\D/g, "");
    if (valor.length > 2) valor = `(${valor.substring(0, 2)}) ${valor.substring(2)}`;
    if (valor.length > 10) valor = `${valor.substring(0, 10)}-${valor.substring(10, 14)}`;
    this.contactForm.patchValue({ telefone: valor });
  }

  enviar(): void {
    if (this.contactForm.invalid) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    const formValue = this.contactForm.value;
    const novoContato = new Contato(
      formValue.nome,
      formValue.email,
      formValue.telefone,
      formValue.tipoContato,
      formValue.mensagem
    );

    console.log(novoContato);

    this.popupMessage = `Obrigado, ${formValue.nome}! Sua mensagem foi enviada com sucesso.`;
    this.showPopup = true;
  }

  fecharPopup(): void {
    this.showPopup = false;
    this.contactForm.reset({
      tipoContato: 'elogio',
      termosAceitos: false,
      receberNovidades: false
    });
  }

  toggleCheckbox(field: string): void {
    const currentValue = this.contactForm.get(field)?.value;
    this.contactForm.get(field)?.setValue(!currentValue);
  }
}