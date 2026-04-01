namespace $.$$ {

	export class $eve_checkbox extends $.$eve_checkbox {

		@$mol_mem
		checked( next?: boolean ): boolean {
			return next ?? false
		}

		@$mol_mem
		disabled( next?: boolean ): boolean {
			return next ?? false
		}

		@$mol_mem
		indeterminate( next?: boolean ): boolean {
			return next ?? false
		}

		/**
		 * When false, click does not toggle `checked` (parent drives state, e.g. checkbox group).
		 */
		@$mol_mem
		click_toggle( next?: boolean ): boolean {
			return next ?? true
		}

		override variant(): $eve_surface_variant {
			return this.checked() ? 'solid' : 'outline'
		}

		event_click( next?: Event ) {
			if( this.disabled() ) {
				next?.preventDefault()
				return
			}
			if( next?.defaultPrevented ) return
			if( this.click_toggle() ) this.checked( !this.checked() )
			if( next ) next.preventDefault()
		}

		aria_checked() {
			if( this.indeterminate() ) return 'mixed'
			return String( this.checked() )
		}

	}
}

