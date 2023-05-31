import { LightningElement,track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';

export default class AccountManagerLDS extends LightningElement {
    @track accountName;
    @track accountPhone;
    @track accountWebsite;

    accountNameHandler(event){
        this.accountName = event.target.value;
    }
    accountPhoneHandler(event){
        this.accountPhone = event.target.value;
    }
    accountWebsiteHandler(event){
        this.accountWebsite = event.target.value;
    }
    createAccount(){
        const fields ={'Name':this.accountName,'Phone':this.accountPhone,'Website':this.accountWebsite}
        const recordInput = {apiName:'Account',fields}

        createRecord(recordInput).then(Response =>{
            console.log("Account has been created", Response.id);
        }).catch(error=>{
            console.error("Error in creating Account",error.body.message);

        });
    }
}