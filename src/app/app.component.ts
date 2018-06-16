import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ParentChildService } from './services/parent-child.service';
import { LocationStrategy } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  @ViewChild('matDrawer') matDrawer: MatSidenav;

  subscription;
  routeChangeListen;
  thisSun;
  templateName = '';
  overlayTitle = '';
  overlayDetails = '';
  isDark = false;
  isSunny = true;
  currentWeather = 'sunny';

  constructor(private location: LocationStrategy, private parentChildService: ParentChildService, private router: Router) {
    this.location.onPopState(() => {
      if ( this.matDrawer.opened ) {
        history.go(1);
        this.matDrawer.close();
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
      this.currentWeather = 'dark';
      body.classList.toggle('sunny');
      body.classList.toggle('dark');
      this.isSunny = false;
      this.isDark = true;
    }
  }
  ngOnInit() {
    this.subscription = this.parentChildService.on('call-parent')
      .subscribe(
        () => this.defineOverlay()
      );
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        const myDiv = document.getElementById('theMainContent');
        myDiv.scrollTo(0, 0);
    });
    this.thisSun = document.getElementById('theSun');
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  defineOverlay() {
    if ( this.templateName !== this.parentChildService.targetTemplateName ) {
      this.templateName = this.parentChildService.targetTemplateName;
      this.overlayTitle = this.parentChildService.targetOverlayTitle;
      this.overlayDetails = this.parentChildService.targetDetails;
      const myDi2v = document.getElementById('theDrawer');
      myDi2v.scrollTo(0, 0);
    }
    this.openOverlay();
  }
  openOverlay() {
    this.matDrawer.open();
    this.thisSun.style.display = 'none';
  }
  closeOverlay() {
    this.matDrawer.close();
    this.thisSun.style.display = 'block';
  }
}
