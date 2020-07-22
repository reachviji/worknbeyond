import React from 'react';
import Box from '@material-ui/core/Box';

export default function Print() {
    return (
        <div style={{ width: '100%' }}>
            <Box display="block" displayPrint="none" m={2}>
                <h2> Top 6 Recommendations</h2>
            </Box>
        </div>
    );
}