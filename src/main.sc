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
            "заготовители" -> /Zagotoviteli
            "переработчики" -> /Pererabotchiki
            "наши волонтёры" -> /Volontieru
            "ближайшие мероприятия" -> /Meropriyatiya
    
    state: Zagotoviteli
        q!: заготовители
        script:
            getAnswer('заготовители')
    
    state: Pererabotchiki
        script:
            getAnswer('переработчики')
            
    state: Volontieru
        script:
            getAnswer('наши волонтёры')
    
    state: Meropriyatiya
        script:
            getAnswer('ближайшие мероприятия')

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        