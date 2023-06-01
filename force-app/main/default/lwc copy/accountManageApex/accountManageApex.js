import { LightningElement,track } from 'lwc';
import getAllAccount from '@salesforce/apex/accountManage.getAccount';

export default class AccountManageApex extends LightningElement {

    @track numberOfRecords;
    @track accounts;

    get responseReceived(){
        if(this.accounts){
            return true;
        }
        return false;
    }

    numberOfAccountChangeHandler(event){
        this.numberOfRecords = event.target.value;
        console.log('number',this.numberOfRecords);
    }

    getAccounts(){
        console.log('comes');
        getAllAccounts({numberOfRecords:this.numberOfRecords}).then(Response =>{
            this.accounts = Response;
        }).catch(error =>{
            console.error('Error in getting the accounts', error.body.message);
        })
    
        }
}