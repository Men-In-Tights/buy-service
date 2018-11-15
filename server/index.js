const express = require ('express');
const app = express();
const bodyparser = require('body-parser');
const path = require('path'); // don't think I need these files 
const db = require('../database/index.js'); // don't think I need these files 
const dbuy = require('../database/Buy.js');
const dpower = require('../database/BPower.js');
const PORT = 3003;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

// app.get('/data/stocks', (req, res) => {
//   dbuy.findRandom().limit(10).exec((err, docs) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(docs);
//     }    
//   });
// });

// app.get('/api/bpowertest', (req, res) =>{
//   dpower.find((err, docs) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(docs);
//     }    
//   });
// });

app.get('/data/stocks', (req, res) => {
  dbuy.find((err, docs) => {
    if (err) {
      res.send(err);
    } else {
      res.send(docs);
    }    
  })
})

app.post('/data/stocks', (req, res) => {
  dbuy.create(req.body, (err, docs) => {
    if (err) {
      res.send(err);
    } else {
      res.send(docs);
    }    
  })
})

app.put('/data/stocks', (req, res) => {
  dbuy.update(req.body.id, req.body, (err, docs) => {
    if (err) {
      res.send(err);
    } else {
      res.send(docs);
    }    
  })
})

app.delete('/data/stocks', (req, res) => {
  dbuy.remove(req.body.id, req.body, (err, docs) => {
    if (err) {
      res.send(err);
    } else {
      res.send(docs);
    }    
  })
})


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});