import { query } from '@angular/animations';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit, OnDestroy{

  fids = ""
  customerId = ""
  param$!: Subscription
  queryParam$!: Subscription

  // To receive additional params for route
  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
      console.log("load... customer");
      this.param$ = this.activatedRoute.params.subscribe(
        (params) => {
          this.customerId = params['custId'];
          console.log(this.customerId)
        }
      )

      this.queryParam$ = this.activatedRoute.queryParams.subscribe(
        (queryParams) => {
          this.fids = queryParams['fids'].split('|')
          // shows queryParams {fids: '1|2|3'} for customer/1?fids = 1|2|3 
          console.log(queryParams)
          // shows as as string "1|2|3"
          console.log(queryParams['fids'])
          // split string as an array, string[] which will be looped in html
          console.log(queryParams['fids'].split('|'))

        }
      )
  }

  
  ngOnDestroy(): void {
    console.log("destroy sub!")
      this.param$.unsubscribe();
      this.queryParam$.unsubscribe()
  }
}
