class NewzrTweet extends HTMLElement {
    constructor (){
        super();
        this.root=this.attachShadow({mode: 'open'});
    }

}

customElements.define('newzr-tweet',NewzrTweet)