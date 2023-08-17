import express from 'express';
import longestWord from './bootcamp/longestWord.js';
import shortestWord from './bootcamp/shortestWord.js';
import wordLengths from './bootcamp/wordLengths.js';
import totalPhoneBill from './bootcamp/totalPhoneBill.js';
import enoughAirtime from './bootcamp/enoughAirtime.js';

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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

// function enoughAirtime(usageString) {
//   const usageArray = usageString.split(',');
//   const total = usageArray.length * 2.5; // Assuming each usage costs 2.5 units
//   return total;
// }

app.get('/api/enoughAirtime', (req, res) => {
  const usageString = req.body.usageString;

  if (!usageString) {
      return res.json({
          error: 'Please provide a usage string'
      });
  }

  const total = enoughAirtime(usageString);
  console.log({total});
  res.json({
      total
  });
});

app.post('/api/enoughAirtime', (req, res) => {
  console.log(req.body , req.query, req.params)

  const usageString = req.body.usageString;
  const airtime = req.body.airtime;

  if (!usageString) {
      return res.json({
          error: 'Please provide a usage string'
      });
  }

  // You can calculate the total airtime usage here if needed
  // For now, I'll just echo the provided airtime value
  const total = enoughAirtime(usageString, Number(airtime));
  console.log({total});
  res.json({
      airtime: total
  });
});

app.post('/api/enoughAirtime/total', (req, res) => {
  const usageString = req.body.usageString;

  if (!usageString) {
      return res.json({
          error: 'Please provide a usage string'
      });
  }

  const total = enoughAirtime(usageString);
  
  res.json({
      message: 'success',
      total
  });
});
  




//http://localhost:6007
let PORT = process.env.PORT || 6007; 

app.listen(PORT, function(){
  console.log('App starting on port', PORT);
});