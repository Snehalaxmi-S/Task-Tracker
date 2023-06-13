import PropTypes from 'prop-types'
import Button from './Button'

const Head = ({ title, onAdd ,showAdd }) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color={showAdd?'red':'green'} text={showAdd?'Close':'Add'} onClick={onAdd} />
    </header>
  )
}

Head.defaultProps = {
    title: 'Task-Tacker',
}

Head.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Head