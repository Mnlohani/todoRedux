import Box from '@mui/material/Box'
import { BoxNavigation } from '../../box'

export const Navigation = (): JSX.Element => {
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      bgcolor={'primary.main'}
      alignItems={'center'}
      p={3}
    >
      <BoxNavigation />

      <Box>
        <Box display={'flex'} gap={2}>
          {Array.from({ length: 3 }).map(() => {
            return <BoxNavigation />
          })}
        </Box>
      </Box>
    </Box>
  )
}
