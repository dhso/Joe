var type;function ret(t,e){return type=e,t}function tokenBase(t,e){var n=t.next();if("<"==n&&t.eat("!"))return t.eatWhile(/[\-]/)?(e.tokenize=tokenSGMLComment)(t,e):t.eatWhile(/[\w]/)?ret("keyword","doindent"):void 0;if("<"==n&&t.eat("?"))return e.tokenize=inBlock("meta","?>"),ret("meta",n);if("#"==n&&t.eatWhile(/[\w]/))return ret("atom","tag");if("|"==n)return ret("keyword","separator");if(n.match(/[\(\)\[\]\-\.,\+\?>]/))return ret(null,n);if(n.match(/[\[\]]/))return ret("rule",n);if('"'==n||"'"==n)return e.tokenize=tokenString(n),e.tokenize(t,e);if(t.eatWhile(/[a-zA-Z\?\+\d]/)){e=t.current();return null!==e.substr(e.length-1,e.length).match(/\?|\+/)&&t.backUp(1),ret("tag","tag")}return"%"==n||"*"==n?ret("number","number"):(t.eatWhile(/[\w\\\-_%.{,]/),ret(null,null))}function tokenSGMLComment(t,e){for(var n,r=0;null!=(n=t.next());){if(2<=r&&">"==n){e.tokenize=tokenBase;break}r="-"==n?r+1:0}return ret("comment","comment")}function tokenString(a){return function(t,e){for(var n,r=!1;null!=(n=t.next());){if(n==a&&!r){e.tokenize=tokenBase;break}r=!r&&"\\"==n}return ret("string","tag")}}function inBlock(n,r){return function(t,e){for(;!t.eol();){if(t.match(r)){e.tokenize=tokenBase;break}t.next()}return n}}const dtd={startState:function(){return{tokenize:tokenBase,baseIndent:0,stack:[]}},token:function(t,e){if(t.eatSpace())return null;var n=e.tokenize(t,e),r=e.stack[e.stack.length-1];return"["==t.current()||"doindent"===type||"["==type?e.stack.push("rule"):"endtag"===type?e.stack[e.stack.length-1]="endtag":"]"==t.current()||"]"==type||">"==type&&"rule"==r?e.stack.pop():"["==type&&e.stack.push("["),n},indent:function(t,e,n){var r=t.stack.length;return"]"===e.charAt(0)?r--:">"===e.substr(e.length-1,e.length)&&("<"===e.substr(0,1)||"doindent"==type&&1<e.length||("doindent"==type?r--:">"==type&&1<e.length||"tag"==type&&">"!==e||("tag"==type&&"rule"==t.stack[t.stack.length-1]?r--:"tag"==type?r++:">"===e&&"rule"==t.stack[t.stack.length-1]&&">"===type?r--:">"===e&&"rule"==t.stack[t.stack.length-1]||("<"===e.substr(0,1)||">"!==e.substr(0,1))&&">"===e||(r-=1))),null!=type&&"]"!=type||r--),t.baseIndent+r*n.unit},languageData:{indentOnInput:/^\s*[\]>]$/}};export{dtd};