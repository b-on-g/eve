namespace $.$$ {

	const { rem } = $mol_style_unit

	$mol_style_define( $eve_chip, {
		display: 'inline-flex',
		maxWidth: '100%',
		padding: {
			left: rem( 0.5 ),
			right: rem( 0.5 ),
			top: rem( 0.125 ),
			bottom: rem( 0.125 ),
		},
		borderRadius: rem( 62.4375 ),
		gap: rem( 0.25 ),
		boxSizing: 'border-box',

		Label: {
			fontSize: rem( 0.8125 ),
			lineHeight: '1.25',
			whiteSpace: 'nowrap',
			overflow: 'hidden',
			textOverflow: 'ellipsis',
		},

		Remove: {
			minHeight: rem( 1.25 ),
			minWidth: rem( 1.25 ),
			padding: 0,
		},

		Remove_icon: {
			fontSize: rem( 0.75 ),
		},
	} )

}
