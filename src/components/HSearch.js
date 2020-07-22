import React from 'react';
import "gestalt/dist/gestalt.css";

import { Avatar, Box, SearchField, Text } from "gestalt";

export default function HSearch() {
    const [value, setValue] = React.useState('');

    return (
        <Box alignItems="center" direction="row" display="flex" marginStart={-1} marginEnd={-1}>
            <Box paddingX={1} flex="grow">
                <Text inline size="lg" weight="bold">Hobby Recommendations</Text>
            </Box>
            <Box paddingX={1}>
                <SearchField
                    accessibilityLabel="Demo Search Field"
                    id="searchField"
                    onChange={({ value }) => setValue(value)}
                    placeholder="Search and explore"
                    value={value}
                />
            </Box>
        </Box>
    );
}