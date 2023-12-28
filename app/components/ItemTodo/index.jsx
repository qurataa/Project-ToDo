import Popup from 'reactjs-popup';

const ItemTodo = ({ number, todo, done,isDone,deleteBtn }) => {
  

  return (
    <div className="flex justify-between p-2 ">
      <div className="flex">
        <h3>{number + 1}.</h3>
        <p className="pl-5">{todo}</p>
      </div>
      <div className="font-medium">
        {!isDone &&
        <div>
          <Popup trigger={<button> Edit |</button> } modal nested><span>MODAL OPENNNN</span></Popup>
          <button onClick={() => done(todo)}>Done |</button>
        </div>
        }

        <button className="text-red-400 hover:text-red-700" onClick={() => deleteBtn(todo)}>Delete</button>
      </div>
    </div>
  );
};

export default ItemTodo;
