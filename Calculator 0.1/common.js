let td = document.querySelectorAll("td")
console.log(td);



for (let i = 0; i < td.length; i++) {
    td[i].addEventListener("mousedown", function () {
        td[i].style.backgroundColor = "#2e2e2e6e"
    })
    td[i].addEventListener("mouseup", function () {
        td[i].style.backgroundColor = "#e0e0e0"
    })
    console.log(td[i].innerText);


}
for (let j = 0; j < td.length; j++) {
    let inputBox = document.getElementById("inputBox")

    td[j].addEventListener("click", function () {
        //숫자 클릭하면 input안에 텍스트 입력됨
        
        if (td[j].innerText == '0') {
            inputBox.innerText += 0
        }
        else if (td[j].innerText == '1') {
            inputBox.innerText += 1
        }
        else if (td[j].innerText == '2') {
            inputBox.innerText += 2
        }
        else if (td[j].innerText == '3') {
            inputBox.innerText += 3
        }
        else if (td[j].innerText == '4') {
            inputBox.innerText += 4
        }
        else if (td[j].innerText == '5') {
            inputBox.innerText += 5
        }
        else if (td[j].innerText == '6') {
            inputBox.innerText += 6
        }
        else if (td[j].innerText == '7') {
            inputBox.innerText += 7
        }
        else if (td[j].innerText == '8') {
            inputBox.innerText += 8
        }
        else if (td[j].innerText == '9') {
            inputBox.innerText += 9
        }
        else if (td[j].innerText == '.') {
            inputBox.innerText += '.'
        }
        else if (td[j].innerText == '÷') {
            inputBox.innerText += '÷'.replace('÷', '/')
        }
        else if (td[j].innerText == '×') {
            inputBox.innerText += '×'.replace('×', '*')
        }
        else if (td[j].innerText == '-') {
            inputBox.innerText += '-'
        }
        else if (td[j].innerText == '+') {
            inputBox.innerText += '+'
        }
        //숫자 +클릭 숫자클릭 =클릭하면 결과값 input태그 안에 입력됨 
        else if (td[j].innerText == '=') {
         let result =  eval(inputBox.innerText);
         inputBox.innerText = result
        }
        //AC클릭하면 모든 결과가 릿셋됨 
        else if (td[j].innerText == 'AC') {
            inputBox.innerText = ' '
        }
    })

}


const bg = "#e0802c"
const clickBg = "#f5923e"

td[2].addEventListener("mousedown", function () {
    td[2].style.backgroundColor = bg
})
td[2].addEventListener("mouseup", function () {
    td[2].style.backgroundColor = clickBg
})

td[6].addEventListener("mousedown", function () {
    td[6].style.backgroundColor = bg
})
td[6].addEventListener("mouseup", function () {
    td[6].style.backgroundColor = clickBg
})

td[10].addEventListener("mousedown", function () {
    td[10].style.backgroundColor = bg
})
td[10].addEventListener("mouseup", function () {
    td[10].style.backgroundColor = clickBg
})

td[14].addEventListener("mousedown", function () {
    td[14].style.backgroundColor = bg
})
td[14].addEventListener("mouseup", function () {
    td[14].style.backgroundColor = clickBg
})
td[17].addEventListener("mousedown", function () {
    td[17].style.backgroundColor = bg
})
td[17].addEventListener("mouseup", function () {
    td[17].style.backgroundColor = clickBg
})

td[0].addEventListener("mousedown", function () {
    td[0].style.backgroundColor = "#4c4c4c"
})
td[0].addEventListener("mouseup", function () {
    td[0].style.backgroundColor = "#4c4c4c"
})


