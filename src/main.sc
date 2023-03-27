require: slotfilling/slotFilling.sc
  module = sys.zb-common
require: main.js  

theme: /
    init:
        $global.timeout = 120000;
        
        bind("postProcess", function($context) {
            $context.session.lastActiveTime = $jsapi.currentTime();
        });
    
        bind("preProcess", function($context) {
            if ($context.session.lastActiveTime) {
                var interval = $jsapi.currentTime() - $context.session.lastActiveTime;
                if (interval > $global.timeout) {
                    $jsapi.startSession();
                    //$reactions.newSession( {message: 'Новая сессия началась', session: $context.session } );
                    $context.session.startNewSession = true;
                    //$reactions.buttons({text: "Меню", transition: "/Menu"})
                }
            }
        });

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
        script:
            $reactions.buttons({text: "Меню", transition: "/Menu"})

    state: Calculator
        q!: посчитай
        a: выберите операцию
        buttons:
            "сложить" -> /Calculator/Plus
            "вычесть" -> /Calculator/Minus
            "умножить" -> /Calculator/Multi
            "поделить" -> /Calculator/Division

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
                   
        state: Division
            a: напишите два числа
            
            state: Divison_
                q: *
                script:
                   calc('division')
                   
    state: Menu
        q!: меню
        a: что хотите узнать?
        buttons:
            "Заготовители" -> /Zagotoviteli
            "Переработчики" -> /Pererabotchiki
            "Наши волонтёры" -> /Volontieru
            "Ближайшие мероприятия" -> /Meropriyatiya
            "Инструкции" -> /Instructions
            "Чаты" -> /Chats
            "Инструкциии" -> /Instructions
            "Чатууукенгшорпа" -> /Chats
    
    state: Zagotoviteli
        q!: заготовители
        script:
            getAnswer('Заготовители')
    
    state: Pererabotchiki
        script:
            getAnswer('Переработчики')
            
    state: Volontieru
        script:
            getAnswer('Наши волонтёры')
    
    state: Meropriyatiya
        script:
            getAnswer('Ближайшие мероприятия')
    
    state: Instructions
        a: выберите инструкцию
        buttons:
            "Отправка вторсырья" -> /Instructions/Instructions1
            "Ссылка текстом" -> /Instructions/Instructions2
            
        state: Instructions1
            script:
                instructions(1)
                
        state: Instructions2
            script:
                instructions(2)
                
    state: Chats
        a: Тут будет список чатов
        buttons:
            "Меню" -> /Menu
    
    state: testButtons
        q!: testbuttons
        a: тестовые кнопки
        script:
            testButtons()

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        