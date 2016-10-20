const h = require('react-hyperscript')
const {
  Link
} = require('react-router')

const Youtube = props => h('div', [
  h('h1', ['YouTube']),
  h(Link, {
    to: '/',
    className: 'link'
  }, 'Home')
])

module.exports = Youtube
