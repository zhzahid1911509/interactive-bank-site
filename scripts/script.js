document.getElementById("btn-login").addEventListener("click", function(){
    const email = document.getElementById("user_email").value;
    const password = document.getElementById("user_pass").value;
    
    if(email == "abc@gmail.com" && password == "zaq12wsx"){
        window.location.href = "account_dashboard.html";
    }
    else{
        alert("Invalid User Details");
    }
})