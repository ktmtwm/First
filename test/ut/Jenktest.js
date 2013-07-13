var expect = require('chai').expect;
var jenk = require("../../src/Jenk.js").jenk;

describe("test", function(){
	it("add", function(){
		var c = jenk.add(1, 2);
		expect(c).to.equal(3);
	});

	it("sub", function(){
		var c = jenk.add(1, 2);
		expect(c).to.equal(3);
	});

	
});