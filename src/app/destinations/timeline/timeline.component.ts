import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { HypercardComponent } from './../../notes/hypercard/hypercard.component';
import { BBSComponent } from './../../notes/bbs/bbs.component';
import { FrameworksComponent } from './../../notes/frameworks/frameworks.component';

@Component({
  selector: 'app-now',
  templateUrl: './timeline.component.html'
})
export class TimelineComponent {
  constructor(private bottomSheet: MatBottomSheet) {}
  openHypercard(): void {
    this.bottomSheet.open(HypercardComponent);
  }
  openBBS(): void {
    this.bottomSheet.open(BBSComponent);
  }
  openFrameworks(): void {
    this.bottomSheet.open(FrameworksComponent);
  }
}
