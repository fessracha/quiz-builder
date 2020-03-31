class QuizBuilder {
    constructor(options) {
        this.name = options.name
        this.description = options.description
        this.current_question = 0
        this.results = []
        this.time_left = 0
        this.$container = options.$container
    }

    build() {
        $quiz_container.innerHTML = `
            <div class="x-quiz">
                <div class="x-quiz__title">
                    Welcome ${this.name}
                </div>
                <div class="x-quiz__description">
                    ${this.description}
                </div>
            <div/>
        `

        console.log('Generate HTML Quiz')
    }

    start() {
        console.log('Start Quiz')
    }

    finish() {
        console.log('Finish Quiz')
    }
}