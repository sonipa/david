import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { ParentChildService } from './../../services/parent-child.service';
import { FrameworksComponent } from './../../notes/frameworks/frameworks.component';


import { SherlockComponent } from './../../notes/sherlock/sherlock.component';
import { SophiaComponent } from './../../notes/sophia/sophia.component';
import { NoelleComponent } from './../../notes/noelle/noelle.component';
import { IncorporatedComponent } from './../../notes/incorporated/incorporated.component';
import { ChangeLogComponent } from './../../notes/change-log/change-log.component';

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

  openSophia(): void {
    this.bottomSheet.open(SophiaComponent);
  }
  openSherlock(): void {
    this.bottomSheet.open(SherlockComponent);
  }
  openNoelle(): void {
    this.bottomSheet.open(NoelleComponent);
  }
  openIncorporated(): void {
    this.bottomSheet.open(IncorporatedComponent);
  }
  openChangeLog(): void {
    this.bottomSheet.open(ChangeLogComponent);
  }
}
