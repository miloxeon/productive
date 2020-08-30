const actions = [
    `делегируй`,
    `декомпозируй`,
    `проецируй`,
    `распределяй`,
    `кешируй`,
    `консолидируй`,
    `объединяй`,
    `интерпретируй`,
    `анализируй`,
    `рационализируй`,
    `геймифицируй`,
    `фильтруй`,
    `ограничивай`,
    `изобретай`,
    `централизуй`,
    `коллекционируй`,
]

const subjects = [
    `абстракции`,
    `методы`,
    `ритуалы`,
    `сущности`,
    `привычки`,
    `паттерны`,
    `молотки`,
    `желания`,
    `идеологии`,
    `идеи`,
    `ограничения`,
    `решения`,
    `продукты`,
    `инструменты`,
    `средства`,
    `цели`,
]

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1)

const getAdvice = () => {
    const action = actions[Math.floor(Math.random() * actions.length)]
    const subject = subjects[Math.floor(Math.random() * subjects.length)]

    const capitalizedAction = capitalizeFirstLetter(action)

    return `${capitalizedAction} ${subject}.`
}

document.getElementById('quote').innerHTML = getAdvice()

document.getElementById('new').onclick = () => {
    document.getElementById('quote').innerHTML = getAdvice()
}

