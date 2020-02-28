window.onload = function () {
    var form = document.getElementById('creditCardForm');
    var inputs = document.querySelectorAll('.cardForm input[type="number"]');
    var infoIcon = document.querySelector('.cardForm__labelIcon');
    infoIcon.addEventListener('click', function (e) {
        event.target.nextElementSibling.classList.toggle('showPopup');
    });
    for (const item of inputs) {
        item.addEventListener('focus', function (e) {
            event.target.parentElement.parentElement.parentElement.style.height = "auto";
        }); 
    }
    
};