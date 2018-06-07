import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { NowComponent } from './destinations/now/now.component';
import { TimelineComponent } from './destinations/timeline/timeline.component';
import { LostComponent } from './destinations/lost/lost.component';

const appRoutes: Routes = [
  { path: 'now', component: NowComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: '',
    redirectTo: '/now',
    pathMatch: 'full'
  },
  { path: '**', component: LostComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NowComponent,
    TimelineComponent,
    LostComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
