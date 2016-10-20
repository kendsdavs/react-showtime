const h = require('react-hyperscript')
const React = require('react')
const MenuLink = require('./shared/MenuLink')

const Links = [
  ['/learn', 'Getting Started'],
  ['/cats', 'Cats Search'],
  ['/moviedb', 'Movie Search'],
  ['/youtube', 'Youtube Search'],
  ['/spotify', 'Spotify Search']
]

const Landing = React.createClass({
  getInitialState() {
    return {
      foo: 'bar'
    }
  },
  render() {
    return (
      h("header.sans-serif", [
        h("div.cover.bg-left.bg-center-l", {
          "style": {
            "backgroundImage": "url(http://placekitten.com/3000/3000)"
          }
        }, [
          h("div.bg-black-80.pb5.pb6-m.pb7-l", [
            h("nav.dt.w-100.mw8.center", [
              h("div.dtc.v-mid.tr.pa3", Links.map(([to, content]) => h(MenuLink, {
                to,
                content
              })))
            ]),
            h("div.tc-l.mt4.mt5-m.mt6-l.ph3", [
              h("h1.f2.f1-l.fw2.white-90.mb0.lh-title", `React Showtime`),
              h("h2.fw1.f3.white-80.mt3.mb4", `Practice React Basics with Entertainment API Fun`),
              h("a.f6.no-underline.grow.dib.v-mid.bg-blue.white.ba.b--blue.ph3.pv2.mb3", {
                "href": "#/learn",
              }, `Getting Started`),
              h("span.dib.v-mid.ph3.white-70.mb3", `or`),
              h("a.f6.no-underline.grow.dib.v-mid.white.ba.b--white.ph3.pv2.mb3", {
                "href": "",
                "className": "f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3"
              }, `View Source`)
            ])
          ])
        ])
      ])

    )
  }
})

module.exports = Landing
