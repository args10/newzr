class NewzrArticle extends HTMLElement {
    constructor (){
        //super (must be called)
        super();
        /**
         * shadow DOM enables to create an encapsulated sub-DOM tree 
         * for the web component. The required property mode can have 
         * either 'open' or 'close' as values. The difference as of now 
         * is not huge. But the open mode let's the shadowroot property
         * to be accesible from the DOM
         */
        this.root=this.attachShadow({mode: 'open'});
    }

    set article(article){
        /**
         * Some 'inline' css here. I was in two minds whether to put 
         * the css here. From a 'component' point of view probably it
         * makes sense to have the styling here. However, this code is 
         * difficult to maintain. One intersting point is custom elecment
         * e.g. newzr-article can be styled using external css. But only
         * the top level can be styled not the elements contained inside
         * e.g. a, img, h2, p in this case. Styling with an external css 
         * still feels like an anti-pattern. As of now could not find 
         * a best solution on where to puot the style hence settled for 
         * a next to best solution.
         */
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
                h3{
                    color:black;
                    font-size: 1em;
                    font-family: Georgia, 'Times New Roman', Times, serif;
                    margin: 3px 0px 0px 0px;
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
                <h3>${article.source.name}</h3>
                <h2>${article.title}</h2>
                <p>${article.description}</p>
            </a>
        `;
    }

}
// Register our custom element on the CustomElementRegistry
customElements.define('newzr-article',NewzrArticle)