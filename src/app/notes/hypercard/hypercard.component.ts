import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-hypercard',
  templateUrl: './hypercard.component.html'
})
export class HypercardComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<HypercardComponent>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
