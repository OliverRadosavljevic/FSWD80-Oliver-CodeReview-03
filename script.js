var insurance = 0;
function calculateInsurance(horseP, age, country) {
    if (country == "austria") {
        insurance = Math.round(horseP * 100 / age + 50);
    }
    if (country == "hungary") {
        insurance = Math.round(horseP * 120 / age + 100);
    }
    if (country == "greece") {
        insurance = Math.round(horseP * 150 / age + 50);
    }
}
document.getElementById("calculate").addEventListener("click", function () {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var country = document.getElementById("country").value;
    var hoyc = document.getElementById("hoyc").value;
    if (name == "" || age == "" || hoyc == "" || age < "18" || hoyc.indexOf("number") == false || hoyc <= "0") {
        alert("invalid input");
    } else {
        calculateInsurance(hoyc, age, country);
        document.getElementById("result").innerHTML = name + ", your insurance costs " + insurance + " €";
        document.getElementById("resultDiv").style.display = "block";
    };
})

function reload(){
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("hoyc").value = "";
    document.getElementById("Country").value = "Austria";
}
