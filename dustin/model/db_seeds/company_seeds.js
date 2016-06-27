'use strict';

const mongoose = require('mongoose');
const Company = require('../../model/company');
const parse = require('csv-parse/lib/sync');
const fs = require('fs')
const split = require('split')
  //require('should');

//process.env.NODE_ENV = 'DEV';
//if (process.env.NODE_ENV === 'TEST') mongoose.connect('mongodb://localhost/test_db');
mongoose.connect('mongodb://localhost/dev_db');

mongoose.connection.collections['companies'].drop(function () {
  console.log('collection dropped');
});

var companies;
fs.createReadStream('./sources/companies_s1.csv')
  .pipe(split())
  .on('data', function (line) {

    companies = parse(line, {
      columns: true,
      auto_parse: true
    });
  })
  .on('end', function () {
    companies.forEach(function (company) {
      new Company(company).save((err, data) => {
        if (err) console.log(err);
        if (data) console.log('Company ' + data.name + ' created');
      });
    });
  });
