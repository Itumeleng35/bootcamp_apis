import express from 'express';
import longestWord from './bootcamp/longestWord.js';
import shortestWord from './bootcamp/shortestWord.js';
import wordLengths from './bootcamp/wordLengths.js';
import totalPhoneBill from './bootcamp/totalPhoneBill.js';
import enoughAirtime from './bootcamp/enoughAirtime.js';

const app = express();

app.use(express.static('public'));

// data comes in when we make a request
app.get('/api/word_game', function(req, res){

    const sentence = req.query.sentence;

    if (!sentence) {
      res.json({
        error : 'Please send in a sentence to analyse'
      })
    }
    // const casing = sentence.toUpperCase();
    // http://localhost:6007/api/word_game?sentence=we%20are%20creating%20an%20API%20using%20ExpressJS
    res.json ({
        "longestWord" : longestWord(sentence),
        "shortestWord" : shortestWord(sentence),
        "sum" : wordLengths(sentence)
    });
});


app.get('/api/phonebill', function(req, res){ //makes the widgets function
  const data = req.query.data;

  if(!data) {
  res.json ({
    error : 'Please insert a string'
  })
}
res.json({
  'total' : totalPhoneBill(data)
});
});

app.post('/api/phonebill/total', function(req, res) {
  const data = req.body.data; //Post method = req.body because we send information to the body 
// app.get = req.query because we are requesting data

    res.json ({
      message: 'success',
      'total': totalPhoneBill(data)

    })
  
  
})

app.get('/api/enoughAirtime', function(req, res) {
  const usageString = req.query.usageString;

  if (!usageString) {
    res.json ({
      error : 'Please insert string'
    })
  }

res.json ({
  'total' : enoughAirtime(usage)
});
});

app.post('/api/enoughAirtime/total', function(req, res) {
  const usageString = req.body.usageString;

  res.json ({
    message: 'success',
    'total': enoughAirtime(usage)
  })
});




//http://localhost:6007
let PORT = process.env.PORT || 6007; 

app.listen(PORT, function(){
  console.log('App starting on port', PORT);
});