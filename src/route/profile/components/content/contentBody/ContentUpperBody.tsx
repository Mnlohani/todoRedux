import { BoxUpper } from '@/route/shared/box/BoxUpper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

export const ContentUpperBody = (): JSX.Element => {
  return (
    <Grid item xs={12}>
      <Box
        display={'flex'}
        justifyContent={'flex-start'}
        bgcolor={'primary.light'}
        gap={8}
        p={1}
        border={1}
      >
        {Array.from({ length: 3 }).map(() => {
          return <BoxUpper />
        })}
      </Box>
    </Grid>
  )
}
