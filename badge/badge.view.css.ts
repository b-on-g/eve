namespace $.$$ {

	const { rem } = $mol_style_unit

	$mol_style_define( $eve_badge, {
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		minWidth: rem( 1.125 ),
		height: rem( 1.125 ),
		padding: {
			left: rem( 0.375 ),
			right: rem( 0.375 ),
			top: 0,
			bottom: 0,
		},
		borderRadius: rem( 62.4375 ),
		boxSizing: 'border-box',

		Text: {
			fontSize: rem( 0.6875 ),
			fontWeight: '600',
			lineHeight: '1',
		},
	} )

}
