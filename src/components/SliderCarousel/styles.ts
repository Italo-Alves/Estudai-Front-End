import styled from 'styled-components'

import Slider from 'react-slick'

export const SliderStyles = styled(Slider)`
  & .slick-next {
    right: 5%;
  }

  & .slick-prev {
    left: 5%;
    z-index: 1;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 480px;
  background-size: cover;
`
