describe('Smaller', function() {

  it('should return an array', function() {
    expect( smaller() ).toEqual( jasmine.any(Array) );
  });

  it('should input [5, 4, 3, 2, 1] and output [4, 3, 2, 1, 0]', function() {
    expect( smaller( [5, 4, 3, 2, 1] ).toString() ).toBe( [4, 3, 2, 1, 0].toString() );
  });

  it('should input [1, 2, 3] and output [0, 0, 0]', function() {
    expect( smaller( [1, 2, 3] ).toString() ).toBe( [0, 0, 0].toString() );
  });

  it('should input [1, 2, 0] and output [1, 1, 0]', function() {
    expect( smaller( [1, 2, 0] ).toString() ).toBe( [1, 1, 0].toString() );
  });

  it('should input [1, 2, 1] and output [0, 1, 0]', function() {
    expect( smaller( [1, 2, 1] ).toString() ).toBe( [0, 1, 0].toString() );
  });

  it('should input [1, 1, -1, 0, 0] and output [3, 3, 0, 0, 0]', function() {
    expect( smaller( [1, 1, -1, 0, 0] ).toString() ).toBe( [3, 3, 0, 0, 0].toString() );
  });

  it('should input [5, 4, 7, 9, 2, 4, 4, 5, 6] and output [4, 1, 5, 5, 0, 0, 0, 0, 0]', function() {
    expect( smaller( [5, 4 ,7, 9, 2, 4, 4, 5, 6] ).toString() ).toBe( [4, 1, 5, 5, 0, 0, 0, 0, 0].toString() );
  });

});