var form = document.createElement("form");
document.body.appendChild(form);
form.innerHTML = '<input type="text" name="age"><br>';
form.innerHTML += '<input type="text" name="username"><br>';
form.innerHTML += '<input type="text" name="date"><br>';
form.innerHTML += '<input type="button" value="Validate Me"><br>';
document.querySelector("input[name=age]").setAttribute("placeholder", "age");
document.querySelector("input[name=username]").setAttribute("placeholder", "username user_...");
document.querySelector("input[name=date]").setAttribute("placeholder", "date DD/MM/YYYY");
document.querySelector("body form input[type=button]").onclick = function () {
    var age = document.querySelector("body form input[name=age]").value;
    var userName = document.querySelector("body form input[name=username]").value;
    var date = document.querySelector("body form input[name=date]").value;
    var valid = true;
    if (age == "" || age.match(/\D/g) || age<0) {
        alert("Your data is invalid, wrong age!");
        valid = false;
    }
    if (!userName.match(/^user_/g)) {
        alert("Your data is invalid, wrong username!");
        valid = false;       
    }   
    if (date !== moment().format('DD/MM/YYYY')) {
        alert("Your data is invalid, wrong date!");
        valid = false;  
    } 
    if (valid == true) {
        alert("Your data has been sent to the server!");
    }
};
