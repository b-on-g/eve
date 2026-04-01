namespace $.$$ {

	export class $eve_checkbox_group extends $.$eve_checkbox_group {

		@$mol_mem
		group_aria_label() {
			return 'Options'
		}

		@$mol_mem
		override Options() {
			return this.option_ids().map( id => this.Option( id ) )
		}

	}

}
