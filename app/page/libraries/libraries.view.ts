namespace $.$$ {

	export class $eve_app_page_libraries extends $.$eve_app_page_libraries {

		how_to_title() {
			return 'How to start'
		}

		how_to_body() {
			return [
				'1) MAM (Mam owns Abstract Modules) is the dev environment for $mol: one repo, folders are modules, dependencies are wired by fully qualified names ($mol_…, $eve_…), not by npm imports.',
				'',
				'2) Clone MAM and install:',
				'   git clone https://github.com/hyoo-ru/mam.git ./mam && cd mam',
				'   npm install',
				'   Node.js 24+ (see mam/package.json).',
				'',
				'3) Add Eve next to the mol namespace (sibling folder eve/):',
				'   git clone https://github.com/b-on-g/eve.git eve',
				'   Open the mam root in your editor (not only eve/).',
				'',
				'4) Run the dev server:',
				'   npm start',
				'   Open http://127.0.0.1:9080/eve/app/-/test.html',
				'',
				'5) Build a module once (outputs go to module/-/):',
				'   npm start eve/app',
				'',
				'6) New UI: create a folder under your namespace (e.g. eve/my_widget/), add *.view.tree / *.view.ts / *.view.css.ts; names in code must match the path ($eve_my_widget…).',
				'',
				'Links: github.com/hyoo-ru/mam_mol — framework; github.com/hyoo-ru/mam — template; github.com/b-on-g/eve — this design system.',
			].join( '\n' )
		}

	}

}
