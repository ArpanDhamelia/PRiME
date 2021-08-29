import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  Router } from '@angular/router';
import { PrimeService } from '../shared/prime.service';
import { Reserve } from '../shared/Reserve.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( public prime : PrimeService,
    public router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){

     /* cust : Reserve = {
      first : ""

    }
    console.log(f);*/
    this.prime.setCust(new Reserve(f.value.first,f.value.last,f.value.date,f.value.time,f.value.noOfPeople));
    /* this.prime.setCust(f.value); */
    this.router.navigate(['/success']);
  }
}
