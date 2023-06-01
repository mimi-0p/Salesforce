import { LightningElement } from "lwc";
import LightningConfirm from "lightning/confirm";
import LightningAlert from "lightning/alert";

export default class AlertPrompt extends LightningElement {
    @api recordId;
    async handleConfirmClick() {
        const result = await LightningConfirm.open({
            message: "Are you sure you want to Create a cart",
            variant: "default", 
            label: "Create a cart"
        });

        
        if (result) {
            this.handleSuccessAlertClick();
        } else {
            
            this.handleErrorAlertClick();
        }
    }

    async handleSuccessAlertClick() {
        await LightningAlert.open({
            message: `Cart Created Successfully`,
            theme: "success",
            label: "Success!"
        });
    }

    async handleErrorAlertClick() {
        await LightningAlert.open({
            message: `Cart didn't created`,
            theme: "error",
            label: "Error!"
        });
    }
}