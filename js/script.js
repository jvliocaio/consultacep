const fillForm = (address) => {
    document.querySelector('#address').value = address.logradouro
    document.querySelector('#district').value = address.bairro
    document.querySelector('#city').value = address.localidade
    document.querySelector('#state').value = address.uf
}

const cepValid = (cep) => /^[0-9]+$/.test(cep)

const findCep = async() => {
    const cep = document.querySelector('#cep').value
    const url = `http://viacep.com.br/ws/${cep}/json/`

    if (cepValid(cep)) {
        const data = await fetch(url)
        const address = await data.json()
    
        if (address.hasOwnProperty('erro')) {
            alert ('CEP não encontrado! Por favor verifique.')        
        }else{
            fillForm(address)
            console.log(data)
           
        }
    }else{
        alert ('CEP incorreto, para preencher o campo digite apenas numeros. Por favor verifique.')   
    }
   

    
    //fetch(url).then(response => response.json()).then(console.log)
    
}

document.querySelector('#cep').addEventListener('focusout',findCep)

