(function($) {
	jQuery(document).ready(function() {
		// Create canvas
		var canvasWidth = 1600;
		var canvasHeight = 230;
		var isAnimating = 0; // animation stack
		var paper = Raphael( 
			document.getElementById('page'), 
			canvasWidth, 
			canvasHeight
		);
		$( paper.canvas ).css('position', 'absolute');
		$( paper.canvas ).css('width', '100%');
		var circles = [];

		var colors = ['#b55c22', '#ea440d', '#efa23f' ];
		
		for ( var i = 0; i < 7; i++ ) {

			if ( i == 6 ) {
				var abstractShape = paper.path( 'M600,130L620,60a73,73 -30 1,0 -90,50z' );
				abstractShape.attr('fill', '#b55c22');
				abstractShape.attr('stroke-width', '0' );
				abstractShape.attr( 'opacity', '0.8' );

				abstractShape = paper.path( 'M595,147L555,287a146,146 -30 1,1 -100,-180' );
				abstractShape.attr('fill', '#b55c22');
				abstractShape.attr('stroke-width', '0' );
				abstractShape.attr( 'opacity', '0.8' );

			}
			// Randomize x and y positions
			var xPos = Math.floor( Math.random() * canvasWidth );
			var yPos = Math.floor( ( Math.random() * canvasHeight + 50 ) ); // circle center at lesat 50px below top margin

			// Randomize radius between 100 and 200, on the 10s
			var circleRadius = Math.floor( ( Math.random() * 5 + 5 ) * 20 );

			//Initialize circle

			var circle = paper.circle(
				xPos, 
				yPos, 
				circleRadius
			);
			// Sets the fill attribute of the circle to red (#f00)
			circle.attr( 'fill', colors[ i % 3 ] );
			circle.attr( 'opacity', '0.8' );
			circle.attr( 'stroke-width', '0' );
			
			// Sets the stroke attribute of the circle to white
			// circle.attr("stroke", "#fff");	
			circles.push(circle);
		}
		jQuery('#masthead').hover(
			function() {
				if ( isAnimating )
					return;
				for ( var c in circles ) {
					var delay = Math.ceil( Math.random() * 300 + 200 );
					isAnimating += 1;
					circles[c]
						.animate( Raphael.animation(
							{
								cx: Math.floor( Math.random() * canvasWidth ),
								cy: Math.floor( ( Math.random() * canvasHeight + 50 ) )
							},
							1000,
							'elastic',
							function() {
								isAnimating -= 1;
							}
							).delay( delay ) 
						);
				}
			},
			function() {}
		);
	});
	
})(jQuery);