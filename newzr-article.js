class NewzrArticle extends HTMLElement {
    constructor (){
        super();
        this.root=this.attachShadow({mode: 'open'});
    }

    //TODO: css
    set article(article){
        this.root.innerHTML = `
            <style>
                a{
                    display: block;
                    flex-direction: column;
                    text-decoration: none;
                    color: inherit;
                    padding-bottom: 30px;
                    padding:margin: 20px;
                }
                img{
                    width: 100%;
                    display: block;
                }
                h2{
                    font-family: Georgia, 'Times New Roman', Times, serif;
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