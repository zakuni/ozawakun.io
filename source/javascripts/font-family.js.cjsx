React = require('react')
ScrambleMixin = require('./components/ScrambleMixin.cjsx')

Letter = React.createClass
  mixins: [ScrambleMixin]
  render: ->
    `<span style={this.state.style}>
      {this.props.character}
    </span>`

Space = React.createClass
  mixins: [ScrambleMixin]
  render: ->
    `<span className="space" style={this.state.style}>&nbsp;</span>`

Period = React.createClass
  mixins: [ScrambleMixin]
  render: ->
    `<span className="period" style={this.state.style}>.</span>`

ScrambleTitle = React.createClass
  render: ->
    `<h1 className="scrambleTitle uk-container-center uk-heading-large">
      <Letter character="o" />
      <Letter character="z" />
      <Letter character="a" />
      <Letter character="w" />
      <Letter character="a" />
      <Space />
      <Letter character="k" />
      <Letter character="u" />
      <Letter character="n" />
      <Period />
      <Letter character="i" />
      <Letter character="o" />
    </h1>`

module.exports = ScrambleTitle
