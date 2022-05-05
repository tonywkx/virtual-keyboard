import './styles/style.css';
import logo from '../assets/balcony.jpg';

const lol = [];
const container = document.querySelector('.container');

function createImg(url, container) {
  const img = document.createElement('img');
  img.className = 'img';
  img.src = url;
  container.appendChild(img);
}

createImg(logo, container); 
