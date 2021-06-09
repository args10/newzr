/**
 * Trying out VS code extension "Better Comments".
 * This is a simple web app that uses newspi to 
 * show latest news articles. I initially wanted
 * to also use twitter API to show tweets along with news
 * Since many people get there news diectly from 
 * twitter I thought it would be nice to show some tweets along with the news articles;
 * ! But looks like the approval for access to twitter api might takes 2-3 days to come.
 * ? At Twitter each application is reviewed by a human being before granting acceess
 * Hence creating this application only with news articles from newspi. 
 */

import './newzr-article.js'
import {apiKey, topHeadLinesUrl} from './newsApi.js'
// wait for the dom to load before alling fetchNews
window.addEventListener('load',()=>{
    fetchNews();
})

//TODO: Exception handling
async function fetchNews(){
    const res = await fetch(topHeadLinesUrl);
    const json = await res.json();
    const main = document.querySelector('main');
    var fragment = new DocumentFragment()

    //log all articles returned from newspi
    console.table(json.articles, ["title","description","content"]);

    json.articles.forEach(article => {
        //show pnly the articles having both images and a description
        if(article.urlToImage && article.description){
            const el = document.createElement('newzr-article');
            el.article = article;
            fragment.appendChild(el);
        }
        main.appendChild(fragment);
    });
}