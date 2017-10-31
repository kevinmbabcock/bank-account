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

Account.prototype.balance = function() {
  var balance = this.initialDeposit;
  this.changes.forEach(function(change) {
    var deposit = change.deposit;
    var withdraw = change.withdraw;
    balance = balance + deposit - withdraw;
  });
  return balance;
};





//user logic
$(document).ready(function() {
  var newAccount;

  $("form#accountCreation").submit(function(event) {
    event.preventDefault();
    var name = $("#ownerName").val();
    $("#ownerName").val("");
    var initialDeposit = parseInt($("#initialDeposit").val());
    $("#initialDeposit").val("");
    newAccount = new Account(name,initialDeposit);
  });


  $("form#accountChange").submit(function(event) {
    event.preventDefault();
    var deposit = parseInt($("#userDeposit").val());
    $("#userDeposit").val("");
    var withdraw = parseInt($("#userWithdraw").val());
    $("#userWithdraw").val("");
    var newChange = new Change(deposit,withdraw);
    newAccount.changes.push(newChange);
    var balance = newAccount.balance();
    $("#userBalance").text(balance);
    $(".accountBalance").show();


  });
});
