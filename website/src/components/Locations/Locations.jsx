import React from "react";

function Locations() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="">
          <p className="text-2xl font-semibold text-center mb-6 text-white">
            Our Location in the US
          </p>
          <div className="w-full h-[400px] md:h-[500px] flex justify-center rounded-lg shadow-lg overflow-hidden">
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

          <p className="mt-4 text-white text-center text-lg">
            Our US office is located in the heart of the city, offering
            exceptional services and easy access to major transit routes. Come
            visit us!
          </p>
        </div>

        <div className="mt-12">
          <p className="text-2xl font-semibold text-center mb-6 text-white">
            Our Location in Australia
          </p>
          <div className="w-full h-[400px] md:h-[500px] flex justify-center rounded-lg shadow-lg overflow-hidden">
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

          <p className="mt-4 text-white text-center text-lg">
            Located in the vibrant city of Sydney, our Australian office is a
            hub for innovation, supporting local clients with tailored
            solutions.
          </p>
        </div>

        <div className="mt-12">
          <p className="text-2xl font-semibold text-center mb-6 text-white">
            Our Location in South Africa
          </p>
          <div className="w-full h-[400px] md:h-[500px] flex justify-center rounded-lg shadow-lg overflow-hidden">
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

          <p className="mt-4 text-white text-center text-lg">
            Situated in Cape Town, our South African office focuses on
            delivering impactful solutions to clients in Southern Africa and
            beyond.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Locations;
