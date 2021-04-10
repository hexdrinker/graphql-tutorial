import { getMovies, getMovieById, addMovie } from './db';

const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, { id }) => getMovieById(id)
    },
    Mutation: {
        addMovie: (_, { name, director, score }) => addMovie(name, director, score)
    }
}

export default resolvers;