import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { WalletService } from '../services/wallet.service';


@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {
  
  isLoggedIn:boolean  = true;


  
  constructor(private router:Router, private walletService:WalletService ){}

  canActivate(): boolean 
     {
       console.log("can activate called");
      if(this.walletService.getLoginStatus()){
        
       return true;
      }
       else       
       {
         this.router.navigate(['login']);
        return false;
        }
  }
  
}
