import React from 'react'

import { SliderStyles, Image } from './styles'

const images = [
  {
    name: 'Image 1',
    url:
      'https://cdn.pixabay.com/photo/2015/05/15/14/38/computer-768608_960_720.jpg'
  },

  {
    name: 'Image 2',
    url:
      'https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_960_720.jpg'
  },

  {
    name: 'Image 3',
    url:
      'https://cdn.pixabay.com/photo/2015/03/26/09/40/keyboard-690066_960_720.jpg'
  },

  {
    name: 'Image 4',
    url:
      'https://cdn.pixabay.com/photo/2016/03/09/09/17/computer-1245714_960_720.jpg'
  }
]

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    variableWidth: false,
    className: 'slides'
  }
  return (
    <SliderStyles {...settings}>
      {images.map((image, index) => {
        return (
          <div key={index}>
            <Image src={image.url} alt="Images" />
          </div>
        )
      })}
    </SliderStyles>
  )
}

export default Carousel
