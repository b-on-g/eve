namespace $.$$ {

	const { rem } = $mol_style_unit

	/**
	 * Per-variant size + line-height; weight via `font-weight` (static fonts) and `--eve_text_wght` for
	 * variable fonts — same idea as MO Typography (`font-variation-settings: "wght" var(--…)` vs `font-weight`),
	 * see `packages/ui` TypographyProvider + typography-naive.
	 */
	const w = ( size: number, wght: number, line: number ) => ( {
		fontSize: rem( size ),
		lineHeight: String( line ),
		fontWeight: String( wght ),
		'--eve_text_wght': String( wght ),
	} as const )

	$mol_style_define( $eve_text, {
		margin: 0,

		Body: {
			margin: 0,
			display: 'block',
		},

		'@': {
			eve_text_align: {
				start: { textAlign: 'start' },
				center: { textAlign: 'center' },
				end: { textAlign: 'end' },
				justify: { textAlign: 'justify' },
			},

			eve_text_font_weight: {
				regular: { Body: { fontWeight: '400', '--eve_text_wght': '400' } },
				medium: { Body: { fontWeight: '500', '--eve_text_wght': '500' } },
				semibold: { Body: { fontWeight: '600', '--eve_text_wght': '600' } },
				bold: { Body: { fontWeight: '700', '--eve_text_wght': '700' } },
			},

			eve_text_variant: {
				headingXs: { Body: w( 0.75, 600, 1.25 ) },
				headingSm: { Body: w( 0.875, 600, 1.25 ) },
				headingMd: { Body: w( 1, 600, 1.3 ) },
				headingLg: { Body: w( 1.125, 700, 1.3 ) },
				headingXl: { Body: w( 1.25, 700, 1.3 ) },
				heading2xl: { Body: w( 1.5, 700, 1.25 ) },
				heading3xl: { Body: w( 1.875, 700, 1.2 ) },
				bodyXs: { Body: w( 0.6875, 400, 1.4 ) },
				bodySm: { Body: w( 0.75, 400, 1.45 ) },
				bodyMd: { Body: w( 0.875, 400, 1.5 ) },
				bodyLg: { Body: w( 1, 400, 1.5 ) },
			},

			/* After variant / weight: do not mix `font-weight` with `font-variation-settings` (Safari). */
			eve_text_variable: {
				true: {
					Body: {
						fontWeight: 'normal',
						fontVariationSettings: '"wght" var(--eve_text_wght)',
					},
				},
			},
		},
	} )

	/* MO `.mo-typography_variable`: Safari + variable fonts (not typed in $mol_style_define). */
	$mol_style_attach( 'eve/text/text.variable.css', `[eve_text_variable] [mol_text] {
	-webkit-font-smoothing: antialiased;
	text-rendering: geometricPrecision;
}
` )

	$mol_style_attach( 'eve/text/text.modifiers.css', `[eve_text_modifiers~="uppercase"] [mol_text] {
	text-transform: uppercase;
}
[eve_text_modifiers~="underline"]:not([eve_text_modifiers~="strikethrough"]) [mol_text] {
	text-decoration: underline;
	text-underline-offset: ${ rem( 0.125 ) };
}
[eve_text_modifiers~="strikethrough"]:not([eve_text_modifiers~="underline"]) [mol_text] {
	text-decoration: line-through;
}
[eve_text_modifiers~="underline"][eve_text_modifiers~="strikethrough"] [mol_text] {
	text-decoration: underline line-through;
	text-underline-offset: ${ rem( 0.125 ) };
}
` )

}
