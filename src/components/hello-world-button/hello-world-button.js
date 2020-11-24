import './hello-world-button.scss';

class HelloWorldButton {
  buttonCssClass = 'hello-world-button';
  render() {
    const button = document.createElement('button');
    const body = document.querySelector('body');

    button.classList.add(this.buttonCssClass);
    button.innerHTML = 'Hello World';
    button.onclick = function () {
      const p = document.createElement('p');
      p.innerHTML = 'Hello World!';
      p.classList.add('hello-world-text');

      body.appendChild(p);
    };
    body.appendChild(button);
  }
}

export default HelloWorldButton;
