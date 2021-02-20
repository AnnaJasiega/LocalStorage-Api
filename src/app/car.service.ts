import { Injectable } from '@angular/core';
import { CarsList } from '../app/car-list/cars-list';
import { DataPreparationService } from './data-preparation.service';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  carList = CarsList;
  selected = [];
  carId: string;
  owner: string;

  public getDataFromModel(url) {
    if (url === null) {
      return this.carList;
    }else if (url === undefined)
      return this.carList;
    else{
      this.carId = this.service.prepareData(url)[0];
      this.owner = this.service.prepareData(url)[1];

      if (this.carId ==='' && this.owner ===''){
        return this.carList;
      } else this.findByData(this.carId, this.owner);
        return this.selected;
    }
  }
  
  public editCar(car){
    for (let i = 0; i < this.carList.length; i++){
      if (this.carList[i]["id"] == car['id']){
        this.carList[i] = car;
      }
    }
  }

  public addData(car){
    this.carList.push(car);
  }

 findByData(carId?, owner?) {
    this.selected = [];

    if (carId && owner) {
      for (let car of this.carList){
        if ((car.$id == carId) && (car.$owner == owner)){
          this.selected.push(car)
          return
        }
      }
    } else if (carId) {
      for (let car of this.carList){
        if (car.$id == carId){
          this.selected.push(car)
        }
      }
    }
    else if (owner) {
      for (let car of this.carList){
        if (car.$owner == owner){
          this.selected.push(car)
        }
      }
    }
  }
  constructor(private service: DataPreparationService) { }
}
