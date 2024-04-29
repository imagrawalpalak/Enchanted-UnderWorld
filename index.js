function formValidation() {
    var fname = document.getElementById('firstName').value;
    var lname = document.getElementById('lastName').value;
    var pnumber = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
   var text="";
  if (FirstName(fname)) {
  }
  if (LastName(lname)) {
  }
  if (PhoneNumber(pnumber)) {
  }

  if (Email(email)) {
  }
}

function FirstName(fname) {
  var message = document.getElementsByClassName("error-message");
  var letters = /^[A-Za-z]+$/;
  if ( fname =="" || fname.match(letters)) {
    text="";
    message[0].innerHTML = text;
    return true;
  }
  
  else {
    text="First name should contain only letters";
    message[0].innerHTML = text;
    return false;
  }
}

function  LastName(lname) {
  var message = document.getElementsByClassName("error-message");
  var letters = /^[A-Za-z]+$/;
  if ( lname =="" || lname.match(letters)) {
    text="";
    message[1].innerHTML = text;
    return true;
  }
  
  else {
    text="Last name should contain only letters";
    message[1].innerHTML = text;
    return false;
  }
}

function Email(email) {
  var message = document.getElementsByClassName("error-message");
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
  var atpos = email.indexOf("@");
  var dotpos = email.lastIndexOf(".");
          
  if ( email =="" || email.match(mailformat) || atpos > 1 && ( dotpos - atpos > 2 )) {
    text="";
    message[2].innerHTML = text;
    return true;
  }
         
  else {
    text="Wrong email format";
    message[2].innerHTML = text;
    return false;
  }
}

function  PhoneNumber(pnumber) {
  var message = document.getElementsByClassName("error-message");
  var numbers = /^[0-9]+$/;
  if ( pnumber =="" || pnumber.match(numbers)) {
    text="";
    message[3].innerHTML = text;
    return true;
  }
  
  else {
    text="Phone number should contain only numbers";
    message[3].innerHTML = text;
    return false;
  }
}
