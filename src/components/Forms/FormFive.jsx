import React from "react";
import { Button } from "../";
import { useForm, ValidationError } from "@formspree/react";

const FormFive = () => {
  const [state, handleSubmit] = useForm("xnqkywkw");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <form action="#" className="vs-contact-form" onSubmit={handleSubmit}>
      <div className="row gx-20">
        <div className="col-md-6 form-group">
          <input type="text" placeholder="Your Name" />
          <i className="fal fa-user" />
        </div>
        <div className="col-md-6 form-group">
          <input name="email" type="email" placeholder="Email Address" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <i className="fal fa-envelope" />
        </div>
        <div className="col-12 form-group">
          <select>
            <option defaultValue="nothing">Select subject</option>
            <option defaultValue="Web Development">Web Development</option>
            <option defaultValue="Cloud Service"> Cloud Service </option>
            <option defaultValue="Maintainence Service">
              Maintainence Service
            </option>
            <option defaultValue="Web Design"> Web Design </option>
            <option defaultValue="SEO Marketing"> SEO Marketing </option>
            <option defaultValue="Free Consultation">Free Consultation</option>
          </select>
        </div>
        <div className="col-12 form-group">
          <textarea
            placeholder="Type Your Message"
            id="message"
            name="message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div className="col-12">
          <button type="submit"> Submit </button>
          {/* <Button type="submit" onclick={handleSubmit}>
            Submit Message
            <i className="far fa-arrow-right" />
          </Button> */}
        </div>
      </div>
    </form>
  );
};

export default FormFive;
