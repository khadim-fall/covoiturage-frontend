import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  public srcImage:String="../../../assets/img/khadim.jpg";
  
  changeImage(imageRef:any){
    imageRef.src="../../../assets/img/khadim1.jpg";
  }

}
