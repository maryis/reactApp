- A React app with redux , axios, best-practice-structure
      - having 2 master page (2 layouts)
      - using bootstrap
      - connecting to an online API for fetching data with axios
 
 Steps for Redux:
 1) create root_reducer and reducers for each module
     - each reducer contains a initialState and switch on action.type
     and change state based on action.payload
 
 2) create store:
    - export const store=
    createStore(root_reducer,composeWithDevTools(applyMiddleware(thunk)));
    
  3) in main index.js:
     - <provider store={created_store_in part_2} ></provider> 
  
  4) in pages that need states or changing them:
      1) mapStateToProps and then use props in page
      2) create methods that needs to provide data for changing a state(action-creators)
      3) mapDispatchToProps based on methods of part 2 and then use handlers in page
      4) export default connect (map..,map..) (Page_name)
       