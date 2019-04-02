import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-sherlock',
  templateUrl: './sherlock.component.html'
})
export class SherlockComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<SherlockComponent>) {}
  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
