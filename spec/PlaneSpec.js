'use strict';

describe('Plane', function()){
  var plane;
  var airport;
  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLanding']);
  });
  it('can land at an airport'. function(){
    plane.land(aiport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);jk
  });
});
