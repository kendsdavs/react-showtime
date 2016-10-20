const h = require('react-hyperscript')
const {
  Link
} = require('react-router')

module.exports = props =>
  h(Link, {
    className: 'f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3',
    to: props.to
  }, props.content)
