import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { HeaderComponent } from './core/components/header/header.component';
import { ThemeService } from './core/services/theme.service';
import { PageProjectGenerateComponent } from './features/projects/pages/page-project-generate/page-project-generate.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, PageProjectGenerateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  themeService = inject(ThemeService);

  constructer() {
    this.themeService.initializeTheme();
  }

  ngOnInit(): void {
    initFlowbite();
  }
}
