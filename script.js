var users=[];
$("#create-acc").click(function(){
	window.open("index2.html");
})




























function creatAcc(username,balance,password){
var account={
username:username,
balance:balance,
password:password,
id: generateId();
transaction:transaction
};
users.push(account)


}

function generateId(){
  this.id = Math.floor(Math.random() * (100000))	
}
function transaction(){
var s = this
var balance = this.balance;
return {
	deposit:function(amount){
		console.log(balance)
		s.balance = balance+amount;
	},
	withdrow:function(amount){
		if(amount> balance){
			alert("This operation is not available, Your balance is not enough");
		}else{
		s.balance= balance-amount;
		}

	},
	showbalance:function(){
		return "Your balnce is : "+ s.balance;
	}
}
}

function maximumAccountBalance(){
	var largest = users[0];
	var accountindex;
	$.each(users,function(index,value){
		if(value['balance'] > largest['balance']){
			largest = value;
		}
        
	})
	return largest;
}


