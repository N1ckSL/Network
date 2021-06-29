import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";

let state = {
  posts: [
    { id: 1, message: "How are you today?", likesCount: "2" },
    { id: 2, message: "How are you tomorrow?", likesCount: "22" },
    { id: 3, message: "How are you?", likesCount: "228" },
    { id: 4, message: "You are how?", likesCount: "1337" },
  ]
};


it('new post should be added', () => {
  // 1.Test Data
  let action = addPostActionCreator("test text here");
  // 2. action
  let newState = profileReducer(state,action);

  // 3. Expected Data
 expect( newState.posts.length).toBe(5);
});

it('message of new post should be correct', () => {
 
  // 1.Test Data
  let action = addPostActionCreator("test text here");

  // 2. action
  let newState = profileReducer(state,action);

  // 3. Expected Data
 expect( newState.posts[4].message).toBe("test text here");
});

it('length after deleting should decrement', () => {
 
  // 1.Test Data
  let action = deletePost(1);

  // 2. action
  let newState = profileReducer(state,action);

  // 3. Expected Data
 expect( newState.posts.length).toBe(3);
});

it('after deleting length shouldnt be decremented if id is incorrect', () => {
 
  // 1.Test Data
  let action = deletePost(1000);

  // 2. action
  let newState = profileReducer(state,action);

  // 3. Expected Data
 expect( newState.posts.length).toBe(4);
});
