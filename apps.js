
const form = document.forms[0];
// const form=document.querySelector(".form");
const inputs=document.querySelectorAll(".input");
const output=document.querySelector(".output");
const btn=document.querySelector(".btn-check");

const img=document.querySelector(".col2-img");
const gain=document.querySelector(".gain");
const lossImage=document.querySelector(".loss");


function clickEventHandler(e){
    e.preventDefault();
    var purchasePrice=Number(inputs[0].value);
    var qunatity=Number(inputs[1].value);
    var currentPrice=Number(inputs[2].value);
    if(purchasePrice>currentPrice){
        var loss =((purchasePrice-currentPrice)*qunatity);
        var lossPer=(((purchasePrice-currentPrice)*100)/purchasePrice);
        output.style.display="block";
        output.innerText="You lost " +lossPer+"%."+ " Your total loss is: ₹"+loss;
       
    }
    else{
        var profit=((currentPrice-purchasePrice)*qunatity);
        var profitPer=(((currentPrice-purchasePrice)*100)/purchasePrice);
        output.style.display="block";
        output.innerText="You gained " +profitPer+"%."+ " Your total gain is: ₹" +profit;
        
    }
    if(lossPer>0){
        lossImage.style.display="block";
        img.style.display="none";
        gain.style.display="none";
    }
    if(profitPer>=0){
        gain.style.display="block";
        lossImage.style.display="none";
        img.style.display="none";
    }



}

form.addEventListener("submit",clickEventHandler);




















