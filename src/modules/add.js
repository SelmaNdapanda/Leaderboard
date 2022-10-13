const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Hs3yRgIp4wIYr/scores';
const addScore = async (userName, points) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      user: userName,
      score: points,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json());
};

export default addScore;