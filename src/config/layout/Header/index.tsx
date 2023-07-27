import { Box, Flex } from '@chakra-ui/react';
import css from './index.module.css';

export const Header = () => {
	return (
		<header className={css.header}>
			<Flex>
				<Box>Logo</Box>
				<Box>Call to action enteties</Box>
			</Flex>
		</header>
	);
};
