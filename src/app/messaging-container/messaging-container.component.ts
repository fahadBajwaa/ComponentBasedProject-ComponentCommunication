import { Component } from '@angular/core';
import { MessageComposerComponent } from './message-composer/message-composer.component';
import { MessageViewerComponent } from './message-viewer/message-viewer.component';

@Component({
  selector: 'app-messaging-container',
  standalone: true,
  imports: [MessageComposerComponent, MessageViewerComponent],
  templateUrl: './messaging-container.component.html'
})
export class MessagingContainerComponent {}
