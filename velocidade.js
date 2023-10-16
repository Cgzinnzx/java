const form = document.querySelector("form")
const resp = document.querySelector("h3")

form.addEventListener ("submit",(e) =>{
    e.preventDefault()               

    const Permitida = Number(form.inPermitida.value) 
    const Condutor = Number(form.inCondutor.value) 
    let leve = Permitida + (Permitida * 0.2)
    alert(Permitida+Condutor+Leve)

    if(Condutor <= Permitida){
    resp.innerText = `Situação: Sem Multa`

    }  else if(Condutor <= Leve) {
        resp.innerText = `Situação: Multa leve`

    }  else {
        resp.innerText = `Situação: Multa grave`
    }
})
