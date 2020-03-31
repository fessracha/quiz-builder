const $quiz_container = document.querySelector('.quiz-container')

let options = {
    name: 'Quiz COVID-19',
    description: 'lorem ipsum',
    $container: $quiz_container
}
let quiz_coronavirus = new QuizBuilder(options)

quiz_coronavirus.build()