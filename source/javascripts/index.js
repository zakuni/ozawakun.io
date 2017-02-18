import React from 'react';
import ReactDOM from 'react-dom';
const ScrambleTitle = require('./font-family.js.cjsx');

$(() => {
  ReactDOM.render(
    React.createElement(ScrambleTitle),
    document.getElementById('title')
  );
});
