import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { ItemComponent } from './components/item/item.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APIInterceptor } from './interceptors/api.interceptor';
import { OutlineDirective } from './directives/outline.directive';
import { ItemInfoComponent } from './components/item-info/item-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    ItemComponent,
    ItemsListComponent,
    OutlineDirective,
    ItemInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: APIInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
