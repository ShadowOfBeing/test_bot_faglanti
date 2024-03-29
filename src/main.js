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
        $reactions.answer('Заготовители в Казани:\n- Быстрофф\n- Фракция\n- Вторплюс\n- Экосбор\n- Экополимер')
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

function testButtons() {
    $reactions.inlineButtons([{text: "Меню123", transition: "/Menu"}])
}

function instructions(option) {
    if (option == 1) {
        var answer = '1) Ознакомиться на сайте собиратора какие фракции они принимают и в каком виде https://sobirator.ru/spisok/\n' +
                     '2) Написать на почту собиратора info@sobirator.ru с указанием что за организация, город, информацию по отправке: ' +
                     'список фракций, объём и вес каждой фракции, какого числа хотят отправить. И фото посылок в письмо вложить.\n' +
                     '3) Дождаться ответного письма с адресом и контактными данными получателя отправления.\n\n' +
                     'Из перевозчиков самый дешёвый КИТ https://tk-kit.ru/order-twoo\n' +
                     'Оформлять доставку до адреса, т.е. прямо до экоцентра.'
        $reactions.answer(answer)
    } else if (option == 2) {
        var answer = 'Как спрятать ссылку на материал вк в текст (через отмечаются @ только сообщества и люди):\n' +
                     '- первый способ\n' +
                     '1) Вставка звездочки *\n' +
                     '2) Указание ссылки на текст или другой материал в стандартной форме\n' +
                     '3) Вставка пробела\n' +
                     '4) Указание наименования поста в круглых скобках\n\n' +
                     '- второй способ\n' +
                     '1) Вставка открывающей квадратной скобки [\n' +
                     '2) Указание ссылки на пост\n' +
                     '3) Вставка вертикальной черты\n' +
                     '4) Вставка закрывающей квадратной скобки ]\n'
        $reactions.answer(answer)
    }
    $reactions.buttons({text: "Меню", transition: "/Menu"})
}