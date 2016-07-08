SyntaxHighlighter.brushes.Dockerfile = function()
{
  var keywords    = 'ADD ARG CMD COPY ENTRYPOINT ENV EXPOSE FROM LABEL ' +
                    'MAINTAINER ONBUILD RUN USER VOLUME WORKDIR';

  var bashcmds    = 'add-apt-repository adduser apk apt-get aptitude apt-key autoconf bundle ' +
                    'cd chgrp chmod chown clear complete composer cp curl du echo egrep ' +
                    'expr fgrep find gem gnufind gnugrep gpg grep groupadd head less ln ' +
                    'ls make mkdir mv node npm pacman pip pip3 php python rails rm rmdir rpm ruby ' +
                    'sed sleep sort strip tar tail tailf touch useradd virtualenv yum ' +
                    'usermod bash cat a2ensite a2dissite a2enmod a2dismod apache2ctl ' +
                    'wget gzip ';

  this.regexList = [
    { regex: SyntaxHighlighter.regexLib.singleLinePerlComments,         css: 'comments' },
    { regex: SyntaxHighlighter.regexLib.DoubleQuotedString,             css: 'string' },
    { regex: SyntaxHighlighter.regexLib.singleQuotedString,             css: 'string' },
    { regex: SyntaxHighlighter.regexLib.url,                            css: 'color1' },
    { regex: new RegExp(this.getKeywords(keywords), 'gmi'),             css: 'keyword' },
    { regex: new RegExp(this.getKeywords(bashcmds), 'gmi'),             css: 'functions' }
  ];

};

syntaxHighlighter.brushes.Dockerfile.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Dockerfile.aliases  = ['docker', 'dockerfile'];
