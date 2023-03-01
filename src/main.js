function calc(option) {
    var digits = $jsapi.contrext().request.query.split(" ")
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