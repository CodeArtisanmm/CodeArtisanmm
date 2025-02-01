import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useTranslation } from "react-i18next";
import services from "../../data/service.json";

const FormFive = () => {
  const [state, handleSubmit] = useForm("xnqkywkw");
  const { t } = useTranslation();
  if (state.succeeded) {
    return <p> {t("contact.thanks_for_joining")}</p>;
  }

  return (
    <form action="#" className="vs-contact-form" onSubmit={handleSubmit}>
      <div className="row gx-20">
        <div className="col-md-6 form-group">
          <input type="text" placeholder={t("contact.your_name")} />
          <i className="fal fa-user" />
        </div>
        <div className="col-md-6 form-group">
          <input
            name="email"
            type="email"
            placeholder={t("contact.email_address")}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <i className="fal fa-envelope" />
        </div>
        <div className="col-12 form-group">
          <select>
            <option defaultValue="nothing">
              {t("contact.select_subject")}
            </option>
            {services.map((item) => (
              <option key={item.id}>
                {t(`home.service.${item.title}.title`)}
              </option>
            ))}
          </select>
        </div>
        <div className="col-12 form-group">
          <textarea
            placeholder={t("contact.type_your_message")}
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
          <button type="submit" className="vs-btn">
            {t("contact.submit_message")}
            <i className="far fa-arrow-right" />
          </button>
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
