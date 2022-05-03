counter = 0;

imageIndex = 0;

users = [

    {login:"ilyas", password: "qwerty"},

    {login:"eldar", password: "qqqqq"},

    {login:"assylkhan", password: "qweqwe"},

    {login:"anel", password: "asdasd"},

    {login:"alibek", password: "aaaaaa"}

];

users_reserved = [

    {login:"ilyas", password: "qwerty", email: "kek@mail.ru"},

    {login:"eldar", password: "qqqqq", email: "kek@outlook.com"},

    {login:"assylkhan", password: "qweqwe", email: "kek@proton.me"},

    {login:"anel", password: "asdasd", email: "kek@jelly.me"},

    {login:"alibek", password: "aaaaaa", email: "kek@bk.ru"}

];

cards = [
    {
        number: "4400 4401 4402 4403",
        cvv: "123",
        fullName: "Yessengaziev Zhandos Miyatbekovich"
    },
    {
        number: "4404 4405 4406 4407",
        cvv: "321",
        fullName: "User Name Temp1"
    },
    {
        number: "4408 4409 4410 4411",
        cvv: "666",
        fullName: "User Name Temp2"
    }
];

images = [
    "https://media.istockphoto.com/photos/city-landscape-on-a-background-of-snowcapped-tian-shan-mountains-in-picture-id1002496248?k=20&m=1002496248&s=612x612&w=0&h=5-vQyp8AgdMwt0EvwCCzUrM1d7ALmrvQXFMjQBRJsOE=",
    "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg",
    "https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
]

function task1() {
    let login = document.getElementById("login").value;
    let password = document.getElementById("password").value;

    let successfullyLogin = false;

    for (let i = 0; i < users.length; i++) {
        if (users[i].login === login && users[i].password === password) {
            successfullyLogin = true;
        }
    }

    if (successfullyLogin) {
        document.getElementById("login").style.display = "none";
        document.getElementById("password").style.display = "none";
        document.getElementById("log_button").style.display = "none";

        document.getElementById("status_login").innerHTML = "<h3 style='color: green'>Successfully authenticated</h3>"
    } else {
        document.getElementById("login").style.border = "1px solid red";
        document.getElementById("password").style.border = "1px solid red";

        document.getElementById("status_login").innerHTML = "<h3 style='color: red'>Incorrect login or password</h3>"
    }
}

function increment() {
    counter++;
    document.getElementById("counter").innerText = counter;
}

function decrement() {
    counter--;
    document.getElementById("counter").innerText = counter;
}

function checkTransaction() {
    let card = document.getElementById("card1").value + " " + document.getElementById("card2").value + " " + document.getElementById("card3").value + " " + document.getElementById("card4").value;
    let cvv = document.getElementById("cvv").value;

    let success = false;
    for (let i = 0; i < cards.length; i++) {
        if (card === cards[i].number && cvv === cards[i].cvv)
            success = true;
    }

    if (success)
        alert("Transaction completed");
    else alert("Invalid Data");
}

function nextImage() {
    if (imageIndex < 3)
        imageIndex++;
    else imageIndex = 0;
    document.getElementById("img_gallery").setAttribute("src", images[imageIndex]);
}

function prevImage() {
    if (imageIndex > 0)
        imageIndex++;
    else imageIndex = 3;
    document.getElementById("img_gallery").setAttribute("src", images[imageIndex]);
}

function scale(index) {
    let id = "si" + index;
    document.getElementById("main_image").setAttribute("src", document.getElementById(id).getAttribute("src"));
}

function checkEmail() {
    let field = document.getElementById("traceLog_email");
    let email = document.getElementById("email_field").value;

    let available = true;
    for (let i = 0; i < users_reserved.length; i++)
        if (users_reserved[i].email === email)
            available = false;

    if (available)
        if (email.indexOf("@") !== -1 && email.indexOf(".") !== -1)
            field.innerHTML = "<h4 style='color: green'>OK</h4>"
        else field.innerHTML = "<h4 style='color: red'>Incorrect email</h4>"
    else
        field.innerHTML = "<h4 style='color: red'>Current email is already in use</h4>"
}

function checkPass() {
    let field = document.getElementById("traceLog_pass");
    let pass = document.getElementById("password_field").value;

    let available = true;
    if (pass.length < 6)
        available = false;


    if (available)
        field.innerHTML = "<h4 style='color: green'>OK</h4>"
    else
        field.innerHTML = "<h4 style='color: red'>Incorrect password</h4>"
}

function checkRePass() {
    let field1 = document.getElementById("traceLog_pass");
    let field2 = document.getElementById("traceLog_repass");
    let pass1 = document.getElementById("password_field").value;
    let pass2 = document.getElementById("password_repeat").value;

    if (pass1 === pass2) {
        field1.innerHTML = "<h4 style='color: green'>OK</h4>";
        field2.innerHTML = "<h4 style='color: green'>OK</h4>";
    }
    else {
        field1.innerHTML = "<h4 style='color: red'>Incorrect password retyping</h4>";
        field2.innerHTML = "<h4 style='color: red'>Incorrect password retyping</h4>";
    }
}

const exchangeRate = {
        USD: {
            usd: 1,
            eur: 0.9,
            kzt: 450
        },

        KZT: {
            usd: 0.0022222222,
            eur: 0.002,
            kzt: 1
        },

        EUR: {
            usd: 1.1,
            eur: 1,
            kzt: 500
        }
    };

alert(exchangeRate.USD.eur);

function makeConversion() {
    let input = parseInt(document.getElementById("sum").value);
    let currentCurrency = document.getElementById("currency").value;

    if (isNaN(input))
        alert("Enter sum");
    else {
        let result = conversion(currentCurrency, input);

        document.getElementById("toKzt").innerText = result[0] + "";
        document.getElementById("toUsd").innerText = result[1] + "";
        document.getElementById("toEur").innerText = result[2] + "";
    }
}

function conversion(from, amount) {
    let resultSet = [3];

    if (from === "usd") {
        resultSet[0] = Math.round(amount * exchangeRate.USD.kzt);
        resultSet[1] = "-";
        resultSet[2] = Math.round(amount * exchangeRate.USD.eur);
    } else if (from === "eur") {
        resultSet[0] = Math.round(amount * exchangeRate.EUR.kzt);
        resultSet[1] = Math.round(amount * exchangeRate.EUR.usd);
        resultSet[2] = "-";
    } else if (from === "kzt") {
        resultSet[0] = "-";
        resultSet[1] = Math.round(amount * exchangeRate.KZT.usd);
        resultSet[2] = Math.round(amount * exchangeRate.KZT.eur);
    }

    return resultSet;
}