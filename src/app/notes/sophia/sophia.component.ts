import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-sophia',
  templateUrl: './sophia.component.html'
})
export class SophiaComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<SophiaComponent>) {}
  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
