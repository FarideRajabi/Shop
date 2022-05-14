{
    const FULL_DASH_ARRAY = 283;
    const WARNING_THRESHOLD = 10;
    const ALERT_THRESHOLD = 5;

    const COLOR_CODES = {
        info: {
            color: "green"
        },
        warning: {
            color: "orange",
            threshold: WARNING_THRESHOLD
        },
        alert: {
            color: "red",
            threshold: ALERT_THRESHOLD
        }
    };

    const TIME_LIMIT = 50000;
    let timePassed = 0;
    let timeLeft = TIME_LIMIT;
    let timerInterval = null;
    let remainingPathColor = COLOR_CODES.info.color;

    document.getElementById("timer").innerHTML = `
<div class="base-timer">
      <path
        id="base-timer-path-remaining"
      ></path>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
        timeLeft
    )}</span>
</div>
`;

    startTimer();

    function onTimesUp() {
        clearInterval(timerInterval);
    }

    function startTimer() {
        timerInterval = setInterval(() => {
            timePassed = timePassed += 1;
            timeLeft = TIME_LIMIT - timePassed;
            document.getElementById("base-timer-label").innerHTML = formatTime(
                timeLeft
            );
            setCircleDasharray();
            setRemainingPathColor(timeLeft);

            if (timeLeft === 0) {
                onTimesUp();
            }
        }, 1000);
    }

    function formatTime(time) {

        const hors = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        let seconds = ((time % 3600) % 60);

        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        return `${hors}:${minutes}:${seconds}`;

    }

    function setRemainingPathColor(timeLeft) {
        const {alert, warning} = COLOR_CODES;
        if (timeLeft <= warning.threshold) {

            document
                .getElementById("base-timer-path-remaining")
                .classList.add(warning.color);
        }
    }

    function calculateTimeFraction() {
        const rawTimeFraction = timeLeft / TIME_LIMIT;
        return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    }

    function setCircleDasharray() {
        const circleDasharray = `${(
            calculateTimeFraction() * FULL_DASH_ARRAY
        ).toFixed(0)} 283`;
        document
            .getElementById("base-timer-path-remaining")
            .setAttribute("stroke-dasharray", circleDasharray);
    }
}


var Corp = JSON.parse('{"corpOff":[{"id" : "1","name" : "ریسه مدل ستاره بزرگ","price": "280000","precentOff": "37%","priceOff" : "175000","image" : "../assets/img/cut/media-6098d116d8b0b.webp"},{ "id" : "2","name" : "کیف دستی دخترانه مدل فشن","price": "90000","precentOff": "17%","priceOff" : "75000","image" : "../assets/img/cut/media-6212a0292a55b.webp"},{"id" : "3","name" : "روغن کلزا فرابکر 1500میلی لیتر","price": "180000","precentOff": "30%","priceOff" : "131000","image" : "../assets/img/cut/media-60a353cadd485.webp"},{"id" : "4","name" : "زیتون شور 1 کیلو گرم","price": "105000","precentOff": "25%","priceOff" : "79000","image" : "../assets/img/cut/media-624ec727b27df.webp"}],"mobailCorp":[{"id" : "1","name" : "گوشی موبایل شیائومی Redmi","price": "3700000","precentOff": "3%","priceOff" : "3700000","image" : "../assets/img/cellPhone/1.jpg"},{"id" : "2","name" : "گوشی موبایل هوآوی مدل Y6s JAT-L29 ","price": "4450000","precentOff": "9%","priceOff" : "4050000","image" : "../assets/img/cellPhone/2m.jpg"},{"id" : "3","name" : "گوشی موبایل هوآوی مدل Y8p AQM-LX1 ","price": "5400000","precentOff": "7%","priceOff" : "5000000","image" : "../assets/img/cellPhone/3m.jpg"},{"id" : "4","name" : "گوشی موبایل هوآوی مدل Y8s JKM-LX1 ","price": "6200000","precentOff": "5%","priceOff" : "5900000","image" : "../assets/img/cellPhone/4m.jpg"}],"casualCorp":[{"id" : "1","name" : "پلیور یقه گرد مردانه تامی مدل هیلفیگر ","price": "400000","precentOff": "50%","priceOff" : "200000","image" : "../assets/img/jacet/p1.jpg"},{"id" : "2",  "name" : "پلیور یقه گرد مردانه تامی مدل هیلفیگر","price": "400000","precentOff": "50%","priceOff" : "200000","image" : "../assets/img/jacet/p2.jpg"},{"id" : "3","name" : "پلیور یقه گرد مردانه تامی مدل هیلفیگر","price": "400000","precentOff": "50%","priceOff" : "200000","image" : "../assets/img/jacet/p3.jpg"},{"id" : "4","name" : "پلیور یقه هفت مردانه تامی مدل هیلفیگر","price": "400000","precentOff": "50%","priceOff" : "200000","image" : "../assets/img/jacet/p4.jpg"}]}');

   function cropOff(){

        var productOff = document.getElementById("bgCut-rate");
        Corp.corpOff.forEach((item, index) =>{
            
            productOff.innerHTML += `
            <i class="crop"><img src="${item.image}"
                         alt="${item.name}">
                         <p class="name">${item.name}</p>
                         <span class="percent">${item.precentOff}</span><span class="priceoof">${item.price}</span>
                         <p>${item.priceOff}</p>
                         <a class="buy" onclick="shoppingCartCorpOff(${index})">افزودن به سبد خرید</a>
                         </i>`
        } )
    
    }


    function mobailCorp(){

        var productMobail = document.getElementById("cellPhone");
        Corp.mobailCorp.forEach((item, index) =>{
            
            productMobail.innerHTML += `
            <i class="crop"><img src="${item.image}"
                         alt="${item.name}">
                         <p class="name">${item.name}</p>
                         <span class="percent">${item.precentOff}</span><span class="priceoof">${item.price}</span>
                         <p>${item.priceOff}</p>
                         <a class="buy" onclick="shoppingCartMobailCorp(${index})">افزودن به سبد خرید</a>
                         </i>`
        } )
    
    }

  
    function casualCorp(){

        var productcasual = document.getElementById("casualCorp");
        Corp.casualCorp.forEach((item, index) =>{
            
            productcasual.innerHTML += `
            <i class="crop"><img src="${item.image}"
                         alt="${item.name}">
                         <p class="name">${item.name}</p>
                         <span class="percent">${item.precentOff}</span><span class="priceoof">${item.price}</span>
                         <p>${item.priceOff}</p>
                         <a class="buy" onclick="shoppingCartCasualCorp(${index})">افزودن به سبد خرید</a>
                         </i>`
        } )
    
    }

    
