import { MagnifyingGlass } from 'react-loader-spinner';
import { useLocation } from 'react-router-dom';

const Movies = () => {
  // const location = useLocation();
  return (
    <div>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
      Movies Page
    </div>
  );
};

export default Movies;
