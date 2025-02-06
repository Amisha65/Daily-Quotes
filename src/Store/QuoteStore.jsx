export const QuoteList = createContext({
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;

  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  // else if (action.type === "ADD_INITIAL_POSTS") {
  //   newPostList = action.payload.posts || [];
  // } else if (action.type === "ADD_POST") {
  //   newPostList = [action.payload, ...currPostList];
  // }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postlist, dispatchPostList] = useReducer(postListReducer, []);

  // const addPost = (usereId, postTitle, postBody, reactions, tags) => {
  //   dispatchPostList({
  //     type: "ADD_POST",
  //     payload: {
  //       id: Date.now(),
  //       title: postTitle,
  //       body: postBody,
  //       reactions: reactions,
  //       userId: usereId,
  //       tags: tags,
  //     },
  //   });
  // };

  const deletePost = (quoteToDelete) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { quoteToDelete },
    });
  };

  return (
    <QuoteList.Provider value={{ deletePost }}>{children}</QuoteList.Provider>
  );

  // const QuoteStore = () => {
  //   return <></>;
  // };
};

// addPost,
