import React, {useState, useEffect, useContext, useReducer } from 'react';

import BlogList from './List-item/BlogList';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import classes from './Home.module.css';
import AuthContext from '../../store/auth-context';
import CountCheck from './count-check/count-check';

const initialState=(null);

const reducer=(state,action)=>{
  switch(action.type){
    case 'FETCH_SUCCESS':
      return action.payload
    case 'FETCH_ERROR':
      return 'Something went wrong'
    default:
      return state;
  }
}

const Home = (props) => {
  // const [blogs, setBlogs] = useState(null)

  const [blogs,dispatch]=useReducer(reducer,initialState);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        return res.json();
      })
      .then(data => {
        // setBlogs(data);
        dispatch({type:'FETCH_SUCCESS', payload: data});
      })
  }, [])
  
  const authCtx = useContext(AuthContext);
  
  //using useEffect to fetch data
//   useEffect(async ()=>{
//     try {
//       const fetchedData = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//       const data = await fetchedData.json();
//       console.log(data);
//       setBlogs(data);
//     } catch (err) {
//       console.error(err);
//     }
//   },[]);
//  console.log(blogs);

  return (
    <Card className={classes.home}>
      <h1>React Practice By Angkon</h1>

      <br />
      <hr />
      <hr />
      <CountCheck />
      {/* <Button onClick={authCtx.onLogout}>Logout</Button> */}
      
      <br/>
      <hr />
      <hr />

      <h1>Fetch using useEffect and useReducer</h1>
      {blogs && <BlogList blogs={blogs} />}
    </Card>
  );
};

export default Home;
