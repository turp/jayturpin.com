---
layout: default
layout: page
title: "Quote of the Day"
date: 2015-05-17 -0800
comments: false
---

<div class="row">
  <div class="col-xs-12">
  <a class="btn btn-default getAnotherQuote" href="#">
    refresh <i class="fa fa-refresh "></i>
  </a>
  </div>
</div>

<div class="row">
  <div class="col-xs-12">

    <blockquote>
    	<h3 id="qq">{{quote}}</h3>
    </blockquote>
    <p><em>- <span id="aa">{{author}}</span></em></p>
  </div>
</div>

<script>
  var quotes = [
  {% for q in site.data.quotes %}
    { "quote": "{{ q.quote }}", "author": "{{q.author }}" },
  {% endfor %}
  ];

  var random = function() {
    if (quotes.length == 0) {
        return { "quote": "Error: not quotes found", "author": ""};
    }

    var getRandomInt = function(lower, upper) {
        return Math.floor(Math.random() * (upper - lower + 1)) + lower;
    };

    var max = quotes.length - 1;
    var index = getRandomInt(0, max);
    var q = quotes[index];
    return q;
  };

  var getAnotherQuote = function() {
    var qotd = random();
    $("#qq").html(qotd.quote);
    $("#aa").html(qotd.author);  
  };
  
  $(".getAnotherQuote").click(getAnotherQuote);
  getAnotherQuote();
</script>