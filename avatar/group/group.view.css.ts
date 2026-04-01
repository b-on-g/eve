namespace $.$$ {

	const { rem } = $mol_style_unit

	$mol_style_attach( 'eve/avatar/group/group.view.css', `[eve_avatar_group] > [eve_avatar]:not(:first-child) {
	margin-inline-start: ${ rem( -0.5 ) };
}
[eve_avatar_group] > [eve_avatar] {
	position: relative;
	box-shadow: 0 0 0 ${ rem( 0.125 ) } var(--mol_theme_back);
}
` )

}
