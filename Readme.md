
# Mancjs

## Install

<pre>
  npm install mancjs
</pre>

## Super simple to use

```javascript
var mancjs = require('mancjs');
mancjs.getNextDate(function(err, date){
  console.log('The next mancjs session is on ' + date);
});
```