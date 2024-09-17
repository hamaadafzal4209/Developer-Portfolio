import { Circles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div style={styles.loaderContainer}>
      <Circles
        height="100"
        width="100"
        color="#3730a3"
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
    backgroundColor: '#111827',
  },
};

export default Loader;
