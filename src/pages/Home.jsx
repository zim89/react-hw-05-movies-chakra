import { useState, useEffect } from 'react';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { getTrendingMovies } from 'services/apiMovies';
import MovieList from 'components/MovieList/MovieList';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  const fetchTrendingMovies = async () => {
    try {
      setStatus(Status.PENDING);
      const response = await getTrendingMovies();
      setMovies(response);
      setStatus(Status.RESOLVED);
    } catch {
      setStatus(Status.REJECTED);
    }
  };

  return (
    <>
      {status === 'pending'
        ? Loading.dots({
            backgroundColor: 'transparent',
          })
        : Loading.remove()}

      {status === 'resolved' && (
        <>
          <h1>Today movies in Trending</h1>
          <MovieList movies={movies} />
        </>
      )}

      {status === 'rejected' && <p>Sorry we didn't find this page</p>}
    </>
  );
};

export default Home;
