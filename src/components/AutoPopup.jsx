import React, { useEffect, useRef } from "react";
import { sendEmail } from "../utils/sendEmail.js";
// import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min";

export default function AutoPopup() {

  const modalRef = useRef(null);

  useEffect(() => {

    // 5 second baad popup open
    const timer = setTimeout(() => {
      const modal = new bootstrap.Modal(modalRef.current);
      modal.show();
    }, 5000);

    return () => clearTimeout(timer);

  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(e.target);
  };

  return (
    <>
      {/* Modal */}
      <div
        className="modal fade"
        ref={modalRef}
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">
                Get Free Consultation
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">

              {/* ENQUIRY FORM */}
              <form onSubmit={handleSubmit}>

                <input
                  name="page"
                  value="Popup Enquiry"
                  hidden
                  readOnly
                />

                <div className="mb-3">
                  <input
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    name="phone"
                    className="form-control"
                    placeholder="Phone Number"
                    required
                  />
                </div>

                <div className="mb-3">
                  <select
                    name="service"
                    className="form-select"
                    required
                  >
                    <option value="">
                      Select Service
                    </option>
                    <option>Web Development</option>
                    <option>SEO</option>
                    <option>Digital Marketing</option>
                  </select>
                </div>

                <div className="mb-3">
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="Your Message"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Send Enquiry
                </button>

              </form>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}