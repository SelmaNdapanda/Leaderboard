const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Hs3yRgIp4wIYr/scores';
const leaderboard = document.querySelector('.list-score');

export const display = (scores) => {
  leaderboard.innerHTML = '';
  if (scores.length === 0) {
    leaderboard.innerHTML = '<li>No Scores to be displayed</li>';
  }
  scores.sort((a, b) => b.score - a.score).forEach((score) => {
    leaderboard.innerHTML += ` <li class="Scores">${score.user}: ${score.score}</li>`;
  });
};

export const fetchData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  display(data.result);
};
