const Education = (props) => {
  return (
    <div className="experience-section ">
      <h3 className="activity-title fs-20 fw-700">Education</h3>
      <div className="experience-content">
        <div className="experience-logo">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D0BAQEFWO_s8a0FHQ/company-logo_200_200/0/1647618816994?e=1678924800&v=beta&t=odzOEdC0guAqvuVCim8HVjfOOqC4KwNoQmSMZQ69EPg"
            alt=""
          />
        </div>
        <div>
          <p className="fs-16 fw-800">
            {props.education ? props.education.name : "Full-stack Developer"}
          </p>
          <p className="fs-14">
            {props.education
              ? props.education.degree
              : "EPICODE Global · Full-time"}
          </p>
          <span className="fs-14">
            {props.education ? props.education.startDate : "June 2020 "}
          </span>
          <span className="fs-14">
            {props.education ? props.education.endDate : " · Present · "}
          </span>
          <span className="fs-14">
            {props.education
              ? props.education.endDate - props.education.startDate
              : "2 years 4 months"}
          </span>
          <p className="fs-14">
            {props.education ? props.education.description : "description"}
          </p>
          <p className="fs-14">
            {props.education ? props.education.area : "Location"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
