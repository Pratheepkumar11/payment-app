import { Component } from '@angular/core';
import { YourSharedServiceService } from 'src/app/services/your-shared-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  idd:any;
  constructor(private yourSharedService: YourSharedServiceService){
    
    console.log(this.yourSharedService.id);
  }
   
 

  

}
