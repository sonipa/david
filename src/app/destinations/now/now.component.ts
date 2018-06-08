import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { ChangeLogComponent } from './../../notes/change-log/change-log.component';

@Component({
  selector: 'app-now',
  templateUrl: './now.component.html',
  styleUrls: ['./now.component.scss']
})
export class NowComponent {
  constructor(private bottomSheet: MatBottomSheet) {}
  openChangeLog(): void {
    this.bottomSheet.open(ChangeLogComponent);
  }
}
