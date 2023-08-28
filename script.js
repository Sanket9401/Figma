let homeContainer = document.querySelector('.home-container');
let home = document.getElementById('home');
let digital = document.querySelector('.digital-assistance');
let service = document.querySelector('.self-service');

let digAssistContainer = document.querySelector('.dig-assist-container');
let selfServiceContainer = document.querySelector('.self-service-container');
let formContainer = document.querySelector('.form-container');

const nameInput = document.querySelector('.name');
const mobileInput = document.querySelector('.mobile');
let form = document.getElementById('form');
let btn = document.getElementById('btn');


let journey = {
    step1 : "",
    step2 : "",
    details :{
        name : "",
        mobileNumber : 0
    }
}

btn.addEventListener('click', function(e){
    e.preventDefault();
    journey.details.name = nameInput.value;
    journey.details.mobileNumber = mobileInput.value;
    console.log(journey);
    form.reset();
});

window.addEventListener('click', function(e){ 
    
    let op = e.target.className;
        if(op == ""){
            op = e.target.parentElement.className;
        }
        if(op == "home"){
            digAssistContainer.classList.add('hide');
            selfServiceContainer.classList.add('hide');
            formContainer.classList.add('hide');
            homeContainer.classList.remove('hide');
        }
        else if( op == "digital-assistance"){
            journey.step1 = op;
            homeContainer.classList.add('hide');
            digAssistContainer.classList.remove('hide');
        }
        else if(op == "self-service"){
            journey.step1 = op;
            homeContainer.classList.add('hide');
            selfServiceContainer.classList.remove('hide');
        }
        else if(op == "registrationMobile" || op == "kyc" || op == "card-issuance" || op == "cheque-book-issuance" || op == "block-unblock-cards" || op == "stop-check-request" 
        || op == "account-opening-kiosk" || op == "customer-lounge-area" || op == "tab-kiosk" || op == "staff-area" || op == "video-kyc" || op == "internet-banking-kiosk"){
            journey.step2 = op;
            digAssistContainer.classList.add('hide');
            selfServiceContainer.classList.add('hide');
            formContainer.classList.remove('hide');
        }
})
