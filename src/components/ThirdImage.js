import { Parallax } from 'react-parallax'
import kaunas1 from '../img/kaunas1.jpg'

const FirstImage = () => (
  <Parallax
    bgImage={kaunas1}
    bgImageAlt='the cat'
    strength={300}
    className='img'
  >
    <div className='content'>
      <span className='img-txt'>Beautiful Kaunas</span>
      <div className='credits'>
        © Sekundė tobulybės <br /> https://www.instagram.com/sekundetobulybes
      </div>
    </div>
  </Parallax>
)

export default FirstImage
