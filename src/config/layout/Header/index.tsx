import { Box, Flex, Text } from '@chakra-ui/react';
import css from './index.module.css';

export const Header = () => {
	return (
		<header className={css.header}>
			<Flex>
				<Box>Header</Box>
			</Flex>
		</header>
	);
};
