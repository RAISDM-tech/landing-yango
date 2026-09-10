import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // Déclaration de notre Formulaire Réactif avec ses règles de validation
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    service: new FormControl('course', [Validators.required])
  });

  // Fonction exécutée lors de la soumission du formulaire
  onSubmit() {
    if (this.contactForm.valid) {
      alert('🚀 Merci ! Votre demande a bien été enregistrée. Un agent Yango vous contactera très rapidement.');
      this.contactForm.reset({ service: 'course' });
    } else {
      alert('Veuillez remplir tous les champs obligatoires.');
    }
  }
}
