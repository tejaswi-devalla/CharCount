import './index.css'

const CountText = props => {
  const {eachItem} = props
  const {text} = eachItem
  return (
    <li className="list-z">
      <p>{text}</p>
    </li>
  )
}
export default CountText
