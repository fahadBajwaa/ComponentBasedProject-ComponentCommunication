import { Injectable } from '@angular/core';

// @Injectable({ providedIn: 'root' })

@Injectable()   // No providedIn here

export class SharedService {
  message = '';   
}
