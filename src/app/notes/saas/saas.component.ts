import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-saas',
  templateUrl: './saas.component.html'
})
export class SaasComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<SaasComponent>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
