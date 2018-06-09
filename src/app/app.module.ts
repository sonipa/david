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

// Notes
import { HypercardComponent } from './notes/hypercard/hypercard.component';
import { BBSComponent } from './notes/bbs/bbs.component';
import { ChangeLogComponent } from './notes/change-log/change-log.component';
import { FrameworksComponent } from './notes/frameworks/frameworks.component';

const appRoutes: Routes = [
  { path: 'now', component: NowComponent },
  { path: 'changelog', component: ChangelogComponent },
  { path: 'features', component: FeaturesComponent },
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
    ChangeLogComponent,
    FrameworksComponent
  ],
  entryComponents: [
    HypercardComponent,
    BBSComponent,
    ChangeLogComponent,
    FrameworksComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
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
