trigger AccountTrigger on Account (Before insert,Before update) {
    List<Account> existingRecordId =[Select id,name from Account];
    System.debug('Account record:'+existingRecordId);
    list<Account> currentRecordId = Trigger.New;
    System.debug('New Account:'+currentRecordId);
    for(Account acc:currentRecordId){
        if(acc.Rating =='Hot'){
            acc.Description ='Updated by trigger';
        }
    }	
}