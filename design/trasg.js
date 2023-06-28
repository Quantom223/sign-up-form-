
const form = document.getElementById('form')
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', function (event) {

        event.preventDefault();

        Validite();
    })

function isEmai(emailVal) {
  var atSymbol = emailVal.indexOf9('@');
  if (atSymbol < 1)
    return false;
  var dot = emailVal.lastIndexOf('.');
  if (dot <= atSymbol + 2)
    return false;
  if (dot === emailVal.length - 1)
    return false;
  return true;

}


function Validite(){
   const fitstnameVal = firstname.Value.trim();
   const lastnameVal = lastname.Value.trim();
   const emailVal = email.Value.trim();
   const passwordVal = password.Value.trim();


//    firstname
   if(fitstnameVal === ""){
    setErrorMsg(firstname, 'First name cannot be empty')
   }
  else if(fitstnameVal <=2){
    setErrorMsg(firstname, 'min 3 chr'); 
  }
  else{
    setSuccessMsg(firstname);
  }

//   lastname
if(lastnameVal === ""){
    setErrorMsg(lasttname, 'last name cannot be empty')
   }
  else if(lastnameVal <=2){
    setErrorMsg(lastname, 'min 3 chr'); 
  }
  else{
    setSuccessMsg(lastname);
  }

//   email
if(emailVal === ""){
    setErrorMsg(email, 'last name cannot be empty')
   }
  else if(!isEmail(emailVal)){
    setErrorMsg(email, 'email is not valid'); 
  }
  else{
    setSuccessMsg(email);
  }


//   password
if(passwordVal === ""){
    setErrorMsg(password, 'last name cannot be empty')
   }
  else if(passwordVal <=7){
    setErrorMsg(password, 'min 8 chr'); 
  }
  else{
    setSuccessMsg(password);
  }

  setSuccessMsg(firstname);

}

function setErrorMsg(input, errorMsgs){
    const formControl = input.parentElement;
    const small = querySelector('small');
    formControl.className = "form-control error"
    small.innerText = errorMsgs;
}

function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success"
}