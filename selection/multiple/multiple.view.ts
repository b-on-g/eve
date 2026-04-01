namespace $.$$ {

	/**
	 * Multi-select option list: `selected()` holds chosen option ids (from `options()` keys).
	 */
	export class $eve_selection_multiple extends $.$eve_selection_multiple {

		options(): Record<string, string> {
			return {}
		}

		@$mol_mem
		selected( next?: readonly string[] ): readonly string[] {
			return next ? [ ...next ] : []
		}

		@$mol_mem
		option_ids() {
			return Object.keys( this.options() )
		}

		@$mol_mem_key
		option_value( id: string ): string {
			return id
		}

		@$mol_mem_key
		option_label( id: string ): string {
			return this.options()[ id ] || id
		}

		@$mol_mem_key
		option_selected( id: string ): boolean {
			return this.selected().includes( id )
		}

		@$mol_mem_key
		option_disabled( id: string ): boolean {
			return false
		}

		@$mol_mem_key
		option_indeterminate( id: string ): boolean {
			return false
		}

		@$mol_mem_key
		option_click( id: string, event?: Event ) {

			if( !event ) return null
			if( this.option_disabled( id ) ) return event

			const cur = new Set( this.selected() )
			if( cur.has( id ) ) cur.delete( id )
			else cur.add( id )

			this.selected( [ ...cur ] )
			return event
		}

	}

}
