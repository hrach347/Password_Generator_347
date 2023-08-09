let password = document.getElementById("password")
let generateButton = document.getElementById("generate")

let uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', '\\', ';', ':', "'", '"', ',', '.', '/', '<', '>', '?', '`', '~'];
let arr = [uppercase, lowercase, numbers, symbols]
let str = "Password"
let charRange = 10
let isTyping = false
function generate() {
    if(arr.length === 0){
        str = "TheBestPasswordEver"
        write()
        return 0
    }
    str = ""
    if(arr.length!==0){
        
    for (let i = 0; i < charRange; i++) {
        let y = arr[Math.floor(Math.random() * arr.length)]
        let x;
        x = y[Math.floor(Math.random() * y.length)]
        str += x
    }
    write()
}
}

function clear() {
    if (!isTyping) {
        isTyping = true
        let intervalClear = setInterval(function () {
            str = str.substring(str.length - 1, "")
            password.innerText = str
            if (str.length === 0) {
                generate()
                clearInterval(intervalClear)
            }
        }, 40)
    }
}

function write() {
    let i = 0
    let newStr = ""
    let intervalWrite = setInterval(function () {
        newStr += str[i]
        password.innerText = newStr
        i++
        if (newStr.length === str.length) {
            navigator.clipboard.writeText(str);
            isTyping = false
            clearInterval(intervalWrite)
        }
    }, 70)
}

generateButton.addEventListener('click', clear)

let range = document.getElementById("range")
let rangeNum = document.getElementById("rangeNum")

range.addEventListener('input', function () {
    rangeNum.innerText = range.value
    charRange = range.value
})

let filters = Array.from(document.querySelectorAll('input[type="checkbox"]'))

let cloneArr = [...arr]

for(let i = 0;i<filters.length;i++){
filters[i].addEventListener("click",()=>{
  filter_check(i)
})
}

function filter_check(index){
 if(!arr.includes(cloneArr[index])){
    arr.push(cloneArr[index])
 }
 else{
    arr.splice(arr.indexOf(cloneArr[index]),1)
 }
}