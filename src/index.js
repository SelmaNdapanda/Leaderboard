import { fetchData } from './modules/scoreboard';
import addScoreToList from './modules/add.js';
import './style.css';

const submitForm = document.querySelector('#add-form');
const playerScore = document.querySelector('#score');
const playerName = document.querySelector('#name');
const refresh = document.querySelector('#refresh');

submitForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addScoreToList(playerName.value, playerScore.value);
  submitForm.reset();
});

refresh.addEventListener('click', () => {
  fetchData();
});

window.onload = () => {
  fetchData();
};
