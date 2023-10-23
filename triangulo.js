const form = document.querySelector("form")
const resp = document.querySelector("#outResp")
const resp1 = document.querySelector("#outResp1")

form.addEventListener ("submit",(e) =>{
    e.preventDefault()               

    const LadoA = Number(form.inLadoA.value) 
    const LadoB = Number(form.inLadoB.value)
    const LadoC = NUmber(form.inLadoC.value)

    if((LadoA > LadoB > LadoC) || (LadoB > LadoA + LadoC) || (LadoC > LadoA + LadoB)){
        alert("Essas medidas não podem formar um triângulo. Um dos lados não pode ser maior que a soma dos outros dois.")
        form.inLadoA.focus()
        form.inLadoB.focus()
        form.inLadoC.focus()
        return
    }
    
    resp.innerText = `Lados podem formar um triângulo`

    if(LadoA == LadoB && LadoA == LadoC){
        resp1.innerText = `Tipo: Equilátero`
    }  else if((LadoA == LadoB) || (LadoA == LadoC) || (LadoB == LadoC)){
        resp.innerText = `Tipo: Isóceles`
    }  else {
        resp.innerText = `Tipo: Escaleno`
    }
})
