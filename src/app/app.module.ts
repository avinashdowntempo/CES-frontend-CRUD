import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NewCareerComponent } from './new job/new-career/new-career.component';
import { HttpModule } from '@angular/http';
import { ManageCareerComponent } from './manage job/manage-career/manage-career.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/MANAGECAREER', pathMatch: 'full' },
  { path: 'NEWCAREER', component: NewCareerComponent},
  { path: 'MANAGECAREER', component: ManageCareerComponent },
  { path: 'RELOAD', component: ManageCareerComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NewCareerComponent,
    ManageCareerComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
