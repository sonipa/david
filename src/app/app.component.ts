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
  templateName = '';
  overlayTitle = '';
  overlayDetails = '';
  isDark = true;
  isCloudy = false;
  isSunny = false;
  currentWeather = 'dark';

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
    // Weather control
    if ( this.isDark ) {
      this.currentWeather = 'sunny';
      body.classList.toggle('dark');
      body.classList.toggle('sunny');
      this.isDark = false;
      this.isSunny = true;
    } else if ( this.isSunny ) {
      this.currentWeather = 'cloudy';
      body.classList.toggle('cloudy');
      body.classList.toggle('sunny');
      this.isCloudy = true;
      this.isSunny = false;
    } else if ( this.isCloudy ) {
      this.currentWeather = 'dark';
      body.classList.toggle('cloudy');
      body.classList.toggle('dark');
      this.isCloudy = false;
      this.isDark = true;
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
    this.templateName = this.parentChildService.targetTemplateName;
    this.overlayTitle = this.parentChildService.targetOverlayTitle;
    this.overlayDetails = this.parentChildService.targetDetails;
    this.sidenav.open();
  }
}
