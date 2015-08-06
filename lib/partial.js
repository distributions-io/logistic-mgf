'use strict';

// MODULES //

var beta = require( 'compute-beta/lib/number-number.js' );


// FUNCTIONS //

var exp = Math.exp;


// PARTIAL //

/**
* FUNCTION: partial( mu, s )
*	Partially applies location parameter `mu` and scale parameter `s` and returns a function for evaluating the moment-generating function (MGF) for a logistic distribution.
*
* @param {Number} mu - location parameter
* @param {Number} s - scale parameter
* @returns {Function} MGF
*/
function partial( mu, s ) {

	/**
	* FUNCTION: mgf( t )
	*	Evaluates the moment-generating function (MGF) for a logistic distribution.
	*
	* @private
	* @param {Number} t - input value
	* @returns {Number} evaluated MGF
	*/
	return function mgf( t ) {
		return exp( mu * t ) * beta( 1 - s*t, 1 + s*t );
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
