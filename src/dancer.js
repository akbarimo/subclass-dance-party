// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.stepTime = timeBetweenSteps;
  this.setPosition(top, left);
  this.step();

};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.stepTime);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};