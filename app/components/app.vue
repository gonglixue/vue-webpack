<script>
	//es6
	export default{
		el:'#app',
		// data:function(){}
		data(){
			return {
				name:'gonglixue',
				age:'21'

			}
		}
	}
</script>

<template>
    <div>
        <h1>姓名：{{name}}</h1>
        <h2>{{age}}</h2>
    </div>
</template>
<style lang="sass"  rel="stylesheet/sass">
    /* 测试一下对sass的编译 */
    $qwe:#098;
    body{
        background-color:$qwe;
        h1{
            background-color:#eee;
            color:red;
            transform:translate(10%,10%);/* 测试自动加前缀 */
        }
        h1:hover{
            height:100px;
        }
        h2{
            background-color:#999;
        }
    }
</style>