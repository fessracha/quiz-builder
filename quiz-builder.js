class QuizBuilder {
    constructor(options) {
        this.name = options.name
        this.description = options.description
        this.current_question = 0
        this.results = []
        this.time_left = 0
        this.$container = options.$container,
        this.questions = options.questions
    }

    init() {
        this.buildBase()
    }

    setHead(html) {
        const $head = document.querySelector('.x-quiz__head')

        $head.innerHTML(html)
    }

    setBody(html) {
        const $body = document.querySelector('.x-quiz__body')

        $body.innerHTML(html)
    }

    buildBase() {
        $quiz_container.innerHTML = `
            <div class="x-quiz">
                <div class="x-quiz__head">
                    <div class="x-quiz__title">
                        Welcome ${this.name}
                    </div>
                </div>
                <div class="x-quiz__body">
                    <div class="x-quiz__description">
                        ${this.description}
                    </div>
                    <div class="mt-4">
                        <button class="btn btn-primary" id="x-quiz-start">Start</button>
                    </div>
                </div>
            <div/>
        `

        const $start_btn = document.querySelector('#x-quiz-start')

        $start_btn.addEventListener('click', this.start);

        console.log('Generate HTML Quiz')
    }

    start() {
        console.log('Start Quiz')
    }

    finish() {
        console.log('Finish Quiz')
    }
}