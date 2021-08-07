const display1 = document.querySelector(".display-1");
const display2 = document.querySelector(".display-2");
const clearAll = document.querySelector(".all-clear");
const CEbutton = document.querySelector(".last-entity-clear");
const oparetionBtn = document.querySelectorAll(".oparetion");
const numberBtn = document.querySelectorAll(".number");
const equalBtn = document.querySelector(".equal");


let dis1 = '';
let dis2 = '';
let dot = false;
let result = null;
let oparetionName = '';

// numer and dot work ----------------------------
numberBtn.forEach(number =>{
    number.addEventListener('click' , (e)=>{
        if(e.target.innerText === '.' && !dot){
            dot = true;
        }
        else if(e.target.innerText ==='.' && dot){
            return;
        };
        dis2 += e.target.innerText;
        display2.innerText = dis2;
    })
});

// oparetion button work ---------------------

oparetionBtn.forEach(oparetion =>{
    oparetion.addEventListener('click' , (e) =>{
        if(!dis2){
            result;
        }
        const Oparetion = e.target.innerText;
        oparetionName = Oparetion;
        if (dis1 && dis2 && oparetionName){
            mathoparetion()
        }
        else{
            result = parseFloat(dis2);
        }
        clearVar(Oparetion);
    })
})

function clearVar (name = ''){
    dis1 += dis2 + ' ' + name + ' ';
    display1.innerText = dis1;
    display2.innerText = '';
    dis2 = '';
}

function mathoparetion(){
    if (oparetionName === "X"){
        result = parseFloat(result) * parseFloat(dis2)
    }
    else if (oparetionName === "+"){
        result = parseFloat(result) + parseFloat(dis2)
    }
    else if (oparetionName === "-"){
        result = parseFloat(result) - parseFloat(dis2)
    }
    else if (oparetionName === "/"){
        result = parseFloat(result) / parseFloat(dis2)
    }
    else if (oparetionName === "%"){
        result = parseFloat(result) % parseFloat(dis2)
    }
};


// equal button work -----------------

equalBtn.addEventListener('click' , () =>{
    if (!dis1 || !dis2){
        return;
    }
    mathoparetion();
    clearVar()
    display2.innerText = result;
    dis2 = result;
    dis1 = '';
})

// clear all button ---------------

clearAll.addEventListener('click' , ()=>{
    display1.innerText = "0"
    display2.innerText = '0'
    dis1 = '';
    dis2 = '';
})


CEbutton.addEventListener('click' , () =>{
    display2.innerText = '';
    dis2 = '';
})