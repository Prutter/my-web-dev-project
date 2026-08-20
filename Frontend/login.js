let getData = async (event) => {
    event.preventDefault()
    let email = document.getElementById("email").value
    let password = document.getElementById("pwd").value

    let userObj = {email, password};
    console.log(userObj);
    if(email.trim() == "" || password.trim() == ""){
        alert("Every field must have data. Enter all fields.")
        form.reset();
    }else {
        try {
            let res = await fetch("http://localhost:3000/login", {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(userObj)
            })
            let result = await res.json();
            if(result.success == true) {
                window.location.href = "product.html"
            }else {
                alert("Something went wrong...")
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