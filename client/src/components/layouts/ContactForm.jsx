import { useState, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TranslationContext from "../../context/translation/TranslationContext";

const ContactForm = () => {
  const { t } = useContext(TranslationContext);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    business: "",
    message: "",
  });

  const { name, phone, email, business, message } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    fetch("/email-sent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res)
      .then((data) => {
        if (data.status === 200) {
          toast.success("Email sent!");
        } else {
          toast.error("Email was not sent.");
        }
      });
  };
  return (
    <div className="bg-gRed-dark py-32 md:py-40">
      <form
        onSubmit={onSubmit}
        className="container mx-auto flex flex-col items-center"
      >
        <div className="grid md:grid-cols-2 gap-5 md:gap-12 w-5/6">
          <label className="text-neutral-100 font-ginger">
            {t("name")}
            <input
              className="mt-2 bg-neutral-100 text-neutral-800 font-ginger px-3 py-2 rounded-lg w-full outline-none"
              type="text"
              id="name"
              placeholder={t("namePlaceholder")}
              value={name}
              onChange={onChange}
            />
          </label>
          <label className="text-neutral-100 font-ginger">
            {t("phone")}
            <input
              className="mt-2 bg-neutral-100 text-neutral-800 font-ginger px-3 py-2 rounded-lg w-full outline-none"
              type="number"
              id="phone"
              placeholder="+66x-xxx-xxxx"
              value={phone}
              onChange={onChange}
            />
          </label>

          <label className="text-neutral-100 font-ginger">
            {t("email")}
            <input
              className="mt-2 bg-neutral-100 text-neutral-800 font-ginger px-3 py-2 rounded-lg w-full outline-none"
              type="email"
              id="email"
              placeholder="sample@gmail.com"
              value={email}
              onChange={onChange}
            />
          </label>
          <label className="text-neutral-100 font-ginger">
            {t("business")}
            <input
              className="mt-2 bg-neutral-100 text-neutral-800 font-ginger px-3 py-2 rounded-lg w-full outline-none"
              type="text"
              id="business"
              placeholder={t("businessPlaceholder")}
              value={business}
              onChange={onChange}
            />
          </label>
          <label className="md:col-span-2 text-neutral-100 font-ginger">
            {t("textArea")}
            <textarea
              className="mt-2 bg-neutral-100 text-neutral-800 font-ginger px-3 py-2 rounded-lg w-full outline-none"
              id="message"
              placeholder={t("textAreaPlaceholder")}
              value={message}
              onChange={onChange}
            />
          </label>
        </div>
        <input
          type="submit"
          value={t("submit")}
          className="uppercase text-neutral-100 font-ginger border-2 rounded-full py-2 px-8 mt-8"
        ></input>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
