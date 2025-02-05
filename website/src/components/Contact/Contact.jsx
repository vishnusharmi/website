import React, { useState } from "react";

const Contact = () => {
  const [mapContainerStyle] = useState({
    width: "100%",
    height: "400px",
  });

  // usestate
  const [center] = useState({
    lat: 17.451771,
    lng: 78.393103,
  });
  // State to hold form data and validation errors
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phoneNumber: "",
    query: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    email: "",
    phoneNumber: "",
    query: "",
  });

  // Handle input change and update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form data
  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.firstName) {
      formErrors.firstName = "First name is required";
      isValid = false;
    }
    if (!formData.email) {
      formErrors.email = "Email is required";
      isValid = false;
    }
    if (!formData.phoneNumber) {
      formErrors.phoneNumber = "Phone number is required";
      isValid = false;
    }
    if (!formData.query) {
      formErrors.query = "Please enter your query";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form if valid
      console.log("Form submitted successfully:", formData);
      // You can clear the form after submission or keep the data
      setFormData({
        firstName: "",
        email: "",
        phoneNumber: "",
        query: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="contact_us_6 font-nunito bg-gray-900 text-[#d8dedd]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <form className="form-box" onSubmit={handleSubmit}>
          <div className="container-block">
            <div className="mob-text text-center mb-8">
              <p className="text-lg font-semibold">Get in Touch</p>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
                diam lectus sapien.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="col-span-1">
                <p className="text-lg font-medium">YOUR NAME</p>
                <input
                  className="mt-2 w-full p-4 border border-[#d8dedd] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d9719] h-16"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Please enter first name..."
                />
                {errors.firstName && (
                  <p className="text-red-500">{errors.firstName}</p>
                )}
              </div>
              <div className="col-span-1">
                <p className="text-lg font-medium">EMAIL</p>
                <input
                  className="mt-2 w-full p-4 border border-[#d8dedd] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d9719] h-16"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Please enter email..."
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
              <div className="col-span-1">
                <p className="text-lg font-medium">PHONE NUMBER</p>
                <input
                  className="mt-2 w-full p-4 border border-[#d8dedd] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d9719] h-16"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Please enter phone number..."
                />
                {errors.phoneNumber && (
                  <p className="text-red-500">{errors.phoneNumber}</p>
                )}
              </div>
              <div className="col-span-1">
                <p className="text-lg font-medium">WHAT DO YOU HAVE IN MIND?</p>
                <textarea
                  className="mt-2 w-full p-4 border border-[#d8dedd] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d9719] resize-none h-16"
                  name="query"
                  value={formData.query}
                  onChange={handleChange}
                  placeholder="Please enter query..."
                ></textarea>
                {errors.query && <p className="text-red-500">{errors.query}</p>}
              </div>
            </div>
            <div className="flex justify-center ">
              <button
                type="submit"
                className="submit-btn mt-6 py-3 px-20 font-bold text-lg   bg-[#2d9719] text-white p-4 rounded-lg hover:bg-[#276f14] focus:outline-none"
              >
                Submit
              </button>
            </div>
          </div>
        </form>

        <div className="social-media-container mt-12 text-center">
          <p className="text-lg font-semibold">Reach us at</p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis diam
            lectus sapien.
          </p>
          <div className="flex justify-center mt-6 space-x-6">
            <a href="#" className="text-[#2d9719]">
              <img
                className="w-8 h-8"
                src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png"
                alt="Twitter"
              />
            </a>
            <a href="#" className="text-[#2d9719]">
              <img
                className="w-8 h-8"
                src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png"
                alt="Facebook"
              />
            </a>
            <a href="#" className="text-[#2d9719]">
              <img
                className="w-8 h-8"
                src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-google.png"
                alt="Google"
              />
            </a>
            <a href="#" className="text-[#2d9719]">
              <img
                className="w-8 h-8"
                src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png"
                alt="Instagram"
              />
            </a>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-lg font-semibold text-center mb-4">Our Location</p>
          <div className="w-full h-[400px] flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1834.2238585619596!2d78.37919804169476!3d17.450056056905648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1738647982087!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
