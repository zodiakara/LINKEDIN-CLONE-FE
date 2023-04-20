const AboutUser = (props) => {
  return (
    <div className="about-section cd cd-width">
      <div className="about-text ff">
        <h3 className="about-title fs-20 fw-700">About</h3>
        <p className="about-content fs-14">{props.currentUser.bio}</p>
      </div>
    </div>
  );
};

export default AboutUser;
