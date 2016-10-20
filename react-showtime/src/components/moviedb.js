const h = require('react-hyperscript')
const {
  Link
} = require('react-router')

const Moviedb = props => h('div', [
  h('h1', 'Movies'),
  h(Link, {
    to: '/',
    className: 'link'
  }, 'Home')
])

module.exports = Moviedb
