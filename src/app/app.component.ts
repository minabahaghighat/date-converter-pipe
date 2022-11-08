import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'date-converter-pipe';
  orders = [
    {
      createDate: '2021-12-26T20:47:39.53',
    },
    {
      createDate: '2021-12-30T17:01:33.703',
    },
    {
      createDate: '2022-01-04T19:08:30.693',
    },
    {
      createDate: '2022-01-04T20:44:55.103',
    },
    {
      createDate: '2022-01-15T18:02:26.237',
    },
    {
      createDate: '2022-01-18T17:28:12.517',
    },
    {
      createDate: '2022-01-23T18:30:53.243',
    },
    {
      createDate: '2022-01-23T21:59:41.827',
    },
  ];

  dates = [
    {
      createDate: '1400/10/05',
    },
    {
      createDate: '1400/10/09',
    },
    {
      createDate: '1400/10/14',
    },
    {
      createDate: '1400/10/25',
    },
    {
      createDate: '1400/10/28',
    },
    {
      createDate: '1400/11/03',
    },
    {
      createDate: '1400/11/08',
    },
    {
      createDate: '1377/05/31',
    },
  ];
  constructor(){
  }
  
}
