'use strict';

// for named label parameters, following google maps api
// design patters (I think)
//class ArticleTeaserInfo {
//  title, teaserText, imgUrl, imgAlt, articleLink
//}

/** Represents a Teaser for an Article (info used for the card) */
class ArticleTeaser {

  constructor(articleTeaserInfo) {

    this.title = articleTeaserInfo.title;
    this.teaserText = articleTeaserInfo.teaserText;
    this.imgUrl = articleTeaserInfo.imgUrl;
    this.imgAlt = articleTeaserInfo.imgAlt;
    this.articleLink = articleTeaserInfo.articleLink;
  }

  /** Returns and html element representing a card */
  makeCard() {

    // create all the elements with jQuery
    var col = $("<div></div>");
    col.addClass("col-md-4");

    var card = $("<div></div>");
    card.addClass("article-card");

    var link = $("<a></a>");
    link.attr("href", this.articleLink);

    var img = $("<img></img>");
    img.addClass("img-responsive");
    img.attr("src", this.imgUrl);
    img.attr("alt", this.imgAlt);

    var content = $("<div></div>");
    content.addClass("card-content");

    var header = $("<h1></h1>");
    header.text(this.title);

    var teaser = $("<p></p>");
    teaser.addClass("teaser-text");
    teaser.text(this.teaserText);

    // connect everything
    col.append(card);
    card.append(link);
    link.append(img);
    link.append(content);
    content.append(header);
    content.append(teaser);
    return col;
  }

}

// TODO: Somehow not displaying the actual decks... debug more

function placeDecks(teasers) {
  // place for the decks
  let deckSpot = $(".article-decks"); // spot on the html to insert the decks
  var currentDeck = []; // holds the current deck of cards (two for now)

  for(let i = 0; i < teasers.length; i++) {
    currentDeck.push(teasers[i]);
    if (i % 2 != 0 || i +1 == teasers.length) {
      // create a new deck element
      let deckElement = $("<div></div>");
      deckElement.addClass("row");
      deckElement.addClass("deck-row");
      
      deckElement.append(currentDeck.map(c => { return c.makeCard(); })) // connect the deck with the row
      deckSpot.append(deckElement); // connect the deck with the spot
      currentDeck = []; // evacuate currentDeck
    }
  }

}

// Called when the document is loaded, courtesy of jQuery
$(() => {

  // In the future this would contain a web call to retreive a bunch of teasers,
  // then load those teasers onto the page dynamically using these objects

  let macbookTeaser = new ArticleTeaser({
    title: "How Macbooks Came to Be",
    teaserText: "Allow me to start at the beginnig, when Steve Jobs was just a wee infant...",
    imgUrl: "./img/macbook.jpg",
    imgAlt: "macbook",
    articleLink: "#"
   });

  let urbanizationTeaser = new ArticleTeaser({
    title: "How Urbanization Is Changing the Way We Look at Cities",
    teaserText: "Traditional cities are looking more and more like fact..",
    imgUrl: "./img/urbanization.jpg",
    imgAlt: "urbanization",
    articleLink: "#"
  });

  let watchMania = new ArticleTeaser({
    title: "Watch Mania: Wrist Real Estate?",
    teaserText: "They say time waits for no man. That may be true, but men often wait for Apple's new...",
    imgUrl: "./img/watch.jpg",
    imgAlt: "watch mania",
    articleLink: "#"
  })

  let teasers = [macbookTeaser, urbanizationTeaser, watchMania];
  placeDecks(teasers);
});
