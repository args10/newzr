class NewzrArticle extends HTMLElement {
    constructor (){
        super();
        this.root=this.attachShadow({mode: 'open'});
    }

    //TODO: css
    set article(article){
        this.root.innerHTML = `
            <style>
                img {
                    width: 50%;
                }
            </style>
            <a href="${article.url}">
                <h2>${article.title}</h2>
                <img src ="${article.urlToImage}">
                <p>${article.description}</p>
            </a>
        `;
    }

}

customElements.define('newzr-article',NewzrArticle)