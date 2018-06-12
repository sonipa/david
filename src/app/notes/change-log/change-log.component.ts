import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-hypercard',
  templateUrl: './change-log.component.html'
})
export class ChangeLogComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<ChangeLogComponent>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
