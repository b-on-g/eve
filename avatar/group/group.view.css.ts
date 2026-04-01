namespace $.$$ {

	const { rem } = $mol_style_unit

	/* Ring via border: box-shadow on the same node as overflow:hidden can paint incorrectly with overlapping avatars. */
	$mol_style_attach( 'eve/avatar/group/group.view.css', `[eve_avatar_group] > [eve_avatar]:not(:first-child) {
	margin-inline-start: ${ rem( -0.5 ) };
}
[eve_avatar_group] > [eve_avatar] {
	position: relative;
	border: ${ rem( 0.125 ) } solid var(--mol_theme_back);
}
` )

}
