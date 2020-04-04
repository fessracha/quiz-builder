class QuizBuilder {
  constructor(options) {
    this.name = options.name;
    this.description = options.description;
    this.current_question = 0;
    this.results = [];
    this.time_left = 0;
    this.$container = options.$container;
    this.questions = options.questions;
  }

  init() {
    this.buildBase();
  }

  setHead(html) {
    const $head = document.querySelector(".x-quiz__head");

    $head.innerHTML(html);
  }

  setBody(html) {
    console.log("set body");
    const $body = document.querySelector(".x-quiz__body");

    $body.innerHTML = html;
  }

  setActions(html) {
    const $actions = document.querySelector(".x-quiz__actions");

    $actions.innerHTML = html;
  }

  buildBase() {
    $quiz_container.innerHTML = `
            <div class="x-quiz">
                <div class="x-quiz__head">
                    <div class="x-quiz__title">
                        ${this.name}
                    </div>
                </div>
                <div class="x-quiz__body">
                    <div class="x-quiz__description">
                        ${this.description}
                    </div>
                </div>
                <div class="x-quiz__actions mt-4">
                    <button class="btn btn-primary" id="x-quiz-start">Start</button>
                </div>
            <div/>
        `;

    this.$start_btn = document.querySelector("#x-quiz-start");

    this.$start_btn.addEventListener("click", this.start.bind(this));

    console.log("Generate base");
  }

  start() {
    console.log("Start Quiz");

    this.setBody(
      `<div class="x-quiz__question">
                    ${this.questions[this.current_question].question}
                </div>`
    );

    this.setActions(
      `<button class="btn btn-primary mr-2" id="x-quiz-prev">Prev</button><button class="btn btn-primary mr-2" id="x-quiz-next">Next</button>`
    );

    const $next = document.getElementById("x-quiz-next");
    const $prev = document.getElementById("x-quiz-prev");

    $next.addEventListener("click", this.next.bind(this));
    $prev.addEventListener("click", this.prev.bind(this));
  }

  next() {
    console.log(this.current_question);
    console.log(this.questions.length);
    if (this.current_question < this.questions.length - 1) {
      this.current_question++;

      this.setBody(
        `<div class="x-quiz__question">
                    ${this.questions[this.current_question].question}
                </div>`
      );
    }
    console.log("next");
  }

  prev() {
    if (this.current_question > 0) {
      this.current_question--;

      this.setBody(
        `<div class="x-quiz__question">
                    ${this.questions[this.current_question].question}
                </div>`
      );
    }
    console.log("prev");
  }

  finish() {
    console.log("Finish Quiz");
  }
}
