import { LightningElement,track } from 'lwc';

export default class BmiCalculator extends LightningElement {
    height;
    weight;

    @track Bmi;
    weightHandler(event){
        this.weight = parseFloat(event.target.value);
    }
    heightHandler(event){
        this.height = parseFloat(event.target.value);
    }
    calculateBmi(){
        this.Bmi = this.weight/(this.height*this.height);
    }
    
}