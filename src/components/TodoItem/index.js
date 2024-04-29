// Write your code here
import './index.css'
import SimpleTodos from '../SimpleTodos'

const TodoItem = props => {
  const {eachTodo} = props
  const {title, id} = eachTodo
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="list-cont">
      <p className="para">{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
