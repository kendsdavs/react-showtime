const h = require('react-hyperscript')

const {
  Router,
  Route,
  hashHistory
} = require('react-router')
const {
  Landing,
  Learn,
  Cats,
  Moviedb,
  Spotify,
  Youtube
} = require('./components')

module.exports = _ =>
  h(Router, {
    history: hashHistory
  }, [
    h(Route, {
      path: '/',
      component: Landing
    }),
    h(Route, {
      path: '/cats',
      component: Cats
    }),
    h(Route, {
      path: '/moviedb',
      component: Moviedb
    }),
    h(Route, {
      path: '/spotify',
      component: Spotify
    }),
    h(Route, {
      path: '/youtube',
      component: Youtube
    }),
    h(Route, {
      path: '/learn',
      component: Learn
    })
  ])
