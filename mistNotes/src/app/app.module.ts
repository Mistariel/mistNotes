import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, 
          MatAutocompleteModule, 
          MatInputModule, 
          MatExpansionModule,
          MatSelectModule,
          MatCardModule,
          MatIconModule,
          MatRadioModule
      } from '@angular/material';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: '',
    redirectTo: '/start',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    StartComponent
  ],
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false
    }),
    BrowserModule,
    RouterModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
