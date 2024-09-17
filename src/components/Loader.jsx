import { Circles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div style={styles.loaderContainer}>
      <Circles
        height="80"
        width="80"
        color="#FD366E"
        ariaLabel="circles-loading"
        visible={true}
      />
    </div>
  );
};

const styles = {
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
};

export default Loader;
