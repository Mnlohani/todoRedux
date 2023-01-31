import { useState } from 'react'
import { CssBaseline, Grid } from '@mui/material'
import ThemeProvider from '@mui/system/ThemeProvider'
import { Navigation } from '../navigation/Navigation'
import { theme } from '@/theme'

interface Props {
  children: React.ReactNode
}

export const Layout = ({ children }: Props): JSX.Element => {
  const [mode] = useState('light')
  const customTheme = theme(mode)

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline>
        <Navigation />
        <Grid container bgcolor={'paper'} gap={3} p={3}>
          {children}
        </Grid>
      </CssBaseline>
    </ThemeProvider>
  )
}
