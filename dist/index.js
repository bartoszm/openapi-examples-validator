module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t){e.exports=require("lodash")},function(e,t){e.exports=require("jsonpath-plus")},function(e,t){e.exports=require("errno")},function(e,t,r){const n=r(0),a=r(4),o=r(5),s=r(6),c=r(1).JSONPath,i=r(2).custom.createError,u=r(7),l=u.getValidatorFactory,p=u.compileValidate,f=r(10),m=r(13),h=m.ERR_TYPE__JSON_PATH_NOT_FOUND,d=r(14).createValidationResponse,x="schema",g="examples",y=i(h);function P(e){return function(e,t){const r=j(t),n=function(e){return e.reduce((e,t)=>{const r=function(e){const t=c.toPathArray(e).slice(),r=t.lastIndexOf(g);return t.splice(r,t.length-r,x),c.toPathString(t)}(t);return e[r]=t,e},{})}(e),a=Object.keys(n),o=E({schemaPaths:a}),s={valid:!0,statistics:o,errors:[]};return a.forEach(e=>{const a=s.errors,i=n[e],u=b(i,t),l=_(e,t,!0),p=S({createValidator:r,responseSchema:l,example:u,statistics:o}).map(e=>(e.examplePath=c.toPointer(c.toPathArray(i)),e));p.length&&(s.valid=!1,a.splice(a.length-1,0,...p))}),s}(function(e,t){return c({json:e,path:t,resultType:"path"})}(e,f.getImplementation(e).getJsonPathToExamples()),e)}function O(e,t){const r=E({schemaPaths:e}),n=t(r);return d({errors:n,statistics:r})}function E({schemaPaths:e}){return{responseSchemasWithExamples:e.length,responseExamplesTotal:0,responseExamplesWithoutSchema:0}}function b(e,t){return c({json:t,path:e,flatten:!0,wrap:!1,resultType:"value"})}function S({createValidator:e,responseSchema:t,example:r,statistics:n,filePathExample:a}){const o=[];if(n.responseExamplesTotal++,!t)return n.responseSchemasWithExamples--,n.responseExamplesWithoutSchema++,o;const s=p(e(),t);return s(r)?o:o.concat(...s.errors.map(m.create)).map(e=>a?(e.exampleFilePath=a,e):e)}function j(e){return l(e,{allErrors:!0})}function _(e,t,r=!1){const n=b(e,t);if(!r&&!n)throw new y(`Path to response-schema can't be found: '${e}'`,{params:{path:e}});return n}e.exports={default:P,validateFile:function(e){let t=null;try{t=JSON.parse(a.readFileSync(e,"utf-8"))}catch(e){return d({errors:[m.create(e)]})}return P(t)},validateExample:function(e,t,r){let n=null,o=null,s=null;try{n=JSON.parse(a.readFileSync(r,"utf-8")),s=JSON.parse(a.readFileSync(e,"utf-8")),o=_(t,s)}catch(e){return d({errors:[m.create(e)]})}return O([t],e=>S({createValidator:j(s),responseSchema:o,example:n,statistics:e,filePathExample:r}))},validateExamplesByMap:function(e,t,{cwdToMappingFile:r}={}){let c=0;const i=s.sync(t,{nonull:!0}).map(t=>{let s=null,i=null;try{s=JSON.parse(a.readFileSync(t,"utf-8")),i=JSON.parse(a.readFileSync(e,"utf-8"))}catch(e){return d({errors:[m.create(e)]})}return c++,O(Object.keys(s),e=>(function(e,t,r,{cwdToMappingFile:s=!1,dirPathMapExternalExamples:c}){return n(t).entries().flatMap(([t,i])=>{let u=null;try{u=_(t,e)}catch(e){return m.create(e)}return n([i]).flatten().flatMap(t=>{let n=null;try{const e=s?o.join(c,t):t;n=JSON.parse(a.readFileSync(e,"utf-8"))}catch(e){return m.create(e)}return S({createValidator:j(e),responseSchema:u,example:n,statistics:r,filePathExample:t})}).value()}).value()})(i,s,e,{cwdToMappingFile:r,dirPathMapExternalExamples:o.dirname(t)}).map(e=>Object.assign(e,{mapFilePath:t})))});return n.merge(i.reduce((e,t)=>e?function(e,t){return d({errors:e.errors.concat(t.errors),statistics:n.entries(e.statistics).reduce((e,[r,n])=>(e[r]=n+t.statistics[r],e),E({schemaPaths:[]}))})}(e,t):t,null),{statistics:{matchingFilePathsMapping:c}})}}},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("glob")},function(e,t,r){const n=r(1).JSONPath,a=r(8),o=r(9),s="$id",c="$..$ref",i="https://www.npmjs.com/package/swagger-examples-validator/defs.json",u="https://www.npmjs.com/package/swagger-examples-validator/schema.json";e.exports={getValidatorFactory:function(e,t){const r=function(e){const t={[s]:i};return n({path:c,json:e,callback(r){if(!r.startsWith("#"))return;const n=r.substring(1),o=a.get(e,n);a.set(t,n,o)}}),t}(e);return()=>{const e=new o(t);return e.addSchema(r),e}},compileValidate:function(e,t){const r=function(e,t){const r=Object.assign({},e);return r[s]=t,r}(t,u);return function(e){n({path:c,json:e,callback(e,t,r){e.startsWith("#")&&(r.parent[r.parentProperty]=`${i}${e}`)}})}(r),e.compile(r)}}},function(e,t){e.exports=require("json-pointer")},function(e,t){e.exports=require("ajv")},function(e,t,r){const n=r(11),a=r(12),o=/^3\./;e.exports={getImplementation:function(e){if("string"==typeof e.swagger)return n;if(e.openapi&&e.openapi.match(o))return a;return null}}},function(e,t){const r="$..examples.application/json";e.exports={getJsonPathToExamples:function(){return r}}},function(e,t){const r="$..responses..content.application/json.examples..value";e.exports={getJsonPathToExamples:function(){return r}}},function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const a=r(0),o=r(2).code.ENOENT;class s{static create(e){const t=s.ERR_TYPE__VALIDATION,r=e.code,n=e.message,o=e.path,c=e.cause,i=r||e.type||t,u={message:n};return t===i?a.merge(u,e):(o&&a.merge(u,{params:{path:o}}),c&&a.merge(u,c)),new s(i,u)}constructor(e,t={}){Object.assign(this,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),a.forEach(function(t){n(e,t,r[t])})}return e}({type:e},t))}}e.exports=s,s.ERR_TYPE__VALIDATION="Validation",s.ERR_TYPE__JSON_PATH_NOT_FOUND="JsonPathNotFound",s.ERR_TYPE__JS_ENOENT=o.code},function(e,t){e.exports={createValidationResponse:function({errors:e,statistics:t={}}){return{valid:!e.length,statistics:t,errors:e}}}}]);
//# sourceMappingURL=index.js.map