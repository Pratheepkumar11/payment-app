import { Component } from '@angular/core';
import { ConfirmationService, Message, MessageService, PrimeNGConfig } from 'primeng/api';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


import { WalletService } from 'src/app/services/wallet.service';
import { Walletdto } from 'src/app/entity/walletdto';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css'],
  providers: [ConfirmationService]
})
export class FundTransferComponent {


  addfunds: FormGroup;
  
  
 
 
  mgs="";
errorMgs="";

  constructor(private confirmationService: ConfirmationService,private fb: FormBuilder, private primengConfig: PrimeNGConfig, private messageService: MessageService,private walletService:WalletService) {}

  msgs: Message[] = [];

  position: string;

  confirm1() {
    
}



newWallet:Walletdto= new Walletdto();
  ngOnInit(){
    

    this.addfunds = this.fb.group({
      'idone': new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"), Validators.minLength(2),Validators.maxLength(5)]),
      'idtwo': new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"), Validators.minLength(2),Validators.maxLength(5)]),
     
      'amount': new FormControl('', [Validators.required, Validators.min(500),Validators.pattern("^[0-9]*$")]),
     
      
  });

}

onSubmit(value: Walletdto){


  //console.log(this.addfunds.value);
  console.log(value);
  this.newWallet.idone=value.idone;
  this.newWallet.idtwo=value.idtwo;
  this.newWallet.amount=value.amount;
  
  
  console.log(this.newWallet);
  
 this.confirmationService.confirm({
        message: 'Are you sure that you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            
            this.walletService. FundTransfer(this.newWallet).subscribe(
              
              data=>{this.mgs=data;;console.log("data"); 
      if(this.mgs == "Insufficient Balance"){
        this.messageService.add ({key: 'topright',severity:'error', summary:'Success', detail:data})
      
      }
        else{
        this.messageService.add ({key: 'topright',severity:'success', summary:'Transfer Successfully', detail:data})
        
      }},
      error=>{this.messageService.add ({key: 'topright',severity:'error', summary:'Error', detail:error.error});console.log("")},
            )
        },
        reject: () => {
          this.messageService.add ({key: 'topright',severity:'info', summary:'Rejected', detail:'You have rejected'});
        }
    });
  
  
}

}
