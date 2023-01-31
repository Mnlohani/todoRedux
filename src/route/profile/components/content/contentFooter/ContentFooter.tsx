import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { BoxFooter } from '@/route/shared/box/BoxFooter'

export const ContentFooter = (): JSX.Element => {
  return (
    <Grid xs={12}>
      <Box>
        <Box
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'row' }}
          justifyContent={'flex-start'}
          bgcolor={'success.light'}
        >
          {Array.from({ length: 3 }).map(() => {
            return <BoxFooter />
          })}
        </Box>
        <Box height={40} width={1} bgcolor={'info.light'}></Box>
      </Box>
    </Grid>
  )
}
