import axios from 'axios';

// GET
function fetch() {
  axios
    .get('/api/hello')
    .then((ress) => {
      console.log(ress);
    })
    .catch((err) => {
      console.log(err);
    });
}

export default function Home() {
  return (
    <main>
      <div></div>
    </main>
  );
}
