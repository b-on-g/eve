namespace $.$$ {

	/** Empty state region; label the block for SRs: https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/ */
	export class $eve_empty extends $.$eve_empty {

		@$mol_mem
		title() {
			return 'Nothing here'
		}

		@$mol_mem
		description() {
			return ''
		}

		@$mol_mem
		override attr() {
			return {
				...super.attr(),
				'aria-label': this.title(),
			}
		}

	}

}
