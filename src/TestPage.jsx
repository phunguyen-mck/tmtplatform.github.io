import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material';
import Button from "@mui/material/Button";

export default function TestPage() {
    const theme = createTheme({
        typography: {
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"'
            ].join(',')
        }
    });
    return (
            <div>
             <ThemeProvider theme={theme}>
            <Button variant="contained">Hello World</Button>
            </ThemeProvider>
            </div>
    )
}