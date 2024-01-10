import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import PhoneService from './phone-service';

function getPhone(phone){
  PhoneService.getPhone(phone)
    .then(function(response) {
      if(response instanceof Error) {
        const errorMessage = `there was a problem accessing the phone data from Abstract API for ${phone}: ${response.message}`;
        throw new Error(errorMessage);
      }
      printAnswer(response, phone);
    })
    .catch(function(error) {
      printError(error);
    });
}

function printAnswer(response, phone){
  if(response.valid === true){
    document.querySelector("#valid").innerHTML = `The number ${phone}: valid`;
    document.querySelector("#valid").innerHTML = null;
  }else{
    "Number is invalid";
  }
  
}

function printError(error){
  document.querySelector('#error').innerText = error;
}


function handleFormSubmission(event) {
  event.preventDefault();
  const phone = parseInt(document.querySelector('#number').value);
  document.querySelector('#number').value = null;
  getPhone(phone);
}


document.querySelector('form').addEventListener("submit", handleFormSubmission);
