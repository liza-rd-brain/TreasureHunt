// Получить случайное число от 0 до size-1
var getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
};
// Вычислить расстояние от клика (event) до клада (target)
var getDistance = function (event, target) {
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};
// Получить для расстояния строку подсказки
var getDistanceHint = function (distance) {
    if (distance < 9) {
        return "Супер-пупер огонь! У тебя осталось " + attempt + " попыток!"
    } else if (distance < 10) {
        return "Огонь! У тебя осталось " + attempt + " попыток!";
    } else if (distance < 15) {
        return "Почти огонь! У тебя осталось " + attempt + " попыток!";
    } else if (distance < 20) {
        return "Очень горячо. У тебя осталось " + attempt + " попыток!";
    } else if (distance < 30) {
        return "Горячее горячего. У тебя осталось " + attempt + " попыток!"
    } else if (distance < 40) {
        return "Горячо. У тебя осталось " + attempt + " попыток!"
    } else if (distance < 60) {
        return "Теплее чем тепло. У тебя осталось " + attempt + " попыток!"
    } else if (distance < 80) {
        return "Тепло. У тебя осталось " + attempt + " попыток!"
    } else if (distance < 120) {
        return "Прохладно. У тебя осталось " + attempt + " попыток!"
    } else if (distance < 140) {
        return "Холодно. У тебя осталось " + attempt + " попыток!"
    } else if (distance < 160) {
        return "Очень холодно! У тебя осталось " + attempt + " попыток!";
    } else if (distance < 320) {
        return "Мороз!У тебя осталось " + attempt + " попыток!"
    } else {
        return "Ноль по Кельвину!Мы все замёрзли!!!У тебя осталось " + attempt + " попыток!"
    }
};
// Создаем переменные
var width = 800;
var height = 800;
var clicks = 0;
var attempt = 30
// Случайная позиция клада
var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};
// Добавляем элементу img обработчик клика

$("#map").click(function (event) {
    if (attempt > 0) {

        attempt--
        clicks++;
        // Получаем расстояние от места клика до клада
        var distance = getDistance(event, target);
        // Преобразуем расстояние в подсказку
        var distanceHint = getDistanceHint(distance);
        // Записываем в элемент #distance новую подсказку
        $("#distance").text(distanceHint);
        // Если клик был достаточно близко, поздравляем с победой
        if (distance < 8) {
            alert("Клад найден! Сделано кликов: " + clicks);
            $("#map").unbind()

        }
    }

    else if (attempt === 0) {
        alert("Ты сделал " + clicks + " попыток, но не нашел клад! КОНЕЦ ИГРЫ!")


    }

});



