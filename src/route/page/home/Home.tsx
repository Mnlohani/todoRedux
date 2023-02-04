import { useAppDispatch } from '@/hook/store'
import Button from '@mui/material/Button'
import { counterAction } from '../../../store/feature/counter/counterSlice'

export const Home = () => {
  // const { counter, name } = useAppSelector((state) => state.counter)
  // const dispatch = useAppDispatch()
  const dispatch = useAppDispatch()

  /*
  const { city } = useAppSelector((state) => state.test)
  const { isOpen } = useAppSelector((state) => state.test)
  const dispatch = useAppDispatch()

  function onHandleClick() {
    // dispatch(counterAction.increment())
    // dispatch(counterAction.changeCity())
    // dispatch(counterAction.updateCity('helloedfsf'))

    dispatch(counterAction.toggleDialog())
  }

  function onHandleClose() {
    // dispatch(counterAction.increment())
    // dispatch(counterAction.changeCity())
    // dispatch(counterAction.updateCity('helloedfsf'))

    dispatch(counterAction.toggleDialog())
  }
  */

  return (
    <>
      <Button onClick={() => dispatch(counterAction.toggleDialog())}> {'click me'} </Button>
      {/*
      <Button onClick={onHandleClick}> {'click me'} </Button>

      <Dialog
        open={isOpen}
        onClose={onHandleClick}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no
            apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onHandleClick}>Disagree</Button>
          <Button onClick={onHandleClick} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>

      <div onClick={onHandleClick}>{city}</div>
      */}
    </>
  )
}
