// Write your code here.
import './index.css'

const Button = i => {
  const {className} = i
  const text = 'Show More'
  return (
    <div>
      <button className={className}>{text}</button>
    </div>
  )
}

const BannerCardItem = props => {
  const {bannerCardItem} = props
  const {headerText, description, className} = bannerCardItem

  return (
    <li className={className}>
      <h1 className="heading">{headerText}</h1>
      <p className="para">{description}</p>
      <Button className="show" />
    </li>
  )
}

export default BannerCardItem
