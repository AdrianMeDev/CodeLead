import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../core/components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-page-project-generate',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule],
  templateUrl: './page-project-generate.component.html',
  styleUrl: './page-project-generate.component.scss',
})
export class PageProjectGenerateComponent {
  projectForm = new FormGroup({
    topic: new FormControl(''),
    technologies: new FormControl(''),
    languages: new FormControl(''),
    experienceLevel: new FormControl(''),
    projectDuration: new FormControl(''),
    userInputText: new FormControl(''),
  });

  onSubmit() {
    console.log(this.projectForm.value);
  }
}
