function validate() {
  // alert("Inside Validate Function");


  let p = document.getElementById("phone").value;
  // document.forms.survey.phone.value;
  let a = document.getElementById("age").value;
  // document.forms.survey.age.value;
  let e = document.getElementById("email").value;
  // document.forms.survey.email.value;
  let p1 = document.getElementById("pass1").value;
  // document.forms.survey.email.value;
  let p2 = document.getElementById("pass2").value;
  // document.forms.survey.email.value;

  if (p.length >= 1) {
    let pattern2 = new RegExp("[0-9]{10}");
    // OR put regex between /regex/ - no doublequotes
    if (!pattern2.test(p)) {
      alert("Phone Number Format Incorrect");
      return false;
    }
  }

  if (a.length > 2) {
    alert("Age Invalid");
    return false;
  }

  if (e.length >= 1) {
    let pattern1 = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
    // OR put regex between /regex/ - no doublequotes
    if (!pattern1.test(e)) {
      alert("Email Format Incorrect");
      return false;
    }
  }

  // if (!p1.length >= 8) {
  //   alert("Please Enter a Password with 8 or more Characters");
  //   return false;
  // }

  let pattern3 = new RegExp("^[a-zA-Z0-9!@#$%^&*]{8,16}$");
  // OR put regex between /regex/ - no doublequotes
  if (!pattern3.test(p1)) {
    alert("Password Format Incorrect. Please Enter a Password with 8-16 Characters with the use of atleast one of each: Alphabets, Numerals and Special Characters.");
    return false;
  }

  if (p1 != p2) {
    alert("Passwords Not Matched");
    return false;
  }

  return true;
}
