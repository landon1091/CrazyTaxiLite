(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
        customer: {
            x: 0,
            y: 0,
        },
        taxilocation: {
            x: 0,
            y: 0,
        },
        username: '',
        fuel: 10,
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
        'click #set': 'start',
        'click #Up': 'Up',
        'click #Down': 'Down',
        'click #Left': 'Left',
        'click #Right': 'Right',
        'click #getcustomer': 'newCustomer',
    },

    newCustomer: function () {
        let customer = this.model.get('customer');
        let randomx = Math.floor((Math.random() * 8) + 1);
        let randomy = Math.floor((Math.random() * 8) + 1);
        this.model.set('customer', {
            x: randomx,
            y: randomy,
        })
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
        let gas = this.model.get('fuel');
        gas = gas - 1;
        if (gas === 0) {
            console.log("You Lose");
        }
        this.model.set('fuel', gas);

        let customercheck = this.model.get('customer');
        let check = this.model.get('taxilocation');

        if (check.y === customercheck.y && check.x === customercheck.x) {
            let gas = this.model.get('fuel');
            let newcusto = this.model.get('customer');
            newcusto.x = Math.floor((Math.random() * 8) + 1),
            newcusto.y = Math.floor((Math.random() * 8) + 1),
            gas = gas + 8;
            console.log('You are awarded 8 fuel for picking up a customer')
            this.model.set('customer', newcusto),
            this.model.set('fuel', gas);
        }
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
        let gas = this.model.get('fuel');
        gas = gas - 1;
        if (gas === 0) {
            console.log("You Lose");
        }
        this.model.set('fuel', gas);
        let customercheck = this.model.get('customer');
        let check = this.model.get('taxilocation');
        if (check.y === customercheck.y && check.x === customercheck.x) {
            let gas = this.model.get('fuel');
            let newcusto = this.model.get('customer');
            newcusto.x = Math.floor((Math.random() * 8) + 1),
            newcusto.y = Math.floor((Math.random() * 8) + 1),
            gas = gas + 8;
            console.log('You are awarded 8 fuel for picking up a customer')
            this.model.set('customer', newcusto),
            this.model.set('fuel', gas);
        }



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
        let gas = this.model.get('fuel');
        gas = gas - 1;
        if (gas === 0) {
            console.log("You Lose");
        }
        this.model.set('fuel', gas);
        let customercheck = this.model.get('customer');
        let check = this.model.get('taxilocation');
        if (check.y === customercheck.y && check.x === customercheck.x) {
            let gas = this.model.get('fuel');
            let newcusto = this.model.get('customer');
            newcusto.x = Math.floor((Math.random() * 8) + 1),
            newcusto.y = Math.floor((Math.random() * 8) + 1),
            gas = gas + 8;
            console.log('You are awarded 8 fuel for picking up a customer')
            this.model.set('customer', newcusto),
            this.model.set('fuel', gas);
        }



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
        let gas = this.model.get('fuel');
        gas = gas - 1;
        if (gas === 0) {
            console.log("You Lose");
        }
        this.model.set('fuel', gas);
        let customercheck = this.model.get('customer');
        let check = this.model.get('taxilocation');
        if (check.y === customercheck.y && check.x === customercheck.x) {
            let gas = this.model.get('fuel');
            let newcusto = this.model.get('customer');
            newcusto.x = Math.floor((Math.random() * 8) + 1),
            newcusto.y = Math.floor((Math.random() * 8) + 1),
            gas = gas + 8;
            console.log('You are awarded 8 fuel for picking up a customer')
            this.model.set('customer', newcusto),
            this.model.set('fuel', gas);

        }



    },



    start: function () {

        this.model.set('username', document.querySelector('#username').value);

    },

    render: function () {


        let container = document.querySelector('#displays');

        let displayfuel = document.querySelector('#fuel');
        displayfuel.textContent = "fuel: " + this.model.get('fuel');

        let displaycustomer = document.querySelector('#kcustomer');
        displaycustomer.textContent = "Customer Location: " + this.model.get('customer').x + ', ' + this.model.get('customer').y;

        let displayname = document.querySelector('#display-username');
        displayname.textContent = "Username: " + this.model.get('username');

        let displayY = document.querySelector('#y-pos');
        displayY.textContent = 'y:' + this.model.get('taxilocation').y;

        let displayX = document.querySelector('#x-pos');
        displayX.textContent = 'x:' + this.model.get('taxilocation').x;

        container.appendChild(displaycustomer);
        container.appendChild(displayfuel);
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
},{}]},{},[1])