function calc(option) {
    var digits = $jsapi.context().request.query.split(" ")
    var digitOne = parseInt(digits[0])
    var digitTwo = parseInt(digits[1])
    var result
    if (option == "plus") {
        result = digitOne + digitTwo
    } else if (option == "minus") {
        result = digitOne - digitTwo
    } else if (option == "multi") {
        result = digitOne * digitTwo
    } else if (option == "division") {
        result = digitOne / digitTwo
    }
    $reactions.answer(result)
    $reactions.transition("/Continue")
}

function getAnswer(option) {
    if (option == 'Заготовители') {
        $reactions.answer('Заготовители в Казани:\n- Быстрофф\n- Фракция\n- Вторплюс\n- Экосбор')
    } else if (option == 'Переработчики') {
        $reactions.answer('Переработчики в Казани:\n- Кряж')
    } else if (option == 'Наши волонтёры') {
        $reactions.answer('Наши волонтёры:\n' +
                          '- Лия - организация МП, помощь на МП, складе\n' +
                          '- Лера - куратор на МП, помощь на МП, работа с волонтёрами\n' +
                          '- Фарида - помощь на складе, статьи, экодвор, СММ\n' +
                          '- Рената - коммуникация с компаниями, СММ\n' +
                          '- Наташа - коммуникация с компаниями, СММ, помощь на МП, экотакси\n' +
                          '- Гузель - помощь на МП, СММ\n' +
                          '- Рустем - помощь на складе, на МП, экодворах, культторге\n' +
                          '- Марсель - помощь на МП, ремонт техники\n' +
                          '- Данил - помощь на МП, экодворах, культторге\n' +
                          '- Александр - помощь на МП, техподдержка сайта, модератор карты recyclemap\n')
    } else if (option == 'Ближайшие мероприятия') {
        $reactions.answer('Ближайшие мероприятия:\n- Экодвор 20 марта\n- Мобильный пункт 26 марта')
    }
    $reactions.buttons({text: "Меню", transition: "/Menu"})
}