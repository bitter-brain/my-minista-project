import ShowBanner from '@/sections/ShowBanner'
import Seasons from '@/components/Seasons'
import ShowDetails from '@/sections/ShowDetails'

export const metadata = {
  title: 'Show - Stranger Things',
}

export default () => {
  return (
    <>
      <ShowBanner />
      <ShowDetails
        seasons={<Seasons />}
      />
    </>
  )
}
