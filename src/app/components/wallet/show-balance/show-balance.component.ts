import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Wallet } from 'src/app/entity/Wallets';
import { WalletService } from 'src/app/services/wallet.service';
import { YourSharedServiceService } from 'src/app/services/your-shared-service.service';

@Component({
  selector: 'app-show-balance',
  templateUrl: './show-balance.component.html',
  styleUrls: ['./show-balance.component.css']
})
export class ShowBalanceComponent {
  
  loading = [false, false, false, false];
  
    load(index) {
        this.loading[index] = true;
        setTimeout(() => (this.loading[index] = false), 1000);
    }
    index=0;
    showbalance: FormGroup;
  
  
 
  mgs="";
  errorMgs="";
  ia:number;
  constructor(private fb: FormBuilder, private messageService: MessageService,private walletService:WalletService,private yourSharedService: YourSharedServiceService) {}
 
  ngOnInit(){
    
    console.log(this.yourSharedService.id);
    this.ia=this.yourSharedService.id;
    this.showbalance = this.fb.group({
      'id': new FormControl({value: 'ia', disabled: true},[Validators.required,Validators.pattern("^[0-9]*$"), Validators.minLength(2),Validators.maxLength(5)]),
      
      
     
     
      
  });

    
    
  }
  onSubmit(value: any){
    //console.log(this.addfunds.value);
    console.log(value.id);
    
    
    
    this.loading[0] = true;
    setTimeout(() => (this.loading[0] = false), 1000);
    
    
    
 
 
    this.walletService.ShowBalance(value.id).subscribe(
      data=>{this.mgs=data;;console.log("data"); 
      if(this.mgs == "Insufficient Balance"){
        this.messageService.add ({key: 'topright',severity:'error', summary:'Success', detail:data})
      
      }
        else{
        this.messageService.add ({severity:'success', summary:'Balance', detail:"Current Balance  "+data})
      }},
      error=>{this.messageService.add ({key: 'topright',severity:'error', summary:'Error', detail:error.error});console.log("")},
      
    
    )
    
  }

}
