var users=[];

function creatAcc(username,balance,password){
var account={
username:username,
balance:balance,
password:password
transaction:transaction
};
users.push(account)
}

function transaction(amount){
var amount=amount;
return {
	deposit:function(){
		this.balance=this.balance+amount;
	},
	withdrow:function(){
		if(amount>this.balance){
			alert("This operation is not available, Your balance is not enough");
		}else{
			this.balance=this.balance-amount;
		}

	},
	showbalance:function(){
		return "Your balnce is : "+this.balance;
	}
}
}
function maximumAccountBalance(){
	var balnces=[];
	var accountindex;
	$.each(users,function(index,value){
		balnces.push(value["balance"])
        
	})
	var maxi=Math.max(balnces)
	accountindex=balnces.indexOf(maxi)
	return users[accountindex];
}


