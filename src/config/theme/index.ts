import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import typography from './typography';

// import { Button } from './components/Button';

const VibeLabTheme = extendTheme({
	//------  components start  ------//
	components: {
		// ...Button,
	},

	styles: {
		global: {
			body: {
				// ...
			},
		},
	},

	colors,
	typography,
});

export default VibeLabTheme;
