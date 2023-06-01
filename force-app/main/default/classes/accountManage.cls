public with sharing class accountManage {
    @AuraEnabled(cacheable=true)
    public static list<Account> getAccount(){
       
            return [Select id,Name,Phone,Website from Account limit 10];
        
    }
}