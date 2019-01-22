/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

//all quotes contain quote and source string properties.
//quotes may contain year and citation properties
//quotes may also include a tags properties. if there is a tag property, it is an array
//the tags array may contain any nonnegative integer number of tags

var quotes = [
  {
    quote: "Time is a drug. Too much of it kills you.",
    source: "Terry Pratchett",
    year: 1992,
    citation: "Small Gods",
    tags: ["science", "humor"]
  },
  {
    quote:
      "Space is big. You just won't believe how vastly, hugely, mind-bogglingly big it is. I mean, you may think it's a long way down the road to the chemist's, but that's just peanuts to space.",
    source: "Douglas Adams",
    year: 1979,
    citation: "The Hitchhiker's Guide to the Galaxy",
    tags: ["science", "humor"]
  },
  {
    quote:
      "If I have seen further it is by standing on the shoulders of Giants.",
    source: " Isaac Newton",
    tags: ["science"]
  },
  {
    quote: "Without music, life would be a mistake.",
    source: "Friedrich Nietzsche",
    year: 1889,
    citation: "Twilight of the Idols",
    tags: ["philosophy"]
  },
  {
    quote:
      "Wise men speak because they have something to say; fools because they have to say something.",
    source: "Plato",
    tags: ["philosophy"]
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    source: "Mae West"
  },
  {
    quote:
      "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
    source: "Neil Gaiman",
    year: 2002,
    citation: "Coraline",
    tags: ["paraphrasing-g-k-chesterton"]
  },
  {
    quote: "I solemnly swear that I am up to no good.",
    source: "J.K. Rowling",
    year: 1999,
    citation: "Harry Potter and the Prisoner of Azkaban",
    tags: []
  }
];

//update time is the time at which the current quote was shown
var updateTime = new Date();

//get a random hex value
function randomHex() {
  return Math.floor(Math.random() * 16).toString(16);
}

//combine two random hex values to make a random color value
function colorValue() {
  return randomHex() + randomHex();
}

//combine three random color values to make a random color
function color() {
  return colorValue() + colorValue() + colorValue();
}

//return a random quote
function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

//prints the elements of a random quote object
//also updates background color and updates the time that the quote was last changed
function printQuote() {
  //load quote object to display into q
  var q = getRandomQuote();
  //start building htmlArray with the two required bits: quote and source,
  //with a paragraph between them will be closed at the end of the string
  var htmlArray = [
    '<p class="quote">' + q.quote + "</p>",
    '<p class="source">' + q.source
  ];
  //add to htmlArray any of year, citation and any tags present
  if (q.citation) {
    htmlArray.push('<span class="citation">' + q.citation + "</span>");
  }
  if (q.year) {
    htmlArray.push('<span class="year">' + q.year + "</span>");
  }
  //now that the second line is complete, close the p tag
  htmlArray.push("</p>");

  //handling tags if present
  if (q.tags && q.tags.length) {
    //create a new paragraph for the tags
    htmlArray.push('<p class="tags">');
    //add the tags as csv
    htmlArray.push(q.tags.join(", "));
    //close the tag paragraph
    htmlArray.push("</p>");
  }
  //convert to a string
  var htmlString = htmlArray.join("");
  //console.log('htmlString')
  //console.log(htmlString)

  //display
  document.getElementById("quote-box").innerHTML = htmlString;

  //update color
  document.body.style.background = "#" + color();

  //set updateTime
  updateTime = new Date();
}

//if the quote has not been changed in the last twenty seconds, change it
var reviseQuote = setInterval(function() {
  if (new Date() - updateTime > 20000) {
    printQuote();
  }
}, 400);

//listen for the show quote button to be clicked
document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);
