namespace $ {

	$mol_test( {

		'eve_selection_multiple toggles members'( $ ) {

			class App extends $eve_selection_multiple {

				override options() {
					return { x: 'X', y: 'Y' }
				}

			}

			const g = new App()
			g.$ = $

			const ev = new Event( 'click' )

			$mol_assert_equal( g.option_selected( 'x' ), false )
			$mol_assert_equal( g.option_selected( 'y' ), false )

			g.option_click( 'x', ev )
			$mol_assert_equal( g.option_selected( 'x' ), true )
			$mol_assert_equal( g.option_selected( 'y' ), false )

			g.option_click( 'x', ev )
			$mol_assert_equal( g.option_selected( 'x' ), false )

			g.option_click( 'x', ev )
			g.option_click( 'y', ev )
			$mol_assert_equal( g.option_selected( 'x' ), true )
			$mol_assert_equal( g.option_selected( 'y' ), true )

		},

	} )

}
