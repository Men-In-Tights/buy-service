require('newrelic');
const express = require ('express');
const app = express();
const bodyparser = require('body-parser');
const path = require('path'); // don't think I need these files 
const db = require('../sdc/postgres/index.js'); // don't think I need these files 
const dbuy = require('../database/Buy.js');
const dpower = require('../database/BPower.js');
const PORT = 3003;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/stocks/:id', express.static(path.join(__dirname, '../client/dist')));

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

app.get('/api/stocks/:id', (req, res) => {
  let { id } = req.params;
  db.getOne(id, (err, docs) => {
    if (err) {
      res.status(500).end(err);
    } else {
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(docs.rows[0]));
      // console.log(docs);
    }
  })
})

app.post('/api/stocks/', (req, res) => {
  console.log(req.body);
  db.insertOne(req.body.stockName, req.body.stockPrice, req.body.stockAccount, req.body.currencyCode, (err, docs) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(docs));
      // console.log(JSON.stringify(docs));
    }
  })
})

// app.get('/data/stocks/', (req, res) => {
//   db.getOne((err, docs) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.send(docs);
//       console.log(docs);
//     }    
//   })
// })

// app.post('/data/stocks/:stockId', (req, res) => {
//   db.insertOne(req.body, (err, docs) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.send(docs);
//     }    
//   })
// })

// app.put('/data/stocks', (req, res) => {
//   dbuy.update(req.body.id, req.body, (err, docs) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(docs);
//     }    
//   })
// })

// app.delete('/data/stocks', (req, res) => {
//   dbuy.remove(req.body.id, req.body, (err, docs) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(docs);
//     }    
//   })
// })


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});