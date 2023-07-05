
function add() {
    let name = document.getElementById("nameElement").value
    document.getElementById("resultName").innerText = "Привет, " + name + " !";
    document.getElementById("nameElement").value = '';
    console.log(resultName);
}

function app() {
    let age = document.getElementById("ageElement").value
    document.getElementById("result").innerText = "Вам " + age + " лет";
    document.getElementById("ageElement").value = '';
    console.log(result);
}
