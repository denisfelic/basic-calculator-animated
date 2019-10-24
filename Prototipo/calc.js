window.addEventListener('load', function () {
    // chamar calculadora
    calculadora()
})

function calculadora() {
    var valor = ''
    var x = valor.substring(0, (valor.length - 1))
    var display = document.getElementById('display')

    function removerNum() {
        display.innerHTML = display.innerHTML.substr(0, (display.innerHTML.length -1))
        valor = valor.substr(0, valor.length -1)
    }

    function mPlus(){
        valor += valor;
        display.innerHTML += display.innerHTML;
    }


    function adicionarValor(valorBtn) {
        valor += valorBtn;
        display.innerHTML += valorBtn
        console.log(valor.length)
        if (valor.length > 15){
            valor = valor.substr(0, valor.length -2)
            display.innerHTML = valor
        }
    }
    function ponto() {
        console.log(valor)
        if (valor.charAt(valor.length - 1) == '.' || valor == '') {

        }
        else {
            if (valor.charAt(valor.length - 1) == '-') {
                display.innerHTML = display.innerHTML.substr(0, (display.innerHTML.length - 1))
            }
            if (valor.charAt(valor.length - 1) == '+') {
                display.innerHTML = display.innerHTML.substr(0, (display.innerHTML.length - 1))
            }
            if (valor.charAt(valor.length - 1) == '*') {
                display.innerHTML = display.innerHTML.substr(0, (display.innerHTML.length - 1))
            }
            if (valor.charAt(valor.length - 1) == '/') {
                display.innerHTML = display.innerHTML.substr(0, (display.innerHTML.length - 1))
            }
            valor += '.'
            display.innerHTML += '.'
        }
    }

    function divisao() {
        console.log(valor)
        if (valor.charAt(valor.length - 1) == '/' || valor == '') {

        }
        else {
            if (valor.charAt(valor.length - 1) == '-') {
                display.innerHTML = display.innerHTML.substr(0, (display.innerHTML.length - 1))
            }
            if (valor.charAt(valor.length - 1) == '+') {
                display.innerHTML = display.innerHTML.substr(0, (display.innerHTML.length - 1))
            }
            if (valor.charAt(valor.length - 1) == '*') {
                display.innerHTML = display.innerHTML.substr(0, (display.innerHTML.length - 1))
            }
            if (valor.charAt(valor.length - 1) == '.') {
                display.innerHTML = display.innerHTML.substr(0, (display.innerHTML.length - 1))
            }

            valor += '/'
            display.innerHTML += '/'
        }
    }

    function multiplica() {

        if (valor.charAt(valor.length - 1) == '*') {

        }
        else {
            if (valor.charAt(valor.length - 1) == '-') {
                display.innerHTML = display.innerHTML.substr(0, (display.innerHTML.length - 1))
            }
            if (valor.charAt(valor.length - 1) == '+') {
                display.innerHTML = display.innerHTML.substr(0, (display.innerHTML.length - 1))
            }
            if (valor.charAt(valor.length - 1) == '/') {
                display.innerHTML = display.innerHTML.substr(0, (display.innerHTML.length - 1))
            }
            if (valor.charAt(valor.length - 1) == '.') {
                display.innerHTML = display.innerHTML.substr(0, (display.innerHTML.length - 1))
            }

            valor += '*'
            display.innerHTML += '*'
        }
    }


    function soma() {

        if (valor.charAt(valor.length - 1) == '+') {

        }
        else {
            if (valor.charAt(valor.length - 1) == '-') {
                display.innerHTML = display.innerHTML.substr(0, (display.innerHTML.length - 1))
            }
            if (valor.charAt(valor.length - 1) == '*') {
                display.innerHTML = display.innerHTML.substr(0, (display.innerHTML.length - 1))
            }
            if (valor.charAt(valor.length - 1) == '/') {
                display.innerHTML = display.innerHTML.substr(0, (display.innerHTML.length - 1))
            }
            if (valor.charAt(valor.length - 1) == '.') {
                display.innerHTML = display.innerHTML.substr(0, (display.innerHTML.length - 1))
            }

            valor += '+'
            display.innerHTML += '+'
        }
    }

    function subtracao() {

        if (valor.charAt(valor.length - 1) == '-') {

        }
        else {
            if (valor.charAt(valor.length - 1) == '+') {
                display.innerHTML = display.innerHTML.substr(0, (display.innerHTML.length - 1))
            }
            else if (valor.charAt(valor.length - 1) == '*') {
                display.innerHTML = display.innerHTML.substr(0, (display.innerHTML.length - 1))
            }
            else if (valor.charAt(valor.length - 1) == '/') {
                display.innerHTML = display.innerHTML.substr(0, (display.innerHTML.length - 1))
            }
            if (valor.charAt(valor.length - 1) == '.') {
                display.innerHTML = display.innerHTML.substr(0, (display.innerHTML.length - 1))
            }
            valor += '-'
            display.innerHTML += '-'
        }
    }
    function limpar() {
        valor = ''
        display.innerHTML = ''
    }

    function resultado() {

        try {



            var res = eval(valor)
            display.innerHTML = res


        } catch (erro) {
            console.log(erro)
            display.innerHTML = 0;
        }

    }



    document.getElementsByTagName('button')[0].addEventListener('click', function () {
        limpar()
    })
    document.getElementsByTagName('button')[1].addEventListener('click', function () {
            removerNum()
    })
    document.getElementsByTagName('button')[2].addEventListener('click', function () {
        mPlus()
})
    document.getElementsByTagName('button')[3].addEventListener('click', function () {
        divisao()
    })
    document.getElementsByTagName('button')[4].addEventListener('click', function () {
        adicionarValor('7')
    })
    document.getElementsByTagName('button')[5].addEventListener('click', function () {
        adicionarValor('8')
    })
    document.getElementsByTagName('button')[6].addEventListener('click', function () {
        adicionarValor('9')
    })
    document.getElementsByTagName('button')[7].addEventListener('click', function () {
        multiplica()
    })

    document.getElementsByTagName('button')[8].addEventListener('click', function () {
        adicionarValor('4')
    })
    document.getElementsByTagName('button')[9].addEventListener('click', function () {
        adicionarValor('5')
    })
    document.getElementsByTagName('button')[10].addEventListener('click', function () {
        adicionarValor('6')
    })
    document.getElementsByTagName('button')[11].addEventListener('click', function () {
        subtracao()
    })

    document.getElementsByTagName('button')[12].addEventListener('click', function () {
        adicionarValor('1')
    })
    document.getElementsByTagName('button')[13].addEventListener('click', function () {
        adicionarValor('2')
    })
    document.getElementsByTagName('button')[14].addEventListener('click', function () {
        adicionarValor('3')
    })
    document.getElementsByTagName('button')[15].addEventListener('click', function () {
        soma()
    })

    document.getElementsByTagName('button')[16].addEventListener('click', function () {
        adicionarValor('0')
    })
    document.getElementsByTagName('button')[17].addEventListener('click', function () {
        ponto()
    })
    document.getElementsByTagName('button')[18].addEventListener('click', function () {
        limpar()
    })
    document.getElementsByTagName('button')[19].addEventListener('click', function () {
        resultado()
    })


}