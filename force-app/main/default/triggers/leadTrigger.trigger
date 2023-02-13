trigger leadTrigger on Lead (before insert,before update) {
    for(Lead leadRecord : Trigger.new){
        if(String.isBlank(leadRecord.LeadSource)){
          leadRecord.LeadSource='Others';  
        }
        if(String.isBlank(leadRecord.Industry)){
            leadRecord.addError('The Industry field is required');
        }
    }

}