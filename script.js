const Form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(Form)
const Button = document.querySelector('header button')
const me = {
    hashtags: ['#devPPC', '#WebDeveloper', '#Frontend', '#teste']
}

console.log(me.hashtags)

Button.addEventListener('click', add)
function add(){
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
    const dayExists= nlwSetup.dayExists(today)

    if(dayExists){
        alert("Este dia já existe na lista!")
        return
    }

    alert("Adicionado com sucesso.")
    nlwSetup.addDay(today)
}

Form.addEventListener("change", save)
function save(){
    localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}
nlwSetup.setData(data)
nlwSetup.load()