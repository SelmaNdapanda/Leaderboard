const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Hs3yRgIp4wIYr/scores';
const addScore = async (user_name, points) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      user: user_name,
      score: points,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json());
};

export default addScore;