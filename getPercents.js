//Напишите функцию getPercents(percent, number), которая возвращает {percent} процентов от {number},
//например, getPercents(30, 200) должно вернуть 60.

function getPercents(percent, number) {
    return number / 100 * percent;
}
module.exports = getPercents;
