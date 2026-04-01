namespace $.$$ {

	/**
	 * Semantic text styles (variants, alignment, optional weight). Colors / interactive: `$eve_surface` (`text`).
	 * `variable_font`: same trade-off as MO `Typography` + `TypographyProvider` — `font-variation-settings: "wght"` vs `font-weight` (Safari).
	 */
	export class $eve_text extends $.$eve_text {

		static readonly TEXT_VARIANTS = [
			'headingXs',
			'headingSm',
			'headingMd',
			'headingLg',
			'headingXl',
			'heading2xl',
			'heading3xl',
			'bodyXs',
			'bodySm',
			'bodyMd',
			'bodyLg',
		] as const

		static readonly TEXT_ALIGNS = [ 'start', 'center', 'end', 'justify' ] as const

		static readonly FONT_WEIGHT_OVERRIDES = [ 'regular', 'medium', 'semibold', 'bold' ] as const

		/** Non-exclusive; combine e.g. `underline` + `strikethrough`. */
		static readonly MODIFIERS = [ 'uppercase', 'strikethrough', 'underline' ] as const

		@$mol_mem
		text_variant( next?: typeof $eve_text.TEXT_VARIANTS[ number ] ) {
			return next ?? 'bodyMd'
		}

		@$mol_mem
		text_align( next?: typeof $eve_text.TEXT_ALIGNS[ number ] ) {
			return next ?? 'start'
		}

		@$mol_mem
		font_weight_override( next?: typeof $eve_text.FONT_WEIGHT_OVERRIDES[ number ] | null ) {
			return next ?? null
		}

		/**
		 * Variable font axis `wght` via `font-variation-settings` instead of `font-weight` (MO Typography / Safari).
		 */
		@$mol_mem
		variable_font( next?: boolean ) {
			return next ?? false
		}

		/** Only `MODIFIERS` tokens; order preserved for stable `eve_text_modifiers` attr. `modifiers()` comes from the view tree — do not `@$mol_mem` it or it overrides `$eve_link` etc. */
		modifiers_normalized(): readonly ( typeof $eve_text.MODIFIERS[ number ] )[] {
			const allow = new Set<string>( $eve_text.MODIFIERS )
			const out: ( typeof $eve_text.MODIFIERS[ number ] )[] = []
			const seen = new Set<string>()
			for( const m of this.modifiers() ) {
				if( !allow.has( m ) || seen.has( m ) ) continue
				seen.add( m )
				out.push( m as typeof $eve_text.MODIFIERS[ number ] )
			}
			return out
		}

		@$mol_mem
		content() {
			return ''
		}

		override attr() {
			const base = super.attr()
			const fw = this.font_weight_override()
			const mods = this.modifiers_normalized()
			return {
				...base,
				eve_text_variant: this.text_variant(),
				eve_text_align: this.text_align(),
				...( fw ? { eve_text_font_weight: fw } : {} ),
				...( this.variable_font() ? { eve_text_variable: true } : {} ),
				...( mods.length ? { eve_text_modifiers: mods.join( ' ' ) } : {} ),
			}
		}

	}

}
