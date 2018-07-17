function broadcast(componentName, eventName, params) {
	this.$children.forEach(child => {
	  var name = child.$options.componentName;
  
	  if (name === componentName) {
		child.$emit.apply(child, [eventName].concat(params));
	  } else {
		broadcast.apply(child, [componentName, eventName].concat([params]));
	  }
	});
  }
  export default {
	methods: {
	  // 向上传递冒泡事件 $emit 只能向上传自定义事件
	  // 指定上级的某个组件， 某个事件， 来执行， 并拿到我的参数
	  dispatch(componentName, eventName, params) {
		var parent = this.$parent; //寻找父组件
		var name = parent.$options.componentName;
		// console.log(name);
		while(parent && (name !== componentName || !name)) {
		  parent = parent.$paren
		}
		// console.log(parent);
		// console.log(1111)
		if(parent) {
		  // parent.$emit: 内部this被改写
		//   console.log(parent.$emit())
		// console.log(parent.$emit)
		  parent.$emit.apply(parent, [eventName].concat(params));
		}
		
		
	  },
	  broadcast(componentName, eventName, params) {
		broadcast.call(this, componentName, eventName, params);
	  }
	}
  }
  