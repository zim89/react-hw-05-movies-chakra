import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>Movie List</div>
    /*
    <ListGroup variant="flush" as="ul" className="col-6">
      {movies.map(({ id, title, original_title }) => (
        <ListGroup.Item as="li" key={id} action>
          <Link
            className="text-decoration-none"
            to={`/movies/${id}`}
            state={{ from: location }}
          >
            {title || original_title}
          </Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
    */
  );
};

MovieList.propTypes = {};

export default MovieList;
