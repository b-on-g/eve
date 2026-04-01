namespace $.$$ {

	/**
	 * Stacked avatars; APG group pattern: https://www.w3.org/WAI/ARIA/apg/patterns/group/
	 */
	export class $eve_avatar_group extends $.$eve_avatar_group {

		@$mol_mem
		group_aria_label() {
			return 'People'
		}

		@$mol_mem
		avatars() {
			return {} as Record<string, string>
		}

		@$mol_mem
		override Avatars() {
			return this.avatar_ids().map( id => this.Avatar( id ) )
		}

		@$mol_mem
		avatar_ids() {
			return Object.keys( this.avatars() )
		}

		@$mol_mem_key
		avatar_name( id: string ) {
			return this.avatars()[ id ] || id
		}

		@$mol_mem_key
		avatar_uri( id: string ) {
			return ''
		}

	}

}
