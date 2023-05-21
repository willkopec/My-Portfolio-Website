const api_url = 'https://api.polygon.io/v2/reference/news?apiKey=p7c8V21Cyw6jFzkxVm6DjVuaromXeTpo'

async function getInfo() {
	const response = await fetch(api_url);
      
        // Parsing it to JSON format
        const data = await response.json();
        console.log(data.results);

        const thisStockData = data;

        var marketnews = document.getElementById("marketnewslist");

        data.results.forEach(element => {

            let title = element.title;
            let ticker = element.tickers;
            let description = element.description;
            let publishername = element.publisher.name;
            let articlelink = element.article_url;

            let li = document.createElement("li");
            li.innerHTML += '<span id="articleTickers">' + 'Tickers: ' + ticker + '</span><br>';
            li.innerHTML += '<span id="articleTitle">' + title + '</span><br>';
            li.innerHTML += '<span id="articleDescription">' + description + '</span><br>';
            li.innerHTML += '<span id="articlePublisher">' + 'Source: ' + publishername + '</span><br>';

            let thislink = document.createElement("a");
            thislink.href = articlelink;
            thislink.target = '_blank';
            thislink.innerHTML = "Read More";
            
            marketnews.append(li);
            li.append(thislink);
            
        });

        

        /*const thisLink = document.getElementById("linktoarticle");
        thisLink.innerHTML = "Read more";
        thisLink.setAttribute("href", articlelink);*/


}

getInfo();