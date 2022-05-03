draft = {
    name: "",
    surname: "",
    country: "",
    phone: ""
};

function addDraft() {
    let name = document.getElementById("t1").value;
    let surname = document.getElementById("t2").value;
    let country = document.getElementById("t3").value;
    let phone = document.getElementById("t4").value;

    draft.name = name;
    draft.surname = surname;
    draft.country = country;
    draft.phone = phone;

    localStorage.setItem("draft", JSON.stringify(draft));
}

function loadDraft() {
    if (localStorage.getItem("draft") != null) {
        draft = JSON.parse(localStorage.getItem("draft"));
        document.getElementById("t1").value = draft.name;
        document.getElementById("t2").value = draft.surname;
        document.getElementById("t3").value = draft.country;
        document.getElementById("t4").value = draft.phone;
    } else alert("No draft");
}