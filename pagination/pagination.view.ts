namespace $.$$ {

	/**
	 * Page navigation; pattern: https://www.w3.org/WAI/ARIA/apg/patterns/pagination/
	 */
	export class $eve_pagination extends $.$eve_pagination {

		@$mol_mem
		pagination_label() {
			return 'Pagination'
		}

		@$mol_mem
		override attr() {
			return {
				...super.attr(),
				'aria-label': this.pagination_label(),
			}
		}

		@$mol_mem
		page( next?: number ) {
			const max = this.page_count()
			const v = next ?? 1
			return Math.min( max, Math.max( 1, v ) )
		}

		@$mol_mem
		page_count() {
			return 1
		}

		@$mol_mem
		prev_label() {
			return 'Previous'
		}

		@$mol_mem
		next_label() {
			return 'Next'
		}

		prev_disabled() {
			return this.page() <= 1
		}

		next_disabled() {
			return this.page() >= this.page_count()
		}

		prev_click( event?: Event ) {
			event?.preventDefault()
			if( this.prev_disabled() ) return
			this.page( this.page() - 1 )
		}

		next_click( event?: Event ) {
			event?.preventDefault()
			if( this.next_disabled() ) return
			this.page( this.page() + 1 )
		}

		@$mol_mem
		page_ids() {
			const n = this.page_count()
			return Array.from( { length: n }, ( _, i ) => String( i + 1 ) )
		}

		@$mol_mem_key
		page_click( id: string, event?: Event ) {
			event?.preventDefault()
			const num = Number( id )
			if( !Number.isFinite( num ) ) return
			this.page( num )
		}

		@$mol_mem_key
		Page( id: string ) {
			const self = this
			const num = Number( id )
			const current = self.page()

			const Btn = class extends self.$.$eve_button {
				override label() {
					return id
				}
				override variant(): 'solid' | 'outline' {
					return num === current ? 'solid' : 'outline'
				}
				override colors(): 'low' {
					return 'low'
				}
				override size(): 's' {
					return 's'
				}
				override enabled() {
					return num !== current
				}
				override event_activate( event: Event ) {
					self.page_click( id, event )
				}
			}

			const b = new Btn()
			b.$ = this.$
			return b
		}

		@$mol_mem
		Prev() {
			const self = this
			const Btn = class extends self.$.$eve_button {
				override label() {
					return self.prev_label()
				}
				override enabled() {
					return !self.prev_disabled()
				}
				override variant(): 'outline' {
					return 'outline'
				}
				override colors(): 'low' {
					return 'low'
				}
				override size(): 's' {
					return 's'
				}
				override event_activate( event: Event ) {
					self.prev_click( event )
				}
			}
			const b = new Btn()
			b.$ = this.$
			return b
		}

		@$mol_mem
		Next() {
			const self = this
			const Btn = class extends self.$.$eve_button {
				override label() {
					return self.next_label()
				}
				override enabled() {
					return !self.next_disabled()
				}
				override variant(): 'outline' {
					return 'outline'
				}
				override colors(): 'low' {
					return 'low'
				}
				override size(): 's' {
					return 's'
				}
				override event_activate( event: Event ) {
					self.next_click( event )
				}
			}
			const b = new Btn()
			b.$ = this.$
			return b
		}

		@$mol_mem
		override sub() {
			return [
				this.Prev(),
				...this.page_ids().map( id => this.Page( id ) ),
				this.Next(),
			]
		}

	}

}
