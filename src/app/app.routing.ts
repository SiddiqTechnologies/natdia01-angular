import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';

import { AddhoursComponent } from './views/addhours/addhours.component';
import { TutorialComponent } from './views/tutorial/tutorial.component';
import { ReportsComponent } from './views/reports/reports.component';
import { SettingsComponent } from './views/settings/settings.component';

import { AuthGuard } from './auth.guard';
import { TutorialguardGuard } from './tutorialguard.guard';

const routes: Routes =[
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'icons', component: NucleoiconsComponent },
    { path: 'hours', component: AddhoursComponent, canActivate: [AuthGuard] },
    { path: 'reports', component: ReportsComponent, canActivate: [AuthGuard] },
    { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
    { path: 'tutorial', component: TutorialComponent }
  // { path: 'examples/landing',     component: LandingComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
