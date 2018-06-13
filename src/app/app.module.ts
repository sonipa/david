import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBottomSheetModule, MatButtonModule, MatExpansionModule, MatIconModule,
  MatListModule, MatDividerModule, MatTooltipModule, MatGridListModule, MatSidenavModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Services
import { ParentChildService } from './services/parent-child.service';

// Routes
import { RouterModule, Routes } from '@angular/router';
import { NowComponent } from './destinations/now/now.component';
import { ChangelogComponent } from './destinations/changelog/changelog.component';
import { FeaturesComponent } from './destinations/features/features.component';
import { LostComponent } from './destinations/lost/lost.component';
import { ThoughtsComponent } from './destinations/thoughts/thoughts.component';
import { ProjectsComponent } from './destinations/projects/projects.component';
import { AboutComponent } from './destinations/about/about.component';

// Notes
import { HypercardComponent } from './notes/hypercard/hypercard.component';
import { BBSComponent } from './notes/bbs/bbs.component';
import { ChangeLogComponent } from './notes/change-log/change-log.component';
import { FrameworksComponent } from './notes/frameworks/frameworks.component';
import { SaasComponent } from './notes/saas/saas.component';
import { SophiaComponent } from './notes/sophia/sophia.component';
import { NoelleComponent } from './notes/noelle/noelle.component';
import { IncorporatedComponent } from './notes/incorporated/incorporated.component';


// Overlays
import { SnowDayComponent } from './overlays/snow-day/snow-day.component';
import { OldSitesComponent } from './overlays/old-sites/old-sites.component';
import { OldSitesZeroComponent } from './overlays/old-sites-zero/old-sites-zero.component';
import { IntoTheSunComponent } from './overlays/into-the-sun/into-the-sun.component';
import { PlaceChandlerComponent } from './overlays/place-chandler/place-chandler.component';
import { PlaceEstesComponent } from './overlays/place-estes/place-estes.component';
import { PlaceKetchikanComponent } from './overlays/place-ketchikan/place-ketchikan.component';

const appRoutes: Routes = [
  { path: 'now', component: NowComponent },
  { path: 'changelog', component: ChangelogComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'thoughts', component: ThoughtsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'about', component: AboutComponent },
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
    ChangelogComponent,
    FeaturesComponent,
    LostComponent,
    HypercardComponent,
    BBSComponent,
    ThoughtsComponent,
    ProjectsComponent,
    AboutComponent,
    ChangeLogComponent,
    FrameworksComponent,
    SaasComponent,
    SophiaComponent, NoelleComponent, IncorporatedComponent,

    SnowDayComponent,
    OldSitesComponent,
    OldSitesZeroComponent,
    IntoTheSunComponent,
    PlaceChandlerComponent, PlaceEstesComponent, PlaceKetchikanComponent
  ],
  entryComponents: [
    HypercardComponent,
    BBSComponent,
    ChangeLogComponent,
    FrameworksComponent,
    SaasComponent,
    SophiaComponent, NoelleComponent, IncorporatedComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false
      }
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatTooltipModule,
    MatGridListModule,
    MatSidenavModule
  ],
  providers: [ParentChildService],
  bootstrap: [AppComponent]
})
export class AppModule { }
