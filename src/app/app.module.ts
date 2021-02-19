// core module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Challenge1Component } from './challenge1/challenge1.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ExploreDialogComponent } from './explore-dialog/explore-dialog.component';
import { Challenge2Component } from './challenge2/challenge2.component';
import { Challenge3Component } from './challenge3/challenge3.component';
import { Challenge4Component } from './challenge4/challenge4.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { Challenge5Component } from './challenge5/challenge5.component';
import { CreateNewPlaylistComponent } from './create-new-playlist/create-new-playlist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Challenge6Component } from './challenge6/challenge6.component';
import { AddNewOrderComponent } from './add-new-order/add-new-order.component';
import { ShopCardComponent } from './shop-card/shop-card.component';
import { PlaylistCardComponent } from './playlist-card/playlist-card.component';

@NgModule({
  declarations: [
    AppComponent,
    Challenge1Component,
    ExploreDialogComponent,
    Challenge2Component,
    Challenge3Component,
    Challenge4Component,
    ProductCardComponent,
    Challenge5Component,
    CreateNewPlaylistComponent,
    Challenge6Component,
    AddNewOrderComponent,
    ShopCardComponent,
    PlaylistCardComponent
  ],
  imports: [
    AppMaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
