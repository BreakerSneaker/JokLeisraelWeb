(function() {
    var target = $("#target");
    $("#source").scroll(function() {
      target.prop("scrollTop", this.scrollTop)
            .prop("scrollLeft", this.scrollLeft);
    });
  })();