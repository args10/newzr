/**
 * TODO: Get the twitter api key and implement either 
 * TODO: custom tweet element/default tweet from twitter
 */ 
class NewzrTweet extends HTMLElement {
    constructor (){
        super();
        this.root=this.attachShadow({mode: 'open'});
    }

}

customElements.define('newzr-tweet',NewzrTweet)