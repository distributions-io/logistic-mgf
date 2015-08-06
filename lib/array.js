'use strict';

// MODULES //

var partial = require( './partial.js' );


// MGF //

/**
* FUNCTION: mgf( out, arr, mu, s )
*	Evaluates the moment-generating function (MGF) for a logistic distribution with location parameter `mu` and scale parameter `s` for each array element.
*
* @param {Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} out - output array
* @param {Array} arr - input array
* @param {Number} mu - location parameter
* @param {Number} s - scale parameter
* @returns {Number[]|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} output array
*/
function mgf( y, x, mu, s ) {
	var len = x.length,
		fcn,
		i;

	fcn = partial( mu, s );
	for ( i = 0; i < len; i++ ) {
		if ( typeof x[ i ] === 'number' ) {
			y[ i ] = fcn( x[ i ] );
		} else {
			y[ i ] = NaN;
		}
	}
	return y;
} // end FUNCTION mgf()


// EXPORTS //

module.exports = mgf;
