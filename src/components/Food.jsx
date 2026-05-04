import ServicePage from './ServicePage'
import Stopwatch from './Stopwatch'

function Food() {
  return (
    <ServicePage
      accent="#ffe100"
      background="#fff"
      title="Food Delivery"
      intro="Delicious meals delivered hot and fresh from your favorite restaurants right to your door."
      icon="food"
      image={<Stopwatch />}
      features={[
        {
          icon: 'timer',
          title: 'Quick Delivery',
          desc: 'Get your food in 30 minutes or less',
        },
        {
          icon: 'flame',
          title: 'Hot & Fresh',
          desc: 'Temperature-controlled delivery',
        },
        {
          icon: 'gps',
          title: 'Real-time Tracking',
          desc: 'Track your order every step',
        },
      ]}
    />
  )
}

export default Food
