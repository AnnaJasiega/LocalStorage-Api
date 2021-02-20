import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarOverviewComponent } from './car-overview/car-overview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FindCarComponent } from './nav-bar/find-car.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddCarComponent } from './add-car/add-car.component';
import { EditCarComponent } from './edit-car/edit-car.component';



const routes: Routes = [
  { path: 'add-car', component: AddCarComponent },
  { path: 'car-overview/:find', component: CarOverviewComponent },
  { path: 'car-overview', component: CarOverviewComponent },
  { path: 'edit-car/:id', component: EditCarComponent },
  { path: '', component: CarOverviewComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CarOverviewComponent,
    FindCarComponent,
    AddCarComponent,
    EditCarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
