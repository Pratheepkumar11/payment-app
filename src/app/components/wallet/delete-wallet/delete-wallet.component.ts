import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { Wallet } from 'src/app/entity/Wallets';
import { WalletService } from 'src/app/services/wallet.service';
import { PasswordValidator } from '../../register/checks/PasswordValidator';

@Component({
  selector: 'app-delete-wallet',
  templateUrl: './delete-wallet.component.html',
  styleUrls: ['./delete-wallet.component.css'],
  providers: [ConfirmationService]
})
export class DeleteWalletComponent {
  
  deleteform: FormGroup;
 
  
  
  
 
  mgs="";
  errorMgs="";
  newWallet:Wallet= new Wallet();
  constructor(private fb: FormBuilder, private messageService: MessageService,private confirmationService: ConfirmationService, private primengConfig: PrimeNGConfig,private walletService:WalletService) {}
  

  

 

  ngOnInit(){
    

    this.deleteform = this.fb.group({
      'id': new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"), Validators.minLength(2),Validators.maxLength(5)]),
      
      'password': new FormControl('', [Validators.required,PasswordValidator.strong,Validators.minLength(2),Validators.maxLength(5)]),
      
      
  });

    
    
  }

 

  

  onSubmit(value: any){
    //console.log(this.registrationForm.value);
    console.log(value);

    this.newWallet.id=value.id;
  
    this.newWallet.password=value.password;
    
    
    console.log(this.newWallet);
    
   
   


    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        
        this.walletService.DeleteWallet(this.newWallet).subscribe(
          
          data=>{this.mgs=data;;console.log("data"); 
          if(this.mgs == "password misMatch"){
            this.messageService.add ({key: 'topright',severity:'error', summary:data, detail:"  Please Enter correct password"})
          
          }
            else{
            this.messageService.add ({key: 'topright',severity:'success', summary:'Delete Wallet Success', detail:data})
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
