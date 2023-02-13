trigger leadTrigger2 on Lead (before insert) {
    for(Lead leadRecord:trigger.new){
        if(String.isBlank(leadRecord.Rating)){
            leadRecord.Rating='Warm';
        }
    }

}