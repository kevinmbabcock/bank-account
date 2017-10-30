//busines logic
function Account(ownerName, initialDeposit) {
  this.ownerName = ownerName;
  this.initialDeposit = initialDeposit;
  this.changes = [];
}

function Change(deposit, withdraw) {
  this.deposit = deposit;
  this.withdraw = withdraw;
}



// Account.prototype.balance = function() {
//   var initial = this.initialDeposit;
//   this.changes.forEach(function(change) {
//     var deposit = this.deposit;
//     var withdraw = this.withdraw
//     return initial - withdraw + deposit
//   })
// };

// var balance = function (initialDeposit,deposit,withdraw) {
//   return initialDeposit - withdraw + deposit
// }



//user logic
$(document).ready(function() {

  var name;
  var newAccount;
  var deposit;
  var withdraw;
  var newChange;

  $("form#accountCreation").submit(function(event) {
    event.preventDefault();
    name = $("#ownerName").val();
    $("#ownerName").val("");
    initialDeposit = parseInt($("#initialDeposit").val());
    $("#initialDeposit").val("");
    newAccount = new Account(name,initialDeposit);
    console.log(newAccount);
  });


  $("form#accountChange").submit(function(event) {
    event.preventDefault();
    deposit = parseInt($("#userDeposit").val());
    $("#userDeposit").val("");
    withdraw = parseInt($("#userWithdraw").val());
    $("#userWithdraw").val("");
    newChange = new Change(deposit,withdraw);
    // console.log(newAccount);
  });




  newAccount.changes.push(newChange[0]);
  console.log(newAccount.changes);

  // var userBalance = newAccount.balance(initialDeposit,deposit,withdraw);
  // alert(userBalance);

});
