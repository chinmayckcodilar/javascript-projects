//email address
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
//mobile
function validateMobile(mobile) {
    const re = /^\d{10}$/;
    return re.test(mobile);
}

document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const photo = document.getElementById("photo").files[0];
    const emailError = document.getElementById("email-error");
    const mobileError = document.getElementById("mobile-error");
    let isValid = true;

    if (!validateEmail(email)) {
        emailError.innerHTML = "Invalid email address";
        isValid = false;
    } else {
        emailError.innerHTML = "";
    }

    if (!validateMobile(mobile)) {
        mobileError.innerHTML = "Invalid mobile number";
        isValid = false;
    } else {
        mobileError.innerHTML = "";
    }
    if (isValid) {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("mobile", mobile);
        // formData.append("photo", photo);
        formData.append('photo', photo)

        
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "save_data.php", true);
        

        // xhr.setRequestHeader("Content-type :application/json");
        

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {

                document.getElementById("message").innerHTML = xhr.responseText;
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("mobile").value = "";
                document.getElementById("photo").value = "";
            }
        };
        
        xhr.send(formData);
        
    }
});
