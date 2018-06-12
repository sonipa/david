import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-bbs',
  templateUrl: './bbs.component.html'
})
export class BBSComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<BBSComponent>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
