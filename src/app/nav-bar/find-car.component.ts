import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service'

@Component({
  selector: 'app-find-car',
  templateUrl: './find-car.component.html',
  styleUrls: ['./find-car.component.css']
})
export class FindCarComponent implements OnInit {
  carId: string = '';
  owner: string = '';
  constructor(private service: CarService) { }

  ngOnInit(): void {
  }

  findCar(carId, owner){
  this.service.findByData(carId,owner)
  }
}
