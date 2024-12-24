let userInput = document.getElementById('date')
userInput.max = new Date().toISOString().split('T')[0]
// Ставит ограничение на выбор даты
// Нельзя выбрать дальше, чем сегодяшняя дата
let result = document.getElementById('result')

function calcAge() {
    let birthDate = new Date(userInput.value)

    let d1 = birthDate.getDate()
    let m1 = birthDate.getMonth() + 1
    let y1 = birthDate.getFullYear()

    let today = new Date()

    let d2 = today.getDate()
    let m2 = today.getMonth() + 1
    let y2 = today.getFullYear()

    let d3, m3, y3 

    y3 = y2 - y1

    if(m2 >= m1){
        m3 = m2 - m1
    } else{
        y3--
        m3 = 12 + m2 - m1
    }

    if(d2 >= d1){
        d3 = d2 - d1
    }else{
        m3--
        d3 = getDaysInMonth(y1, m1) + d2 - d1
    } 

    if(m3 < 0){
        m3 = 11
        y3--
    }
    result.innerHTML = `Вам <span>${y3}</span> ${calcUnits(y3, 'лет', 'год', 'года')} <span>${m3}</span> ${calcUnits(m3, 'месяцев', 'месяц', 'месяца')} и <span>${d3}</span> ${calcUnits(d3, 'дней', 'день', 'дня')}`
}

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate()
}

function calcUnits(value, unit_0, unit_1, unit_2) {
    let reminder = value % 100

    if (reminder >= 11 && reminder <= 19)
        return unit_0

    reminder = reminder % 10

    if (reminder === 1)
        return unit_1
    else if (reminder >= 2 && reminder <= 4)
        return unit_2
    else
        return unit_0
}


