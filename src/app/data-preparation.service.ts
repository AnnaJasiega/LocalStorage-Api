import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataPreparationService {
  carId: string;
  owner: string;

  constructor() { }

  prepareData(url){
    this.splitUrl(url);
    return [this.carId, this.owner];
  }

  splitUrl(url){
    const splited = url.split('&&');
    this.carId = splited[0].replace('%20', " ")
    this.owner = splited[1];
  }



}
