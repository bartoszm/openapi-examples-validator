(()=>{var e={331:(e,t,r)=>{const a=r(815),n={byte:{min:new a("-128"),max:new a("127")},int32:{min:new a("-2147483648"),max:new a("2147483647")},int64:{min:new a("-9223372036854775808"),max:new a("9223372036854775807")},float:{min:new a(2).pow(128).negated(),max:new a(2).pow(128)},double:{min:new a(2).pow(1024).negated(),max:new a(2).pow(1024)}};e.exports=n},574:(e,t,r)=>{const a=r(331);e.exports={int32:function(e){return Number.isInteger(+e)&&a.int32.max.greaterThanOrEqualTo(e)&&a.int32.min.lessThanOrEqualTo(e)},int64:function(e){return Number.isInteger(+e)&&a.int64.max.greaterThanOrEqualTo(e)&&a.int64.min.lessThanOrEqualTo(e)},float:function(e){return a.float.max.greaterThanOrEqualTo(e)&&a.float.min.lessThanOrEqualTo(e)},double:function(e){return a.double.max.greaterThanOrEqualTo(e)&&a.double.min.lessThanOrEqualTo(e)},byte:function(e){const t=e.length;if(!t||t%4!=0||/[^A-Z0-9+\/=]/i.test(e))return!1;const r=e.indexOf("=");return-1===r||r===t-1||r===t-2&&"="===e[t-1]}}},114:(e,t,r)=>{const a=r(914),{ENOENT:n}=r(66).code,s={jsENOENT:n.code,jsonPathNotFound:"JsonPathNotFound",errorAndErrorsMutuallyExclusive:"ErrorErrorsMutuallyExclusive",parseError:"ParseError",validation:"Validation"};class i{static create(e){const{code:t,message:r,path:n,cause:o}=e,p=t||e.type||s.validation,l={message:r};return s.validation===p||s.errorAndErrorsMutuallyExclusive===p?a(l,e):(n&&a(l,{params:{path:n}}),o&&a(l,o)),new i(p,l)}constructor(e,t={}){Object.assign(this,{type:e,...t})}}e.exports={ApplicationError:i,ErrorType:s}},99:e=>{e.exports={parent:"parent",parentProperty:"parentProperty",path:"path",pointer:"pointer",value:"value"}},951:(e,t,r)=>{const a=r(565),n=r(291),s=/^3\./;e.exports={getImplementation:function(e){return"string"==typeof e.swagger?a:e.openapi&&e.openapi.match(s)?n:null}}},251:(e,t,r)=>{const{JSONPath:a}=r(58),n=r(99),s=["$..application/json.schema",'$..schema..[?(@.properties && (@property === "schema" || @property === "items" || @.type === "object"))]'],i=["oneOf","allOf","anyOf","not"];function o(e){return t=>{const r=JSON.stringify(t);i.some((e=>r.includes(`"${e}"`)))?console.warn(`"additionalProperties" flag not set for ${e} because it contains JSON-schema combiner keywords.`):t.additionalProperties=!1}}function p(e,t,r=n.path,s){return a({json:e,path:t,flatten:!0,resultType:r,callback:s})}e.exports={setNoAdditionalProperties:function(e,t=[],r=o){const a=new Set;s.forEach((t=>{p(e,t).forEach((e=>{i.some((t=>e.includes(`['${t}']`)))?console.warn(`"additionalProperties" flag not set for ${e} because it contains JSON-schema combiner keywords.`):a.add(e)}))})),function(e,t,r){r.forEach((r=>{p(e,r).forEach((e=>{for(const r of t)r.startsWith(e)&&t.delete(r)}))}))}(e,a,t);for(const t of a)p(e,t,n.value,r(t))}}},565:(e,t,r)=>{const{JSONPath:a}=r(58),{setNoAdditionalProperties:n}=r(251),s=r(242);function i(){return["$..examples.application/json"]}e.exports={buildValidationMap:function(e){return e.reduce(((e,t)=>{const r=function(e){const t=a.toPathArray(e).slice(),r=t.lastIndexOf("examples");return t.splice(r,t.length-r,"schema"),a.toPathString(t)}(t);return e[r]=(e[r]||new Set).add(t),e}),{})},escapeExampleName:function(e){return e},getJsonPathsToExamples:i,prepare:function(e,{noAdditionalProperties:t}={}){const r=s(e);return t&&n(r,["$..examples.application/json"]),r},unescapeExampleNames:function(e){return e}}},291:(e,t,r)=>{const{JSONPath:a}=r(58),n=r(242),{ApplicationError:s,ErrorType:i}=r(114),{setNoAdditionalProperties:o}=r(251),p="single";function l(){return["$..responses..content.application/json.example","$..responses..content.application/json.examples.*.value","$..parameters..example","$..parameters..examples.*.value","$..requestBody.content.application/json.example","$..requestBody.content.application/json.examples.*.value"]}e.exports={buildValidationMap:function(e){const t=new Map;return e.reduce(((e,r)=>{const{pathSchemaAsArray:n,exampleType:o}=function(e){const t=a.toPathArray(e).slice(),r=t.lastIndexOf("example"),n=r>-1?p:"multi",s=n===p?r:t.lastIndexOf("examples");return t.splice(s,t.length-s,"schema"),{exampleType:n,pathSchemaAsArray:t}}(r),l=a.toPathString(n),c=t.get(l);return c&&c!==o&&function(e){const t=e.slice(0,e.length-1);throw s.create({type:i.errorAndErrorsMutuallyExclusive,message:'Properties "error" and "errors" are mutually exclusive',params:{pathContext:a.toPointer(t)}})}(n),t.set(l,o),e[l]=(e[l]||new Set).add(r),e}),{})},escapeExampleName:function(e){return e.replace(/\['examples'\]\['(.*)\]\['value'\]$/,"['examples']['`$1]['value']")},getJsonPathsToExamples:l,prepare:function(e,{noAdditionalProperties:t}={}){const r=n(e);return t&&o(r,["$..responses..content.application/json.example","$..responses..content.application/json.examples.*.value","$..parameters..example","$..parameters..examples.*.value","$..requestBody.content.application/json.example","$..requestBody.content.application/json.examples.*.value"]),r},unescapeExampleNames:function(e){return e&&e.replace(/\/examples\/`(.*)\/value$/,"/examples/$1/value")}}},442:(e,t,r)=>{const a=r(914),n=r(337),s=r(910),i=r(747),o=r(622),p=r(878),l=r(969),{JSONPath:c}=r(58),u=r(542),{createError:m}=r(66).custom,d=r(99),{getValidatorFactory:f,compileValidate:h}=r(924),x=r(951),{ApplicationError:y,ErrorType:g}=r(114),{createValidationResponse:E,dereferenceJsonSchema:v}=r(754),P=Symbol("internal"),$="schemasWithExamples",b=["yaml","yml"],w=m(g.jsonPathNotFound);async function O(e,{noAdditionalProperties:t,ignoreFormats:r}={}){const a=x.getImplementation(e);e=await u.dereference(e),e=a.prepare(e,{noAdditionalProperties:t});let n=a.getJsonPathsToExamples().reduce(((t,r)=>t.concat(function(e,t){return c({json:e,path:t,resultType:d.path})}(e,r))),[]).map(a.escapeExampleName);return function({impl:e},t,r,{ignoreFormats:a}){const n=A(),s={valid:!0,statistics:n,errors:[]},i=I(r,{ignoreFormats:a});let o;try{o=e.buildValidationMap(t)}catch(e){if(!(e instanceof y))throw e;return s.valid=!1,s.errors.push(e),s}return Object.keys(o).forEach((e=>{!function({openapiSpec:e,createValidator:t,pathSchema:r,validationMap:a,statistics:n,validationResult:s}){const i=s.errors;a[r].forEach((a=>{const o=F(a,e),p=N(r,e,!0),l=q({createValidator:t,schema:p,example:o,statistics:n}).map((e=>(e.examplePath=c.toPointer(c.toPathArray(a)),e)));l.length&&(s.valid=!1,i.splice(i.length-1,0,...l))}))}({openapiSpec:r,createValidator:i,pathSchema:e,validationMap:o,statistics:n,validationResult:s})})),s.errors.forEach((t=>{t.examplePath=e.unescapeExampleNames(t.examplePath)})),s}({impl:a},n,e,{ignoreFormats:r})}async function j(e){let t;if(function(e){const t=e.split(".").pop();return b.includes(t)}(e))try{t=l.parse(i.readFileSync(e,"utf-8"))}catch(e){const{name:t,message:r}=e;throw new y(g.parseError,{message:`${t}: ${r}`})}else t=JSON.parse(i.readFileSync(e,"utf-8"));return await v(e,t)}function S(e){const t=A(),r=e(t);return E({errors:r,statistics:t})}function T(e,t,r,{cwdToMappingFile:a=!1,dirPathMapExternalExamples:p,ignoreFormats:l}){return s(Object.entries(t),(([t,c])=>{let u=null;try{u=N(t,e)}catch(e){return y.create(e)}return s(n([c]),(t=>{let n=null;try{const e=a?o.join(p,t):t;n=JSON.parse(i.readFileSync(e,"utf-8"))}catch(e){return[y.create(e)]}return q({createValidator:I(e,{ignoreFormats:l}),schema:u,example:n,statistics:r,filePathExample:t})}))}))}function A(){const e={[P]:{[$]:new Set},examplesTotal:0,examplesWithoutSchema:0};return Object.defineProperty(e,$,{enumerable:!0,get:()=>e[P].schemasWithExamples.size}),e}function F(e,t){return c({json:t,path:e,flatten:!0,wrap:!1,resultType:d.value})}function q({createValidator:e,schema:t,example:r,statistics:a,filePathExample:n}){const s=[];if(a.examplesTotal++,!t)return a.examplesWithoutSchema++,s;a[P].schemasWithExamples.add(t);const i=h(e(),t);return i(r)?s:s.concat(...i.errors.map(y.create)).map((e=>n?(e.exampleFilePath=n,e):e))}function I(e,{ignoreFormats:t}){return f(e,{schemaId:"auto",allErrors:!0,nullable:!0,formats:t&&t.reduce(((e,t)=>(e[t]=()=>!0,e)),{})})}function N(e,t,r=!1){const a=F(e,t);if(!r&&!a)throw new w(`Path to schema can't be found: '${e}'`,{params:{path:e}});return a}e.exports={default:O,validateFile:async function(e,{noAdditionalProperties:t,ignoreFormats:r}={}){let a=null;try{a=await j(e)}catch(e){return E({errors:[y.create(e)]})}return O(a,{noAdditionalProperties:t,ignoreFormats:r})},validateExample:async function(e,t,r,{noAdditionalProperties:a,ignoreFormats:n}={}){let s=null,o=null,p=null;try{s=JSON.parse(i.readFileSync(r,"utf-8")),p=await j(e),p=x.getImplementation(p).prepare(p,{noAdditionalProperties:a}),o=N(t,p)}catch(e){return E({errors:[y.create(e)]})}return S((e=>q({createValidator:I(p,{ignoreFormats:n}),schema:o,example:s,statistics:e,filePathExample:r})))},validateExamplesByMap:async function(e,t,{cwdToMappingFile:r,noAdditionalProperties:n,ignoreFormats:s}={}){let l=0;const c=p.sync(t,{nonull:!0});let u=[];for(let t of c){let a=null,p=null;try{a=JSON.parse(i.readFileSync(t,"utf-8")),p=await j(e),p=x.getImplementation(p).prepare(p,{noAdditionalProperties:n})}catch(e){u.push(E({errors:[y.create(e)]}));continue}l++,u.push(S((e=>T(p,a,e,{cwdToMappingFile:r,dirPathMapExternalExamples:o.dirname(t),ignoreFormats:s}).map((e=>Object.assign(e,{mapFilePath:t}))))))}return a(u.reduce(((e,t)=>{return e?(a=t,E({errors:(r=e).errors.concat(a.errors),statistics:Object.entries(r.statistics).reduce(((e,[t,n])=>$===t?([r,a].forEach((t=>{const r=t.statistics[P].schemasWithExamples.values();for(let t of r)e[P].schemasWithExamples.add(t)})),e):(e[t]=n+a.statistics[t],e)),A())})):t;var r,a}),null),{statistics:{matchingFilePathsMapping:l}})}}},754:(e,t,r)=>{const a=r(622),n=r(542);e.exports={createValidationResponse:function({errors:e,statistics:t={}}){return{valid:!e.length,statistics:t,errors:e}},dereferenceJsonSchema:async function(e,t){const r=process.cwd();process.chdir(a.dirname(e));const s=await n.dereference(t);return process.chdir(r),s}}},924:(e,t,r)=>{const{JSONPath:a}=r(58),n=r(403),s=r(663),i=r(574),o=r(217),p="$..$ref",l="https://www.npmjs.com/package/openapi-examples-validator/defs.json";e.exports={getValidatorFactory:function(e,t){const r=function(e){const t={$id:l};return a({path:p,json:e,callback(r){if(!r.startsWith("#"))return;const a=r.substring(1),s=n.get(e,a);n.set(t,a,s)}}),t}(e);return()=>{const e=new s(t);return function(e){e.removeSchema(""),e.addMetaSchema(o,o.id),e._opts.defaultMeta=o.id}(e),function(e){e.addFormat("int32",{type:"number",validate:i.int32}),e.addFormat("int64",{type:"string",validate:i.int64}),e.addFormat("float",{type:"number",validate:i.float}),e.addFormat("double",{type:"number",validate:i.double}),e.addFormat("byte",{type:"string",validate:i.byte})}(e),e.addSchema(r),e}},compileValidate:function(e,t){const r=function(e,t){const r=Object.assign({},e);return r.$id="https://www.npmjs.com/package/openapi-examples-validator/schema.json",r}(t);let n;a({path:p,json:r,callback(e,t,r){e.startsWith("#")&&(r.parent[r.parentProperty]=`${l}${e}`)}});try{n=e.compile(r)}catch(e){n=()=>{},n.errors=[e]}return n}}},217:e=>{e.exports={id:"http://json-schema.org/draft-04/schema#",$schema:"http://json-schema.org/draft-04/schema#",description:"Core schema meta-schema",definitions:{schemaArray:{type:"array",minItems:1,items:{$ref:"#"}},positiveInteger:{type:"integer",minimum:0},positiveIntegerDefault0:{allOf:[{$ref:"#/definitions/positiveInteger"},{default:0}]},simpleTypes:{enum:["array","boolean","integer","null","number","object","string"]},stringArray:{type:"array",items:{type:"string"},minItems:1,uniqueItems:!0}},type:"object",properties:{id:{type:"string"},$schema:{type:"string"},title:{type:"string"},description:{type:"string"},default:{},multipleOf:{type:"number",minimum:0,exclusiveMinimum:!0},maximum:{type:"number"},exclusiveMaximum:{type:"boolean",default:!1},minimum:{type:"number"},exclusiveMinimum:{type:"boolean",default:!1},maxLength:{$ref:"#/definitions/positiveInteger"},minLength:{$ref:"#/definitions/positiveIntegerDefault0"},pattern:{type:"string",format:"regex"},additionalItems:{anyOf:[{type:"boolean"},{$ref:"#"}],default:{}},items:{anyOf:[{$ref:"#"},{$ref:"#/definitions/schemaArray"}],default:{}},maxItems:{$ref:"#/definitions/positiveInteger"},minItems:{$ref:"#/definitions/positiveIntegerDefault0"},uniqueItems:{type:"boolean",default:!1},maxProperties:{$ref:"#/definitions/positiveInteger"},minProperties:{$ref:"#/definitions/positiveIntegerDefault0"},required:{$ref:"#/definitions/stringArray"},additionalProperties:{anyOf:[{type:"boolean"},{$ref:"#"}],default:{}},definitions:{type:"object",additionalProperties:{$ref:"#"},default:{}},properties:{type:"object",additionalProperties:{$ref:"#"},default:{}},patternProperties:{type:"object",additionalProperties:{$ref:"#"},default:{}},dependencies:{type:"object",additionalProperties:{anyOf:[{$ref:"#"},{$ref:"#/definitions/stringArray"}]}},enum:{type:"array",minItems:1,uniqueItems:!0},type:{anyOf:[{$ref:"#/definitions/simpleTypes"},{type:"array",items:{$ref:"#/definitions/simpleTypes"},minItems:1,uniqueItems:!0}]},format:{type:"string"},allOf:{$ref:"#/definitions/schemaArray"},anyOf:{$ref:"#/definitions/schemaArray"},oneOf:{$ref:"#/definitions/schemaArray"},not:{$ref:"#"}},dependencies:{exclusiveMaximum:["maximum"],exclusiveMinimum:["minimum"]},default:{}}},663:e=>{"use strict";e.exports=require("ajv")},815:e=>{"use strict";e.exports=require("decimal.js")},66:e=>{"use strict";e.exports=require("errno")},747:e=>{"use strict";e.exports=require("fs")},878:e=>{"use strict";e.exports=require("glob")},403:e=>{"use strict";e.exports=require("json-pointer")},542:e=>{"use strict";e.exports=require("json-schema-ref-parser")},58:e=>{"use strict";e.exports=require("jsonpath-plus")},242:e=>{"use strict";e.exports=require("lodash.clonedeep")},910:e=>{"use strict";e.exports=require("lodash.flatmap")},337:e=>{"use strict";e.exports=require("lodash.flatten")},914:e=>{"use strict";e.exports=require("lodash.merge")},622:e=>{"use strict";e.exports=require("path")},969:e=>{"use strict";e.exports=require("yaml")}},t={},r=function r(a){var n=t[a];if(void 0!==n)return n.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,r),s.exports}(442);module.exports=r})();
//# sourceMappingURL=index.js.map