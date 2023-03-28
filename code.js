
let currentPlayer = 0

const player1=document.querySelector(".player1")
const player2=document.querySelector(".player2")
const player3=document.querySelector(".player3")
const player4=document.querySelector(".player4")

let players= [player1,player2,player3,player4]


let kortStokk = []
let bordKort=[]

let player1Hand=[]
let player2Hand=[]
let player3Hand=[]
let player4Hand=[]

let team1taken=[]
let team2taken=[]



document.querySelector("#settings").addEventListener("click",hand)


let cards = document.querySelectorAll("card")

/* for (card in cards){
    cards[card].innerHTML= parseInt(Math.random()*9+1)
} */

function hand(){
    player2.classList.add("current")
    player2.classList.remove("other")
    player1.classList.remove("current")
    player1.classList.add("other")
    if (currentPlayer<3){
        currentPlayer++
    }else{
        currentPlayer=0
    }
    

    console.log(currentPlayer)
    for (player in players){
        players[player].classList.remove("current")
        players[player].classList.add("other")
    }
    players[currentPlayer].classList.remove("other")
    players[currentPlayer].classList.add("current")
    document.querySelector(".current").addEventListener("click",hand)
}





let boardCards = document.querySelectorAll(".board")
let handCards = document.querySelectorAll(".handCards")

let numbersToAdd = []
let elementsToKill=[]
let sum=0


for (let i = 0;i<handCards.length;i++){
    console.log(i)
    handCards[i].addEventListener("click", function(){
        console.log((parseInt(this.innerHTML)))
        if (parseInt(this.innerHTML) == sum){
            alert("siuu")
            sum=0
            numbersToAdd.length=0
            for (let i =1; i<boardCards.length;i++){
                boardCards[i].classList.remove("activeCard")
            }
            for (let i = 0; i < elementsToKill.length; i++) {
                elementsToKill[i].style.display="none"
                
            }
            this.style.display="none"
        }
        if(parseInt(this.innerHTML)==1){
            alert("Du tar alt as")
        }
    })
}




for (let i = 0;i<boardCards.length;i++){
    
    boardCards[i].addEventListener("click",function(){
        numbersToAdd.push(parseInt(this.innerHTML))
        this.classList.add("activeCard")
        elementsToKill.push(this)
        sum=0
        for(i in numbersToAdd){
            sum+= numbersToAdd[i]
        }
        console.log("sum="+sum)
    })
}


//cards to array
let kortnummer = 0
let kortType = 0
let url = 0
let cardsInPlay=document.querySelectorAll("card")

for (let i = 0; i < 40; i++) {
    
    if(i==0){
        kortType=0
    }
    if (i%10==0){
        kortnummer=0
        kortType++
    }
    if(kortnummer==0){
        url = kortnummer+kortType
    }else{
        url = kortnummer+3*kortnummer+kortType
    }
    let kort = {
        nummer:kortnummer+1,
        type:kortType,
        url:url
    }
    
    
    kortnummer++
    kortStokk.push(kort)
    
}
console.log(kortStokk)
let index;
for (let i = 0; i < cardsInPlay.length; i++) {
     index = parseInt(Math.random()*kortStokk.length)
    if (kortStokk[index].nummer ==1){
        index = parseInt(Math.random()*kortStokk.length)
    }
    cardsInPlay[i].innerHTML= kortStokk[(index)].nummer
    cardsInPlay[i].style.content="url(bilder/"+(kortStokk[(index)].url)+".png)"
    console.log(kortStokk[index].url, kortStokk[index].nummer)
    kortStokk.pop(index)
    
    
    
}