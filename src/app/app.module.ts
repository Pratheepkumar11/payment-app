import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PasswordValidator } from './components/register/checks/PasswordValidator';
import { AddWalletComponent } from './components/wallet/add-wallet/add-wallet.component';
import { DeleteWalletComponent } from './components/wallet/delete-wallet/delete-wallet.component';
import { FundTransferComponent } from './components/wallet/fund-transfer/fund-transfer.component';
import { WithdrawAmountComponent } from './components/wallet/withdraw-amount/withdraw-amount.component';
import { ShowBalanceComponent } from './components/wallet/show-balance/show-balance.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext'
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RippleModule} from 'primeng/ripple';
import {TabViewModule} from 'primeng/tabview';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { UserAuthGuard } from './auth/user-auth.guard';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {DropdownModule} from 'primeng/dropdown';
import {PanelModule} from 'primeng/panel';
import {ToastModule} from 'primeng/toast';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { WalletService } from './services/wallet.service';
import { ErrordComponent } from './errord/errord.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { HomeComponent } from './components/home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddWalletComponent,
    DeleteWalletComponent,
    FundTransferComponent,
    WithdrawAmountComponent,
    ShowBalanceComponent,
    ErrordComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule, 
    RippleModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    TabViewModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    MessageModule,
    PanelModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    AutoCompleteModule,
    ButtonModule,
    FormsModule,
    InputNumberModule,
    InputTextModule,
    ConfirmDialogModule,
    SplitButtonModule ,
  ],
  
  providers: [UserAuthGuard,WalletService],
  bootstrap: [AppComponent]
})
export class AppModule { }
