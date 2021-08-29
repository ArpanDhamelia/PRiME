import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Reserve } from './Reserve.model';

@Injectable()
export class PrimeService {
  cust : Reserve

  constructor() { }



  setCust(cust){
    this.cust = cust
  }
  getCust(){
    return this.cust;
  }



}
