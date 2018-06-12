import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';

import { ParentChildService } from './../../services/parent-child.service';

import { ChangeLogComponent } from './../../notes/change-log/change-log.component';

@Component({
  selector: 'app-now',
  templateUrl: './now.component.html',
  styleUrls: ['./now.component.scss']
})
export class NowComponent {
  constructor(private bottomSheet: MatBottomSheet, private parentChildService: ParentChildService) {}

  showOverlay(targetZ: string, targetL: string, targetME: string) {
    this.parentChildService.targetTemplateName = targetZ;
    this.parentChildService.targetOverlayTitle = targetL;
    this.parentChildService.targetDetails = targetME;
    this.parentChildService.publish('call-parent');
  }
  openChangeLog(): void {
    this.bottomSheet.open(ChangeLogComponent);
  }
}
