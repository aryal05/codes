const API_KEY= "7e92d93a22bc465ab473dbe4d7f541b2";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener('load', ()=>fetchNews("India"));
async function fetchNews(query){
    const res=await fetch(`${url}${query}&apiKey=${API_KEY}`)
    const data = await res.json();
    bindData(data.articles);
}
function bindData (articles){
    const cardsContainer = document.getElementById('cards-container')
    const newstemplate = document.getElementById('news-template')
    cardsContainer.innerHTML='';


    articles.forEach(article => {
        if (!article.urlToImage) return;  // Skips the current iteration if the article has no image
        const cardClone = newstemplate.content.cloneNode(true);  // Clones a template for displaying an article
        filldataInCard(cardClone, article);  // Fills the cloned template with article data
        cardsContainer.appendChild(cardClone);  // Appends the cloned template to a container on the page
    });
    



    
}
function filldataInCard(cardClone,article){
    const newsImg=cardClone.querySelector('#news-img');
    const newsTitle=cardClone.querySelector('#news-title');
    const newsSource=cardClone.querySelector('#news-source');
    const newsDescription=cardClone.querySelector('#news-description');

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDescription.innerHTML = article.description


    const date = new Date(article.publishedAt).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    });
    newsSource.innerHTML = `${article.source.name}.${date}`;

    cardClone.firstElementChild.addEventListener('click', () => {
        window.open(article.url, "_blank");
    });
    
}