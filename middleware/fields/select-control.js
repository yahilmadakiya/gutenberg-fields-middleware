/**
 * Select field.
 */

const { SelectControl } = wp.components;

const selectControl = ( props, config, attributeKey ) => {
	const defaultAttributes = {

		onChange( value ) {
			const newAttributes = {};
			newAttributes[ attributeKey ] = value;
			props.setAttributes( newAttributes );
		},

		value: props.attributes[ attributeKey ] || '',
	};

	const fieldAttributes = _.extend( defaultAttributes, config );

	delete fieldAttributes.type;

	return (
		<SelectControl
			{ ...fieldAttributes }
		/>
	);
};

export default selectControl;
