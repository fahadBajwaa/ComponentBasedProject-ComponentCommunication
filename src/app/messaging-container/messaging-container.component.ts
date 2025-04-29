import { Component } from '@angular/core';
import { MessageComposerComponent } from './message-composer/message-composer.component';
import { MessageViewerComponent } from './message-viewer/message-viewer.component';

// Register SharedService in the parent component’s (messaging-container component) injector. 
// Now every instance of ParentComponent (and its children [meesage-composer and message-viewer]) shares one service instance, but it’s scoped to that component tree rather than the entire app.

import { SharedService } from './services/message.service'; // importing SharedService in parent component here now.

@Component({
  selector: 'app-messaging-container',
  standalone: true,
  imports: [MessageComposerComponent, MessageViewerComponent],

  providers: [SharedService],   // Component-Level Provider, which we didn't provided here in metadata while using Modular-Approach.

  templateUrl: './messaging-container.component.html'
})
export class MessagingContainerComponent {}
