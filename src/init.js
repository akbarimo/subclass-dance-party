$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function() {

    var dancerMakerFunction = window[$(this).data('dancer-maker-function-name')];

    var dancer = new dancerMakerFunction(
      ($('body').height() / 2) + 350 * Math.random(),
      ($('body').width() / 4.5) + 800 * Math.random(),
      (Math.random() * 1000) + 250
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.addPopDancer').on('click', function() {

    var popMakerFunction = window[$(this).data('pop-dancer')];

    var popDancer = new popMakerFunction(
      ($('body').height() / 2) + 350 * Math.random(),
      ($('body').width() / 4.5) + 800 * Math.random()
    );

    $('body').append(popDancer.$node);
    window.dancers.push(popDancer);
  });


  $('.addSouljaDancer').on('click', function() {

    var souljaMakerFunction = window[$(this).data('soulja-dancer')];

    var souljaDancer = new souljaMakerFunction(
      ($('body').height() / 2) + 250 * Math.random(),
      ($('body').width() / 4.5) + 500 * Math.random()
    );

    $('body').append(souljaDancer.$node);
    window.dancers.push(souljaDancer);
  });

  $('.addDJ').on('click', function() {

    var DJMakerFunction = window[$(this).data('dj')];
    var dj = new DJMakerFunction(
      ($('body').height() / 2) + 250 * Math.random(),
      ($('body').width() / 4.5) + 500 * Math.random()
    );

    $('body').append(dj.$node);
    window.dancers.push(dj);
  });

});