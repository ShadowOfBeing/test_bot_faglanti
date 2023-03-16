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
    if (option == 'заготовители') {
        $reactions.answer('Заготовители в Казани:\n- Быстрофф\n- Фракция\n- Вторплюс\n- Экосбор')
    } else if (option == 'переработчики') {
        $reactions.answer('Переработчики в Казани:\n- Кряж')
    } else if (option == 'наши волонтёры') {
        $reactions.answer('Наши волонтёры:\n- Лия\n- Лера\n- Фарида\n- Рената\n- Наташа\n- Гузель\n- Катя')
    } else if (option == 'ближайшие мероприятия') {
        $reactions.answer('Ближайшие мероприятия:\n- Экодвор 20 марта\n- Мобильный пункт 26 марта')
    }
    $reactions.buttons({text: в меню, transition: "/Menu"})
}