const $quiz_container = document.querySelector('.quiz-container')

let options = {
    name: 'Quiz COVID-19',
    description: 'lorem ipsum',
    $container: $quiz_container,

    /*
     * question type:
     * 0 - one in many
     * 1 - many in many
     * 2 - text
     */
    questions: [
        {
            type: 0,
            question: 'COVID-19 передается воздушно капельным путем',
            hint: '',
            options: [{ text: 'Правда' }, { text: 'Ложь' }]
        },
        {
            type: 1,
            question: 'Лучшие способы защиты от COVID-19',
            hint: '',
            options: [{ text: 'Обработка рук' }, { text: 'Прогулки на свежем воздухе' }, { text: 'Маска'}]
        },
        {
            type: 2,
            question: 'COVID-19 принадлежит к семейству ...',
            hint: '',
        }
    ]
}
let quiz_coronavirus = new QuizBuilder(options)

quiz_coronavirus.init()