import { useState, useEffect } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { getMovieById } from 'services/apiMovies';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const MovieDetail = () => {
  const [movie, setMovie] = useState({});
  const [status, setStatus] = useState(Status.IDLE);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    fetchMovieById();
  }, []);

  const fetchMovieById = async () => {
    try {
      setStatus(Status.PENDING);
      const response = await getMovieById(movieId);
      setMovie(response);

      setStatus(Status.RESOLVED);
    } catch {
      setStatus(Status.REJECTED);
    }
  };
  return (
    <>
      {/* <Link to={backLinkHref}>Back to products</Link> */}

      {status === 'pending'
        ? Loading.dots({
            backgroundColor: 'transparent',
          })
        : Loading.remove()}

      {status === 'resolved' && (
        <div>Movie Card</div>
        /*
        <Card>
          <Card.Header className="text-center">{movie.title}</Card.Header>
          <Stack
            direction="horizontal"
            gap={3}
            className="p-2 align-items-start"
          >
            <Image
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              rounded
            />
            <Card.Body>
              <Card.Text>
                <ListGroup horizontal>
                  <ListGroup.Item className="fw-semibold text-muted border-0">
                    Release date:
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0">
                    {movie.release_date}
                  </ListGroup.Item>
                </ListGroup>

                <ListGroup horizontal>
                  <ListGroup.Item className="fw-semibold text-muted border-0">
                    User score:
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0">
                    {movie.vote_average}%
                  </ListGroup.Item>
                </ListGroup>
                <ListGroup>
                  <ListGroup.Item className="fw-semibold text-muted border-0">
                    Overview:
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0">
                    {movie.overview}
                  </ListGroup.Item>
                </ListGroup>
                <ListGroup horizontal>
                  <ListGroup.Item className="fw-semibold text-muted border-0">
                    Genres:
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0">
                    {movie.genres.map(({ name }) => (
                      <Badge bg="secondary" className="me-1" key={name}>
                        {name}
                      </Badge>
                    ))}
                  </ListGroup.Item>
                </ListGroup>
              </Card.Text>
              <ListGroup horizontal>
                <ListGroup.Item className="border-0">
                  <Button variant="primary" style={{ width: '100px' }}>
                    Cast
                  </Button>
                </ListGroup.Item>
                <ListGroup.Item className="border-0">
                  <Button variant="primary" style={{ width: '100px' }}>
                    Reviews
                  </Button>
                </ListGroup.Item>
              </ListGroup>

              <Outlet />
            </Card.Body>
          </Stack>
      </Card>
      */
      )}
    </>
  );
};

export default MovieDetail;
