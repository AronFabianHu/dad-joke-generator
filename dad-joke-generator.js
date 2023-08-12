//Dad joke generator

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button')

const addNewJoke = async () => {
    const jokeText = await getDadJoke()
    const newLi = document.createElement('LI')
    newLi.append(jokeText)
    jokes.append(newLi)
}


const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;

    } catch (e) {
        return "NO JOKES AVAIABLE! SORRY"
    }
}


button.addEventListener('click', addNewJoke)

getDadJoke()


console.time('fetcing data')
const dadJoke = fetch('https://icanhazdadjoke.com/',
    {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(data => {
        return data.json()
    })
    .then(data => {
        console.timeEnd('fetcing data')
        console.log('THIS IS A RANDOM JOKE: ', data.joke)
    })