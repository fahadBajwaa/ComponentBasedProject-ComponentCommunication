import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessagingContainerComponent } from './messaging-container/messaging-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MessagingContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'component-based-project';
}
