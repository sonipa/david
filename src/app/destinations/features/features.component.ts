import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { HypercardComponent } from './../../notes/hypercard/hypercard.component';
import { BBSComponent } from './../../notes/bbs/bbs.component';
import { FrameworksComponent } from './../../notes/frameworks/frameworks.component';
import { ParentChildService } from './../../services/parent-child.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html'
})
export class FeaturesComponent {
  constructor(private bottomSheet: MatBottomSheet, private parentChildService: ParentChildService) {}
  openHypercard(): void {
    this.bottomSheet.open(HypercardComponent);
  }
  openBBS(): void {
    this.bottomSheet.open(BBSComponent);
  }
  openFrameworks(): void {
    this.bottomSheet.open(FrameworksComponent);
  }
  showOverlay(targetZ: string, targetL: string, targetME: string) {
    this.parentChildService.targetTemplateName = targetZ;
    this.parentChildService.targetOverlayTitle = targetL;
    this.parentChildService.targetDetails = targetME;
    this.parentChildService.publish('call-parent');
  }
}
