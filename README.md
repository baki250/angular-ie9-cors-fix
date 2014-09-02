Angular JS IE9 Cors Fix,

If you are having issues with Angular IE9 with CORS, you can use this add a quickfix.

CoffeesScript version is here: https://github.com/geoadmin/mf-geoadmin3/blob/master/src/lib/angularIE9CorsFix.js

install:


bower install angular-cors-ie9 --save

Add:

<!--[if IE 9]>
    
    <script>IE9Fix.call(this);</script>
    
<![endif]-->
