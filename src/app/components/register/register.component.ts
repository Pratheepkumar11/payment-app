import { Component } from '@angular/core';

import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {SelectItem} from 'primeng/api';
import {MessageService} from 'primeng/api';

import { PrimeNGConfig } from 'primeng/api';
import { Wallet } from 'src/app/entity/Wallets';
import { WalletService } from 'src/app/services/wallet.service';
import { PasswordValidator } from './checks/PasswordValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  providers: [MessageService],
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registrationForm: FormGroup;
  
  
  newWallet:Wallet= new Wallet();
  mgs="";
  errorMgs="";

  constructor(private fb: FormBuilder, private messageService: MessageService,private walletService:WalletService) {}
  

  

 

  ngOnInit(){
    

    this.registrationForm = this.fb.group({
      'id': new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"), Validators.minLength(2),Validators.maxLength(5)]),
      'name': new FormControl('', [Validators.required,Validators.minLength(5)]),
      'password': new FormControl('', [Validators.required,PasswordValidator.strong,Validators.minLength(2),Validators.maxLength(5)]),
      'balance': new FormControl('', [Validators.required, Validators.min(500),Validators.pattern("^[0-9]*$")]),
      
  });

    
    
  }

 

  

  onSubmit(value: Wallet){
    //console.log(this.registrationForm.value);
    console.log(value);
    this.newWallet.id=value.id;
    this.newWallet.name=value.name;
    this.newWallet.balance=value.balance;
    this.newWallet.password=value.password;
    console.log(this.newWallet);
    this.walletService.registerWallet(this.newWallet).subscribe(
      data=>{this.mgs=data;;console.log("data"); 
      
      if(this.mgs == "Already exists"){
        this.messageService.add ({key: 'topright',severity:'error', summary:data, detail:"Choose Different ID"})
      
      }else if(this.mgs == "Insufficient Amount"){
        this.messageService.add ({key: 'topright',severity:'error', summary:data, detail:"Minimum deposite amount is 1000rs"})
      }
        else{
        this.messageService.add ({key: 'topright',severity:'success', summary:'Register Success', detail:data})
      }},
      
      error=>{this.messageService.add ({key: 'topright',severity:'error', summary:'Error', detail:error.error});console.log("")},
      
    
    )
    
  }
  

  
 
}
