const wrapper =document.querySelector(".wrapper"),
qrInput =wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click",() => {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generateBtn.innerText = "@Generating QR Code...";
    qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImg.addEventListener("load",()=>{
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    })
    
});
qrInput.addEventListener("keyup",() =>{
    if(!qrInput.value){
    wrapper.classList.remove("active");

    }
});

// shortcut keys that will be disabled
const disabledkeys = ["c", "C", "x", "J", "u", "I"];
const showAlert = e => {
e.preventDefault(); // prevent default behavior
return alert("This feature is restricted!");
}
// call showAlert on mouse right-click
document.addEventListener(" context menu", showAlert);
document.addEventListener("keydown", e => {
// call showAlert, if the pressed key is F12 or matched to disabled keys
if((e. ctrlkey && disabledkeys.includes (e.key)) ||
e.key === "F12") {
showAlert(e);
}
});