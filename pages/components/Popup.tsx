import { Visibility } from '../redux/redux'

export const Popup = (props: { isShow: Visibility }) => {
  return (
    <div
      className="popup"
      style={{ visibility: props.isShow }}
    >
      <p>Popup</p>
    </div>
  )
}