var cart = {
    items: [],
    total: 0,
}


var renderCartItems = () => {
    var cartDiv = document.querySelector('.shoppingCart');
     const totalPriceEl = document.querySelector(".price");
     cartDiv.innerHTML="";
     let totalPrice = 0;
 
     if(cart.items.length === 0){
         cartDiv.innerHTML = "محصولی در سبد خرید وجود ندارد";
     }

     else{
     
            cart.items.forEach((item) => {
                totalPrice += item.total;
        
                cartDiv.innerHTML += 
                `
                <div class="cart__item">
                <div class="cart__item-title">${item.name}</div>
                <div class="qty">${item.qty}</div>
                <div class="delete" onclick="removeFromCart('${item.name}')">حذف</div>
                </div>
                `
                
            })
     
        }
    
 
     totalPriceEl.innerHTML = `مجموع:${totalPrice}تومان`;
 }
 
 var shoppingCartCorpOff = (productIndex) => {
     const product = Corp.corpOff[productIndex];
     let existingProduct = false ;
 
    const newCartItems = cart.items.reduce((state, item) =>{
         if(item.name === product.name){
             existingProduct = true;
 
             const newItem = {
                 ...item,
                 qty:item.qty + 1,
                 total:(item.qty + 1) * item.priceOff
             }
             return [...state, newItem]
         }
         return [...state, item]
     },[])
 
     if(!existingProduct){
         newCartItems.push({
             ...product,
             qty:1,
             total: product.priceOff,
         })
     }
 
     cart = {
         ...cart,
         items: newCartItems,
     }
 
     renderCartItems();
 }
 
 var shoppingCartCasualCorp = (productIndex) => {
    const product = Corp.casualCorp[productIndex];
    let existingProduct = false ;

   const newCartItems = cart.items.reduce((state, item) =>{
        if(item.name === product.name){
            existingProduct = true;

            const newItem = {
                ...item,
                qty:item.qty + 1,
                total:(item.qty + 1) * item.priceOff
            }
            return [...state, newItem]
        }
        return [...state, item]
    },[])

    if(!existingProduct){
        newCartItems.push({
            ...product,
            qty:1,
            total: product.priceOff,
        })
    }

    cart = {
        ...cart,
        items: newCartItems,
    }

    renderCartItems();
}
 
 var shoppingCartMobailCorp = (productIndex) => {
    const product = Corp.mobailCorp[productIndex];
    let existingProduct = false ;

   const newCartItems = cart.items.reduce((state, item) =>{
        if(item.name === product.name){
            existingProduct = true;

            const newItem = {
                ...item,
                qty:item.qty + 1,
                total:(item.qty + 1) * item.priceOff
            }
            return [...state, newItem]
        }
        return [...state, item]
    },[])

    if(!existingProduct){
        newCartItems.push({
            ...product,
            qty:1,
            total: product.priceOff,
        })
    }

    cart = {
        ...cart,
        items: newCartItems,
    }

    renderCartItems();
}
 var removeFromCart = (productName) => {
     let newCartItems = cart.items.reduce((state, item) =>{
         if(item.name === productName){
             const newItem = {
                 ...item,
                 qty: item.qty - 1,
                 total: (item.aty -1) * item.priceOff
             }
 
             if(newItem.qty > 0 ){
                 return[...state, newItem]
             }else{
                 return state
             }
     }
     return[...state, item]
 },[])
 
 cart = {
     ...cart,
     items: newCartItems,
 }
 renderCartItems();
 }
 
 
 
 cropOff();
 mobailCorp();
 casualCorp();
 renderCartItems();