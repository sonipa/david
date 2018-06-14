import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { ParentChildService } from './../../services/parent-child.service';
import { FrameworksComponent } from './../../notes/frameworks/frameworks.component';

@Component({
  selector: 'app-thoughts',
  templateUrl: './thoughts.component.html',
  styleUrls: ['./thoughts.component.scss']
})
export class ThoughtsComponent {
  constructor(private bottomSheet: MatBottomSheet, private parentChildService: ParentChildService) {}

  showOverlay(targetZ: string, targetL: string, targetME: string) {
    this.parentChildService.targetTemplateName = targetZ;
    this.parentChildService.targetOverlayTitle = targetL;
    this.parentChildService.targetDetails = targetME;
    this.parentChildService.publish('call-parent');
  }
  openFrameworks(): void {
    this.bottomSheet.open(FrameworksComponent);
  }
}
