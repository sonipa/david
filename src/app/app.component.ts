import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ParentChildService } from './services/parent-child.service';
import { LocationStrategy } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('matDrawer') matDrawer: MatSidenav;
  @ViewChild('timeline') theTimeline: MatSidenav;

  subscription;
  routeChangeListen;
  thisSun;
  templateName = '';
  overlayTitle = '';
  overlayDetails = '';
  isDark = false;
  isSunny = true;
  currentWeather = 'sunny';

  timelineBase = [
    2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010,
    2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000,
    1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990,
    1989, 1988, 1987, 1986, 1985, 1984, 1983, 1982, 1981, 1980,
    1979, 1978];
  yearMonths = ['January', 'February', 'March', 'April', 'May',
  'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  eventItems = [{
    year: 2018,
    month: 6,
    day: 3,
    title: 'New site',
    details: 'On this day, I realized this site was outdated. A few weeks later I published the site you\'re on now.'
  }, {
    year: 2013,
    month: 2,
    day: 24,
    title: 'Moved to Oregon',
    details: 'Left the Pacific Southwest (Arizona) and moved to the Pacific Northwest.'
  }, {
    year: 1998,
    month: 4,
    day: 1,
    title: 'Free Agent',
    details: 'Moved out of my parent\'s house and began living out in the world for the first time.'
  }, {
    year: 1995,
    month: 5,
    day: 30,
    title: 'First Design Job',
    details: 'First day on the job as a &ldquo;page layout clerk&rdquo; doing design. Summer vacation had just started.'
  }, {
    year: 1978,
    month: 9,
    day: 1,
    title: 'Minimum Viable Product',
    details: 'First launch of this project by my mom and dad.'
  }];

  constructor(private location: LocationStrategy, private parentChildService: ParentChildService, private router: Router) {
    this.location.onPopState(() => {
      if ( this.matDrawer.opened ) {
        history.go(1);
        this.matDrawer.close();
      }
    });
  }

  ngAfterViewInit() {
    // this.theTimeline.open();
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
  openTimeline() {
    this.theTimeline.open();
  }
}
