let inputField = document.querySelector("#num");
let result = document.querySelector(".resultPara");

inputField.addEventListener("input", () => {
    let num = Number(inputField.value);
    if (!isNaN(num)) {
        if (num % 3 == 0 && num % 5 == 0) {
            result.innerHTML = "WOW! The number is divisible by 3 & 5";
        } else {
            result.innerHTML = "NOO! The number is not divisible by 3 & 5";
        }
        if (num == "") {
            result.innerHTML = "";
        }
    }
    else{
    result.innerHTML = "Enter a Valid Number";
    }  
});
