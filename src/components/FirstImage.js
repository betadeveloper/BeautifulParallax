import { Parallax } from 'react-parallax'
import vilnius1 from '../img/vilnius1.jpg'

const FirstImage = () => (
  <Parallax
    bgImage={vilnius1}
    bgImageAlt='the cat'
    strength={500}
    className='img'
  >
    <div className='content'>
      <span className='img-txt'>Beautiful Vilnius</span>
    </div>
  </Parallax>
)

export default FirstImage
