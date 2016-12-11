'use strict';

class ArticleTeaser {

  constructor(title, teaserText, imgUrl, imgAlt, articleLink) {
    this.title = title;
    this.teaserText = teaserText;
    this.imgUrl = imgUrl;
    this.imgAlt = imgAlt;
    this.articleLink = articleLink;
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

// Called when the document is loaded, courtesy of jQuery
$(document).ready(() => {

  // TODO make nice settings object for ArticleTeaser (named parameters)
  let teaser = new ArticleTeaser(
    "How Macbooks Came to Be",
    "Allow me to start at the beginnig, when Steve Jobs was just a wee infant...",
    "./img/macbook.jpg",
    "macbook",
    "#"
   );
   alert(teaser);
  $(".deck-row").append(teaser.makeCard());
});
