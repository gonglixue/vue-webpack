require('./main.css');
var Vue = require('vue');
var greeter = require('./greeter.js');
document.getElementById('root').appendChild(greeter())

new Vue({
	data:{
		message:'hello vue.js'
	}
}).$mount('#app')