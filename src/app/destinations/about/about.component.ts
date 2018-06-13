import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { ParentChildService } from './../../services/parent-child.service';

import { SophiaComponent } from './../../notes/sophia/sophia.component';
import { NoelleComponent } from './../../notes/noelle/noelle.component';
import { IncorporatedComponent } from './../../notes/incorporated/incorporated.component';

import { PlaceEstesComponent } from '../../overlays/place-estes/place-estes.component';
import { PlaceKetchikanComponent } from '../../overlays/place-ketchikan/place-ketchikan.component';
import { PlaceChandlerComponent } from './../../overlays/place-chandler/place-chandler.component';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {
  title = 'about';
  constructor(private bottomSheet: MatBottomSheet, private parentChildService: ParentChildService) {}
  showOverlay(targetZ: string, targetL: string, targetME: string) {
    this.parentChildService.targetTemplateName = targetZ;
    this.parentChildService.targetOverlayTitle = targetL;
    this.parentChildService.targetDetails = targetME;
    this.parentChildService.publish('call-parent');
  }
  openSophia(): void {
    this.bottomSheet.open(SophiaComponent);
  }
  openNoelle(): void {
    this.bottomSheet.open(NoelleComponent);
  }
  openIncorporated(): void {
    this.bottomSheet.open(IncorporatedComponent);
  }
}
