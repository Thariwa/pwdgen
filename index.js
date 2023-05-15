let strings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()'
const exclude = document.getElementById('exclude')
const include = document.getElementById('include')
const password = document.getElementById('password')
const button = document.querySelector('input')

function genpwd(){
    const strings = [];
    const include = [Math.floor(Math.random()*strings.length)]
    const exclude = strings.slice(0, strings.indexOf(0))
    strings.join('')
    return "password"
     
    }
    
btn.addEventListener('click', genpwd)