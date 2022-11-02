var makeDancer = function(top, left, timeBetweenSteps) {
  this.puffles = ['img/blue_puffle.png', 'img/red_puffle.png', 'img/purple_puffle.png', 'img/green_puffle.png', 'img/pink_puffle.png'];
  this.randomIndex = Math.floor(Math.random() * ((this.puffles.length - 1) + 1));
  this.$node = $('<img class="blue_puffle" src=""></img>');
  this.stepTime = timeBetweenSteps;
  this.setPosition(top, left);
  this.step();
  this.$node.attr('src', this.puffles[this.randomIndex]);
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