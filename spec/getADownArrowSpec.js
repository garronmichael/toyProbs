describe('Get A Down Arrow', function() {

  it('should return something', function() {
    expect( getADownArrow() ).toEqual( jasmine.anything() );
  });

  it('should return a string', function() {
    expect( getADownArrow() ).toEqual( jasmine.any(String) );
  });

  xit('should input 1 and return "1"', function() {
    expect( getADownArrow(1) ).toBe("1");
  });

  xit('should input 3 and return "12321\n 121\n  1"', function() {
    expect( getADownArrow(3) ).toBe("12321\n 121\n  1");
  });

  xit('should input 5 and return "123454321\n 1234321\n  12321\n   121\n    1")', function() {
    expect( getADownArrow(1) ).toBe("123454321\n 1234321\n  12321\n   121\n    1");
  });

});