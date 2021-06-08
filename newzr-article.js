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
                }
                img{
                    width: 100%;
                    height: 250px;
                    display: block;
                    overflow: hidden;
                }
                h2{
                    color:black;
                    font-size: 1.5em;
                    font-family: Georgia, 'Times New Roman', Times, serif;
                }
                p{
                    color: grey;
                    font-size: 1.4em;
                    font-family: Roboto;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: wrap;
                }
            </style>
            <a href="${article.url}">
                <img src ="${article.urlToImage}">
                <h2>${article.title}</h2>
                <p>${article.description}</p>
            </a>
        `;
    }

}

customElements.define('newzr-article',NewzrArticle)