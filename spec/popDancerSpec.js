describe('popDancer', function() {

  var popDancer;

  beforeEach(function() {
    popDancer = new makePopDancer(10, 20);
  });

  it('should have a jQuery $node object', function() {
    expect(popDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('Should update it\'s own position', function() {
    expect(!!popDancer.setPosition).to.be.true;
  });

});