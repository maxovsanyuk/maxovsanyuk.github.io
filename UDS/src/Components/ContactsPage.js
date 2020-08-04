import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Header from "./Header";
import Footer from "./Footer";
import emailjs from "emailjs-com";
import Form from "./Form";

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 305px);
`;

const ContactsPage = () => {
  const [formState, setFormState] = useState({});
  const [isSendingForm, setIsSendingForm] = useState(false);
  const { register } = useForm();

  function sendEmail(e) {
    e.preventDefault();
    setIsSendingForm(true);

    emailjs
      .sendForm(
        "gmail",
        "template_hGxmtURS",
        e.target,
        "user_PjBk4AsJJeWCAU4tO0TDM"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      <Header />
      <Contacts>
        <h2 style={{ color: "#0067b8" }}>Контактна форма</h2>

        <Form isSendingForm={isSendingForm} sendEmail={sendEmail} />

        {/*<form encType="multipart/form-data" method="post">*/}
        {/*  <label>Attach file:</label>*/}
        {/*  <input type="file" name="file" />*/}
        {/*  <input type="submit" value="Submit" />*/}
        {/*</form>*/}

        {/*<a href="../Files/TestTask-Template.Dynamics-Education-1.zip" download>*/}
        {/*  Click to download*/}
        {/*</a>*/}

        {/*<a*/}
        {/*  href="https://drive.google.com/file/d/1L_Mze0Ke6vnN-LilYHPAwKvSxelzRzS0/view?usp=sharing"*/}
        {/*  download*/}
        {/*>*/}
        {/*  Click to download*/}
        {/*</a>*/}

        {/*<a*/}
        {/*  href="https://drive.google.com/file/d/1g-3MiOJFtseB06NAcEIcn1hrT2TdEEla/view?usp=sharing"*/}
        {/*  download*/}
        {/*>*/}
        {/*  Click to download*/}
        {/*</a>*/}
      </Contacts>

      <Footer />
    </>
  );
};

export default ContactsPage;

// {/*<Form onSubmit={(e) => handleSubmit(sendEmail(e))}>*/}
// {/*  /!*/!* register your input into the hook by invoking the "register" function *!/*!/*/}
// {/*  /!*<input name="example" defaultValue="test" ref={register} />*!/*/}
//
// {/*  /!*/!* include validation with required or other standard HTML validation rules *!/*!/*/}
// {/*  /!*<input name="exampleRequired" ref={register({ required: true })} />*!/*/}
// {/*  /!*/!* errors will return when field validation fails  *!/*!/*/}
//
// {/*  <label>Name</label>*/}
// {/*  <input type="text" name="name" />*/}
// {/*  <label>Phone</label>*/}
// {/*  <input type="text" name="phone" />*/}
// {/*  <label>Email</label>*/}
// {/*  <input type="email" name="email" />*/}
// {/*  <input type="text" name="text" />*/}
//
// {/*  {errors.exampleRequired && <span>This field is required</span>}*/}
//
// {/*  <input type="submit" />*/}
// {/*</Form>*/}
