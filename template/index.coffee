class {{name}}
	###
  Name of the component
	###
	name: '{{name}}'

	###
  	The attributes of this component
   	@returns Object
	###
	data: () =>
		return {
			message: 'Hello World {{name}}!'
		}


	###
  	The Component is ready
	###
	ready : () =>
		console.log "{{name}} is ready"


module.export = new {{name}}