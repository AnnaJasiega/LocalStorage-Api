import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../car/car';
import { ActivatedRoute, Router } from '@angular/router';
import { setClassMetadata } from '@angular/core/src/r3_symbols';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {
  carId: string;
  owner: string;
  brand: string;
  isWorking: boolean;
  carService: string;
  price: string;
  services: Array<object> = [];
  url: string;
  car: object;



  constructor(private service: CarService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(response => {
      this.url = response['id'];
      this.getCar();
    }); 
  }

  getCar(){
    this.car = this.service.getCar(this.url)[0];
    this.services = this.car['services'];
    this.setData();
  }
  setData(){
    this.carId = this.car['id'];
    this.owner = this.car['owner'];
    this.brand = this.car['brand'];
    this.isWorking = this.car['isWorking'];
  }
  deleteService(i){
    this.services.splice(i, 1);
  }
  setEdit(){
    this.car = new Car(this.carId, this.owner, this.brand, this.isWorking, this.services);
    this.service.editCar(this.car);
  }
  addService(){
    this.services.push({key: this.carService,
                      value: this.price});
    this.carService = '';
    this.price = '';
  }


}
