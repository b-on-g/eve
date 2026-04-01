namespace $.$$ {

	const { rem } = $mol_style_unit

	/* $mol_image is the <img>; fill the circular frame (SVGs often lack intrinsic size for flex). */
	$mol_style_attach( 'eve/avatar/avatar.view.css', `[eve_avatar] > [mol_image] {
	width: 100%;
	height: 100%;
	object-fit: cover;
	display: block;
}
` )

	$mol_style_define( $eve_avatar, {
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: rem( 2.5 ),
		height: rem( 2.5 ),
		borderRadius: '50%',
		overflow: 'hidden',
		flex: {
			shrink: 0,
		},
		boxSizing: 'border-box',
	} )

}
