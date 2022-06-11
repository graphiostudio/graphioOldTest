import { useState, useContext, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TranslationContext from "../../context/translation/TranslationContext";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const { t } = useContext(TranslationContext);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    business: "",
    message: "",
  });

  const form = useRef();

  const { name, phone, email, business, message } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const isEmpty = !Object.values(formData).every(
      (x) => x !== null && x !== ""
    );

    if (isEmpty) {
      toast.error("Please fill all inputs");
    } else {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            toast.success("Your email was sent");
            setFormData({
              name: "",
              phone: "",
              email: "",
              business: "",
              message: "",
            });
          },
          (error) => {
            toast.error("Error sending email");
          }
        );

      // For Nodemailer
      // fetch("/email-sent", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // })
      //   .then((res) => res)
      //   .then((data) => {
      //     if (data.status === 200) {
      //       toast.success("Email sent!");
      //     } else {
      //       toast.error("Email was not sent.");
      //     }
      //   });
    }
  };
  return (
    <div className="bg-gRed-dark py-32 md:py-40">
      <form
        ref={form}
        onSubmit={onSubmit}
        className="container mx-auto flex flex-col items-center"
      >
        <div className="grid md:grid-cols-2 gap-5 md:gap-12 w-5/6">
          <label className="text-neutral-100 font-ginger">
            {t("name")}
            <input
              id="name"
              className="mt-2 bg-neutral-100 text-neutral-800 font-ginger px-3 py-2 rounded-lg w-full outline-none"
              type="text"
              name="user_name"
              placeholder={t("namePlaceholder")}
              value={name}
              onChange={onChange}
            />
          </label>
          <label className="text-neutral-100 font-ginger">
            {t("phone")}
            <input
              id="phone"
              className="mt-2 bg-neutral-100 text-neutral-800 font-ginger px-3 py-2 rounded-lg w-full outline-none"
              type="number"
              name="user_phone"
              placeholder="+66x-xxx-xxxx"
              value={phone}
              onChange={onChange}
            />
          </label>

          <label className="text-neutral-100 font-ginger">
            {t("email")}
            <input
              id="email"
              className="mt-2 bg-neutral-100 text-neutral-800 font-ginger px-3 py-2 rounded-lg w-full outline-none"
              type="email"
              name="user_email"
              placeholder="sample@gmail.com"
              value={email}
              onChange={onChange}
            />
          </label>
          <label className="text-neutral-100 font-ginger">
            {t("business")}
            <input
              id="business"
              className="mt-2 bg-neutral-100 text-neutral-800 font-ginger px-3 py-2 rounded-lg w-full outline-none"
              type="text"
              name="business_name"
              placeholder={t("businessPlaceholder")}
              value={business}
              onChange={onChange}
            />
          </label>
          <label className="md:col-span-2 text-neutral-100 font-ginger">
            {t("textArea")}
            <textarea
              id="message"
              className="mt-2 bg-neutral-100 text-neutral-800 font-ginger px-3 py-2 rounded-lg w-full outline-none"
              placeholder={t("textAreaPlaceholder")}
              name="message"
              value={message}
              onChange={onChange}
            />
          </label>
        </div>
        <input
          type="submit"
          value={t("submit")}
          className="uppercase text-neutral-100 font-ginger border-2 rounded-full py-2 px-8 mt-8 cursor-pointer hover:bg-neutral-100 hover:text-gRed-light transition-colors duration-200"
        ></input>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
