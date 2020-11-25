import Kiwi from './kiwi.jpg';
import './kiwi-img.scss';

class KiwiImage {
  render() {
    const img = document.createElement('img');
    const body = document.querySelector('body');

    img.src = Kiwi;
    img.alt = 'Kiwi Pic';
    img.classList.add('kiwi-image');
    body.appendChild(img);
  }
}

export default KiwiImage;
