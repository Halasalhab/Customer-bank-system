var users=[];
var usr1 = creatAcc("Hala", 5000, "98754");
var usr2 = creatAcc("laila", 8000 , "lkjh");
var transferedUserIndex;
users = [usr1, usr2];
$("#index2").hide();
$("#index3").hide();
$("#create-acc").click(function(){
	$("#index").hide();
	$("#index2").show();
})

$("#regis").click(function(){

	var userName = $("#user-name").val();
	var userBalance = $("#balance").val();
	userBalance = parseInt(userBalance)

	var pass = $("#password").val();
	if(userBalance < 0){
		alert("Your balance can't be less than 0")
		return;
	}
	var usr = creatAcc(userName,userBalance,pass);
	var id = usr["id"]
	$("#id-note").empty()
	var boldId = $("<b></b>").text(id)
	var container = $("<div></div>");
	$(container).text("Your id is: ")
	$(container).attr("id","note")
    $(container).append(boldId);
    $("#id-note").append(container)
    setTimeout(function(){ alert("You registered successfully, Thank you for choosing us, click ok to move to login page"); }, 5000);
   
    $("#index2").hide();
    $("#index").show();


})
$("#login").click(function(){
	var userId = $("#ui").val();
	var pw = $("#ps").val();
	$.each(users, function(i, person){
		if(person['id'].toString() === userId && person['password'] === pw){
            transferedUserIndex = i;
            $("#index").hide()
            $("#index3").show()
            return;
		}
	})
})

 $("#balance-li").one('click',function(){
 	 var balance = users[transferedUserIndex]['balance'];

 	 $("#balance-li").append(balance)
})

$("#depos").click(function(){
    var amoun = parseInt($("#amount").val())
	users[transferedUserIndex].transaction().deposit(amoun)
    alert("Process done successfully balance now is: " + users[transferedUserIndex]['balance'])
	
})

$("#withdraw").click(function(){
	var amoun = parseInt($("#amount").val())
	orgBalance= users[transferedUserIndex]['balance']
	users[transferedUserIndex].transaction().withdrow(amoun)
	if(users[transferedUserIndex]['balance'] === orgBalance){
		return;	
	}
    alert("Process done successfully balance now is: " + users[transferedUserIndex]['balance'])

})

$("#the-richeset").one('click',function(){
	var richest = maximumAccountBalance();

	$("#the-richeset").append(richest['balance'])
})
function creatAcc(username,balance,password){
var account={
username:username,
balance:parseInt(balance),
password:password,
id: generateId(),
transaction:transaction
};
users.push(account)
return account;

}

function generateId(){
 return Math.floor(Math.random() * (100000))	
}
function transaction(){
var s = this
var balance = this.balance;
return {
	deposit:function(amount){
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


