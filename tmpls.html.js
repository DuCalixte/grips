;(function(e){function t(e,t){return e-t}var n=e.definePartial,r=e.cloneObj,i=e.extend,s=e.strEscapes,o=new Error("Unknown error"),u=e.RangeLiteralHash,a="tmpls.html";n(function(e,n){e=e||{},n=r(n)||{};var i,a="",f,l;return a+="\n",f=function(){function i(e,t,n,i,o){var u,a="",f,l;return n==null?a:(t=r(t),l={value:n,key:i,index:o,even:o%2===0,odd:o%2===1,first:o===0,last:o===c-1},a+='\n<p>\n	Template Source (<span class="source_collection_id">',a+=s(l.value.collection_id,{html:!0}),a+='</span>):<br>\n	<textarea class="tsource" data-collection-id="',a+=s(l.value.collection_id,{string:!0}),a+='" rows="15">',a+=s(l.value.collection_source,{html:!0}),a+="</textarea>\n</p>\n",a)}var a,l=0,c,h="",p,d;p=e.sources;if(p==null)return"";if(Object.prototype.toString.call(p)==="[object Array]"){c=p.length;for(a=0;a<c;a++)f=i(e,n,p[a],""+a,a),h+=f}else{if(typeof p!="object")return o;d=Object.keys(p),c=d.length;if(p instanceof u){d.sort(t);for(a=0;a<c;a++)f=i(e,n,p[d[a]],d[a],a),h+=f}else for(a in p)p.hasOwnProperty(a)&&(f=i(e,n,p[a],a,l++),h+=f)}return h}(),a+=f,a+='\n<p class="source_error"></p>\n',a},"tmpls.html#td_source"),n(function(e,n){e=e||{},n=r(n)||{};var i,a="",f,l;return a+="\n",f=function(){function i(e,t,n,i,o){var u,a="",f,l;return n==null?a:(t=r(t),l={value:n,key:i,index:o,even:o%2===0,odd:o%2===1,first:o===0,last:o===c-1},a+='\n<p>\n	Compiled Template (<span class="compile_collection_id">',a+=s(l.value.collection_id,{html:!0}),a+='</span>):<br>\n	<textarea class="tcompiled" rows="15" readonly>',a+=s(l.value.collection_compiled,{html:!0}),a+="</textarea>\n</p>\n",a)}var a,l=0,c,h="",p,d;p=e.compiles;if(p==null)return"";if(Object.prototype.toString.call(p)==="[object Array]"){c=p.length;for(a=0;a<c;a++)f=i(e,n,p[a],""+a,a),h+=f}else{if(typeof p!="object")return o;d=Object.keys(p),c=d.length;if(p instanceof u){d.sort(t);for(a=0;a<c;a++)f=i(e,n,p[d[a]],d[a],a),h+=f}else for(a in p)p.hasOwnProperty(a)&&(f=i(e,n,p[a],a,l++),h+=f)}return h}(),a+=f,a+="\n",a},"tmpls.html#td_compiled"),n(function(e,t){e=e||{},t=r(t)||{};var n,i="",o,u;return i+='\n<p>\n	Render Context Data (JSON):<br>\n	<textarea rows="15">',i+=s(e.data,{html:!0}),i+='</textarea>\n</p>\n<p class="data_error"></p>\n',i},"tmpls.html#td_data"),n(function(e,t){e=e||{},t=r(t)||{};var n,i="",o,u;return i+='\n<p>\n	Render Output (<span id="render_collection_id">',i+=s(e.collection_id,{html:!0}),i+='</span><span id="render_partial_id">',i+=s(e.partial_id,{html:!0}),i+='</span>):<br>\n	<textarea rows="15" readonly>',i+=s(e.rendered,{html:!0}),i+='</textarea>\n</p>\n<p class="render_error"></p>\n',i},"tmpls.html#td_rendered"),n(function(e,t){e=e||{},t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#main" }\n   Hello <b>{$insert $.who $}</b>!\n{$}\n',i},"tmpls.html#sample_tmpl_1"),n(function(e,t){e=e||{},t=r(t)||{};var n,i="",s,o;return i+='\n{\n   "who": "World"\n}\n',i},"tmpls.html#sample_data_1"),n(function(e,t){e=e||{},t=r(t)||{};var n,i="",s,o;return i+='\n{$: "#main" }\n   Hello <b>{$= $.who $}</b>!\n{$}\n',i},"tmpls.html#sample_tmpl_2"),n(function(e,t){e=e||{},t=r(t)||{};var n,i="",s,o;return i+='\n{\n   "who": "World"\n}\n',i},"tmpls.html#sample_data_2"),n(function(e,t){e=e||{},t=r(t)||{};var n,i="",s,o;return i+='\n{$define "main" }\n   Hello <b>{$insert $.who $}</b>!\n{$}\n',i},"tmpls.html#sample_tmpl_3"),n(function(e,t){e=e||{},t=r(t)||{};var n,i="",s,o;return i},"tmpls.html#sample_data_3"),n(function(e,t){e=e||{},t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#main" . }\n   Hello <b>{$insert $.who $}</b>!\n{$}\n',i},"tmpls.html#sample_tmpl_4"),n(function(e,t){e=e||{},t=r(t)||{};var n,i="",s,o;return i},"tmpls.html#sample_data_4"),n(function(e,t){e=e||{},t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#main" $}\n   Hello <b>{$insert $.who $}</b>!\n{$}\n',i},"tmpls.html#sample_tmpl_5"),n(function(e,t){e=e||{},t=r(t)||{};var n,i="",s,o;return i},"tmpls.html#sample_data_5"),n(function(e,t){e=e||{},t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#main" }\n   Hello <b>{$ insert $.who $}</b>!\n{$}\n',i},"tmpls.html#sample_tmpl_6"),n(function(e,t){e=e||{},t=r(t)||{};var n,i="",s,o;return i},"tmpls.html#sample_data_6"),n(function(e,t){e=e||{},t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#main" }\n   Hello <b>{$insert $.who $}</b>!\n{$}\nfoo\n',i},"tmpls.html#sample_tmpl_7"),n(function(e,t){e=e||{},t=r(t)||{};var n,i="",s,o;return i},"tmpls.html#sample_data_7"),n(function(e,t){e=e||{},t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#main" }\n   Hello <b>{$inser $.who $}</b>!\n{$}\n',i},"tmpls.html#sample_tmpl_8"),n(function(e,t){e=e||{},t=r(t)||{};var n,i="",s,o;return i},"tmpls.html#sample_data_8"),n(function(e,t){e=e||{},t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#main" }\n   Hello <b>{$insert $.who }</b>!\n{$}\n',i},"tmpls.html#sample_tmpl_9"),n(function(e,t){e=e||{},t=r(t)||{};var n,i="",s,o;return i},"tmpls.html#sample_data_9"),n(function(e,t){e=e||{},t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#main" }\n   Hello <b>{$insert $.who. $}</b>!\n{$}\n',i},"tmpls.html#sample_tmpl_10"),n(function(e,t){e=e||{},t=r(t)||{};var n,i="",s,o;return i},"tmpls.html#sample_data_10"),n(function(e,t){e=e||{},t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#main" }\n   Hello <b>{$insert $.who2 $}</b>!\n{$}\n',i},"tmpls.html#sample_tmpl_11"),n(function(e,t){e=e||{},t=r(t)||{};var n,i="",s,o;return i+='\n{\n   "who": "World"\n}\n',i},"tmpls.html#sample_data_11"),n(function(e,t){e=e||{},t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#main" }\n   Hello <b>{$insert $.who2.me $}</b>!\n{$}\n',i},"tmpls.html#sample_tmpl_12"),n(function(e,t){e=e||{},t=r(t)||{};var n,i="",s,o;return i+='\n{\n   "who": "World"\n}\n',i},"tmpls.html#sample_data_12"),n(function(e,t){e=e||{},t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#main" |\n	who = $.who2[3]\n}\n   Hello <b>{$insert who $}</b>!\n{$}\n',i},"tmpls.html#sample_tmpl_13"),n(function(e,t){e=e||{},t=r(t)||{};var n,i="",s,o;return i+='\n{\n   "who": "World"\n}\n',i},"tmpls.html#sample_data_13"),n(function(e,t){e=e||{},t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#who" }\n   <b>{$insert $.who $}</b>\n{$}\n\n{$define "#main" }\n   Hello {$partial "#who" $}!\n{$}\n',i},"tmpls.html#sample_tmpl_14"),n(function(e,t){e=e||{},t=r(t)||{};var n,i="",s,o;return i+='\n{\n   "who": "World"\n}\n',i},"tmpls.html#sample_data_14"),n(function(e,t){e=e||{},t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#who" }\n   <b>{$insert $.who $}</b>\n{$}\n\n{$define "#main" |\n	who = $.who ? "#who"\n}\n   Hello {$partial who $}!\n{$}\n',i},"tmpls.html#sample_tmpl_15"),n(function(e,t){e=e||{},t=r(t)||{};var n,i="",s,o;return i+='\n{\n   "who": "World"\n}\n',i},"tmpls.html#sample_data_15"),n(function(e,t){e=e||{},t=r(t)||{};var n,i="",s,o;return i+='\n{$define "#main" |\n	checked[0..2] = $.myradio ? "checked"\n}\n   <input type="radio" name="myradio" value="0" {$insert checked[0] $}> 0\n   <input type="radio" name="myradio" value="1" {$insert checked[1] $}> 1\n   <input type="radio" name="myradio" value="2" {$insert checked[2] $}> 2\n{$}\n',i},"tmpls.html#sample_tmpl_16"),n(function(e,t){e=e||{},t=r(t)||{};var n,i="",s,o;return i+='\n{\n   "myradio": 2\n}\n',i},"tmpls.html#sample_data_16"),n(function(e,t){e=e||{},t=r(t)||{};var n,i="",s,o;return i+='\n\n{$comment NOTE: this shows a little "trick" (aka "shortcut") to loop over the pre-computation hash, to avoid having to specify the values range twice. /$}\n\n\n{$define "#main" |\n	options[0..2] = $.myradio ? "checked"\n}\n   {$loop options }\n      <input type="radio" name="myradio" value="{$insert _.key $}" {$insert _.value $}> {$insert _.key $}\n   {$}\n{$}\n',i},"tmpls.html#sample_tmpl_17"),n(function(e,t){e=e||{},t=r(t)||{};var n,i="",s,o;return i+='\n{\n   "myradio": 2\n}\n',i},"tmpls.html#sample_data_17")})(this.grips||grips);
