import { Injectable } from '@angular/core';
import { DataPreparationService } from './data-preparation.service';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  carList = [];
  carLists = [];
  selected = [];
  carId: string;
  owner: string;
/**Get data
 * 
 */
  public getDataFromModel(url) {
    this.setCarList();
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
/**Edit car
 * 
 */
  public editCar(editCar){
    this.setCarList();
    for (let i = 0; i<this.carList.length; i++){
      if (this.carList[i]["id"] == editCar['id']){
        this.carList[i] = editCar;
        window.localStorage.setItem('carList', JSON.stringify(this.carList))
        return
      }
    }
  }
 /**Add car
 * 
 */
  public addData(car){
    this.carList.push(car)
    window.localStorage.setItem('carList', JSON.stringify(this.carList))
    this.setCarList();
  }

  setCarList(){
    this.carLists.push(JSON.parse(localStorage.getItem("carList")));
    this.carList = this.carLists[0]
  }
  public getCar(url){
    this.setCarList();
    this.carId = this.service.prepareData(url)[0];
    this.owner = this.service.prepareData(url)[1];
    this.selected = [];


    for (let i = 0; i<this.carList.length; i++){ 
      if ((this.carList[i].id === this.carId) && (this.carList[i].owner === this.owner)){
        this.selected.push(this.carList[i])
      }
    }
    return this.selected

  }

  public findByData(carId?, owner?) {
    this.selected = [];

    if (carId && owner) {
      for (let car of this.carList){
        if ((car.id === carId) && (car.owner === owner)){
          this.selected.push(car)
          return
        }
      }
    } else if (carId) {
      for (let car of this.carList){
        if (car.id === carId){
          this.selected.push(car);
        }
      }
    }
    else if (owner) {
      for (let car of this.carList){
        if (car.owner === owner){
          this.selected.push(car);
        }
      }
    }
  }
  constructor(private service: DataPreparationService) { }
}
