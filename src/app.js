import express from 'express'; // Importa o express da biblioteca
import cors from 'cors';

const app = express(); // Cria uma instância do servidor
//app.use(cors());
app.use(express.json());

const persons = [ 
    {
    username: 'bobesponja', 
	avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png" 
    },
    {
    username: 'siriguejo', 
    avatar: "https://upload.wikimedia.org/wikipedia/pt/thumb/8/80/Mr._Krabs.png/200px-Mr._Krabs.png" 
    }
];
const tweets = [
    {
      username: "bobesponja",
      tweet: "Eu amo hambúrguer de siri!"
    },
    {
      username: "bobesponja",
      tweet: "Olá Siriguejo!"
    },
    {
        username: "siriguejo",
        tweet: "Olá Bob Esponja!"
    }

];

// Configura uma função pra ser executada quando bater um GET na rota "/"
app.post('/sign-up', (req, res) => {
    const username = req.params.username;
    const avatar = req.params.avatar;
    if (username && avatar) persons.push({ username: username, avatar: avatar });
    res.send('OK');
});

app.post('/tweets', (req, res) => {
    const username = req.params.username;
    const tweet = req.params.tweet;
    const result = persons.find((person) => person.username === username);
    if (!result || result == null || result === undefined) {
        res.send('UNAUTHORIZED');
    }
    else {
        tweets.push({ username: username, tweet: tweet });
        res.send('OK');
    }
    
});

app.get('/tweets', (req, res) => {
    const arr = [];
    tweets.map((tweet, i) => {
        let avatar = persons.avatar.find((person) => person.username === tweet.username);
        if (arr < 10)
         arr.push({ username: tweet.username, avatar: avatar, tweet: tweet.tweet})
     } )
    res.send(arr);
});

// Configura o servidor para rodar na porta 5000
app.listen(5000);