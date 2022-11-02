describe('souljaDancer', function() {

  var souljaDancer;

  beforeEach(function() {
    souljaDancer = new makeSouljaDancer(10, 20);
  });

  it('should have a jQuery $node object', function() {
    expect(souljaDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('Should update it\'s own position', function() {
    expect(!!souljaDancer.setPosition).to.be.true;
  });

});