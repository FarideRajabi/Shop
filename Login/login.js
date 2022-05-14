const DEFAULT_PERSON = {
    name: 'faridehrajabi',
    pass: '123',
};

var isLogin = false;

function particular() {

    var name = document.getElementById("inputName").value;
    var pass = document.getElementById("inputPass").value;
    var repetPass = document.getElementById("repeatPassInput").value;
    var contant = document.getElementById("contantInput").value;
    const person = {
        name: name,
        pass: pass,
        repetPass: repetPass,
        contant: contant
    };

    if (person.name.length < 8) {
        document.getElementById("inputName").style.border = "1px solid #ff0000";
        document.getElementById("nameError").innerHTML = "نام کاربری باید حداقل 8 کاراکتر داشته باشد";
    }

    if (pass == "") {
        document.getElementById("passError").innerHTML = "کلمه ی عبور وارد نشده است";
        document.getElementById("inputPass").style.border = "1px solid #ff0000";
        document.getElementById("repeatPassInput").style.border = "1px solid #ff0000";

    }
    if (pass !== repetPass) {
        document.getElementById("repeatError").innerHTML = "عدم تطابق کلمه ی عبور و تکرار";
        document.getElementById("inputPass").style.border = "1px solid #ff0000";
        document.getElementById("repeatPassInput").style.border = "1px solid #ff0000";
    }

    if (name.length >= 8 && person.pass === person.repetPass && person.pass != "") {
        DEFAULT_PERSON.name = name;
        DEFAULT_PERSON.pass = pass;
         isLogin = true;
        alert("ثبت نام با موفقیت انجام شد آیا ادامه می دهید؟");
        window.location = "E:/js/shop/home/timche.html";

    }

}

function login() {
    var name = document.getElementById("loginName").value;
    var pass = document.getElementById("loginPass").value;

    if(DEFAULT_PERSON.name == name && DEFAULT_PERSON.pass==pass){
        isLogin = true;
        window.location = "E:/js/shop/home/timche.html";
    }else{
        alert("ثبت نام نکردید!");
         window.location = "signin.html";
    }
}
function checkLogin(){

if(isLogin == false ){
          window.location = "E:/js/shop/Login/login.html";
      }else{
           window.location = "buy.html";
      }
}