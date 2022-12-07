import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';
import { WalletService } from './services/wallet.service';
import { YourSharedServiceService } from './services/your-shared-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MessageService],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'payment-app';
  items: MenuItem[];
  isOpen = false;
  ia:number;
ToggleTime: any;

  constructor(private primengConfig: PrimeNGConfig,private routes:Router,private walletService:WalletService,public router:Router,private yourSharedService: YourSharedServiceService) {}
  isGet:boolean=false;
  ngOnInit() {
      this.primengConfig.ripple = true;
      this.ia=this.yourSharedService.id;
      this.items = [
        {label: 'login', icon: 'pi pi-user', command: () => {
            this.login();
        }},
        {label: 'Register', icon: 'pi pi-user-plus', command: () => {
            this.register();
        }},
        {label: 'logout', icon: 'pi pi-power-off', command: () => {
          this.logout();
      }},
       
        
    ];

    
  }

  login() {
   this.routes.navigate(['login'])
}

register() {
  this.routes.navigate(['register'])
}

logout() {
  this.walletService.employeeLogout();
    
}

logged(){
  if(this.yourSharedService.id){
    this.isGet=true;
    
   }
   console.log("Logged number"+this.ia)
   console.log("Logged In Status"+this.isGet)
   return this.isGet;
   
}

  
  
}
