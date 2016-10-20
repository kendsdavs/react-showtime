const h = require('react-hyperscript')
const React = require('react')
const xhr = require('xhr')
const {Link} = require('react-router')

const Moviedb = React.createClass({

    getInitialState: function() {
        return {s: '', r: 'json', movies: []}
    },

    handleSubmit: function(e) {
        e.preventDefault()
        xhr({
            method: 'GET',
            json: true,
            url: `https://www.omdbapi.com/?r=json&s=${this.state.s}`
        }, (err, res, body) => {
            if (err) {
                return console.log(err.message)
            }
            this.setState({movies: body.Search})
        })
    },

    handleChange: function(e) {
        this.setState({s: e.target.value})
    },

    render: function() {
        console.log(this.state)

        // function showResults (movie) {
        //     return movie.map(m => h('div', [
        //         h('h2', m.Title),
        //         h('p', m.Year)
        //     ]))
        // }

        return (h('div.pa4', [
            h('h1', 'Movies'),
            h('form', {
                onSubmit: this.handleSubmit
            }, [h('input.db', {onChange: this.handleChange})]),
            h(Link, {
                to: '/',
                className: 'link'
            }, 'Home'),
            h('article.db', this.state.movies.map(function(m) {
                if (m.Poster === 'N/A') {
                    m.Poster = '/notfound.jpg'
                }
                return h('div.db', [
                    h('img', {src: m.Poster}),
                    h('h2', m.Title),
                    h('p', m.Year)
                ])
            }))
            //showPoster(this.state.movies)
        ]))
    }
})

module.exports = Moviedb
