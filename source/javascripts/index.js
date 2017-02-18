import React from 'react';
const ScrambleTitle = require('./font-family.js.cjsx');

$(() => {
  React.render(
    React.createElement(ScrambleTitle),
    document.getElementById('title')
  );
});
