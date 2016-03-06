var expect = require('chai').expect
  , th = require('./')

describe('th', function() {

  it('should call fn with this as argument', function() {
    var result
      , o = {}

    th(fn).call({})
    expect(result).to.eql(o)

    function fn(ctx){
      return function(){
        result = ctx
      }
    }
  })

})