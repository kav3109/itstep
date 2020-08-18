import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItalicDirective } from './italic.directive';
import { DashPipe } from './dash.pipe';
import {FormsModule} from "@angular/forms";
import { JoinArrayPipe } from './join-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ItalicDirective,
    DashPipe,
    JoinArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
