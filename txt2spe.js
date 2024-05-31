
// SHADOW EFFECT IN HEADING

const body =document.querySelector(".body")
const nav=document.querySelector(".nav")
const  head=nav.querySelector(".heading")
console.log(head)
let walk=50

function movetxt(e){
    const height=body.offsetHeight
    const width=body.offsetWidth
    let x=e.offsetX
    let y=e.offsetY
    if(this!==e.target){
        x=x+e.target.offsetLeft
        y=y+e.target.offsetTop
    }
    let walkX=Math.floor((x/width*walk)-(walk/2))
    let walkY=Math.floor((y/height*walk)-(walk/2))
    head.style.textShadow=`${walkX}px ${walkY}px 14px black`
}
window.addEventListener("mousemove",movetxt)


// TEXT TO VOICE


const voicedropdown=document.querySelector(".voice")
const pitch=document.querySelector(".pitch")
const rate=document.querySelector(".rate")
const vol=document.querySelector(".volume")
const speak=document.querySelector(".speak")
const stopp=document.querySelector(".stop")
const text=document.querySelector(".textarea")



let msg=new SpeechSynthesisUtterance()
let allvoice=[]
msg.text=text.textContent
console.log(msg)

function voices(){
    allvoice=this.getVoices()
    voicedropdown.innerHTML=allvoice.map(voice=>`<option value="${voice.name}">${voice.name}(${voice.lang})</option>`).join('')
}

function setvoice(){
    msg.voice=allvoice.find(voi=> voi.name===this.value)
    toggle()
}
function toggle(startover=true){
    speechSynthesis.cancel()
    if(startover){
        speechSynthesis.speak(msg)
    }
}

voicedropdown.addEventListener('change',setvoice)
speechSynthesis.addEventListener("voiceschanged",voices)

pitch.addEventListener("change",values)
function values(){
    msg[this.name]=this.value
    toggle()
}
rate.addEventListener("change",values1)
function values1(){
    msg[this.name]=this.value
    toggle()
}
vol.addEventListener("change",values2)
function values2(){
    msg[this.name]=this.value
    toggle()
}
function texttospeech(){
    msg.text=this.value
    toggle()
}
text.addEventListener("change",texttospeech)




const burpitch=document.querySelector(".burpitch")
const burrate=document.querySelector(".burrate")
const burvol=document.querySelector(".burvolume")
burpitch.addEventListener("change",values)
function values(){
    msg[this.name]=this.value
    toggle()
}
burrate.addEventListener("change",values1)
function values1(){
    msg[this.name]=this.value
    toggle()
}
burvol.addEventListener("change",values2)
function values2(){
    msg[this.name]=this.value
    toggle()
}





speak.addEventListener('click',toggle)
stopp.addEventListener('click',()=>toggle(false))

speak.addEventListener("mouseover",()=>{
    speak.style.backgroundColor="#e7a9d0"
    speak.style.transition='0.7s'
})

stopp.addEventListener("mouseover",()=>{
    stopp.style.backgroundColor="#e7a9d0"
    stopp.style.transition='0.7s'
})

speak.addEventListener("mouseout",()=>{
    speak.style.backgroundColor=" rgba(207, 162, 130, 0.708)"
    speak.style.transition='0.7s'
})

stopp.addEventListener("mouseout",()=>{
    stopp.style.backgroundColor=" rgba(207, 162, 130, 0.708)"
    stopp.style.transition='0.7s'
})

// MENUBAR

const menu=document.querySelector(".burgermenu")
const menucont=document.querySelector(".all")

menu.addEventListener("click",()=>{
    menucont.classList.toggle('display')
})
