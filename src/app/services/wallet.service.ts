import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry, subscribeOn } from 'rxjs/operators';
import { Wallet } from '../entity/Wallets';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class WalletService {
   
  logInUser:boolean=false;
  errorMsg="";
  mgs!: string;
  mgss:any;
  
  constructor(private http: HttpClient,private router:Router) { }

  public getLoginStatus():boolean{
    
    return this.logInUser;
    
  }
  public employeeLogout():void{
    
    this.logInUser = false;
    this.router.navigate(['Home']);
  }

  public registerWallet(newWallet:Wallet):Observable<any>{
    return this.http.post("http://localhost:8080/Wallet/register",newWallet,{responseType:'text'});
  }

  public AddFund(newWallet):Observable<any>{

    return this.http.post("http://localhost:8080/Wallet/addFund",newWallet,{responseType:"text"});
  }

  public ShowBalance(id:number):Observable<any>{
   
    return this.http.get("http://localhost:8080/Wallet/find/"+id,{responseType:"text"});
    
  }

  public FundTransfer(newWallet):Observable<any>{

    return this.http.patch("http://localhost:8080/Wallet/fundTransfer",newWallet,{responseType:"text"});
  }

  public DeleteWallet(newWallet):Observable<any>{
   
    return this.http.delete("http://localhost:8080/Wallet/unRegisterWallet",{body:newWallet ,
    responseType:"text"});
  }

  public withdraw(newWallet):Observable<any>{

    return this.http.post("http://localhost:8080/Wallet/withdraw",newWallet,{responseType:"text"});
  }

  public Login(newWallet):Observable<any>{
    
    
    
    this.http.post("http://localhost:8080/Wallet/login",newWallet,{responseType:"text"}).subscribe(data => {this.mgs=data;console.log(data);
     if(data=="true"){
      this.logInUser=true;
      console.log(this.logInUser);
     }else{
      
     }
  });
     
     return  this.http.post("http://localhost:8080/Wallet/login",newWallet,{responseType:"text"});

    

  }

  

  

}
