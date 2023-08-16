// document.getElementById('btn-withdraw').addEventListener('click',function(){
//     const withdrawField = document.getElementById('withdraw-field');
//     const newWithdrawAmountString = withdrawField.value;
//     const newWithdrawAmount = parseFloat(newWithdrawAmountString);

//     withdrawField.value = '';

//     const withdrawTotalElement = document.getElementById('withdraw-total');
//     const previousWithdrawTotalString = withdrawTotalElement.innerText;
//     const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

//     const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
//     withdrawTotalElement.innerText = newWithdrawTotal;

//     const balanceElement = document.getElementById('balance-total');
//     const previousBalanceTotalString = balanceElement.innerText;
//     const previousBalanceTotal = parseFloat(previousBalanceTotalString);

//     const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
//     balanceElement.innerText = newBalanceTotal;
// })


/* You can Follow the Above method to do manually. Otherwise you can follow the Bottom Method for Ease */


document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    setTextElementValueById('withdraw-total', newWithdrawAmount);

    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newTotalBalanceAmount = previousBalanceTotal - newWithdrawTotal;

    setTextElementValueById('balance-total', newTotalBalanceAmount);
})