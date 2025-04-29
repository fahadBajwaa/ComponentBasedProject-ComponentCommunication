import { Component } from '@angular/core';
import { SharedService } from '../services/message.service';

@Component({
  selector: 'app-message-viewer',
  standalone: true,
  templateUrl: './message-viewer.component.html'
})
export class MessageViewerComponent {
  constructor(public shared: SharedService) {}
}
