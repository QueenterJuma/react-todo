import propTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({
  todosProps, handleChange, delTodo, setUpdate,
}) => (
  <ul>
    {todosProps.map((todo) => (
      <TodoItem
        key={todo.id}
        itemProp={todo}
        handleChange={handleChange}
        delTodo={delTodo}
        setUpdate={setUpdate}
      />
    ))}
  </ul>
);
TodosList.propTypes = {
  todosProps: propTypes.elementType.isRequired,
  handleChange: propTypes.func.isRequired,
  delTodo: propTypes.func.isRequired,
  setUpdate: propTypes.func.isRequired,
};
export default TodosList;
