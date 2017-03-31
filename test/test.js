var assert = require('assert');
describe('Array', function() {
	describe('#indexOf()', function() {
		it('should return -1 when the value is not present', function() {
		  assert.equal(-1, [1,2,3].indexOf(4));
		});
	});
});

describe('Check Global APP_HOST_TYPE from Jenkinsfile', function() {
	it('process.env.APP_HOST_TYPE should exists', function() {
	  	assert.equal(process.env.APP_HOST_TYPE, 'local');
	});
});

describe('Test Mocha Testing ENV from Jenkinsfile', function() {
	it('process.env.APP_HOST_TESTING should exists', function() {
	  	assert.equal(process.env.APP_HOST_TESTING, 'MOCHA_TEST');
	});
});