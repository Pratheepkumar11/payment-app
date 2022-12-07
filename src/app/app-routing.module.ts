import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserAuthGuard } from './auth/user-auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddWalletComponent } from './components/wallet/add-wallet/add-wallet.component';
import { DeleteWalletComponent } from './components/wallet/delete-wallet/delete-wallet.component';
import { FundTransferComponent } from './components/wallet/fund-transfer/fund-transfer.component';
import { ShowBalanceComponent } from './components/wallet/show-balance/show-balance.component';
import { WithdrawAmountComponent } from './components/wallet/withdraw-amount/withdraw-amount.component';
import { ErrordComponent } from './errord/errord.component';

const routes: Routes = [ 
{ path: 'Home', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: 'register', component:RegisterComponent },
{ path: 'addfunds', component: AddWalletComponent , canActivate:[UserAuthGuard]},
{ path: 'deletWallet', component: DeleteWalletComponent, canActivate:[UserAuthGuard] },
{ path: 'fundTransfer', component: FundTransferComponent, canActivate:[UserAuthGuard] },
{ path: 'showBalance', component: ShowBalanceComponent , canActivate:[UserAuthGuard]},
{ path: 'withdrawAmount', component: WithdrawAmountComponent, canActivate:[UserAuthGuard]},

{ path: '**', component:  ErrordComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
