 'use strict';
 const mongoose = require('mongoose');

 const Company = new mongoose.Schema({
   source: Number,
   name: String,
   industry: String,
   entrepreneurGender: String,
   seekAmount: Number,
   seekEquity: Number,
   seekValuation: Number,

   tvDealReached: Boolean,
   tvDealAmount: Number,
   tvDealEquity: Number,
   tvDealValuation: Number,

   actualDealReached: Boolean,
   actualDealAmount: Number,
   actualDealEquity: Number,
   actualDealValuation: Number,

   season: Number,
   numberInSeries: Number,
   seasonEpisode: Number,

   barbaraCororan: Number,
   markCuban: Number,
   loriGreiner: Number,
   robertHerjavec: Number,
   daymondJohn: Number,
   kevifalseleary: Number,
   guest: Number,
   numberSharks: Number,
   perShark: Number,
   dealNotes: String

     //sharks: Schema.Types.sharks;
     //{type: Number, default: 0}
 });

 module.exports = mongoose.model('companies', Company);
