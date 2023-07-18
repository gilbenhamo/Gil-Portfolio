import React, { useState } from "react";
import FormInputElement from "./UI/FormInputElement";
import FormTextArea from "./UI/FormTextArea";
import emailjs from "@emailjs/browser";
interface EmailFormFields {
  name: string;
  email: string;
  message: string;
}

const initialState = {
  name: "",
  email: "",
  message: "",
};

const EmailForm = () => {
  const [dataEntered, setDataEntered] = useState<EmailFormFields>(initialState);
  const [loading, setLoading] = useState(false);

  const onChangeHandler = (event: any) => {
    setDataEntered((prevstate) => {
      return { ...prevstate, [event.target.name]: event.target.value };
    });
    console.log(dataEntered.name);
  };
  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "serviceid",
        "template",
        {
          from_name: dataEntered.name,
          to_name: "Gil",
          from_email: dataEntered.email,
          to_email: "gilbh859@gmail.com",
          message: dataEntered.message,
        },
        "pubkey"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you, i will be in touch!");
          setDataEntered(initialState);
        },
        (error) => {setLoading(false);
        console.log("Error in sending email!")
        alert('Something went wrong. :(')
        }
      );
  };
  return (
    <form
      className="mt-12 flex flex-col gap-8 items-center"
      onSubmit={onSubmitHandler}
    >
      <FormInputElement
        label={"Your Name"}
        name={"name"}
        type={"text"}
        value={dataEntered.name}
        onChnage={onChangeHandler}
        placeholder={"What's your name?"}
      />
      <FormInputElement
        label={"Your Email"}
        name={"email"}
        type={"email"}
        value={dataEntered.email}
        onChnage={onChangeHandler}
        placeholder={"What's your email?"}
      />
      <FormTextArea
        label={"Your Message"}
        name={"message"}
        rows={6}
        value={dataEntered.message}
        onChnage={onChangeHandler}
        placeholder={"What do you want to say?"}
      />
      <button
        type="submit"
        className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-2xl"
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
};

export default EmailForm;
