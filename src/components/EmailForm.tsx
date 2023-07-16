import React, { useState } from "react";
import FormInputElement from "./UI/FormInputElement";
import FormTextArea from "./UI/FormTextArea";

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

const EmailForm = ({ loading }: { loading: boolean }) => {
  const [dataEntered, setDataEntered] = useState<EmailFormFields>(initialState);

  const onChangeHandler = (event: any) => {
    setDataEntered((prevstate) => {
      return { ...prevstate, [event.target.name]: event.target.value };
    });
    console.log(dataEntered.name);
  };
  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    console.log("hey");
  };
  return (
    <form className="mt-12 flex flex-col gap-8" onSubmit={onSubmitHandler}>
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
        rows={7}
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
