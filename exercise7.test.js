import { createPage } from "./exercise7";

describe("createPage ", () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <div class="paragraphs-wrapper">
    <p class="text">1</p>
    <p class="text">2</p>
    <p class="text">3</p>
    <p class="text">4</p>
    </div>
    <input class="input-text" type="text" />
    <button class="button">Enter</button>`;
  });

  it("finds all necessary elements", () => {
    const button = document.querySelector(".button");
    const input = document.querySelector(".input-text");
    const text = document.querySelector(".text");
    expect(button).not.toBe(null);
    expect(input).not.toBe(null);
    expect(text).not.toBe(null);
  });

  it("makes button hidden, when input is empty", () => {
    const button = document.querySelector(".button");
    createPage();
    expect(button.hidden).toBeTruthy();
  });

  it("show button, when input is not empty", () => {
    const button = document.querySelector(".button");
    const input = document.querySelector(".input-text");

    createPage();

    expect(input.value).toBe("");
    expect(button.hidden).toBeTruthy();

    input.value = "text";
    const event = new Event("input");
    input.dispatchEvent(event);

    expect(button.hidden).toBeFalsy();
  });

  it("creates new paragraph below others", () => {
    const button = document.querySelector(".button");
    const input = document.querySelector(".input-text");
    createPage();
    const countOfParagraphs = document.getElementsByClassName("text").length;
    expect(countOfParagraphs).toBe(4);

    input.value = "some words";
    const event = new Event("input");
    input.dispatchEvent(event);

    button.click();
    const NewCountOfParagraphs = document.getElementsByClassName("text").length;
    expect(NewCountOfParagraphs).toBe(5);
    const paragraphs = document.querySelector(".paragraphs-wrapper");
    expect(paragraphs.lastChild.innerText).toBe("some words");
  });

  it("delete first paragraph, when add more then 5 paragraphs", () => {
    const button = document.querySelector(".button");
    const input = document.querySelector(".input-text");
    const paragraphs = document.querySelector(".paragraphs-wrapper");
    createPage();

    input.value = "5";
    const event = new Event("input");
    input.dispatchEvent(event);
    button.click();
    expect(paragraphs.lastChild.innerText).toBe("5");

    input.value = "6";
    input.dispatchEvent(event);
    button.click();

    const countOfParagraphs = document.getElementsByClassName("text").length;

    expect(countOfParagraphs).toBeLessThan(6);
    expect(countOfParagraphs).toBe(5);
    expect(paragraphs.lastChild.innerText).toBe("6");
  });
});
