document.getElementById('btn-cash-out').addEventListener('click', function (event) {

    event.preventDefault();

    const balance = parseFloat(document.getElementById('account-balance').innerText);
    const cashOutMoney = parseFloat(document.getElementById('input-cash-out').value);
    const pinInput = document.getElementById('cash-out-pin-input').value;

    if (pinInput === '1234') {
        const newBalance = balance - cashOutMoney;
        document.getElementById('account-balance').innerText = newBalance;
    } else {
        alert('Failed! Please try again');
    }

});
