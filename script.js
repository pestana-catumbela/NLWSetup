const Form = document.querySelector('form')
const nlwSetup = new NLWSetup(Form)
const Button = document.querySelector('header button')

Button.addEventListener('click', add)
Button.addEventListener('change', save)

function add(){
    const today = "01/01"
    const dayExists= nlwSetup.dayExists(today)

    if(dayExists){
        alert("Este dia existe na lista!")
        return
    }

    alert("Adiciona do com sucesso.")
    nlwSetup.addDay(today)
}

function save(){
    localStorage("NLWSetup@habits", JSON.tringify(nlwSetup.data))
}
// const data = {
//     corrida: ['01-01', '01-02', '01-06'],
// }
const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}
nlwSetup.setData(data)
nlwSetup.load()