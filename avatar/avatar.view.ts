namespace $.$$ {

	/**
	 * Image with required textual name, or initials fallback.
	 * Images: https://www.w3.org/WAI/tutorials/images/decision/
	 */
	export class $eve_avatar extends $.$eve_avatar {

		@$mol_mem
		uri() {
			return ''
		}

		@$mol_mem
		name() {
			return ''
		}

		@$mol_mem
		initials() {
			const n = this.name().trim()
			if( !n ) return '?'
			const parts = n.split( /\s+/u )
			const a = parts[ 0 ]?.[ 0 ] ?? ''
			const b = parts[ 1 ]?.[ 0 ] ?? ''
			return ( a + b ).toUpperCase()
		}

		@$mol_mem
		override sub() {
			const $ = this.$
			if( this.uri() ) {
				const self = this
				const Img = class extends $.$mol_image {
					uri() {
						return self.uri()
					}
					title() {
						return self.name()
					}
				}
				const img = new Img()
				img.$ = $
				return [ img ]
			}

			const self = this
			const Fallback = class extends $.$mol_paragraph {
				title() {
					return self.initials()
				}
			}
			const fb = new Fallback()
			fb.$ = $
			return [ fb ]
		}

		@$mol_mem
		override attr() {
			const base = super.attr()
			if( this.uri() ) return base
			const label = this.name() || this.initials()
			return {
				...base,
				role: 'img',
				...( label ? { 'aria-label': label } : {} ),
			}
		}

	}

}
