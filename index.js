'use strict';

const express = require('express');
const markdown = require('marked');
const bodyParser = require('body-parser')
const fs = require('fs');

const app = new express();

app.use(bodyParser.json())

app.get('/markdown/:filename', function(req,res){
  fs.readFile(`./files/${req.params.filename}`, 'utf8', (err, data) => {
    if(err)
      res.end("Error");

    res.end(markdown(data));
  })
})

app.listen(process.argv[2]);
