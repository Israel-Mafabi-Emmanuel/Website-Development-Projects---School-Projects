require ( './helpers.js' );

const chai = require("chai");
chai.use(require("chai-dom"));
const { expect } = chai;

describe("index.html", () => {
  it("contains an <a> tag", () => {
    const aTag = document.querySelector("a");
    expect(aTag).to.exist;
  });

  it("has the text content of 'Moringa School'", () => {
    const aTag = document.querySelector("a");
    expect(aTag).to.have.text("Moringa School");
  });

  it("has the href attribute of 'https://moringaschool.com/'", () => {
    const aTag = document.querySelector("a");
    expect(aTag).to.have.attribute("href", "https://moringaschool.com/");
  });
});