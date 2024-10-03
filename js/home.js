document.getElementById('btn-add-money').addEventListener('click', function (event) {

    event.preventDefault();

    const addMoneyNumber = parseFloat(document.getElementById('input-add-money').value);
    const pinInput = document.getElementById('input-pin').value;
    console.log(pinInput);

    if (pinInput === '1234') {
        console.log('adding money to your account');
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);

        const newBalance = addMoneyNumber + balanceNumber;
        document.getElementById('account-balance').innerText = newBalance
        console.log(newBalance);
    } else {
        console.log('Failed to add Money! Plrase try again');
    }

})