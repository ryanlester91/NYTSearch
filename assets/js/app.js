var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=RusyGQkfIwEwq1UCLAtFaybmNbJIs5KH";
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);
    console.log(response.response.docs[0].abstract);
    console.log(response.response.docs[0].keywords[0].value);
    console.log(response.response.meta.time);
});



