import React from 'react';
import Box from '@material-ui/core/Box';

export default function Print() {
    return (
        <div style={{ width: '100%' }}>
            <Box displayPrint="none" m={2}>
                <h4> Top 8 Recommendations</h4>
            </Box>
        </div>
    );
}