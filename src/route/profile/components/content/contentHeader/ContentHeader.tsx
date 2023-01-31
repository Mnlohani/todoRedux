import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

export const ContentHeader = (): JSX.Element => {
  return (
    <Grid item xs={12}>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        gap={3}
        bgcolor={'error.light'}
      >
        <Box height={80} width={1} border={1} />
        <Box
          display={{ xs: 'none', md: 'block' }}
          height={80}
          width={1}
          border={1}
        />
        <Box
          display={{ xs: 'none', md: 'block' }}
          height={80}
          width={0.2}
          border={1}
        />
      </Box>
    </Grid>
  )
}
