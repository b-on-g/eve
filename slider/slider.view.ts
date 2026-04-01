namespace $.$$ {

	/**
	 * Native range input; semantics: https://www.w3.org/WAI/ARIA/apg/patterns/slider/
	 */
	export class $eve_slider extends $.$eve_slider {

		@$mol_mem
		label() {
			return ''
		}

		@$mol_mem
		value( next?: number ) {
			const min = this.min()
			const max = this.max()
			const cur = next ?? min
			return Math.min( max, Math.max( min, cur ) )
		}

		@$mol_mem
		min() {
			return 0
		}

		@$mol_mem
		max() {
			return 100
		}

		@$mol_mem
		step() {
			return 1
		}

		min_str() {
			return String( this.min() )
		}

		max_str() {
			return String( this.max() )
		}

		step_str() {
			return String( this.step() )
		}

		value_str() {
			return String( this.value() )
		}

		value_text() {
			return this.value_str()
		}

		event_input( next?: Event ) {
			const t = next?.target as HTMLInputElement | undefined
			if( !t ) return
			const v = Number( t.value )
			if( Number.isFinite( v ) ) this.value( v )
		}

	}

}
