import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Wallet } from 'src/app/entity/Wallets';
import { WalletService } from 'src/app/services/wallet.service';
import { YourSharedServiceService } from 'src/app/services/your-shared-service.service';
import { PasswordValidator } from '../../register/checks/PasswordValidator';

@Component({
  selector: 'app-withdraw-amount',
  templateUrl: './withdraw-amount.component.html',
  styleUrls: ['./withdraw-amount.component.css']
})
export class WithdrawAmountComponent {
  withdrawfunds: FormGroup;
  
  
  mgs="";
errorMgs="";
ia:number;
  constructor(private fb: FormBuilder, private messageService: MessageService,private walletService:WalletService,private yourSharedService: YourSharedServiceService) {}
  withdrawWallet:Wallet= new Wallet();
  ngOnInit(){
    
    this.ia=this.yourSharedService.id;
    this.withdrawfunds = this.fb.group({
      'id': new FormControl({value: 'ia', disabled: true}),
      
     
      'balance': new FormControl('', [Validators.required, Validators.min(500),Validators.pattern("^[0-9]*$")]),
     
      
  });

    
    
  }
  onSubmit(value: Wallet){
    //console.log(this.addfunds.value);
    console.log(value);
    this.withdrawWallet.id=this.ia;
  
    this.withdrawWallet.balance=value.balance;
    
    
    console.log(this.withdrawWallet);
    
   
    this.walletService.withdraw(this.withdrawWallet).subscribe(
      
      data=>{this.mgs=data;;console.log("data"); 
      if(this.mgs == "Insufficient Balance"){
        this.messageService.add ({key: 'topright',severity:'error', summary:'Success', detail:data})
      
      }
        else{
        this.messageService.add ({key: 'topright',severity:'success', summary:'Withdraw Success', detail:"Current Balance  "+data})
      }},
      error=>{this.messageService.add ({key: 'topright',severity:'error', summary:'Error', detail:error.error});console.log("")},
      
    )
    
  }

 

}
