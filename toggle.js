    var MenuItems = document.getElementById("MenuItems"); 
    MenuItems.style.maxHeight = "0px"; 
    function menutoggle() { 
      if (MenuItems.style.maxHeight == "0px") { 
        MenuItems.style.maxHeight = "200px"; 
      } else { 
        MenuItems.style.maxHeight = "0px"; 
      } 
    } 
    var signInForm = document.getElementById("signInForm"); 
    var signUpForm = document.getElementById("signUpForm"); 
    var indicator = document.getElementById("indicator"); 
  
    function signIn() { 
      signUpForm.style.transform = "translateX(300px)"; 
      signInForm.style.transform = "translateX(300px)"; 
      indicator.style.transform = "translateX(0px)"; 
    } 
    function signUp() { 
      signUpForm.style.transform = "translateX(0px)"; 
      signInForm.style.transform = "translateX(0px)"; 
      indicator.style.transform = "translateX(100px)"; 
    } 
