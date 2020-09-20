var users=[];
$("#create-acc").click(function(){
	window.open("index2.html");
})

$("#regis").click(function(){

	var userName = $("#user-name").val();
	var userBalance = $("#balance").val();
	var pass = $("#password").val();
	var id = creatAcc(userName,userBalance,pass);
	$("#id-note").empty()
	var boldId = $("<b></b>").text(id)
	var container = $("<div></div>");
	$(container).text("Your id is: ")
	$(container).attr("id","note")
    $(container).append(boldId);
    $("#id-note").append(container)
})
$("#login").click(function(){
	var userId = $("#ui").val();
	var pw = $("#ps").val();
	$.each(users, function(i, usr){
		if(usr['id'] === userId && usr['password'] === pw){
			window.open("index3.html");
		}
	})
})

/*$("#balance-li").click(function(){

})*/
function creatAcc(username,balance,password){
var account={
username:username,
balance:balance,
password:password,
id: generateId(),
transaction:transaction
};
users.push(account)
return account.id;

}

function generateId(){
 return Math.floor(Math.random() * (100000))	
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


