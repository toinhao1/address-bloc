const MenuController = require("../controllers/MenuControllers")

describe("MenuController", () => {
  describe("#getContactCount()", () => {

    beforeEach(() => {
      this.menu = new MenuController();
    })

    it("should return 0 when no contacts are in the book", () => {
      expect(this.menu.getContactCount()).toBe(0);
    });
    it("should return 1 when there is exactly one contact in the book", () => {
      this.menu.contacts.push("Bob");
      expect(this.menu.getContactCount()).toBe(1)
    });
  });
});

describe("MenuController", () => {
  describe("#remindMe()", () => {

    beforeEach(() => {
     this.menu = new MenuController();
    });
    it("should return a string with either single or double quotes", () => {
      this.menu.reminders = ("Learning is a life-long pursuit");
      expect(this.menu.remindMe()).toBe("Learning is a life-long pursuit")
    });
  });
});
