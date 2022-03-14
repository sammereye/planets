import Dot from './Dot';

const Dots = () => {
  return (
    <div className='overflow-hidden'>
      {
        [...Array(75)].map((e, i) => {
          return <Dot key={i} />
        })
      }
    </div>
  )
}

export default Dots