document.getElementById('add-money-button').addEventListener('click', function () {

    document.getElementById('add-money-ui').classList.remove('hidden');
    document.getElementById('cash-out-ui').classList.add('hidden');

});

document.getElementById('cash-out-button').addEventListener('click', function () {

    document.getElementById('cash-out-ui').classList.remove('hidden');
    document.getElementById('add-money-ui').classList.add('hidden');


});