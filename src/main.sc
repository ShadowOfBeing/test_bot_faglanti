require: slotfilling/slotFilling.sc
  module = sys.zb-common
require: main.js  
  
theme: /

    state: Start
        q!: $regex</start>
        a: Начнём.

    state: Hello
        intent!: /привет
        a: Привет привет

    state: Bye
        intent!: /пока
        a: Пока пока

    state: NoMatch
        event!: noMatch
        a: Я не понял. Вы сказали: {{$request.query}}

    state: Calculator
        q!: посчитай
        a: выберите операцию
        buttons:
            "сложить" -> /Calculator/Plus
            "вычесть" -> /Calculator/Minus
            "умножить" -> /Calculator/Multi
            "поделить" -> /Calculator/Divison
        state: Plus
            a: напишите два числа
            
            state: Plus_
                q: *
                script:
                   calc('plus')
                   
        state: Minus
            a: напишите два числа
            
            state: Minus_
                q: *
                script:
                   calc('minus') 
                   
        state: Multi
            a: напишите два числа
            
            state: Multi_
                q: *
                script:
                   calc('multi')
                   
        state: Divison
            a: напишите два числа
            
            state: Divison_
                q: *
                script:
                   calc('division') 
    
    state: Continue
        a: стоит ли идти на интесив по питону?