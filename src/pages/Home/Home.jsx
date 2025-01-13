import { Helmet } from 'react-helmet-async'
import Plants from '../../components/Home/Plants'
import Banner from '../../components/Home/Banner/Banner'

const Home = () => {
  return (
    <div className=''>
      <Helmet>
        <title> PlantNet | Buy Your Desired Plant</title>
      </Helmet>
      <Banner></Banner>
      <Plants />
    </div>
  )
}

export default Home
