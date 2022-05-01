users = [];

document.getElementById("login_block").style.display = "none";

function initUsers() {
    if (localStorage.getItem("users") != null) {
        users = [];
        users = JSON.parse(localStorage.getItem("users"));
    } else {
        alert("Localstorage is empty, please create a new one account");
        document.getElementById("toLogin").setAttribute("disabled", "disabled");
    }
}

function isEmpty(name, logName, value) {
    if (value === "") {
        document.getElementById(logName).innerText = "Please enter " + name + "!";
    }
}

function logIn() {
    let login = document.getElementById("log_login").value;
    let password = document.getElementById("log_password").value;

    let isOk = true;
    if (password === "" || login === "") {
        isEmpty("log_login", "log_login_log", login);
        isEmpty("log_password", "log_password_log", password);
    } else {
        initUsers();

        let loggedIn = false;
        let index = 0;
        for (let i = 0; i < users.length; i++) {
            if (users[i].login === login && users[i].password === password) {
                loggedIn = true;
                index = i;
            }
        }

        if (loggedIn)
            alert("Welcome, " + users[index].name);
        else
            alert("Incorrect login or password, try again!");
    }
}

function addUserIntoArray() {
    let newLogin = document.getElementById("reg_login").value;
    let newPass = document.getElementById("reg_password").value;
    let newName = document.getElementById("reg_name").value;

    let isOk = true;
    if (newName === "" || newPass === "" || newLogin === "") {
        isEmpty("reg_login", "reg_login_log", newLogin);
        isEmpty("reg_password", "reg_password_log", newPass);
        isEmpty("reg_name", "reg_name_log", newName);
    }
    else {
        for (let i = 0; i < users.length; i++)
            if (users[i].login === newLogin) {
                alert("This login is already exists");
                isOk = false;
            }

        if (isOk) {
            users.push({
                login: newLogin,
                name: newName,
                password: newPass
            });

            updateStorage();
            alert("Success. You'll be redirected to login page");
            switchBlocks(12);
        }
    }
}

function switchBlocks(fromTo) {
    if (fromTo === 12) {
        document.getElementById("register_block").style.display = "none";
        document.getElementById("login_block").style.display = "block";
    } else if (fromTo === 21) {
        document.getElementById("login_block").style.display = "none";
        document.getElementById("register_block").style.display = "block";
    }
}

function updateStorage() {
    localStorage.clear();
    localStorage.users = JSON.stringify(users);
}