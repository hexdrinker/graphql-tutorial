export let movies = [
    {
        id: 1,
        name: "Inception",
        director: "Christopher Nolan",
        score: 9.60
    },
    {
        id: 2,
        name: "The Dark Knight",
        director: "Christopher Nolan",
        score: 9.65
    },
    {
        id: 3,
        name: "PARASITE",
        director: "Bong Jun Ho",
        score: 9.07
    },
    {
        id: 4,
        name: "Pieta",
        director: "Kim Ki Deok",
        score: 7.79
    },
    {
        id: 5,
        name: "Avengers: End Game",
        director: "Anthony Russo",
        score: 9.49
    }
]

export const getMovies = () => movies;

export const getMovieById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
}

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
}

export const addMovie = (name, director, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        director,
        score,
    }
    movies.push(newMovie);
    return newMovie;
}