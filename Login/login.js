function particular(){
    var name = document.getElementById("inputName").value;
    var pass = document.getElementById("inputPass").value;
    var repetPass = document.getElementById("repeatPassInput").value;
    var contant = document.getElementById("contantInput").value;
    const person = {
        name : name,
        pass : pass,
        repetPass : repetPass,
        contant : contant
};

if(person.name.length<8  ){
 document.getElementById("inputName").style.border = "1px solid #ff0000";
 document.getElementById("nameError").innerHTML = "نام کاربری باید حداقل 8 کاراکتر داشته باشد";
}

if(pass =="" ){
    document.getElementById("passError").innerHTML = "کلمه ی عبور وارد نشده است";
    document.getElementById("inputPass").style.border = "1px solid #ff0000";
    document.getElementById("repeatPassInput").style.border = "1px solid #ff0000";

}
if(pass !== repetPass){
    document.getElementById("repeatError").innerHTML = "عدم تطابق کلمه ی عبور و تکرار";
    document.getElementById("inputPass").style.border = "1px solid #ff0000";
    document.getElementById("repeatPassInput").style.border = "1px solid #ff0000";
}

if(name.length>=8 && person.pass === person.repetPass && person.pass!="" ){
    alert("ثبت نام با موفقیت انجام شد آیا ادامه می دهید؟");
    window.location = "login.html";
    
}
document.getElementById("loginBtn").addEventListener("click",function()
{
    login(person);
}
);
}

function login(person){

    window.location = "/../Login/buy.html";
    // var loginName = document.getElementById("loginName").value;
    // var loginPass = document.getElementById("loginPass").value;

// if(loginName === name && loginPass === pass){

//     window.location = "timche.html";
// }
// else{
//    document.getElementById("loginError").innerHTML = "نام کابری و کلمه عبور اشتباه است"
//    document.getElementById("loginError").style.color = "#ff0000"
// }
}