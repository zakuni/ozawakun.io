// Generated by CoffeeScript 1.6.3
(function() {
  $(function() {
    $("#hslider").slider({
      value: 200,
      min: 0,
      max: 500,
      step: 1,
      slide: function(event, ui) {
        return $("#hamount").val(ui.value);
      }
    }).smoothsnap();
    $("#hamount").val($("#hslider").slider("value"));
    $("#vslider").slider({
      value: 200,
      min: 0,
      max: 500,
      step: 1,
      orientation: "vertical",
      slide: function(event, ui) {
        return $("#vamount").val(ui.value);
      }
    }).smoothsnap();
    return $("#vamount").val($("#vslider").slider("value"));
  });

}).call(this);
