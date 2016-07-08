# Dockerfile SyntaxHighlighter Brush

What is this?
--------------
This is a brush for [Alex Gorbachev's SyntaxHighlighter][syntaxhighlighterhome], which is a small JavaScript library for general purpose code syntax highlighting.  This brush adds support for Dockerfile.

Also included is a plugin for the [SyntaxHighlighter Evolved][syntaxhighlighterevolvedhome] plugin by [Viper007Bond][viperhome] for integrating syntax highlighting directly into [Wordpress][wordpresshome].


Testing
-------

The docker compose file will spin up a wordpress docker image and mount this plugin. You'll need to install the SyntaxHighlighter plugin on your own, and activate both plugins. And possibly check file permissions so www-data (uid:33) can read the plugin files.

docker-compose up

References
-----------

* The JavaScript was minified using Google's [Closure Compiler][closure].
* Docker syntax details shamelessly cribbed from [ekalinin][vimplugin].
* [New Brush for the WP plugin][newbrush].
* [New Brush for SyntaxHighlighter][newbrush-wp].


[closure]: http://closure-compiler.appspot.com/home
[newbrush]: http://www.viper007bond.com/wordpress-plugins/syntaxhighlighter/adding-a-new-brush-language/
[newbrush-wp]: http://alexgorbatchev.com/SyntaxHighlighter/manual/brushes/custom.html
[vimplugin]: https://github.com/ekalinin/Dockerfile.vim/blob/master/syntax/Dockerfile.vim
[syntaxhighlighterhome]: http://alexgorbatchev.com/SyntaxHighlighter/
[syntaxhighlighterevolvedhome]: http://wordpress.org/extend/plugins/syntaxhighlighter
[viperhome]: http://www.viper007bond.com
[wordpresshome]: http://wordpress.org
