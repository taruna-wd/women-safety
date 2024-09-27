import React, { useState } from "react";
import { useFormik } from "formik";
import service from "../../appwrite/db";

const validate = (values) => {
  const errors = {};
  if (!values.fullName) {
    errors.fullName = "Enter valid full  name ";
  } else if (values.fullName.length > 15) {
    errors.fullName = "Must be 15 characters or less";
  }

  if (!values.email) {
    errors.email = "Enter valid email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.phone) {
    errors.phone = "Enter valid number ";
  } else if (!/^[0-9]{10}$/i.test(values.phone)) {
    errors.phone = "Invalid phone number";
  }

  if (!values.location) {
    errors.location = "Add your current location ";
  } else if (!values.location) {
    errors.location = "Invalid phone number";
  }
  if (!values.incidentType) {
    errors.incidentType = "Add type ";
  } else if (values.incidentType === "") {
    errors.incidentType = "Invalid phone number";
  }

  if (!values.way) {
    errors.way = "Add type ";
  } else if (values.way === "") {
    errors.way = "Please select a preferred way to contact";
  }
  if (!values.urgent) {
    errors.urgent = "Add  urgency level";
  } else if (values.urgent === "") {
    errors.urgent = "Please specify the urgency level";
  }
  if (!values.help) {
    errors.help = "type of help ";
  } else if (values.help === "") {
    errors.help = "Please specify the type of help you need";
  }
  if (!values.agree) {
    errors.agree = "you must be check ";
  } else if (!values.agree) {
    errors.agree = "You must agree to the terms to proceed";
  }
  return errors;
};

function Form() {
  // const [contactData , setContactData] = useState({
  //     fullName : "",
  //     email : "",
  //     phone :"",
  //     location : "" ,
  //     incidentType : "" ,
  //     way : "",
  //     urgent : "",
  //     help : "" ,
  //     agree : false

  // })
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      incidentType: "",
      way: "",
      urgent: "",
      help: "",
      agree : false
    },
    validate,
    onSubmit: async (values, { setSubmitting, setErrors, resetForm }) => {
      try {
        // Call the Appwrite service to create an entry in the database
        await service.createEntry(values);

        // Handle successful submission (e.g., show a success message, reset the form)
        alert("Submission successful!");
        resetForm();  // Clear the form

      } catch (error) {
        console.error("Error submitting form:", error);
        // You could also set form-level error here if needed
        setErrors({ submit: "Failed to submit. Please try again later." });
      } finally {
        setSubmitting(false);  // Turn off the loading state
      }
    },
  });

  //     const handleChange = (e)=>{
  //         setContactData({...contactData , [e.target.name] : e.target.value})
  //     }
  //  const handleSubmit =(e)=>{
  //     e.preventDefault()
  //     console.log("submit form")

  //  }
  return (
    <>
      <section className="w-1/2 md:p-10 p-5  my-3 mx-auto bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="md:flex   space-y-4 sm:flex sm:space-y-0 sm:space-x-2 rtl:space-x-reverse">
          <form
            className="max-w-sm mx-auto w-full"
            onSubmit={formik.handleSubmit}
          >
            <div className="mb-3">
              <label
                for="fullName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                full Name{" "}
              </label>
              <input
                type="text"
                name="fullName"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                id="fullName"
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {formik.errors.fullName ? (
                <div className="text-red-600">{formik.errors.fullName}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                {" "}
                Email{" "}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {formik.errors.email ? (
                <div className="text-red-600">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="mb-3">
              <label
                for="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                {" "}
                Phone{" "}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {formik.errors.phone ? (
                <div className="text-red-600">{formik.errors.phone}</div>
              ) : null}
            </div>

            <div className="mb-3">
              <label
                for="location"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                {" "}
                location{" "}
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formik.values.location}
                onChange={formik.handleChange}
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {formik.errors.location ? (
                <div className="text-red-600">{formik.errors.location}</div>
              ) : null}
            </div>

            <div className="mb-3">
              <label
                for="incidentType"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                {" "}
                Incident Type{" "}
              </label>
              <select
                id="incidentType"
                name="incidentType"
                value={formik.values.incidentType}
                onChange={formik.handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>type</option>
                <option value="H">Harassment </option>
                <option value="S">Stalking</option>
                <option value="PA">Physical Assault </option>
                <option value="DV">Domestic Violence</option>
                <option value="GSC"> General Safety Concern</option>
                <option value="OTH"> Others</option>
              </select>
              {formik.errors.incidentType ? (
                <div className="text-red-600">{formik.errors.incidentType}</div>
              ) : null}
            </div>

            <div className="mb-3">
              <label
                for="way"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Preferred Way to Reach You{" "}
              </label>
              <select
                id="way"
                name="way"
                value={formik.values.way}
                onChange={formik.handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>type</option>
                <option value="email">Email </option>
                <option value="phone">Phone call</option>
                <option value="sms">SMS </option>
              </select>
              {formik.errors.way ? (
                <div className="text-red-600">{formik.errors.way}</div>
              ) : null}
            </div>

            {/* garbhard */}
            <div className="mb-3">
              <label
                for="Urgent"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                How Urgent is Your Concern?
              </label>
              <select
                id="Urgent"
                name="urgent"
                value={formik.values.urgent}
                onChange={formik.handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>select</option>
                <option value="NU">Not Urgent</option>
                <option value="U"> Urgent</option>
                <option value="E">Emergency </option>
              </select>
              {formik.errors.urgent ? (
                <div className="text-red-600">{formik.errors.urgent}</div>
              ) : null}
            </div>

            <div className="mb-4">
              <label
                for="help"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                What Kind of Support Do You Need ?{" "}
              </label>
              <select
                id="help"
                name="help"
                value={formik.values.help}
                onChange={formik.handleChange}
                type="checkbox"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Emotional Support</option>
                <option value="legal">Legal Help </option>
                <option value="trainig">Self-defense Training</option>
                <option value="assistance">Emergency Assistance</option>
              </select>
              {formik.errors.help ? (
                <div className="text-red-600">{formik.errors.help}</div>
              ) : null}
            </div>
            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input
                  id="agree"
                  type="checkbox"
                  name="agree"
                  value={formik.values.agree}
                  onChange={formik.handleChange}
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                />
              </div>
              <label
                for="agree"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I agree with the{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  terms and conditions
                </a>
              </label>
            </div>

            {formik.errors.agree ? (
              <div className="text-red-600">{formik.errors.agree}</div>
            ) : null}

            <button
              type="submit"
              className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
            >
              {" "}
              Complaint
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Form;
