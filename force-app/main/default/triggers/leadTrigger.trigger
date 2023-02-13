trigger leadTrigger on Lead (before insert,before update,after update) {
    for(Lead leadRecord : Trigger.new){
        //if lead source is blank then make it Others
        if(Trigger.isBefore && String.isBlank(leadRecord.LeadSource)){
            leadRecord.LeadSource='Others';  
        }
        //validation for not update dirctly from open status to closed.
        if((leadRecord.Status == 'Closed - Converted' || leadRecord.Status == 'Closed - Not Converted') && Trigger.oldMap.get(leadRecord.id).Status =='Open - Not Contacted'){
            leadRecord.Status.addError('You can not directly close status from open');
        }
        //validation rule if industry field is empty.
        if(String.isBlank(leadRecord.Industry) && trigger.isInsert){
            leadRecord.addError('The Industry field is required');
        }
        if(String.isBlank(leadRecord.Rating)){
            leadRecord.Rating='Warm';
        }
    }

}