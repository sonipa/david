import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-incorporated',
  templateUrl: './incorporated.component.html'
})
export class IncorporatedComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<IncorporatedComponent>) {}
  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
