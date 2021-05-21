import { createPage } from "./exercise7";

describe('createPage ', () => {
  beforeAll(() => {
    document.body.innerHTML = `<div class="paragraphs-wrapper">
      <p class="text">
      </p>

      <p class="text">        
      </p>

      <p class="text">      
      </p>
    </div>
    <input class="input-text" type="text" />

    <button class="button">Enter</button>`;
  });

  it('finds all necessary elements',() => {
    const button = document.querySelector('.button');
    const input = document.querySelector('.input-text');
    const text = document.querySelector('.text');
    expect(button).not.toBe(null);
    expect(input).not.toBe(null);
    expect(text).not.toBe(null);
  });

  it('makes button hidden, when input is empty', () => {
    const button = document.querySelector('.button');
    createPage();
    expect(button.hidden).toBeTruthy();
  });

  it('show button, when input is not empty', () => {
    const button = document.querySelector('.button');
    const input = document.querySelector('.input-text');

    createPage();

    expect(input.value).toBe("");
    expect(button.hidden).toBeTruthy();

    input.value = 'text';
    const event = new Event('input');
    input.dispatchEvent(event)

    expect(button.hidden).toBeFalsy();
  });


    const texts = [
      ['Hello'],
      ['Hello, World']
    ]

    texts.forEach(([text]) => {
      it('creates new paragraph below others', () => {

        createPage();

        expect(input.value).toBe("");
        expect(button.hidden).toBeTruthy();

        input.value = 'text';
        const event = new Event('input');
        input.dispatchEvent(event)

        expect(button.hidden).toBeFalsy();
        const button = document.querySelector('.button');
        button.click();
        expect(addElementToPar).toHaveBeenCalledWith(text);
      });
    });
  });

  it('delete first paragraph, when add more then 5 paragraphs', () => {
    const button = document.querySelector('.button');
    const input = document.querySelector('.input-text');
    const paragraph = document.querySelector('.text');
    const addElementToPar = jest.fn().mockImplementation((text) => {
      const newText = document.createElement("p");
      newText.innerText = text;

      const wrapper = document.querySelector(".paragraphs-wrapper");
      wrapper.append(newText);
      newText.classList.add("text");
    })
    // input.value = "Something";
    // button.click();
    // expect(paragraph.innerHTML).toBe('<p>Something</p>');
    expect(addElementToPar).toHaveBeenCalled();
  });
// });