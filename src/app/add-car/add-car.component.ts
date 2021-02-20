import { Component } from '@angular/core';
import { Car } from '../car/car';
import { Service } from '../car/service';
import { CarService } from '../car.service';



@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {
  carId: string;
  owner: string;
  brand: string;
  isWorking: boolean;
  carService: string;
  price: string;
  services: Array<object> = [];
  car;


  constructor(private service: CarService) { }

  newCar(){
    this.car = new Car(this.carId, this.owner, this.brand, this.isWorking, this.services);
    this.service.addData(this.car);
  }

  addService(){
  const service = {name: this.carService,
                price: this.price};
  this.services.push(service);
  this.carService = '';
  this.price = '';
  }

  deleteService(i){
  this.services.splice(i, 1);
  }
}
