import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { sendEmail } from "../utils/sendEmail";
import { Link } from "react-router-dom";

const Career = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    resume: null
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  // handle input
  const handleChange = (e) => {
    if (e.target.name === "resume") {
      setFormData({ ...formData, resume: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  // validation
  const validate = () => {
    let newErrors = {};

    if (!formData.name) newErrors.name = "Name required";

    if (!formData.email.match(/^\S+@\S+\.\S+$/))
      newErrors.email = "Valid email required";

    if (!formData.phone.match(/^[6-9]\d{9}$/))
      newErrors.phone = "Valid phone required";

    if (!formData.position) newErrors.position = "Select position";

    if (!formData.resume) newErrors.resume = "Upload resume";

    return newErrors;
  };

  // submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await sendEmail(e.target); // same contact wala
        setStatus("success");

        setFormData({
          name: "",
          email: "",
          phone: "",
          position: "",
          message: "",
          resume: null
        });

      } catch (err) {
        setStatus("error");
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Careers | Join Our Team</title>
      </Helmet>
      <div id="ct-pagetitle" className="ct-pagetitle bg-image">
                <div className="container" style={{ opacity: 1 }}>
                    <div className="ct-page-title-holder">
                        <h1 className="ct-page-title">Career</h1>
                    </div>
                    <ul className="ct-breadcrumb">
                        <li>
                            <Link
                                className="breadcrumb-entry"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <i className="fa-solid fa-angles-right"></i>
                        </li>
                        <li>
                            <span className="breadcrumb-entry">Career</span>
                        </li>
                    </ul>
                </div>
            </div>

      <div className="container py-5">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2>Join Our Team</h2>
          <p>We are always looking for talented people to grow with us.</p>
        </div>

        <div className="row">

          {/* LEFT - JOB LIST */}
          <div className="col-lg-4 mb-4">

            <div className="elementor-widget-container">
              <h5>Frontend Developer</h5>
              <p>React.js | 1-3 Years</p>
            </div>

            <div className="elementor-widget-container">
              <h5>Backend Developer</h5>
              <p>Node.js | 2-4 Years</p>
            </div>

            <div className="elementor-widget-container">
              <h5>SEO Executive</h5>
              <p>1-2 Years Experience</p>
            </div>

          </div>

          {/* RIGHT - FORM */}
          <div className="col-lg-8">
            <div className="form-container">
            <form onSubmit={handleSubmit}>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <small className="text-danger">{errors.name}</small>
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <small className="text-danger">{errors.email}</small>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <small className="text-danger">{errors.phone}</small>
                </div>

                <div className="col-md-6 mb-3">
                  <select
                    name="position"
                    className="form-control"
                    value={formData.position}
                    onChange={handleChange}
                  >
                    <option value="">Select Position</option>
                    <option>Frontend Developer</option>
                    <option>Backend Developer</option>
                    <option>SEO Executive</option>
                  </select>
                  <small className="text-danger">{errors.position}</small>
                </div>
              </div>

              <div className="mb-3">
                <input
                  type="file"
                  name="resume"
                  className="form-control"
                  onChange={handleChange}
                />
                <small className="text-danger">{errors.resume}</small>
              </div>

              <div className="mb-3">
                <textarea
                  name="message"
                  placeholder="Why should we hire you?"
                  className="form-control"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button className="btn btn-primary w-100">
                Apply Now
              </button>

              {/* STATUS */}
              {status === "success" && (
                <p className="text-success mt-3">Application sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-danger mt-3">Something went wrong!</p>
              )}

            </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;