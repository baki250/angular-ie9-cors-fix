var IE9Fix=function(){var a,b,c,d=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1},e=[].slice;!window.XDomainRequest||d.call(window.XMLHttpRequest,"withCredentials")>=0||(a=window.XMLHttpRequest,null==(c=window.location).origin&&(c.origin=window.location.protocol+"//"+window.location.host),b=function(a){var b=window.location.origin.replace("http://","").replace("https://","");return a.indexOf(b)>-1?!1:a.indexOf("http://")<0&&a.indexOf("https://")<0?!1:!0},window.XMLHttpRequest=function(){function c(){}return c.prototype.open=function(){var c,d,f,g,h,i,j,k,l,m,n,o,p=this;if(d=arguments[0],g=arguments[1],f=3<=arguments.length?e.call(arguments,2):[],b(g))for(this.implementation=new XDomainRequest,this.implementation.onload=function(){return p.responseText=p.implementation.responseText,p.readyState=4,p.status=200,p.onreadystatechange?p.onreadystatechange():void 0},this.implementation.onprogress=function(){},this.abort=function(){var a;return(a=this.implementation).abort.apply(a,arguments)},this.send=function(){var a;return(a=p.implementation).send.apply(a,arguments)},o=["getResponseHeader","getAllResponseHeaders","setRequestHeader","onprogress","onerror","ontimeout"],i=function(a){return p[a]=function(){}},k=0,m=o.length;m>k;k++)c=o[k],i(c);else for(this.implementation=new a,this.implementation.onreadystatechange=function(){var a,b,c,d;if(4===p.implementation.readyState)for(d=["readyState","status","responseText"],b=0,c=d.length;c>b;b++)a=d[b],p[a]=p.implementation[a];return p.onreadystatechange?p.onreadystatechange():void 0},n=["abort","getAllResponseHeaders","getResponseHeader","send","setRequestHeader"],h=function(a){return p[a]=function(){var b;return(b=this.implementation)[a].apply(b,arguments)}},j=0,l=n.length;l>j;j++)c=n[j],h(c);return this.implementation.open(d,g)},c}())};