import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  userInfo: any = {};
num:any;
  constructor(public navCtrl: NavController,public toastCtrl:ToastController, public navParams: NavParams) {
    this.reg();
  }

  presentvalidlogin() {
    const toast = this.toastCtrl.create({
      message: this.num,
      duration: 3000
    });
    toast.present();
  }
  presentvalid() {
    const toast = this.toastCtrl.create({
      message:'iam in else'+this.userInfo.country_code+'hi'+this.userInfo.phoneNumber,
      duration: 3000
    });
    toast.present();
  }

  reg()
  {
    this.num=this.register();
    console.log("return val=",this.num);
    this.presentvalidlogin();

  }
  register(){
      (<any>window).AccountKitPlugin.loginWithPhoneNumber({
        useAccessToken: true,
        defaultCountryCode: "IN",
        facebookNotificationsEnabled: true,
      }, data => {
        (<any>window).AccountKitPlugin.getAccount(
          info => this.userInfo = info,
          err => console.log(err)
        );
      });


      if(this.userInfo.country_code==null&&this.userInfo.phoneNumber)
      {

      }
      else{
        this.presentvalidlogin();
        this.presentvalid();
      }
    }






}