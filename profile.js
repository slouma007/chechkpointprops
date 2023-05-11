import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ fullName, bio, profession, image, handleName }) => {
  return (
    <div style={styles.container}>
      {image && <img src={'image'} alt="Profile" style={styles.image} />}
      <h2>{fullName}</h2>
      <p>{bio}</p>
      <p>{profession}</p>
      <button onClick={handleName}>Show Name</button>
    </div>
  );
};

Profile.defaultProps = {
  fullName: 'abdesslem attia',
  bio: 'Nothing in bio ',
  profession: 'react developer',
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  image: PropTypes.string,
  handleName: PropTypes.func.isRequired,
};

const styles = {
  container: {
    textAlign: 'center',
  },
  image: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '10px',
  },
};

export default Profile;


