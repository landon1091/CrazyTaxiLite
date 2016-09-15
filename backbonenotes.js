let NewsModel = Backbone.Model.extend({
    defaults: {
        headline: 'headline',
        author: 'author',
        published: new Date().toISOString(),
    },
});
let Newslog = Backbone.Collection.extend({
    model: NewsModel,
})

let NewsView = Backbone.View.extend({
    initialize: function (){
        this.model.on('add', this.render, this);
    },
    events: {
        'click #update-news': 'display',
    },
    display: function(){
        let morenews = new NewsModel();
        morenews.set('headline', document.querySelector('#headline-box').value)
        morenews.set('author', document.querySelector('#author-box').value);
        morenews.set('published', new Date().toISOString());
        this.model.push(morenews);
    },
    render: function (){
        let parent = this.el.querySelector('#add-news');
        parent.innerHTML = '';
        for (let i = 0; i < this.model.length; i++){
            let headline = this.model.at(i).get('headline');
            let author = this.model.at(i).get('author');
            let published = this.model.at(i).get('published');

            let container = document.createElement('li');
            container.innerHTML = '<p>' + headline + '</p><p>' + author + '</p><p>' + published + '</p>';
            parent.appendChild(container);
        }

        
    
    }
});



window.addEventListener('load', function () {
    let actualModel = new Newslog();
    let view = new NewsView({
        el: document.querySelector('body'),
        model: actualModel,
    });
});