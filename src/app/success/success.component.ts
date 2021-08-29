import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PrimeService } from '../shared/prime.service';
import { Reserve } from '../shared/Reserve.model';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor( public prime : PrimeService) { }
  cust : Reserve
  ngOnInit(): void {
    console.log();
    /* console.log(this.f.value()) */
    /* console.log(this.f); */
    this.cust = this.prime.getCust()
  }


}
