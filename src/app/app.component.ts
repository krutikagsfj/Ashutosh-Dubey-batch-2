import { Component, OnInit, ViewChild } from "@angular/core";
import { AppService } from "./app.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  mobileList = [];
  sortByAsc: boolean = true;
  constructor(private AppService: AppService
   ) {}
  resData;
  ngOnInit() {
    this.AppService.getMobileList()
    .subscribe(res=>
      {
        this.resData=res;
        console.log(res);
      },err=>
      {
        console.log(err);
      })
    
  } 
  deleteRow(id) {
   let pos = this.resData.indexOf(id);
   this.resData.splice(pos, 1);
  
  }
    sortId(parm) {
      this.resData.sort((a, b)=> {return a.mobId - b.mobId});
     }
    sortName(parm) {
      if(this.sortByAsc == true) {
        this.sortByAsc = false;
        this.resData.sort((a, b) => {
         return a[parm].localeCompare(b[parm]);
        });
      } else {
        this.sortByAsc = true;
        this.resData.sort((a, b) => {
          return b[parm].localeCompare(a[parm]);
       });
     }
    }
    sortPrice()
    {
      this.resData.sort((a, b)=> {return a.mobPrice - b.mobPrice});
    }

  
}
