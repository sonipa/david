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
  overlayTitle = '';
  overlayDetails = '';
  isDark = false;
  isCloudy = false;
  isSunny = true;
  currentWeather = 'sunny';

  constructor(private location: LocationStrategy, private parentChildService: ParentChildService) {
    this.location.onPopState(() => {
      if ( this.sidenav.opened ) {
        history.go(1);
        this.sidenav.close();
      }
    });
  }
  toggleDark() {
    const body = document.getElementsByTagName('body')[0];
    if ( this.isDark ) {
      this.currentWeather = 'cloudy';
      body.classList.toggle('dark');
      body.classList.toggle('cloudy');
      this.isDark = false;
      this.isCloudy = true;
    } else if ( this.isCloudy ) {
      this.currentWeather = 'sunny';
      body.classList.toggle('cloudy');
      this.isCloudy = false;
      this.isSunny = true;
    } else if ( this.isSunny ) {
      this.currentWeather = 'dark';
      body.classList.toggle('dark');
      this.isDark = true;
      this.isSunny = false;
    }
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
    this.overlayTitle = this.parentChildService.targety;
    this.overlayDetails = this.parentChildService.targetj;
    this.sidenav.open();
  }
}
