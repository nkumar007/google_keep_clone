class App {
  constructor() {
    this.notes = [];

    this.$form = document.querySelector("#form");
    this.$title = document.querySelector("#note-title");
    this.$text = document.querySelector("#note-text");
    this.$formButtons = document.querySelector("#form-buttons");
    this.addEventListeners();
  }

  addEventListeners() {
    document.body.addEventListener("click", (event) => {
      this.handleFormClick(event);
    });
    this.$form.addEventListener("submit", (event) => {
      event.preventDefault();
      const title = this.$title.value;
      const text = this.$text.value;
      const hasNote = title || text;
      if (hasNote) {
        this.addNote({ title, text });
        this.$title.value = "";
        this.$text.value = "";
      }
    });
  }

  handleFormClick(event) {
    const isClicked = this.$form.contains(event.target);

    if (isClicked) {
      this.openForm();
    } else {
      this.closeForm();
    }
  }

  addNote(note) {
    const newNote = {
      title: note.title,
      text: note.text,
      color: "white",
      id: this.notes.length > 0 ? this.notes[this.notes.length - 1].id + 1 : 1,
    };

    this.notes = [...this.notes, newNote];
    console.log(this.notes);
  }

  openForm() {
    this.$form.classList.add("form-open");
    this.$title.style.display = "block";
    this.$formButtons.style.display = "block";
  }

  closeForm() {
    this.$form.classList.remove("form-open");
    this.$title.style.display = "none";
    this.$formButtons.style.display = "none";
  }
}

new App();
