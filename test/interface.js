(function() {
  var janus, qry1;

  janus = new Janus;

  qry1 = janus.attach('screen and (min-width:500px) and (max-width:900px)', function() {
    return console.log('SETUP', this.condition);
  }, function() {
    return console.log('ON', this.condition);
  }, function() {
    return console.log('OFF', this.condition);
  });

  janus.start();

}).call(this);
