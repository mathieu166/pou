var cheerio   = require('cheerio');
var fs        = require('fs');
var expect   = require('expect');
var $;

//September (month=8) 19th 2016 (It's a Monday)
var date = new Date(2016,8,19,0,0,0,0);

describe('Calendar template', function(){
  beforeEach(function(){
    var html = fs.readFileSync('./app/supplyusage.html').toString();
    $ = cheerio.load(html);
  });

  it('has element with id "calendar"', function(){
    expect($('#calendar').html()).toExist('but element with ID "calendar" was not fount.');
  });

  it('has element with class "calendar"', function(){
    expect($('.calendar').html()).toExist('but element with Class "calendar" was not fount.');
  });

  it('display month cell', function(){
    var calendar = new Calendar(date);
    calendar.fillCalendar($);
    expect($('.month td').text()).toBe('Septembre');
  });

});

