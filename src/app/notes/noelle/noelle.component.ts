import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-noelle',
  templateUrl: './noelle.component.html'
})
export class NoelleComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<NoelleComponent>) {}
  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
