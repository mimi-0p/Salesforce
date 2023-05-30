import { LightningElement,track } from 'lwc';

export default class Simple_Calculator extends LightningElement {

    @track currentResult;
    @track previousResult = [];
    @track showpreviousResult = false ;

    firstNumber;
    secondNumber;

    numberChangeHandler(event){
        const inputBoxName = event.target.name;

        if(inputBoxName === 'firstNumber'){
            this.firstNumber = event.target.value;
            console.log("firstn");
        }
        else if(inputBoxName === 'secondNumber'){
            this.secondNumber = event.target.value;
            console.log("firssecondn");
        }
    }
    addHandler(){
        const firstN=parseInt(this.firstNumber);
        const secondN=parseInt(this.secondNumber);

        this.currentResult = 'Result of '+firstN+' +'+secondN+' is '+(firstN+secondN);
        this.previousResult.push(this.currentResult);
        console.log('addvalue');
    }

    subHandler(){
        const firstN=parseInt(this.firstNumber);
        const secondN=parseInt(this.secondNumber);

        this.currentResult = 'Result of '+firstN+' -'+secondN+' is '+(firstN-secondN);
        this.previousResult.push(this.currentResult);
    }

    multiplyHandler(){
        const firstN=parseInt(this.firstNumber);
        const secondN=parseInt(this.secondNumber);

        this.currentResult = 'Result of '+firstN+' *'+secondN+' is '+(firstN*secondN);
        this.previousResult.push(this.currentResult);
    }

    divideHandler(){
        const firstN=parseInt(this.firstNumber);
        const secondN=parseInt(this.secondNumber);

        this.currentResult = 'Result of '+firstN+' /'+secondN+' is '+(firstN/secondN);
        this.previousResult.push(this.currentResult);
    }
    showPreviousResultToggle(event){
        this.showpreviousResult = event.target.checked;
    }
}