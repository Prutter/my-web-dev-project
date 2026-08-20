let getData = async (event) => {
    event.preventDefault()
    let name = document.getElementById("fullname").value 
    let email = document.getElementById("email").value
    let password = document.getElementById("pwd").value
    let confirm = document.getElementById("cpwd").value

    let userObj = {name, email, password};
    console.log(userObj);
    if(name.trim() == "" || email.trim() == "" || password.trim() == "" || confirm.trim() == ""){
        alert("Every field must have data. Enter all fields.")
        form.reset();
    }else if(password != confirm){
        alert("Mismatch Password.")
        form.reset();
    }else {
        try {
            let res = await fetch("http://localhost:3000/register", {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(userObj)
            })
            let result = await res.json();
            if(result.success == true) {
                window.location.href = "login.html"
            }else {
                alert("Email already exists in  our system.")
                let conf = confirm("Do you want to login.")
                if(conf == true) {
                    window.location.href = "login.html"
                }else {
                    alert("Thnak you for visiting us...");
                }
            }
        console.log(result);
        }
        catch(error) {
            console.log(error);
        }

    }

}

let form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", getData);