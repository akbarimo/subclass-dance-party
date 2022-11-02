var makeDJ = function(top, left) {
  makePopDancer.call(this, top, left);
  this.ereere();
  this.setPosition(top, left);
};

makeDJ.prototype = Object.create(makePopDancer.prototype);

makeDJ.prototype.constructor = makeDJ;

makeDJ.prototype.ereere = function() {
  this.$node = $('<span class="dj"><img class="dj" src="img/dj2.png"></img></span>');
};