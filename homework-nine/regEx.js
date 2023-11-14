let stringText = document.getElementById('string');
let zipText = document.getElementById('zip');
let ccText = document.getElementById('ccard');
let phoneText = document.getElementById('phone');

function validateString() {
    let vs1 =/Jeremy/;
    let stringVal = stringText.value;
    document.getElementById('stringAns').innerHTML = vs1.test(stringVal);
}

stringText.addEventListener('blur', validateString);

function validateZip() {
    let zipVal = zipText.value;
    let vz1 =/^([0-9]{5})([- ]?)([0-9]{4})?$/;
    document.getElementById('zipAns').innerHTML = vz1.test(zipVal);
}

zipText.addEventListener('blur', validateZip);

function validateCC(){
let ccVal = ccText.value;
let vc1 = /^(\d{4})([- ]?)(\d{4})([- ]?)(\d{4})([- ]?)(\d{4})$/;
document.getElementById('ccAns').innerHTML = vc1.test(ccVal);
}

ccText.addEventListener('blur', validateCC);

function validatePhone() {
    let phoneVal = phoneText.value;
    let vp1 = /^([(]?)(\d{3})([-.)]?)([ ]?)(\d{3})([-.]?)(\d{4})$/;
    document.getElementById('phoneAns').innerHTML = vp1.test(phoneVal);
}

phoneText.addEventListener('blur', validatePhone);