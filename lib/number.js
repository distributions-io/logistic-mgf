'use strict';

// MODULES //

var beta = require( 'compute-beta/lib/number-number.js' );


// FUNCTIONS //

var exp = Math.exp;


// MGF //

/**
* FUNCTION: mgf( x, mu, s )
*	Evaluates the moment-generating function (MGF) for a logistic distribution with location parameter `mu` and scale parameter `s` at a value `t`.
*
* @param {Number} t - input value
* @param {Number} mu - location parameter
* @param {Number} s - scale parameter
* @returns {Number} evaluated MGF
*/
function mgf( t, mu, s ) {
	return exp( mu * t ) * beta( 1 - s*t, 1 + s*t );
} // end FUNCTION mgf()


// EXPORTS //

module.exports = mgf;
