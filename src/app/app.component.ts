import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { ParentChildService } from './services/parent-child.service';
import {Subscription} from 'rxjs/Subscription';

import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  @ViewChild('sidenav') sidenav: MatSidenav;
  subscription;
  truthiness = '';
  titleness = '';
  shmeetails = '';

  constructor(private location: LocationStrategy, private parentChildService: ParentChildService) { 
    this.location.onPopState(() => {
      if ( this.sidenav.opened ) {
        history.go(1);
        this.sidenav.close();
      }
    });
  }

  openOverlay() {
    this.sidenav.open();
  }
  closeOverlay() {
    this.sidenav.close();
  }
  ngOnInit() {
    this.subscription = this.parentChildService.on('call-parent')
      .subscribe(
        () => this.parentFunction()
      );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  parentFunction() {
    this.truthiness = this.parentChildService.targetx;
    this.titleness = this.parentChildService.targety;
    this.shmeetails = this.parentChildService.targetj;
    this.sidenav.open();
  }
}
