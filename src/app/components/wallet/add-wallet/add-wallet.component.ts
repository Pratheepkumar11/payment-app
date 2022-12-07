import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Wallet } from 'src/app/entity/Wallets';
import { WalletService } from 'src/app/services/wallet.service';
import { YourSharedServiceService } from 'src/app/services/your-shared-service.service';
import { PasswordValidator } from '../../register/checks/PasswordValidator';

@Component({
  selector: 'app-add-wallet',
  templateUrl: './add-wallet.component.html',
  styleUrls: ['./add-wallet.component.css']
})
export class AddWalletComponent {


addfunds: FormGroup;
  
  mgs="";
errorMgs="";
ia:number;
  constructor(private fb: FormBuilder, private messageService: MessageService,private walletService:WalletService,private yourSharedService: YourSharedServiceService) {}
  newWallet:Wallet= new Wallet();
  ngOnInit(){
    
    this.ia=this.yourSharedService.id;
    this.addfunds = this.fb.group({
      'id': new FormControl({value: 'ia', disabled: true}),
      
     
      'balance': new FormControl('', [Validators.required, Validators.min(500),Validators.pattern("^[0-9]*$")]),
     
      
  });

    
    
  }
  onSubmit(value: Wallet){
    //console.log(this.addfunds.value);
    console.log(value);
    this.newWallet.id=this.ia;
  
    this.newWallet.balance=value.balance;
    
    
    console.log(this.newWallet);
    
   
    this.walletService.AddFund(this.newWallet).subscribe(
      data=>{this.mgs=data;;console.log("data"); 
      if(this.mgs == "Invalid Amount"){
        this.messageService.add ({key: 'topright',severity:'error', summary:data, detail:"Insert More than 600rs"})
      
      }
        else{
        this.messageService.add ({key: 'topright',severity:'success', summary:data, detail:"Current Balance  "})
      }},
      error=>{this.messageService.add ({key: 'topright',severity:'error', summary:'Error', detail:error.error});console.log("")},
      
    
    
    )
    
  }
}
