const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Hello')
})

app.get('/sum', (req, res) => {
    const a = req.query.a;
    const b = req.query.b; 
    
    if(!a) {
        res.status(400).send('please provide a number');
    }

    if(!b) {
        res.status(400).send('please provide a number');
    }

    if(isNaN(a)) {
        res.status(400).send('Must be a number!');
    }

    if(isNaN(b)) {
        res.status(400).send('Must be a number!');
    }

    const c = parseInt(a) + parseInt(b);
    const answer = `The sum of ${a} and ${b} is ${c}`;
    res.send(answer);
});

// drill 2
app.get('/cipher', (req, res) => {
    const text = req.query.text;
    const shift = parseInt(req.query.shift);
    // query shift must be a number
    // query shift cannot be 0
    // if character is Z or z, loop back to A or a (respectively)


    // create an array of letters in query text
    // convert the letters into their utf character code
    const charCodes = text.split('').map(letter => letter = letter.charCodeAt(0));

    // add value of shift to each code in letter array
    const charShift = charCodes.map(num => num + shift);

    // convert utf codes to letters
    // join the the resulting array of letters
    const cipher = charShift.map(nums => String.fromCharCode(nums)).join('');

    res.send(cipher);
})


app.get('/lotto', (req, res) => {

    // get userInput array
    // make strings in userInput into numbers
    const { arr } = req.query;
    const userNumbers = arr.map(str => parseInt(str));
    const randomNumbers = Array.from({length: 6}, () => Math.floor(Math.random() * 20));

    const matchingNums = userNumbers.filter(num => num === randomNumbers.find(randomNum => randomNum === num));
    const matchingNums2 = userNums.filter(num => randomArr.includes(num));

    let message = 'You lose scumbag';
     
    if(matchingNums.length === 4) {
        message = 'Congrats';
    }

    if(matchingNums.length === 5) {
        message = 'You Win!';
    }

    if(matchingNums.length === 6) {
        message = 'Millions';
    }

    res.send(message);



    
    //create an array that generates 6 random numbers
    //compare urerInput against the random numbers in the array
    //conditionals to generate message string
    

   
})


app.get('/grade', (req, res) => {
// get the mark from the query
const { mark } = req.query;

// do some validation
if(!mark) {
    // mark is required
    return res
    .status(400)
    .send("Please provide a mark");
}

const numericMark = parseFloat(mark);
if(Number.isNaN(numericMark)) {
    // mark must be a number
    return res
    .status(400)
    .send("Mark must be a numeric value");
}

if(numericMark < 0 || numericMark > 100) {
    // mark must be in range 0 to 100
    return res
    .status(400)
    .send("Mark must be in range 0 to 100");
}

if(numericMark >= 90) {
    return res
    .send("A");
} 

if(numericMark > 80) {
    return res
    .send("B");
}

if(numericMark >= 70) {
    return res
    .send("C");
}

res
    .send("F");
});


app.listen(8000, () => {
    console.log('The port 8000 is up and running mofo!');
}); 