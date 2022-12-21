import { Parallax } from 'react-parallax'
import vilnius2 from '../img/vilnius2.jpg'

const FirstImage = () => (
  <Parallax
    bgImage={vilnius2}
    bgImageAlt='Trakai'
    strength={500}
    className='img'
  >
    <div className='content'>
      <span className='img-txt'>Beautiful Trakai</span>
    </div>
  </Parallax>
)

export default FirstImage
