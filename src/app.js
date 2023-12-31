import express from 'express'; // Importa o express da biblioteca
import cors from 'cors';

const app = express(); // Cria uma instância do servidor
//app.use(cors());
app.use(express.json());

const persons = [ ];
const tweets = [ ];

// Configura uma função pra ser executada quando bater um GET na rota "/"
app.post('/sign-up', (req, res) => {
    const username = req.params.username;
    const avatar = req.params.avatar;
    if (username && avatar) persons.push({ username: username, avatar: avatar });
    if (username == null || username.length === 0 || avatar == null || avatar.length === 0)
    res.send('400');
    else res.send('OK');
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
    if (tweets.length > 0)
    tweets.map((tweet, i) => {
        let index = -1;
        let val = tweet.username;
        var avatarIndex = persons.find(function(item, i){
            if(item.name === val){
              index = i;
              return i;
            }
          });
        let avatar = persons[avatarIndex].avatar;
        if (arr.length < 9)
         arr.push({ username: tweet.username, avatar: avatar, tweet: tweet.tweet})
     } )
    res.send(arr);
});

// Configura o servidor para rodar na porta 5000
app.listen(5000);