import React, { createContext, type ReactNode } from 'react';
import {
	ThemeProvider as MuiThemeProvider,
	StyledEngineProvider,
	type Theme,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import muiTheme from './muiTheme';

/* =========================================================
   THEME CONTEXT
========================================================= */
const ThemeContext = createContext<Theme | null>(null);

/* =========================================================
   APP THEME PROVIDER
   
   Usage: Wrap your app with <ThemeProvider>
   To access theme in components: import { useTheme } from '@mui/material/styles'
========================================================= */
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<StyledEngineProvider injectFirst>
			<MuiThemeProvider theme={muiTheme}>
				<CssBaseline />
				<ThemeContext.Provider value={muiTheme}>
					{children}
				</ThemeContext.Provider>
			</MuiThemeProvider>
		</StyledEngineProvider>
	);
};
