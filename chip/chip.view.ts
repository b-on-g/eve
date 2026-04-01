namespace $.$$ {

	/** Removable label; APG button pattern for the remove control: https://www.w3.org/WAI/ARIA/apg/patterns/button/ */
	export class $eve_chip extends $.$eve_chip {

		@$mol_mem
		label() {
			return ''
		}

		@$mol_mem
		remove_hint() {
			return 'Remove'
		}

		remove_click( event?: Event ) {
			void event
		}

	}

}
