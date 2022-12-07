import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Wallet } from 'src/app/entity/Wallets';
import { WalletService } from 'src/app/services/wallet.service';
import { YourSharedServiceService } from 'src/app/services/your-shared-service.service';
import { PasswordValidator } from '../register/checks/PasswordValidator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


 loginForm: FormGroup;
  
  ids:any;
  mgs="";
  errorMgs="";
  newWallet:Wallet= new Wallet();

  constructor(private fb: FormBuilder, private messageService: MessageService,private walletService:WalletService,private router:Router,private yourSharedService: YourSharedServiceService) {
   
  }

  ngOnInit(){
    

    this.loginForm = this.fb.group({
      'id': new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"), Validators.minLength(2),Validators.maxLength(5)]),
      
      'password': new FormControl('', [Validators.required,PasswordValidator.strong,Validators.minLength(2),Validators.maxLength(5)]),
      
      
  });

    
    
  }

  onSubmit(value: Wallet){
    //console.log(this.registrationForm.value);
    console.log(value);
    this.newWallet.id=value.id;
  
    this.newWallet.password=value.password;
    this.ids=value.id;
    this.yourSharedService.id = this.ids;
    console.log(this.ids);
    
    console.log(this.newWallet);
    
   
    this.walletService.Login(this.newWallet).subscribe(
      data=>{this.mgs=data;;console.log("data"); 
      if(this.mgs == "password misMatch"){
        this.messageService.add ({key: 'topright',severity:'error', summary:data, detail:"  Please Enter correct password"})
        
      }
        else{
        this.messageService.add ({key: 'topright',severity:'success', summary:'Login Success', detail:data})
        this.router.navigate(['addfunds']);
        sessionStorage.setItem('id', data.id);

        
       
      }},
      error=>{this.messageService.add ({key: 'topright',severity:'error', summary:'Error', detail:error.error});console.log("")},
      
    )

    if(this.mgs=="true"){
      this.router.navigate(['addfunds']);
    }
    
  }

  reg(){
    this.router.navigate(['register']);
  }


  

  
}
