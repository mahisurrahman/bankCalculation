// document.getElementById('btn-deposit').addEventListener('click',function(){
//     const depositField = document.getElementById('deposit-field');
//     const newDepositAmountString = depositField.value;
//     const newDepositAmount = parseFloat(newDepositAmountString);

//     depositField.value = '';

//     const depositTotalElement = document.getElementById('deposit-total');
//     const previousDepositTotalString = depositTotalElement.innerText;
//     const previousDepositTotal = parseFloat(previousDepositTotalString);

//     const newDepositTotal = previousDepositTotal + newDepositAmount;
//     depositTotalElement.innerText = newDepositTotal;

//     const balanceTotalElement = document.getElementById('balance-total');
//     const previousBalanceTotalString = balanceTotalElement.innerText;
//     const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

//     const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
//     balanceTotalElement.innerText = newBalanceTotal;
// })


/* You can Follow the Above method to do manually. Otherwise you can follow the Bottom Method for Ease */

document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputValueById('deposit-field');
    const previousDepositTotal = getTextElementValueById('deposit-total');
    const newDepositTotal = previousDepositTotal + newDepositAmount;

    setTextElementValueById('deposit-total', newDepositTotal);

    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = newDepositTotal + previousBalanceTotal;

    setTextElementValueById('balance-total', newBalanceTotal);
})