import { Component, OnInit } from '@angular/core';
import { CatServiceService } from '../cat-service.service';
import { cat } from '../main-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private catServise:CatServiceService){}
  
  mainData: cat[] = []; 
  oneData!:cat;
  ngOnInit(){
    this.catServise.getMainData().subscribe(
      {
        next:(data)=>{
          console.log(data);
          this.mainData=data;
          console.log('main data',this.mainData[0]);
          this.oneData=this.mainData[0];
        },
        error:(error)=>{
            alert('an error ocurred');
        }
      }
    )
    // console.log(this.mainData[0].id)
    console.log(this.mainData)
    // this.oneData=this.mainData[0];
  }

  onImageLoad(evt:any) {
    if (evt && evt.target) {
      const width = evt.target.naturalWidth;
      const height = evt.target.naturalHeight;
      const portrait = height > width ? true : false;
      console.log(width, height, 'portrait: ', portrait);
    }
  }
}
