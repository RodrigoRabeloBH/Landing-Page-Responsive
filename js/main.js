function Ano(){
    const ano = document.querySelector('#year')
    const data = new Date()
    ano.innerHTML = data.getFullYear()

}

