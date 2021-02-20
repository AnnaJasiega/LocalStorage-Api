import { Service } from './service'

export class Car {
    private id: string;
    private owner: string;
    private brand: string;
    private isWorking: boolean;
    private services: Array<Service>;
 
     constructor(id, owner, brand, isWorking, services){
         this.id = id;
         this.owner = owner;
         this.brand = brand;
         this.isWorking = isWorking;
         this.services = services;
     }
 
     public get $id(): string {
         return this.id
     }
     public get $owner(): string {
         return this.owner
     }
     public get $brand(): string {
         return this.brand
     }
     public get $isWorking(): boolean {
         return this.isWorking
     }
     public get $services(): Array<Service> {
         return this.services
     }
     public set $id(value:string) {
         this.id = value;
     }
     public set $owner(value:string) {
         this.owner = value;
     }
     public set $brand(value:string) {
         this.brand = value;
     }
     public set $isWorking(value:boolean) {
         this.isWorking = value;
     }
     public set $services(value:Array<Service>) {
         this.services = value;
     }
 }