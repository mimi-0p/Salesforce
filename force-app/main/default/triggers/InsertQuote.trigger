trigger InsertQuote on OpportunityLineItem (After insert) {
    set<id> currentOppRecId =new set<id>();
    for(OpportunityLineItem Oli:Trigger.new){
        currentOppRecId.add(Oli.Opportunityid);
        }
    list<Opportunity> opplist =[Select Id,Name from Opportunity where Id in:currentOppRecId];
    list<Quote> Qulist=new list<Quote>();
    if(opplist.size()>0){
        for(Opportunity opp:opplist){
            Quote QtNew = new Quote();
            QtNew.Name=Opp.Name;
            QtNew.OpportunityId=opp.id;
            Qulist.add(QtNew);
            }
        if(Qulist.size()>0){
            }
        insert Qulist;
    }
}