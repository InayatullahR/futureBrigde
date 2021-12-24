export const movieReducer=(State={movies:[],selectedMovies:[],fav:[]},action)=>{
    if(action.type === "add-movies"){
        return {...State, movies:[...action.data,...State.movies]}
    }
    if (action.type === "selected-Movie"){
        return {...State, selectedMovies:[action.data]}
    }
    if (action.type === "add-fav"){
        return {...State,fav:[{...action.data,key: State.fav.length},...State.fav] }
    }
    return State
}