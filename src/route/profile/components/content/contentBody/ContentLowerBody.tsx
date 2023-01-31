import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { BoxLower } from '@/route/shared/box/BoxLower'

export const ContentLowerBody = (): JSX.Element => {
  return (
    <Grid item display={{ xs: 'none', md: 'block' }} xs={12}>
      <Box border={1} bgcolor={'secondary.light'}>
        <Box display={'flex'} justifyContent={'space-between'} my={2}>
          <Box height={40} width={500} border={1} />
          <Box height={40} width={80} border={1} />
        </Box>

        <Box display={'flex'} justifyContent={'space-between'} my={2}>
          {Array.from({ length: 2 }).map(() => {
            return <BoxLower />
          })}
        </Box>

        <Box height={40} border={1} />
      </Box>
    </Grid>
  )
}
