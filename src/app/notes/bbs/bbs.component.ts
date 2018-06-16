import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

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
