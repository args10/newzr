/**
 * Trying out "Better Comments"
 * Here I initially wanted to also use twitter API to get tweets. 
 * Since many people get there news diectly from twitter I thought it would be nice to show some tweets along with the news articles;
 * ! But looks like the approval for access to twitter api might takes 2-3 days to come.
 * At Twitter each application is reviewed by a human being before granting acceess
 * ? Hence creating this application only with news articles newspi - access to there api is fast and easy! 
 */

import './newzr-article.js'
import {apiKey, topHeadLinesUrl} from './newsApi.js'
window.addEventListener('load',()=>{
    fetchNews();
})

//TODO: Exception handling
async function fetchNews(){
    const res = await fetch(topHeadLinesUrl);
    const json =await res.json();

    console.table(json.articles, ["title","description","content"]);

    const main = document.querySelector('main');
    json.articles.forEach(article => {
        const el = document.createElement('newzr-article');
        if(article.urlToImage){
            el.article = article;
        }
        main.appendChild(el);
    });
}