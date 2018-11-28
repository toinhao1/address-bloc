const inquirer = require('inquirer');

module.exports = class MenuController {
  constructor() {
    this.mainMenuQuestions = [
      {
        type: "list",
        name: "mainMenuChoice",
        message: "Please choose from an option below: ",
        choices: [
          "Add new contact",
          "Exit",
          "Get Date"
        ]
      }
    ];
    this.contacts = [];
  }

  main() {
    console.log(`Welcome to AddressBloc!`);
    inquirer.prompt(this.mainMenuQuestions).then((response) => {
      switch(response.mainMenuChoice) {
        case "Add new contact":
          this.addContact();
          this.main();
          break;
        case "Get Date":
          this.getDate();
          this.main();
          break;
        case "Exit":
          this.exit();
        default:
          console.log("Invalid input");
          this.main();
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }
  clear() {
    console.log("\x1Bc");
  }
  addContact() {
    this.clear();
    console.log('addContact called');
    this.main;
  }
  exit() {
    console.log("Thanks for using AddressBloc!");
    process.exit();
  }
  getContactCount() {
    return this.contacts.length;
  }
  getDate() {
    this.clear();
    console.log(new Date(Date.now()).toLocaleString());
    this.main;
  }
}
