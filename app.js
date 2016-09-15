/**
 * Backbone is made up of:
 *  - Backbone.Model: where we store information
 *  - Backbone.Collection: an array of models
 *  - Backbone.View: controls how the user interacts with data
 *  - Backbone.Router: control which views are visible
 */

/**
 * One model keeping track of all of our game data.
 */
let taxiModel = Backbone.Model.extend({
    defaults: {
        taxilocation: {
            x: 0,
            y: 0,
        },
        username: '',
        fuel: 0,
        score: 0,
    }
});

/**
 * Views have two jobs:
 *  1) Manage inputs via events
 *  2) Manage outputs via render()
 */
let taxiView = Backbone.View.extend({
    // Called when you say `new taxiView()`
    initialize: function () {
        // 'When the model changes, call this.render()'
        this.model.on('change', this.render, this);
        // this.model.on('add', this.render, this);
    },
    events: {
        'click #set': 'name',
        'click #Up': 'Up',
        'click #Down': 'Down',
        'click #Left': 'Left',
        'click #Right': 'Right',
        //    'click #fuel': 'fuel'
    },


    Up: function () {
        // let y = 0; 
        // 1. Get the current object.
        // 2. Increase y by 1.
        // 3. Set taxilocation to the new version.
        let position = this.model.get('taxilocation');
        let newY = position.y;

        if (newY <= 9) {
            newY = position.y + 1
        }

        this.model.set('taxilocation', {
            x: position.x,
            y: newY
        });

    },
    Down: function () {
        let position = this.model.get('taxilocation');
        let newY = position.y;

        if (newY >= -9) {
            newY = position.y + -1
        }
        this.model.set('taxilocation', {
            x: position.x,
            y: newY
        });

    },
 Left: function () {
        let position = this.model.get('taxilocation');
        let newX = position.x;

        if (newX >= -9) {
            newX = position.x + -1
        }
        this.model.set('taxilocation', {
            x: newX,
            y: position.y,
        });

    },
    Right: function () {
        let position = this.model.get('taxilocation');
        let newX = position.x;

        if (newX <= 9) {
            newX = position.x + +1
        }
        this.model.set('taxilocation', {
            x: newX,
            y: position.y,
        });

    },

    //    fuel: function(){
    //        this.model.set('fuel', 10);
    //    },

    name: function () {
        // Backbone thing
        this.model.set('username', document.querySelector('#username').value);

    },

    render: function () {
       

        let container = document.querySelector('#displays');


        let displayname = document.querySelector('#display-username');
        displayname.textContent = this.model.get('username');

        let displayY = document.querySelector('#y-pos');
        displayY.textContent = 'y:' + this.model.get('taxilocation').y;

        let displayX = document.querySelector('#x-pos');
        displayX.textContent = 'x:' + this.model.get('taxilocation').x;
        container.appendChild(displayX);
        container.appendChild(displayY);
        container.appendChild(displayname);

    }
});

/**
 * Setup for our application. Not actually doing much interesting work.
 */
window.addEventListener('load', function () {
    let taxi = new taxiModel();

    let view = new taxiView({
        el: document.querySelector('body'),
        model: taxi,
    });


})