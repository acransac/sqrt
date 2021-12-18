(()=>{var t={736:(t,r,e)=>{var o;t=e.nmd(t);var n=function(t){"use strict";var r=1e7,e=9007199254740992,o=v(e),i="0123456789abcdefghijklmnopqrstuvwxyz",u="function"==typeof BigInt;function p(t,r,e,o){return void 0===t?p[0]:void 0===r||10==+r&&!e?Q(t):$(t,r,e,o)}function a(t,r){this.value=t,this.sign=r,this.isSmall=!1}function s(t){this.value=t,this.sign=t<0,this.isSmall=!0}function l(t){this.value=t}function f(t){return-e<t&&t<e}function v(t){return t<1e7?[t]:t<1e14?[t%1e7,Math.floor(t/1e7)]:[t%1e7,Math.floor(t/1e7)%1e7,Math.floor(t/1e14)]}function h(t){y(t);var e=t.length;if(e<4&&P(t,o)<0)switch(e){case 0:return 0;case 1:return t[0];case 2:return t[0]+t[1]*r;default:return t[0]+(t[1]+t[2]*r)*r}return t}function y(t){for(var r=t.length;0===t[--r];);t.length=r+1}function c(t){for(var r=new Array(t),e=-1;++e<t;)r[e]=0;return r}function g(t){return t>0?Math.floor(t):Math.ceil(t)}function m(t,e){var o,n,i=t.length,u=e.length,p=new Array(i),a=0,s=r;for(n=0;n<u;n++)a=(o=t[n]+e[n]+a)>=s?1:0,p[n]=o-a*s;for(;n<i;)a=(o=t[n]+a)===s?1:0,p[n++]=o-a*s;return a>0&&p.push(a),p}function d(t,r){return t.length>=r.length?m(t,r):m(r,t)}function w(t,e){var o,n,i=t.length,u=new Array(i),p=r;for(n=0;n<i;n++)o=t[n]-p+e,e=Math.floor(o/p),u[n]=o-e*p,e+=1;for(;e>0;)u[n++]=e%p,e=Math.floor(e/p);return u}function b(t,e){var o,n,i=t.length,u=e.length,p=new Array(i),a=0,s=r;for(o=0;o<u;o++)(n=t[o]-a-e[o])<0?(n+=s,a=1):a=0,p[o]=n;for(o=u;o<i;o++){if(!((n=t[o]-a)<0)){p[o++]=n;break}n+=s,p[o]=n}for(;o<i;o++)p[o]=t[o];return y(p),p}function S(t,e,o){var n,i,u=t.length,p=new Array(u),l=-e,f=r;for(n=0;n<u;n++)i=t[n]+l,l=Math.floor(i/f),i%=f,p[n]=i<0?i+f:i;return"number"==typeof(p=h(p))?(o&&(p=-p),new s(p)):new a(p,o)}function q(t,e){var o,n,i,u,p=t.length,a=e.length,s=c(p+a),l=r;for(i=0;i<p;++i){u=t[i];for(var f=0;f<a;++f)o=u*e[f]+s[i+f],n=Math.floor(o/l),s[i+f]=o-n*l,s[i+f+1]+=n}return y(s),s}function M(t,e){var o,n,i=t.length,u=new Array(i),p=r,a=0;for(n=0;n<i;n++)o=t[n]*e+a,a=Math.floor(o/p),u[n]=o-a*p;for(;a>0;)u[n++]=a%p,a=Math.floor(a/p);return u}function N(t,r){for(var e=[];r-- >0;)e.push(0);return e.concat(t)}function E(t,r){var e=Math.max(t.length,r.length);if(e<=30)return q(t,r);e=Math.ceil(e/2);var o=t.slice(e),n=t.slice(0,e),i=r.slice(e),u=r.slice(0,e),p=E(n,u),a=E(o,i),s=E(d(n,o),d(u,i)),l=d(d(p,N(b(b(s,p),a),e)),N(a,2*e));return y(l),l}function I(t,e,o){return new a(t<r?M(e,t):q(e,v(t)),o)}function O(t){var e,o,n,i,u=t.length,p=c(u+u),a=r;for(n=0;n<u;n++){o=0-(i=t[n])*i;for(var s=n;s<u;s++)e=i*t[s]*2+p[n+s]+o,o=Math.floor(e/a),p[n+s]=e-o*a;p[n+u]=o}return y(p),p}function B(t,r){var e,o,n,i,u=t.length,p=c(u);for(n=0,e=u-1;e>=0;--e)n=(i=1e7*n+t[e])-(o=g(i/r))*r,p[e]=0|o;return[p,0|n]}function A(t,e){var o,n=Q(e);if(u)return[new l(t.value/n.value),new l(t.value%n.value)];var i,f=t.value,m=n.value;if(0===m)throw new Error("Cannot divide by zero");if(t.isSmall)return n.isSmall?[new s(g(f/m)),new s(f%m)]:[p[0],t];if(n.isSmall){if(1===m)return[t,p[0]];if(-1==m)return[t.negate(),p[0]];var d=Math.abs(m);if(d<r){i=h((o=B(f,d))[0]);var w=o[1];return t.sign&&(w=-w),"number"==typeof i?(t.sign!==n.sign&&(i=-i),[new s(i),new s(w)]):[new a(i,t.sign!==n.sign),new s(w)]}m=v(d)}var S=P(f,m);if(-1===S)return[p[0],t];if(0===S)return[p[t.sign===n.sign?1:-1],p[0]];o=f.length+m.length<=200?function(t,e){var o,n,i,u,p,a,s,l=t.length,f=e.length,v=r,y=c(e.length),g=e[f-1],m=Math.ceil(v/(2*g)),d=M(t,m),w=M(e,m);for(d.length<=l&&d.push(0),w.push(0),g=w[f-1],n=l-f;n>=0;n--){for(o=v-1,d[n+f]!==g&&(o=Math.floor((d[n+f]*v+d[n+f-1])/g)),i=0,u=0,a=w.length,p=0;p<a;p++)i+=o*w[p],s=Math.floor(i/v),u+=d[n+p]-(i-s*v),i=s,u<0?(d[n+p]=u+v,u=-1):(d[n+p]=u,u=0);for(;0!==u;){for(o-=1,i=0,p=0;p<a;p++)(i+=d[n+p]-v+w[p])<0?(d[n+p]=i+v,i=0):(d[n+p]=i,i=1);u+=i}y[n]=o}return d=B(d,m)[0],[h(y),h(d)]}(f,m):function(t,e){for(var o,n,i,u,p,a=t.length,s=e.length,l=[],f=[],v=r;a;)if(f.unshift(t[--a]),y(f),P(f,e)<0)l.push(0);else{i=f[(n=f.length)-1]*v+f[n-2],u=e[s-1]*v+e[s-2],n>s&&(i=(i+1)*v),o=Math.ceil(i/u);do{if(P(p=M(e,o),f)<=0)break;o--}while(o);l.push(o),f=b(f,p)}return l.reverse(),[h(l),h(f)]}(f,m),i=o[0];var q=t.sign!==n.sign,N=o[1],E=t.sign;return"number"==typeof i?(q&&(i=-i),i=new s(i)):i=new a(i,q),"number"==typeof N?(E&&(N=-N),N=new s(N)):N=new a(N,E),[i,N]}function P(t,r){if(t.length!==r.length)return t.length>r.length?1:-1;for(var e=t.length-1;e>=0;e--)if(t[e]!==r[e])return t[e]>r[e]?1:-1;return 0}function x(t){var r=t.abs();return!r.isUnit()&&(!!(r.equals(2)||r.equals(3)||r.equals(5))||!(r.isEven()||r.isDivisibleBy(3)||r.isDivisibleBy(5))&&(!!r.lesser(49)||void 0))}function Z(t,r){for(var e,o,i,u=t.prev(),p=u,a=0;p.isEven();)p=p.divide(2),a++;t:for(o=0;o<r.length;o++)if(!t.lesser(r[o])&&!(i=n(r[o]).modPow(p,t)).isUnit()&&!i.equals(u)){for(e=a-1;0!=e;e--){if((i=i.square().mod(t)).isUnit())return!1;if(i.equals(u))continue t}return!1}return!0}a.prototype=Object.create(p.prototype),s.prototype=Object.create(p.prototype),l.prototype=Object.create(p.prototype),a.prototype.add=function(t){var r=Q(t);if(this.sign!==r.sign)return this.subtract(r.negate());var e=this.value,o=r.value;return r.isSmall?new a(w(e,Math.abs(o)),this.sign):new a(d(e,o),this.sign)},a.prototype.plus=a.prototype.add,s.prototype.add=function(t){var r=Q(t),e=this.value;if(e<0!==r.sign)return this.subtract(r.negate());var o=r.value;if(r.isSmall){if(f(e+o))return new s(e+o);o=v(Math.abs(o))}return new a(w(o,Math.abs(e)),e<0)},s.prototype.plus=s.prototype.add,l.prototype.add=function(t){return new l(this.value+Q(t).value)},l.prototype.plus=l.prototype.add,a.prototype.subtract=function(t){var r=Q(t);if(this.sign!==r.sign)return this.add(r.negate());var e=this.value,o=r.value;return r.isSmall?S(e,Math.abs(o),this.sign):function(t,r,e){var o;return P(t,r)>=0?o=b(t,r):(o=b(r,t),e=!e),"number"==typeof(o=h(o))?(e&&(o=-o),new s(o)):new a(o,e)}(e,o,this.sign)},a.prototype.minus=a.prototype.subtract,s.prototype.subtract=function(t){var r=Q(t),e=this.value;if(e<0!==r.sign)return this.add(r.negate());var o=r.value;return r.isSmall?new s(e-o):S(o,Math.abs(e),e>=0)},s.prototype.minus=s.prototype.subtract,l.prototype.subtract=function(t){return new l(this.value-Q(t).value)},l.prototype.minus=l.prototype.subtract,a.prototype.negate=function(){return new a(this.value,!this.sign)},s.prototype.negate=function(){var t=this.sign,r=new s(-this.value);return r.sign=!t,r},l.prototype.negate=function(){return new l(-this.value)},a.prototype.abs=function(){return new a(this.value,!1)},s.prototype.abs=function(){return new s(Math.abs(this.value))},l.prototype.abs=function(){return new l(this.value>=0?this.value:-this.value)},a.prototype.multiply=function(t){var e,o,n,i=Q(t),u=this.value,s=i.value,l=this.sign!==i.sign;if(i.isSmall){if(0===s)return p[0];if(1===s)return this;if(-1===s)return this.negate();if((e=Math.abs(s))<r)return new a(M(u,e),l);s=v(e)}return new a(-.012*(o=u.length)-.012*(n=s.length)+15e-6*o*n>0?E(u,s):q(u,s),l)},a.prototype.times=a.prototype.multiply,s.prototype._multiplyBySmall=function(t){return f(t.value*this.value)?new s(t.value*this.value):I(Math.abs(t.value),v(Math.abs(this.value)),this.sign!==t.sign)},a.prototype._multiplyBySmall=function(t){return 0===t.value?p[0]:1===t.value?this:-1===t.value?this.negate():I(Math.abs(t.value),this.value,this.sign!==t.sign)},s.prototype.multiply=function(t){return Q(t)._multiplyBySmall(this)},s.prototype.times=s.prototype.multiply,l.prototype.multiply=function(t){return new l(this.value*Q(t).value)},l.prototype.times=l.prototype.multiply,a.prototype.square=function(){return new a(O(this.value),!1)},s.prototype.square=function(){var t=this.value*this.value;return f(t)?new s(t):new a(O(v(Math.abs(this.value))),!1)},l.prototype.square=function(t){return new l(this.value*this.value)},a.prototype.divmod=function(t){var r=A(this,t);return{quotient:r[0],remainder:r[1]}},l.prototype.divmod=s.prototype.divmod=a.prototype.divmod,a.prototype.divide=function(t){return A(this,t)[0]},l.prototype.over=l.prototype.divide=function(t){return new l(this.value/Q(t).value)},s.prototype.over=s.prototype.divide=a.prototype.over=a.prototype.divide,a.prototype.mod=function(t){return A(this,t)[1]},l.prototype.mod=l.prototype.remainder=function(t){return new l(this.value%Q(t).value)},s.prototype.remainder=s.prototype.mod=a.prototype.remainder=a.prototype.mod,a.prototype.pow=function(t){var r,e,o,n=Q(t),i=this.value,u=n.value;if(0===u)return p[1];if(0===i)return p[0];if(1===i)return p[1];if(-1===i)return n.isEven()?p[1]:p[-1];if(n.sign)return p[0];if(!n.isSmall)throw new Error("The exponent "+n.toString()+" is too large.");if(this.isSmall&&f(r=Math.pow(i,u)))return new s(g(r));for(e=this,o=p[1];!0&u&&(o=o.times(e),--u),0!==u;)u/=2,e=e.square();return o},s.prototype.pow=a.prototype.pow,l.prototype.pow=function(t){var r=Q(t),e=this.value,o=r.value,n=BigInt(0),i=BigInt(1),u=BigInt(2);if(o===n)return p[1];if(e===n)return p[0];if(e===i)return p[1];if(e===BigInt(-1))return r.isEven()?p[1]:p[-1];if(r.isNegative())return new l(n);for(var a=this,s=p[1];(o&i)===i&&(s=s.times(a),--o),o!==n;)o/=u,a=a.square();return s},a.prototype.modPow=function(t,r){if(t=Q(t),(r=Q(r)).isZero())throw new Error("Cannot take modPow with modulus 0");var e=p[1],o=this.mod(r);for(t.isNegative()&&(t=t.multiply(p[-1]),o=o.modInv(r));t.isPositive();){if(o.isZero())return p[0];t.isOdd()&&(e=e.multiply(o).mod(r)),t=t.divide(2),o=o.square().mod(r)}return e},l.prototype.modPow=s.prototype.modPow=a.prototype.modPow,a.prototype.compareAbs=function(t){var r=Q(t),e=this.value,o=r.value;return r.isSmall?1:P(e,o)},s.prototype.compareAbs=function(t){var r=Q(t),e=Math.abs(this.value),o=r.value;return r.isSmall?e===(o=Math.abs(o))?0:e>o?1:-1:-1},l.prototype.compareAbs=function(t){var r=this.value,e=Q(t).value;return(r=r>=0?r:-r)===(e=e>=0?e:-e)?0:r>e?1:-1},a.prototype.compare=function(t){if(t===1/0)return-1;if(t===-1/0)return 1;var r=Q(t),e=this.value,o=r.value;return this.sign!==r.sign?r.sign?1:-1:r.isSmall?this.sign?-1:1:P(e,o)*(this.sign?-1:1)},a.prototype.compareTo=a.prototype.compare,s.prototype.compare=function(t){if(t===1/0)return-1;if(t===-1/0)return 1;var r=Q(t),e=this.value,o=r.value;return r.isSmall?e==o?0:e>o?1:-1:e<0!==r.sign?e<0?-1:1:e<0?1:-1},s.prototype.compareTo=s.prototype.compare,l.prototype.compare=function(t){if(t===1/0)return-1;if(t===-1/0)return 1;var r=this.value,e=Q(t).value;return r===e?0:r>e?1:-1},l.prototype.compareTo=l.prototype.compare,a.prototype.equals=function(t){return 0===this.compare(t)},l.prototype.eq=l.prototype.equals=s.prototype.eq=s.prototype.equals=a.prototype.eq=a.prototype.equals,a.prototype.notEquals=function(t){return 0!==this.compare(t)},l.prototype.neq=l.prototype.notEquals=s.prototype.neq=s.prototype.notEquals=a.prototype.neq=a.prototype.notEquals,a.prototype.greater=function(t){return this.compare(t)>0},l.prototype.gt=l.prototype.greater=s.prototype.gt=s.prototype.greater=a.prototype.gt=a.prototype.greater,a.prototype.lesser=function(t){return this.compare(t)<0},l.prototype.lt=l.prototype.lesser=s.prototype.lt=s.prototype.lesser=a.prototype.lt=a.prototype.lesser,a.prototype.greaterOrEquals=function(t){return this.compare(t)>=0},l.prototype.geq=l.prototype.greaterOrEquals=s.prototype.geq=s.prototype.greaterOrEquals=a.prototype.geq=a.prototype.greaterOrEquals,a.prototype.lesserOrEquals=function(t){return this.compare(t)<=0},l.prototype.leq=l.prototype.lesserOrEquals=s.prototype.leq=s.prototype.lesserOrEquals=a.prototype.leq=a.prototype.lesserOrEquals,a.prototype.isEven=function(){return 0==(1&this.value[0])},s.prototype.isEven=function(){return 0==(1&this.value)},l.prototype.isEven=function(){return(this.value&BigInt(1))===BigInt(0)},a.prototype.isOdd=function(){return 1==(1&this.value[0])},s.prototype.isOdd=function(){return 1==(1&this.value)},l.prototype.isOdd=function(){return(this.value&BigInt(1))===BigInt(1)},a.prototype.isPositive=function(){return!this.sign},s.prototype.isPositive=function(){return this.value>0},l.prototype.isPositive=s.prototype.isPositive,a.prototype.isNegative=function(){return this.sign},s.prototype.isNegative=function(){return this.value<0},l.prototype.isNegative=s.prototype.isNegative,a.prototype.isUnit=function(){return!1},s.prototype.isUnit=function(){return 1===Math.abs(this.value)},l.prototype.isUnit=function(){return this.abs().value===BigInt(1)},a.prototype.isZero=function(){return!1},s.prototype.isZero=function(){return 0===this.value},l.prototype.isZero=function(){return this.value===BigInt(0)},a.prototype.isDivisibleBy=function(t){var r=Q(t);return!r.isZero()&&(!!r.isUnit()||(0===r.compareAbs(2)?this.isEven():this.mod(r).isZero()))},l.prototype.isDivisibleBy=s.prototype.isDivisibleBy=a.prototype.isDivisibleBy,a.prototype.isPrime=function(r){var e=x(this);if(e!==t)return e;var o=this.abs(),i=o.bitLength();if(i<=64)return Z(o,[2,3,5,7,11,13,17,19,23,29,31,37]);for(var u=Math.log(2)*i.toJSNumber(),p=Math.ceil(!0===r?2*Math.pow(u,2):u),a=[],s=0;s<p;s++)a.push(n(s+2));return Z(o,a)},l.prototype.isPrime=s.prototype.isPrime=a.prototype.isPrime,a.prototype.isProbablePrime=function(r,e){var o=x(this);if(o!==t)return o;for(var i=this.abs(),u=r===t?5:r,p=[],a=0;a<u;a++)p.push(n.randBetween(2,i.minus(2),e));return Z(i,p)},l.prototype.isProbablePrime=s.prototype.isProbablePrime=a.prototype.isProbablePrime,a.prototype.modInv=function(t){for(var r,e,o,i=n.zero,u=n.one,p=Q(t),a=this.abs();!a.isZero();)r=p.divide(a),e=i,o=p,i=u,p=a,u=e.subtract(r.multiply(u)),a=o.subtract(r.multiply(a));if(!p.isUnit())throw new Error(this.toString()+" and "+t.toString()+" are not co-prime");return-1===i.compare(0)&&(i=i.add(t)),this.isNegative()?i.negate():i},l.prototype.modInv=s.prototype.modInv=a.prototype.modInv,a.prototype.next=function(){var t=this.value;return this.sign?S(t,1,this.sign):new a(w(t,1),this.sign)},s.prototype.next=function(){var t=this.value;return t+1<e?new s(t+1):new a(o,!1)},l.prototype.next=function(){return new l(this.value+BigInt(1))},a.prototype.prev=function(){var t=this.value;return this.sign?new a(w(t,1),!0):S(t,1,this.sign)},s.prototype.prev=function(){var t=this.value;return t-1>-e?new s(t-1):new a(o,!0)},l.prototype.prev=function(){return new l(this.value-BigInt(1))};for(var J=[1];2*J[J.length-1]<=r;)J.push(2*J[J.length-1]);var L=J.length,U=J[L-1];function T(t){return Math.abs(t)<=r}function j(t,r,e){r=Q(r);for(var o=t.isNegative(),i=r.isNegative(),u=o?t.not():t,p=i?r.not():r,a=0,s=0,l=null,f=null,v=[];!u.isZero()||!p.isZero();)a=(l=A(u,U))[1].toJSNumber(),o&&(a=U-1-a),s=(f=A(p,U))[1].toJSNumber(),i&&(s=U-1-s),u=l[0],p=f[0],v.push(e(a,s));for(var h=0!==e(o?1:0,i?1:0)?n(-1):n(0),y=v.length-1;y>=0;y-=1)h=h.multiply(U).add(n(v[y]));return h}a.prototype.shiftLeft=function(t){var r=Q(t).toJSNumber();if(!T(r))throw new Error(String(r)+" is too large for shifting.");if(r<0)return this.shiftRight(-r);var e=this;if(e.isZero())return e;for(;r>=L;)e=e.multiply(U),r-=L-1;return e.multiply(J[r])},l.prototype.shiftLeft=s.prototype.shiftLeft=a.prototype.shiftLeft,a.prototype.shiftRight=function(t){var r,e=Q(t).toJSNumber();if(!T(e))throw new Error(String(e)+" is too large for shifting.");if(e<0)return this.shiftLeft(-e);for(var o=this;e>=L;){if(o.isZero()||o.isNegative()&&o.isUnit())return o;o=(r=A(o,U))[1].isNegative()?r[0].prev():r[0],e-=L-1}return(r=A(o,J[e]))[1].isNegative()?r[0].prev():r[0]},l.prototype.shiftRight=s.prototype.shiftRight=a.prototype.shiftRight,a.prototype.not=function(){return this.negate().prev()},l.prototype.not=s.prototype.not=a.prototype.not,a.prototype.and=function(t){return j(this,t,(function(t,r){return t&r}))},l.prototype.and=s.prototype.and=a.prototype.and,a.prototype.or=function(t){return j(this,t,(function(t,r){return t|r}))},l.prototype.or=s.prototype.or=a.prototype.or,a.prototype.xor=function(t){return j(this,t,(function(t,r){return t^r}))},l.prototype.xor=s.prototype.xor=a.prototype.xor;var C=1<<30;function D(t){var e=t.value,o="number"==typeof e?e|C:"bigint"==typeof e?e|BigInt(C):e[0]+e[1]*r|1073758208;return o&-o}function z(t,r){if(r.compareTo(t)<=0){var e=z(t,r.square(r)),o=e.p,i=e.e,u=o.multiply(r);return u.compareTo(t)<=0?{p:u,e:2*i+1}:{p:o,e:2*i}}return{p:n(1),e:0}}function R(t,r){return t=Q(t),r=Q(r),t.greater(r)?t:r}function k(t,r){return t=Q(t),r=Q(r),t.lesser(r)?t:r}function _(t,r){if(t=Q(t).abs(),r=Q(r).abs(),t.equals(r))return t;if(t.isZero())return r;if(r.isZero())return t;for(var e,o,n=p[1];t.isEven()&&r.isEven();)e=k(D(t),D(r)),t=t.divide(e),r=r.divide(e),n=n.multiply(e);for(;t.isEven();)t=t.divide(D(t));do{for(;r.isEven();)r=r.divide(D(r));t.greater(r)&&(o=r,r=t,t=o),r=r.subtract(t)}while(!r.isZero());return n.isUnit()?t:t.multiply(n)}a.prototype.bitLength=function(){var t=this;return t.compareTo(n(0))<0&&(t=t.negate().subtract(n(1))),0===t.compareTo(n(0))?n(0):n(z(t,n(2)).e).add(n(1))},l.prototype.bitLength=s.prototype.bitLength=a.prototype.bitLength;var $=function(t,r,e,o){e=e||i,t=String(t),o||(t=t.toLowerCase(),e=e.toLowerCase());var n,u=t.length,p=Math.abs(r),a={};for(n=0;n<e.length;n++)a[e[n]]=n;for(n=0;n<u;n++)if("-"!==(f=t[n])&&f in a&&a[f]>=p){if("1"===f&&1===p)continue;throw new Error(f+" is not a valid digit in base "+r+".")}r=Q(r);var s=[],l="-"===t[0];for(n=l?1:0;n<t.length;n++){var f;if((f=t[n])in a)s.push(Q(a[f]));else{if("<"!==f)throw new Error(f+" is not a valid character");var v=n;do{n++}while(">"!==t[n]&&n<t.length);s.push(Q(t.slice(v+1,n)))}}return F(s,r,l)};function F(t,r,e){var o,n=p[0],i=p[1];for(o=t.length-1;o>=0;o--)n=n.add(t[o].times(i)),i=i.times(r);return e?n.negate():n}function G(t,r){if((r=n(r)).isZero()){if(t.isZero())return{value:[0],isNegative:!1};throw new Error("Cannot convert nonzero numbers to base 0.")}if(r.equals(-1)){if(t.isZero())return{value:[0],isNegative:!1};if(t.isNegative())return{value:[].concat.apply([],Array.apply(null,Array(-t.toJSNumber())).map(Array.prototype.valueOf,[1,0])),isNegative:!1};var e=Array.apply(null,Array(t.toJSNumber()-1)).map(Array.prototype.valueOf,[0,1]);return e.unshift([1]),{value:[].concat.apply([],e),isNegative:!1}}var o=!1;if(t.isNegative()&&r.isPositive()&&(o=!0,t=t.abs()),r.isUnit())return t.isZero()?{value:[0],isNegative:!1}:{value:Array.apply(null,Array(t.toJSNumber())).map(Number.prototype.valueOf,1),isNegative:o};for(var i,u=[],p=t;p.isNegative()||p.compareAbs(r)>=0;){i=p.divmod(r),p=i.quotient;var a=i.remainder;a.isNegative()&&(a=r.minus(a).abs(),p=p.next()),u.push(a.toJSNumber())}return u.push(p.toJSNumber()),{value:u.reverse(),isNegative:o}}function H(t,r,e){var o=G(t,r);return(o.isNegative?"-":"")+o.value.map((function(t){return function(t,r){return t<(r=r||i).length?r[t]:"<"+t+">"}(t,e)})).join("")}function K(t){if(f(+t)){var r=+t;if(r===g(r))return u?new l(BigInt(r)):new s(r);throw new Error("Invalid integer: "+t)}var e="-"===t[0];e&&(t=t.slice(1));var o=t.split(/e/i);if(o.length>2)throw new Error("Invalid integer: "+o.join("e"));if(2===o.length){var n=o[1];if("+"===n[0]&&(n=n.slice(1)),(n=+n)!==g(n)||!f(n))throw new Error("Invalid integer: "+n+" is not a valid exponent.");var i=o[0],p=i.indexOf(".");if(p>=0&&(n-=i.length-p-1,i=i.slice(0,p)+i.slice(p+1)),n<0)throw new Error("Cannot include negative exponent part for integers");t=i+=new Array(n+1).join("0")}if(!/^([0-9][0-9]*)$/.test(t))throw new Error("Invalid integer: "+t);if(u)return new l(BigInt(e?"-"+t:t));for(var v=[],h=t.length,c=h-7;h>0;)v.push(+t.slice(c,h)),(c-=7)<0&&(c=0),h-=7;return y(v),new a(v,e)}function Q(t){return"number"==typeof t?function(t){if(u)return new l(BigInt(t));if(f(t)){if(t!==g(t))throw new Error(t+" is not an integer.");return new s(t)}return K(t.toString())}(t):"string"==typeof t?K(t):"bigint"==typeof t?new l(t):t}a.prototype.toArray=function(t){return G(this,t)},s.prototype.toArray=function(t){return G(this,t)},l.prototype.toArray=function(t){return G(this,t)},a.prototype.toString=function(r,e){if(r===t&&(r=10),10!==r)return H(this,r,e);for(var o,n=this.value,i=n.length,u=String(n[--i]);--i>=0;)o=String(n[i]),u+="0000000".slice(o.length)+o;return(this.sign?"-":"")+u},s.prototype.toString=function(r,e){return r===t&&(r=10),10!=r?H(this,r,e):String(this.value)},l.prototype.toString=s.prototype.toString,l.prototype.toJSON=a.prototype.toJSON=s.prototype.toJSON=function(){return this.toString()},a.prototype.valueOf=function(){return parseInt(this.toString(),10)},a.prototype.toJSNumber=a.prototype.valueOf,s.prototype.valueOf=function(){return this.value},s.prototype.toJSNumber=s.prototype.valueOf,l.prototype.valueOf=l.prototype.toJSNumber=function(){return parseInt(this.toString(),10)};for(var V=0;V<1e3;V++)p[V]=Q(V),V>0&&(p[-V]=Q(-V));return p.one=p[1],p.zero=p[0],p.minusOne=p[-1],p.max=R,p.min=k,p.gcd=_,p.lcm=function(t,r){return t=Q(t).abs(),r=Q(r).abs(),t.divide(_(t,r)).multiply(r)},p.isInstance=function(t){return t instanceof a||t instanceof s||t instanceof l},p.randBetween=function(t,e,o){t=Q(t),e=Q(e);var n=o||Math.random,i=k(t,e),u=R(t,e).subtract(i).add(1);if(u.isSmall)return i.add(Math.floor(n()*u));for(var a=G(u,r).value,s=[],l=!0,f=0;f<a.length;f++){var v=l?a[f]+(f+1<a.length?a[f+1]/r:0):r,h=g(n()*v);s.push(h),h<a[f]&&(l=!1)}return i.add(p.fromArray(s,r,!1))},p.fromArray=function(t,r,e){return F(t.map(Q),Q(r||10),e)},p}();t.hasOwnProperty("exports")&&(t.exports=n),void 0===(o=function(){return n}.call(r,e,r,t))||(t.exports=o)}},r={};function e(o){var n=r[o];if(void 0!==n)return n.exports;var i=r[o]={id:o,loaded:!1,exports:{}};return t[o](i,i.exports,e),i.loaded=!0,i.exports}e.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),(()=>{"use strict";e(736)})()})();