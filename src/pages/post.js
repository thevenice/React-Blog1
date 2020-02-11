import React,{useState} from "react";
import {getFirebase} from '../firebase'
import { Redirect } from "react-router-dom";

const Post = ({ match }) => {

  const[loading,setLoading]= useState(true);
  const[currentPost,setCurrentPost]= useState();
  
  const slug = match.params.slug;
  // const postSlugs = ["my-first-blog-post", "my-second-blog-post"];


  if(loading && !currentPost){
    getFirebase()
    .database()
    .ref()
    .child(`/posts/${slug}`)
    .once('value')
    .then(snapshot=>{
      if(snapshot.val()){
        setCurrentPost(snapshot.val())
      }
      setLoading(false)
    })
  }
  if (loading) {
    return <h1>Loading...</h1>;
  }
  
  const postDoesNotExist = !currentPost;
  
  if (postDoesNotExist) {
    return <Redirect to="/404" />;
  }

  

  return (
    <>
     <img src={currentPost.coverImage} alt={currentPost.coverImageAlt}/>
  <h1>{currentPost.title}</h1>
  <em>{currentPost.datePretty}</em>
  <p dangerouslySetInnerHTML={{__html:currentPost.content}}></p>
       </>
  );
};

export default Post;
