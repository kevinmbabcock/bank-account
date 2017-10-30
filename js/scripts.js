//busines logic
function Account(ownerName, initialDeposit) {
  this.ownerName = name;
  this.initialDeposit = initialDeposit;
  this.changes = [];
}

function Change(deposit, withdraw) {
  this.deposit = deposit;
  this.withdraw = withdraw;
}

Account.changes.push(Change);

Account.prototype.balance = function() {
  var initial = this.initialDeposit;
  this.changes.forEach(function(change) {
    var deposit = this.deposit;
    var withdraw = this.withdraw
    return initial - withdraw + deposit
  })
};

// var balance = function (initialDeposit,deposit,withdraw) {
//   return initialDeposit - withdraw + deposit
// }



//user logic
$(document).ready(function() {

  var newAccount = {};
  var newChange ={};
  var initialDeposit = 0;
  var deposit = 0;
  var withdraw =0;

  $("form#accountCreation").submit(function(event) {
    event.preventDefault();
    var name = $("#ownerName").val();
    $("#ownerName").val("");
    initialDeposit = parseInt($("#initialDeposit").val());
    $("#initialDeposit").val("");
    newAccount = new Account(name,initialDeposit);
  });

  $("form#accountChange").submit(function(event) {
    event.preventDefault();
    deposit = parseInt($("#userDeposit").val());
    $("#userDeposit").val("");
    withdraw = parseInt($("#userWithdraw").val());
    $("#userWithdraw").val("");
    newChange = new Change(deposit,withdraw);
  });

  var userBalance = newAccount.balance(initialDeposit,deposit,withdraw);
  alert(userBalance);

});
