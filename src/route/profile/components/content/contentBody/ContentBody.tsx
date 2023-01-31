import { ContentLowerBody } from './ContentLowerBody'
import { ContentUpperBody } from './ContentUpperBody'

export const ContentBody = (): JSX.Element => {
  return (
    <>
      <ContentUpperBody />
      <ContentLowerBody />
    </>
  )
}
