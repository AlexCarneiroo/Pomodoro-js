let min = document.getElementById('min')
let seg = document.getElementById('seg')
const inputMin = document.querySelector('#Imin')
const inputSeg = document.querySelector('#Iseg')
const button = document.querySelector('#comeca')
const PausaClear = document.getElementById("PausaClear")
let valor;


//Timer
let loop;
let pomodoro = 25;
let pausaCurta = 5;
let minutos = pomodoro;
let segundos = 0;


//CONFIGURAÇÃO
const closeModal = document.querySelector('#closeModal')
const activeModal = document.querySelector('#activeModal')
const modal = document.getElementById('modal')
const valuePomo = document.getElementById('valuePomo')
const valuePaus = document.getElementById('valuePaus')
const alertaConfi = document.getElementById('alertaConfi')
const salvar = document.getElementById('salvar')
let valuepausa;
let valuepomodoro;

//notificação
const modalNotifil = document.querySelector('.modalNotification')
const  btnN = document.getElementById('btnN')
const contentNotifi = document.querySelector('.content-notifi')
const alerta = document.querySelector('.alerta')
const alertaPomodoro = document.querySelector('.alertaPomodoro')


// styles
const audioalarme = new Audio("alarme.mp3")
const span = document.getElementById('spanTimer')
const pomodoroStyle = document.querySelector('.pomodoro')
const pausaStyle = document.querySelector(".pausaC")
min.innerText = minutos

const luup = ()=>{
    if(segundos == 0){
        minutos--
        segundos = 60
    }
    

    segundos--

    if(segundos < 10){
       seg.textContent = "0"+segundos
    }else{
        seg.textContent = segundos
    }
    

    if(minutos < 10){
        min.textContent = "0"+minutos
    }else{
        min.textContent = minutos
    }
}


// validadação para final do timer
const validateFinal = ()=>{
    audioalarme.currentTime = 1
    audioalarme.play()
    min.innerText = minutos;
    if (minutos < 10) {
        min.textContent = "0" + minutos;
    }
}

const handlComeca = ()=>{
    button.style.display='none'
    PausaClear.style.display='flex'
    

    if(minutos == pomodoro){
        loop = setInterval(()=>{

            luup()
            // Verificar Timer
            if(minutos === -0 && segundos === -0){
                
                alertaPomodoro.style.display='none'
                minutos = pausaCurta;
                alerta.style.display = "flex";
                modalNotifil.style.display='flex'
                clearInterval(loop)
                min.style.color='#EF5350'
                seg.style.color='#EF5350'
                span.style.color='#EF5350'
                pausaStyle.style.transform='scale(1.2)'
                pomodoroStyle.style.transform='scale(1.0)'
                pomodoroStyle.style.color='#FFF'
                pausaStyle.style.color='#C62828'
                validateFinal()
            }
        },1000)
    }else{
        loop = setInterval(()=>{
            luup()
            
            // Verificar Timer
            if(minutos === -0 && segundos === -0){
                clearInterval(loop)
                modalNotifil.style.display='flex'
                minutos = pomodoro;
                alertaPomodoro.style.display = "flex";
                alerta.style.display='none'

                min.style.color='#5C6BC0'
                seg.style.color='#5C6BC0'
                span.style.color='#5C6BC0'
                pomodoroStyle.style.transform='scale(1.2)'
                pausaStyle.style.transform='scale(1.0)'
                pausaStyle.style.color='#FFF'
                pomodoroStyle.style.color='#1A237E'
                validateFinal()
            }
        },1000)
    }
}


const updateNumbersPausa = (valor)=>{
    const va = document.querySelector('.aP')
    if(valor < 10){
        va.innerText = `0${valor}:00`
    }else{
        va.innerText = `${valor}:00`
    }
}

const updateNumbersPomodoro = (valor)=>{
    const vas = document.querySelector('.aPa')
    if(valor < 10){
        vas.innerText = `0${valor}:00`
    }else{
        vas.innerText = `${valor}:00`
    }
}

button.addEventListener('click' , handlComeca)

closeModal.addEventListener('click' , ()=>{
    modal.style.display='none'

})

btnN.addEventListener('click' , ()=>{
    modalNotifil.style.display='none'
    audioalarme.pause()
    PausaClear.style.display='none'
    button.style.display='flex'
})

PausaClear.addEventListener('click' , ()=>{
    PausaClear.style.display='none'
    button.style.display='flex'
    clearInterval(loop)
})


// configuração

/*input pomodoro*/ 
valuePomo.addEventListener('input' , (e)=>{
    valuepomodoro = e.target.value

    if(valuepomodoro > 60){
        alertaConfi.style.display='flex'
    }else{
        alertaConfi.style.display='none'
    }
    
    if(valuePomo.value.length > 2){
        valuePomo.value = valuePomo.value.slice(0,2)
        return
    }

    updateNumbersPomodoro(valuepomodoro)


})

/*input PAUSA CURTA*/
valuePaus.addEventListener('input' , (e)=>{

    valuepausa = e.target.value

    if(valuepausa > 60){
        alertaConfi.style.display='flex'
    }else{
        alertaConfi.style.display='none'
    }

    if(valuePaus.value.length > 2){
        valuePaus.value = valuePaus.value.slice(0,2)
        return
    }

    updateNumbersPausa(valuepausa)
})

salvar.addEventListener('click' ,()=>{
    if(valuePomo.value === '' || valuePaus.value === ''){
        console.log("Errro1")
        alert('imposivel salvar campos vazios')
        return
    }else{
        if(valuepausa > 60 || valuepomodoro > 60){
            console.log('Erro')
        }else{
            pomodoro = valuepomodoro
            minutos = pomodoro
            pausaCurta = valuepausa
            modal.style.display='none'
            
            if(minutos < 10){
                min.textContent = "0"+minutos
            }else{
                min.textContent = minutos
            }
        }
    }

} )


activeModal.addEventListener('click' , ()=>{
    modal.style.display='flex'
})