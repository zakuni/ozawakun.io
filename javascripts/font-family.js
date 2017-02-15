(function() {
  var Letter, Period, ScrambleMixin, ScrambleTitle, Space, fonts, getRandomFont, getRandomInt;

  fonts = ["Dotum", "arial black", "Century Gothic", "Gulim", "Impact", "Tahoma", "fantasy", "cursive", "Comic Sans MS"];

  getRandomFont = function() {
    return fonts[Math.floor(Math.random() * fonts.length)];
  };

  getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  ScrambleMixin = {
    getInitialState: function() {
      return {
        fontFamily: ""
      };
    },
    toDefaultFont: function() {
      return this.setState({
        style: {}
      });
    },
    toRandomFont: function() {
      var randomStyle;
      randomStyle = {
        fontFamily: getRandomFont(),
        display: 'inline-block',
        transform: 'rotateY(180deg)',
        WebkitTransform: 'rotateY(180deg)',
        msTransform: 'rotateY(180deg)',
        MozTransform: 'rotateY(180deg)',
        OTransform: 'rotateY(180deg)'
      };
      return this.setState({
        style: randomStyle
      });
    },
    scramble: function() {
      var finalTimeOut, firstTimeOut, secondTimeOut;
      firstTimeOut = getRandomInt(0, 300);
      secondTimeOut = getRandomInt(firstTimeOut, firstTimeOut + 300);
      finalTimeOut = getRandomInt(secondTimeOut, secondTimeOut + 15000);
      this.toRandomFont();
      setTimeout(this.toRandomFont, firstTimeOut);
      setTimeout(this.toDefaultFont, secondTimeOut);
      return setTimeout(this.scramble, finalTimeOut);
    },
    componentDidMount: function() {
      return this.scramble();
    }
  };

  Letter = React.createClass({displayName: "Letter",
    mixins: [ScrambleMixin],
    render: function() {
      return React.createElement("span", {style: this.state.style}, 
      this.props.character
    );
    }
  });

  Space = React.createClass({displayName: "Space",
    mixins: [ScrambleMixin],
    render: function() {
      return React.createElement("span", {className: "space", style: this.state.style}, " ");
    }
  });

  Period = React.createClass({displayName: "Period",
    mixins: [ScrambleMixin],
    render: function() {
      return React.createElement("span", {className: "period", style: this.state.style}, ".");
    }
  });

  ScrambleTitle = React.createClass({displayName: "ScrambleTitle",
    render: function() {
      return React.createElement("h1", {className: "scrambleTitle uk-container-center uk-heading-large"}, 
      React.createElement(Letter, {character: "o"}), 
      React.createElement(Letter, {character: "z"}), 
      React.createElement(Letter, {character: "a"}), 
      React.createElement(Letter, {character: "w"}), 
      React.createElement(Letter, {character: "a"}), 
      React.createElement(Space, null), 
      React.createElement(Letter, {character: "k"}), 
      React.createElement(Letter, {character: "u"}), 
      React.createElement(Letter, {character: "n"}), 
      React.createElement(Period, null), 
      React.createElement(Letter, {character: "i"}), 
      React.createElement(Letter, {character: "o"})
    );
    }
  });

  $(function() {
    return React.render(React.createElement(ScrambleTitle, null), document.getElementById('title'));
  });

}).call(this);
