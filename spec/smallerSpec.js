describe('Smaller', function() {

  it('should return an array', function() {
    expect( smaller() ).toEqual( jasmine.any(Array) );
  });

  it('should input [5, 4, 3, 2, 1] and output [4, 3, 2, 1, 0]', function() {
    expect( smaller( [5, 4, 3, 2, 1] ).toString() ).toBe( [4, 3, 2, 1, 0].toString() );
  });

});