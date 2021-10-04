import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getMoviesSave(key){
  const myMovies = await AsyncStorage.getItem(key)

  let moviesSave = JSON.parse(myMovies) || [];
  return moviesSave;
}

export async function saveMovie(key, newMovie){
  let moviesStored = await getMoviesSave(key);

  const hasMovies = moviesStored.some( item => item.id === newMovie.id);

  if(hasMovies){
    console.log("Esse filme já existe na sua lista");
    return;
  }

  moviesStored.push(newMovie);

  await AsyncStorage.setItem(key, JSON.stringify(moviesStored));
  console.log("Filme salvo com sucesso!!");
}

export async function deleteMovie(id){
  let moviesStored = await getMoviesSave('@cineprime');

  let myMovies = moviesStored.filter( item => {
    return (item.id !== id)
  })

  await AsyncStorage.setItem('@cineprime', JSON.stringify(myMovies));
  console.log("Filme deletado com sucesso!");

  return myMovies;
}

export async function hasMovie(movie){
  let moviesStored = await getMoviesSave('@cineprime');

  const hasMovies = moviesStored.find( item => item.id === movie.id );

  if(hasMovies){
    return true;
  }

  return false;
}
