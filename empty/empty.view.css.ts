namespace $.$$ {

	const { rem } = $mol_style_unit

	$mol_style_define( $eve_empty, {
		padding: rem( 2 ),
		textAlign: 'center',
		maxWidth: rem( 28 ),
		margin: {
			top: 0,
			bottom: 0,
			left: 'auto',
			right: 'auto',
		},
		boxSizing: 'border-box',

		Icon_wrap: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			width: rem( 4 ),
			height: rem( 4 ),
			borderRadius: '50%',
		},

		Icon: {
			fontSize: rem( 2 ),
			opacity: 0.45,
		},

		Title: {
			fontSize: rem( 1.125 ),
			fontWeight: '600',
			margin: 0,
		},

		Description: {
			fontSize: rem( 0.875 ),
			opacity: 0.8,
			margin: 0,
		},

		Actions: {
			justifyContent: 'center',
		},
	} )

}
