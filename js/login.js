document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();

    console.log('Login button clicked')

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    if (phoneNumber === '5' && pinNumber === '1234') {
        window.location.href = '/home.html';
        console.log('you are logged in');
    } else {
        alert('Wrong phone number or pin');
    }
});