// Generated by CoffeeScript 1.6.3
(function() {
  $.widget('ui.smoothsnap', {
    options: {
      snapTo: [1, 10, 50]
    },
    _create: function() {
      var snapTo, startPosition,
        _this = this;
      startPosition = 0;
      snapTo = this.options.snapTo.sort(function(a, b) {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      });
      this.element.on("slidestart", function(event, ui) {
        startPosition = ui.value;
        return _this._setStep(_this.element, snapTo[0]);
      });
      return this.element.on("slide", function(event, ui) {
        var i, to, _i, _len, _results;
        _results = [];
        for (i = _i = 0, _len = snapTo.length; _i < _len; i = ++_i) {
          to = snapTo[i];
          _results.push((function(to, i) {
            var _ref;
            if (i === 0) {
              if (_this._scrollAmount(startPosition, ui.value) <= snapTo[i + 1]) {
                return _this._setStep(_this.element, snapTo[i]);
              }
            } else if (i === snapTo.length - 1) {
              if (snapTo[i] < _this._scrollAmount(startPosition, ui.value)) {
                return _this._setStep(_this.element, snapTo[i]);
              }
            } else {
              if ((snapTo[i] < (_ref = _this._scrollAmount(startPosition, ui.value)) && _ref <= snapTo[i + 1])) {
                return _this._setStep(_this.element, snapTo[i]);
              }
            }
          })(to, i));
        }
        return _results;
      });
    },
    _scrollAmount: function(start, current) {
      return Math.abs(current - start);
    },
    _setStep: function(element, val) {
      return element.slider("option", "step", val);
    }
  });

}).call(this);
