import React,{ useState } from 'react';

const Task = ({title,description}) =>{
    return <div className='task'>
        <div>
            <p>{title}</p>
            <span>{description}</span>
        </div>
        <button>-</button>
        </div>
}


const Home = () => {

  const [ tasks , setTasks ] = useState([]);

  return (
    <div className='container'>
        <form>
            <input type="text" placeholder='Title'/>
            <textarea placeholder='Discription'></textarea>

            <button type='Submit'>Add</button>
        </form>
        
        <Task/>

    </div>
  )
};

export default Home;
