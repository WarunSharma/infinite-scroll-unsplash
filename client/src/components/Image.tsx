
interface ImageProps {
  id: string,
  urls: {
    thumb: string
  }
}

function Image({image}:{image: ImageProps}) {
  return (
    <img src={image?.urls?.thumb}/>
  )
}

export default Image