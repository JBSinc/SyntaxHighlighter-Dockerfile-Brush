<?php
/*
   Plugin Name: SyntaxHighlighter Evolved: Dockerfile Brush
   Description: Adds support for the Dockerfile language to the SyntaxHighlighter Evolved plugin.
   Author: Aaron McMillin
   Version: 0.1.0
   Author URI: https://github.com/JBSinc/SyntaxHighlighter-Dockerfile-Brush
 */

// SyntaxHighlighter Evolved doesn't do anything until early in the "init" hook, so best to wait until after that
add_action('init', 'syntaxhighlighter_dockerfile_regscript');

// Tell SyntaxHighlighter Evolved about this new language/brush
add_filter('syntaxhighlighter_brushes', 'syntaxhighlighter_dockerfile_addlang');

// Register the brush file with WordPress
function syntaxhighlighter_dockerfile_regscript() {
    wp_register_script(
        'syntaxhighlighter-brush-dockerfile',
        plugins_url('shBrushDockerfile.js', __FILE__),
        array('syntaxhighlighter-core'),
        '0.1.0'
    );
}

// Filter SyntaxHighlighter Evolved's language array
function syntaxhighlighter_dockerfile_addlang($brushes) {
    $brushes['dockerfile'] = 'dockerfile';
    $brushes['docker'] = 'dockerfile';

    return $brushes;
}

?>
