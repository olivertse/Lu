var nodeStatic = require( 'node-static' ),
	path = require( 'path' ),
	http = require( 'http' ),
	util = require( 'util' ),
	port = 80,
	fileServer = new nodeStatic.Server( path.normalize( __dirname ) );

http.createServer( function( request, response ) {

	fileServer.serve( request, response, function( error, result ) {
		util.log( request.url );
	} );

} ).listen( port );

util.log( 'Server listening on port ' + port );