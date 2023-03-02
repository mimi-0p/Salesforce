({
	SaveClick : function(component, event, helper) {
		console.log(this.objectName);
		console.log("save");
		var pageRef ={
			type:'standard_objectPage',
			attributes: {
				objectApiName:'Student_Form__c',
				actionName:'list'
			},
		}
		
	}
})