var makeSouljaDancer = function(top, left) {
  makePopDancer.call(this, top, left);
  this.crankThat();
  this.setPosition(top, left);
};

makeSouljaDancer.prototype = Object.create(makePopDancer.prototype);

makeSouljaDancer.prototype.constructor = makeSouljaDancer;

makeSouljaDancer.prototype.crankThat = function() {
  this.$node = $('<span class="souljaDancer"><img class="soulja" src="img/penguin_dancing.webp"></img></span>');
};