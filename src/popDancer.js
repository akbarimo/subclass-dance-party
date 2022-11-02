var makePopDancer = function(top, left) {
  makeDancer.call(this, top, left);
  this.boogie();
  this.setPosition(top, left);
};

makePopDancer.prototype = Object.create(makeDancer.prototype);

makePopDancer.prototype.constructor = makePopDancer;

makePopDancer.prototype.boogie = function() {
  this.$node = $('<span class="popDancer"><img class="penguin" src="img/Breakdance.webp"></img></span>');
};