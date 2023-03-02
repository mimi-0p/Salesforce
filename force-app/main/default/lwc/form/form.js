import { LightningElement, track } from 'lwc';

export default class Form extends LightningElement {
    @track dynamicGreeting = '';

    greetingChangeHandler(event){
        this.dynamicGreeting = event.target.value ;
        console.log(this.dynamicGreeting)
    }
}