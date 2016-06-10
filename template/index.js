export default {
	/**
	 * Name of the component
	 */
	name: '{{name}}',

	/**
	 * The attributes of this component
	 * @returns Object
	 */
	data() {
		return {
			message: 'Hello World {{name}}!'
		}
	},

	ready() {
		console.log("{{name}} is ready");
	}
}