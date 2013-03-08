<?php
/*
Plugin Name: Twenty Thirteen Header Animations
Description: Adds dynamically created header shapes and on-hover interactions to Twenty Thirteen.
Author: Eric Andrew Lewis
Version: 0.1
Author URI: http://www.ericandrewlewis.com/
*/

/*  Copyright 2013  Eric Andrew Lewis  (email : eric.andrew.lewis@gmail.com )

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License, version 3, as 
    published by the Free Software Foundation.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

// If we don't have Twenty Thirteen active, bail
if ( wp_get_theme()->name != 'Twenty Thirteen' )
	return;

add_action( 'wp_head', 'ttha_inline_css', 11 );

/**
 * CSS to override Twenty Thirteen's styles
 */
function ttha_inline_css() {
	?>
	<style type="text/css">
	.site-header {
		background: transparent;
	}
	.masthead svg {
		position: absolute;
		z-index: -1;
	}
	</style>
	<?php
}

add_action( 'wp_enqueue_scripts', 'ttha_enqueue_scripts' );

/**
 * Enqueue required scripts
 */
function ttha_enqueue_scripts() {
	wp_enqueue_script( 
		'raphael', 
		plugins_url( 'raphael.min.js', __FILE__ ) 
	);

	wp_enqueue_script( 
		'twenty-thirteen-header-animations', 
		plugins_url( 'js.js', __FILE__ ), 
		array( 'jquery', 'raphael' ) 
	);
}