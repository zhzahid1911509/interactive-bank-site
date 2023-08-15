document.getElementById('btn-deposit').addEventListener('click', function(){
    if(document.getElementById('input_deposit').value === ""){
        alert('Please enter any amount');
    }
    else{
        const previousDeposit = document.getElementById('deposit_amnt').innerText;
        const newDeposit = document.getElementById('input_deposit').value;
        let totalDeposit = parseFloat(newDeposit) + parseFloat(previousDeposit);
        document.getElementById('deposit_amnt').innerText = totalDeposit;
        const previousBalance = document.getElementById('balance_amnt').innerText;
        let totalBalance = parseFloat(previousBalance) + parseFloat(newDeposit);
        document.getElementById('balance_amnt').innerText = totalBalance;
        document.getElementById('input_deposit').value = "";
        
    }
});

document.getElementById('btn-withdraw').addEventListener('click', function(){
    if(document.getElementById('input_withdraw').value === ""){
        alert('Please enter any amount');
    }
    else{
        const previousWithdraw = document.getElementById('withdraw_amnt').innerText;
        const newWithdraw = document.getElementById('input_withdraw').value;
        let totalWithdraw = parseFloat(newWithdraw) + parseFloat(previousWithdraw);
        document.getElementById('withdraw_amnt').innerText = totalWithdraw;
        document.getElementById('input_withdraw').value = "";
    }
    
});



