import { LightningElement,wire } from 'lwc';
import getAllAccount from '@salesforce/apex/accountManage.getAccount';

export default class AccountManageApex extends LightningElement {

    @wire(getAllAccount)
    accounts;

    get responseReceived(){
        if(this.accounts){
            return true;
        }
        return false;
    }
}