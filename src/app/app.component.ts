import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mytitle = 'Angular Task';
  title="";
  public dataList:any = [];
  public isModalActive:boolean = false;
  public modaltableVal:any = {};
  public searchString: string;
  constructor(private _ser : MyserviceService) { }
  ontdClick(mydata){
    this.modaltableVal = JSON.parse(JSON.stringify(mydata));
    this.isModalActive = !this.isModalActive;
  }
  toggleModal() {
    this.isModalActive = !this.isModalActive;
  }
  ngOnInit() {
    this._ser.checkData().subscribe( refData => this.dataList = refData)
    // this._ser.getData().subscribe(data => this.dataList = data) 
    // window.setInterval(() => {
    //   this._ser.getData().subscribe(data => this.dataList = data) 
    // }, 10000);
 // timer(0, 10000).pipe(switchMap(() => this._ser.simpleData())).subscribe(data => this.dataList = data)
  }
}
