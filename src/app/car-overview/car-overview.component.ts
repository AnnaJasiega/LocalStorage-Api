import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../car/car';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car-overview',
  templateUrl: './car-overview.component.html',
  styleUrls: ['./car-overview.component.css']
})
export class CarOverviewComponent implements OnInit {
  carsList: Array<Car> = [];
  url: string;
  isClicked = false;

  constructor(private service: CarService,
              private route: ActivatedRoute
              ) { }

  ngOnInit(): void {
    this.route.params.subscribe(response => {
      this.url = response['find'];
      this.getCarList();
    });
  }

  getCarList(){
    this.carsList = this.service.getDataFromModel(this.url);
  }
}
