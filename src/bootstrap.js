// Hacky way to load script via the pathname.
var script = document.createElement('script');
script.src = '/app' + (document.location.pathname.replace(/^\//, '') || 1) + '.js';
document.head.appendChild(script);
