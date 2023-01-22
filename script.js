const Form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(Form)
const Button = document.querySelector('header button')

Button.addEventListener('click', add)
Form.addEventListener("change", save)

function add(){
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
    const dayExists= nlwSetup.dayExists(today)

    if(dayExists){
        alert("Este diam já existe na lista!")
        return
    }

    alert("Adicionado com sucesso.")
    nlwSetup.addDay(today)
}

function save(){
    localStorage.setItem("NLWSetup@habits", JSON.tringify(nlwSetup.data))
}
// const data = {
//     corrida: ['01-01', '01-02', '01-06'],
// }
const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}
nlwSetup.setData(data)
nlwSetup.load()