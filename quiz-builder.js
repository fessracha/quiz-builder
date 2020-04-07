class XQuiz {
  constructor(options) {
    this.name = options.name;
    this.description = options.description;
    this.current_question = null;
    this.results = [];
    this.time_left = 0;
    this.$container = options.$container;
    this.questions = options.questions;
    this.answers = [];
  }

  init() {
    this.buildBase();

    this.current_question = 0;

    this.$start_btn = document.querySelector("#x-quiz-start");
    this.$start_btn.addEventListener("click", this.start.bind(this));
    this.$finish_btn = document.querySelector("#x-quiz-finish");
    this.$finish_btn.addEventListener("click", this.finish.bind(this));
  }

  buildQuestion() {
    const $body = document.querySelector(".x-quiz__body");

    let html = `<div class="x-quiz__question">
                    ${this.questions[this.current_question].question}
                </div>`;

    $body.innerHTML = html;
  }

  buildFinishInfo() {
    const $body = document.querySelector(".x-quiz__body");

    let html = `<div class="alert alert-info" role="alert">
                  Thank you for passing this quiz.
                </div>`;

    $body.innerHTML = html;
  }

  buildActions() {
    const $actions = document.querySelector(".x-quiz__actions");

    let html = `
    <button class="x-quiz__btn btn btn-primary mr-2" id="x-quiz-start">Start</button>
    <button class="x-quiz__btn btn btn-primary mr-2" id="x-quiz-prev">Prev</button>
    <button class="x-quiz__btn btn btn-primary mr-2" id="x-quiz-next">Next</button>
    <button class="x-quiz__btn btn btn-primary mr-2" id="x-quiz-finish">Finish</button>`;

    $actions.innerHTML = html;
  }

  checkActionsStatus() {
    const $start = document.getElementById("x-quiz-start"),
      $prev = document.getElementById("x-quiz-prev"),
      $next = document.getElementById("x-quiz-next"),
      $finish = document.getElementById("x-quiz-finish");

    $prev.style.display = "none";
    $next.style.display = "none";
    $finish.style.display = "none";

    if (this.current_question === null) {
      $prev.style.display = "none";
      $next.style.display = "none";
      $finish.style.display = "none";
    } else {
      $start.style.display = "none";
      if (this.current_question > 0) {
        $prev.style.display = "inline-block";
      }
      if (this.current_question < this.questions.length - 1) {
        $next.style.display = "inline-block";
      }
      if (this.current_question == this.questions.length - 1) {
        $finish.style.display = "inline-block";
      }
    }
  }

  checkRequiredQuestion() {
    if (this.questions[this.current_question].required) {
      const $options = document.querySelector(".x-quiz__options");

      if (
        this.questions[this.current_question].type == 0 ||
        this.questions[this.current_question].type == 1
      ) {
        const $inputs = $options.querySelectorAll("input:checked");
        console.log($inputs);
        return $inputs.length ? true : false;
      } else if (this.questions[this.current_question].type == 2) {
        const $input = $options.querySelector("input");

        return $input.value.length ? true : false;
      }
    } else {
      return true;
    }
  }

  buildOptions() {
    const $options = document.querySelector(".x-quiz__options");

    let html = "";

    if (this.questions[this.current_question].type == 0) {
      this.questions[this.current_question].options.forEach((option, i) => {
        html += `
        <input type="radio" id="option-${i}"
        name="question-${this.current_question}" value="${this.current_question}">
        <label for="option-${i}">${option.text}</label>`;
      });
    } else if (this.questions[this.current_question].type == 1) {
      this.questions[this.current_question].options.forEach((option, i) => {
        html += `<input id="option-${i}" type="checkbox" name="question-${this.current_question}" value="${i}">
        <label for="option-${i}">${option.text}</label>`;
      });
    } else if (this.questions[this.current_question].type == 2) {
      html += `<input type="text" name="question-${this.current_question}">`;
    }

    $options.innerHTML = html;
  }

  clearOptions() {
    const $options = document.querySelector(".x-quiz__options");

    $options.innerHTML = "";
  }

  buildBase() {
    $quiz_container.innerHTML = `
            <div class="x-quiz">
                <div class="x-quiz__head">
                    <div class="x-quiz__title display-4">
                        <strong>${this.name}</strong>
                    </div>
                </div>
                <div class="x-quiz__body mt-4">
                    <div class="x-quiz__description">
                        ${this.description}
                    </div>
                </div>
                <div class="x-quiz__options mt-5"></div>
                <hr>
                <div class="x-quiz__actions mt-5">
                </div>
            <div/>
        `;

    this.buildActions();

    this.checkActionsStatus();
  }

  start() {
    this.buildQuestion();

    this.buildOptions();

    this.checkActionsStatus();

    const $next = document.getElementById("x-quiz-next");
    const $prev = document.getElementById("x-quiz-prev");

    $next.addEventListener("click", this.next.bind(this));
    $prev.addEventListener("click", this.prev.bind(this));
  }

  next() {
    if (this.checkRequiredQuestion()) {
      this.current_question++;

      this.buildQuestion();

      this.buildOptions();

      this.checkActionsStatus();
    }
  }

  prev() {
    if (this.current_question > 0) {
      this.current_question--;

      this.buildQuestion();

      this.buildOptions();

      this.checkActionsStatus();
    }
  }

  finish() {
    if (this.checkRequiredQuestion()) {
      const $start = document.getElementById("x-quiz-start"),
        $prev = document.getElementById("x-quiz-prev"),
        $next = document.getElementById("x-quiz-next"),
        $finish = document.getElementById("x-quiz-finish");

      $start.style.display = "none";
      $prev.style.display = "none";
      $next.style.display = "none";
      $finish.style.display = "none";

      this.clearOptions();
      this.buildFinishInfo();
    }
  }
}
