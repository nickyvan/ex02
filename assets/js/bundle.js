!function(e){function n(n){for(var r,a,c=n[0],v=n[1],s=n[2],u=0,f=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(r in v)Object.prototype.hasOwnProperty.call(v,r)&&(e[r]=v[r]);for(l&&l(n);f.length;)f.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,c=1;c<t.length;c++){var v=t[c];0!==i[v]&&(r=!1)}r&&(o.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},i={0:0},o=[];function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.e=function(e){var n=[],t=i[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=i[e]=[n,r]}));n.push(t[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=function(e){return a.p+"assets/js/"+({1:"index"}[e]||e)+".js"}(e);var v=new Error;o=function(n){c.onerror=c.onload=null,clearTimeout(s);var t=i[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;v.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",v.name="ChunkLoadError",v.type=r,v.request=o,t[1](v)}i[e]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(n)},a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/",a.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],v=c.push.bind(c);c.push=n,c=c.slice();for(var s=0;s<c.length;s++)n(c[s]);var l=v;o.push([152,2]),t()}({152:function(e,n,t){t(153),t(378),t(379),t(380),t(151),t(383),e.exports=t(382)},382:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return c}));t(151),t(381);var r=t(4);var i=function e(n,t,i,o){var a=this;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.init=function(e,n){a.side=Math.ceil(Math.sqrt(n.length/3)),a.vUniforms.side.value=a.side;for(var t=[],i=0;i<3*Math.pow(a.side,2);i+=3)void 0!=n[i]?(t[i+0]=n[i+0],t[i+1]=n[i+1],t[i+2]=n[i+2],a.uvs[i/3*2+0]=i/3%a.side/(a.side-1),a.uvs[i/3*2+1]=Math.floor(i/3/a.side)/(a.side-1)):(t[i+0]=0,t[i+1]=0,t[i+2]=0);a.vUniforms.velocityInit.value=new r.e(new Float32Array(t),a.side,a.side,r.r,r.g),a.vUniforms.velocityInit.value.needsUpdate=!0;var o=new r.k(new r.p(2,2),new r.u({uniforms:{velocity:{type:"t",value:a.vUniforms.velocityInit.value}},vertexShader:"#define GLSLIFY 1\nvarying vec2 vUv;\n\nvoid main(void){\n  vUv=uv;\n  gl_Position=vec4(position,1.);\n}",fragmentShader:"#define GLSLIFY 1\nuniform sampler2D velocity;\n\nvarying vec2 vUv;\n\nvoid main(void){\n  gl_FragColor=texture2D(velocity,vUv);\n}"}));for(i=0;i<2;i++)a.acceleration[i].setSize(a.side,a.side),a.velocity[i].setSize(a.side,a.side);a.vScene.add(o),e.setRenderTarget(a.velocity[0]),e.render(a.vScene,a.camera),e.setRenderTarget(a.velocity[1]),e.render(a.vScene,a.camera),a.vScene.remove(o),a.vScene.add(a.velocityMesh),a.aScene.add(a.accelerationMesh)},this.createMesh=function(e,n,t){return new r.k(new r.p(2,2),new r.u({uniforms:e,vertexShader:n,fragmentShader:t}))},this.render=function(e,n){var t=Math.abs(a.targetIndex-1),r=a.targetIndex;a.aUniforms.acceleration.value=a.acceleration[t].texture,a.aUniforms.velocity.value=a.velocity[r].texture,e.setRenderTarget(a.acceleration[r]),e.render(a.aScene,a.camera),a.vUniforms.acceleration.value=a.acceleration[r].texture,a.vUniforms.velocity.value=a.velocity[r].texture,e.setRenderTarget(a.velocity[t]),e.render(a.vScene,a.camera),a.targetIndex=t,a.aUniforms.time.value+=n,a.vUniforms.time.value+=n},this.getBufferAttributeUv=function(){return new r.b(new Float32Array(a.uvs),2)},this.getCurrentVelocity=function(){return a.velocity[Math.abs(a.targetIndex-1)].texture},this.getCurrentAcceleration=function(){return a.acceleration[Math.abs(a.targetIndex-1)].texture},this.side=0,this.aScene=new r.t,this.vScene=new r.t,this.camera=new r.o(45,1,1,1e3),this.option={type:r.g,minFilter:r.j,magFilter:r.l},this.acceleration=[new r.x(0,0,this.option),new r.x(0,0,this.option)],this.velocity=[new r.x(0,0,this.option),new r.x(0,0,this.option)],this.aUniforms={resolution:{type:"v2",value:new r.v(document.body.clientWidth,window.innerHeight)},velocity:{type:"t",value:null},acceleration:{type:"t",value:null},time:{type:"f",value:0}},this.vUniforms={resolution:{type:"v2",value:new r.v(document.body.clientWidth,window.innerHeight)},side:{type:"f",value:0},velocityInit:{type:"t",value:null},velocity:{type:"t",value:null},acceleration:{type:"t",value:null},time:{type:"f",value:0}},this.accelerationMesh=this.createMesh(this.aUniforms,n,t),this.velocityMesh=this.createMesh(this.vUniforms,i,o),this.uvs=[],this.targetIndex=0};var o=function e(){var n=this;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.init=function(e){n.obj=n.createObj(e)},this.createObj=function(e){for(var t=window.innerWidth>768?8:6,o=new r.m(100,t),a=o.attributes.position.array,c=[],v=0;v<a.length;v+=3)c[v+0]=a[v+0]+10*(2*Math.random()-1),c[v+1]=a[v+1]+10*(2*Math.random()-1),c[v+2]=a[v+2]+10*(2*Math.random()-1);return n.physicsRenderer=new i("#define GLSLIFY 1\nvarying vec2 vUv;\nvoid main(void){\n  vUv=uv;\n  gl_Position=vec4(position,1.);\n}",'#define GLSLIFY 1\nuniform vec2 resolution;\nuniform sampler2D velocity;\nuniform sampler2D acceleration;\nuniform float time;\n// uniform vec2 vTouchMove;\n\nvarying vec2 vUv;\n\n//\n// GLSL textureless classic 3D noise "cnoise",\n// with an RSL-style periodic variant "pnoise".\n// Author:  Stefan Gustavson (stefan.gustavson@liu.se)\n// Version: 2011-10-11\n//\n// Many thanks to Ian McEwan of Ashima Arts for the\n// ideas for permutation and gradient selection.\n//\n// Copyright (c) 2011 Stefan Gustavson. All rights reserved.\n// Distributed under the MIT license. See LICENSE file.\n// https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n// Classic Perlin noise\nfloat cnoise(vec3 P)\n{\n  vec3 Pi0 = floor(P); // Integer part for indexing\n  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n  return 2.2 * n_xyz;\n}\n\n// #pragma glslify:drag=require(glsl-force/drag)\n\nvoid main(void){\n  vec3 v=texture2D(velocity,vUv).xyz;\n  vec3 a=texture2D(acceleration,vUv).xyz;\n  float noise=sqrt(sqrt(length(v)))*10.;\n  // vec3 d=drag(a,.028);\n  float fx=cnoise(vec3(time*.1,v.y/noise,v.z/noise));\n  float fy=cnoise(vec3(v.x/noise,time*.1,v.z/noise));\n  float fz=cnoise(vec3(v.x/noise,v.y/noise,time*.1));\n  vec3 f1=vec3(fx,fy,fz)*.5;\n  // vec3 f2=vec3(vTouchMove*16.*(resolution/640.),0.);\n  vec3 f3=a+f1;\n  float vStep=1.-step(1000.,length(v+f3));\n  gl_FragColor=vec4(f3*vStep,1.);\n}',"#define GLSLIFY 1\nvarying vec2 vUv;\nvoid main(void){\n  vUv=uv;\n  gl_Position=vec4(position,1.);\n}","#define GLSLIFY 1\nuniform sampler2D velocity;\nuniform sampler2D acceleration;\nuniform float time;\n\nvarying vec2 vUv;\n\nvec3 spherical(float radian1, float radian2, float radius) {\n  return vec3(\n    cos(radian1) * cos(radian2) * radius,\n    sin(radian1) * radius,\n    cos(radian1) * sin(radian2) * radius\n  );\n}\n\nconst float radius=100.;\n\nvoid main(void){\n  vec3 a=texture2D(acceleration,vUv).xyz;\n  vec3 v=texture2D(velocity,vUv).xyz;\n  float vStep=step(.000001,length(a));\n  gl_FragColor=vec4(\n    (a+v)*vStep+normalize(v+spherical(time,-time,1.))*radius*(1.-vStep),\n    1.\n  );\n}"),n.physicsRenderer.init(e,c),n.uniforms.velocity.value=n.physicsRenderer.getCurrentVelocity(),n.uniforms.acceleration.value=n.physicsRenderer.getCurrentAcceleration(),o.setAttribute("uvVelocity",n.physicsRenderer.getBufferAttributeUv()),new r.q(o,new r.s({uniforms:n.uniforms,vertexShader:"#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uvVelocity;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float time;\nuniform sampler2D acceleration;\nuniform sampler2D velocity;\n\nvarying vec3 vAcceleration;\n\nvoid main(){\n  vec3 a=texture2D(acceleration,uvVelocity).xyz;\n  vec3 v=texture2D(velocity,uvVelocity).xyz;\n  vec4 mvPosition=modelViewMatrix*vec4(v,1.);\n  vAcceleration=a;\n  gl_PointSize=500./length(mvPosition.xyz);\n  gl_Position=projectionMatrix*mvPosition;\n}",fragmentShader:"precision highp float;\n#define GLSLIFY 1\n\nuniform float time;\n\nvarying vec3 vAcceleration;\n\nvec3 convertHsvToRgb(vec3 c) {\n  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\n\nvoid main(){\n  float start=smoothstep(time,0.,1.);\n  vec3 n;\n  n.xy=gl_PointCoord*2.-1.;\n  n.z=1.-dot(n.xy,n.xy);\n  if(n.z<0.)discard;\n  float aLength=length(vAcceleration);\n  vec3 color=convertHsvToRgb(vec3(aLength*.08+time*.05,.5,.8));\n  gl_FragColor=vec4(color,.15*start);\n}",transparent:!0,depthWrite:!1,blending:r.a}))},this.render=function(e,t){n.physicsRenderer.render(e,t),n.uniforms.time.value+=t},this.uniforms={time:{type:"f",value:0},velocity:{type:"t",value:null},acceleration:{type:"t",value:null}},this.physicsRenderer=null,this.obj};var a=function e(){var n=this;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.init=function(){n.renderer=new r.y({antialias:!1}),n.renderer.setSize(document.body.clientWidth,window.innerHeight),n.renderer.setClearColor(1118481,1),document.body.appendChild(n.renderer.domElement),n.scene=new r.t,n.camera=new r.o(45,document.body.clientWidth/window.innerHeight,1,1e4),n.clock=new r.c,n.camera.position.set(0,0,1e3),n.camera.lookAt(new r.w),n.points=new o,n.points.init(n.renderer),n.scene.add(n.points.obj),n.renderLoop()},this.render=function(){var e=n.clock.getDelta();n.points.render(n.renderer,e),n.renderer.setRenderTarget(null),n.renderer.render(n.scene,n.camera)},this.renderLoop=function(){n.render(),requestAnimationFrame(n.renderLoop)},this.init()};var c=function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),new a};window.addEventListener("DOMContentLoaded",(function(){new c}))}});