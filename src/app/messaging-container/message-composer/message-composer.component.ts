import { Component } from '@angular/core';
import { SharedService } from '../services/message.service';

@Component({
  selector: 'app-message-composer',
  standalone: true,
  templateUrl: './message-composer.component.html'
})

export class MessageComposerComponent {
    text = '';
    constructor(private shared: SharedService) {}

  
    onInput(event: Event) {
      const inputEl = event.target as HTMLInputElement; // type assertion
      if (inputEl) {
        this.text = inputEl.value;
      }
    }
  
    send(val: string) {
      this.shared.message = val;
    }
  }
  