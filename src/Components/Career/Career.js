import React, { useState } from "react";
import Footer from "../Footer/Footer";
import axios from "axios";
import emailjs from "@emailjs/browser";
import check from "../Images/check.svg";
import bgfg from "../Images/bgfg.svg";
import hnd from "../Images/hnd.svg";
import "../InContact/InContact.css";
import { useForm, ValidationError } from "@formspree/react";

export default function Career() {
  // const [state, handleSubmit] = useForm("xpzgnaaj");
  // if (state.succeeded) {
  //   return <p>Thanks!</p>;
  // }

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState("");
  const [msg, setMsg] = useState("");
  const [exp, setExp]=useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

  // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_mral58r";
    const templateId = "template_e65j1si";
    const publicKey = "KUmnUDKNOkz1DJ9_b";

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: fname + " " + lname,
      from_email: email,
      to_name: "CTI",
      message: exp+" " +msg + " Resume Link-> "+file,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setFname("");
        setLname("");
        setEmail("");
        setMsg("");
        setFile("");
        setExp("")
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   // Your EmailJS service ID, template ID, and Public Key
  //   const serviceId = "service_mral58r";
  //   const templateId = "template_e65j1si";
  //   const publicKey = "KUmnUDKNOkz1DJ9_b";
  
  //   try {
  //     // Create a new FormData object to handle file attachments
  //     const formData = new FormData();
  //     formData.append("service_id", serviceId);
  //     formData.append("template_id", templateId);
  //     formData.append("user_id", publicKey);
  //     formData.append("template_params", JSON.stringify({
  //       from_name: fname + " " + lname,
  //       from_email: email,
  //       to_name: "CTI",
  //       message: msg,
  //     }));
  
  //     // Check if the 'file' state is not null or undefined
  //     if (file && file.files && file.files[0]) {
  //       formData.append("file", file.files[0]);
  //     }
  
  //     // Use fetch to send a POST request
  //     // const apiUrl = "https://api.emailjs.com/api/v1.0/email/send-form";
  //     const response = await fetch(`https://api.emailjs.com/api/v1.0/email/send-form/service_mral58r/template_e65j1si`, {
  //       method: "POST",
  //       headers: {
  //         Authorization: `Bearer ${publicKey}`,
  //       },
  //       body: formData,
  //     });
  
  //     if (!response.ok) {
  //       throw new Error(`Error sending email: ${response.statusText}`);
  //     }
  
  //     const responseData = await response.json();
  //     console.log("Email sent successfully!", responseData);
  
  //     // Clear form fields
  //     setFname("");
  //     setLname("");
  //     setEmail("");
  //     setMsg("");
  //     setFile("");
  //   } catch (error) {
  //     console.error("Error sending email:", error.message);
  //   }
  // };
  

  return (
    <>
      <div className="incontact_parent">
        <section class="h-screen grid grid-cols-2">
          <main class="flex flex-col overflow-y-auto">
            <div class="py-7" style={{ paddingInline: "22px" }}>
              {/* <a href="/">
                <img
                  src="/static/img/formspree-new.svg"
                  width="145"
                  height="32"
                />
              </a> */}
            </div>
            <div class="px-20 py-8">
              <div class="w-full max-w-lg m-auto">
                <h2 class="text-3xl font-semibold text-gray-900">
                  Get In Touch
                </h2>
                <form
                  onSubmit={handleSubmit}
                  class="grid gap-y-10 mt-10 text-gray-600"
                >
                  <fieldset class="grid gap-y-6">
                    <div class="grid grid-cols-2 gap-x-4">
                      <div class="flex flex-col gap-2">
                        <label for=":rg:" class="font-medium text-gray-600">
                          <span>First Name</span>
                          <span
                            // aria-hidden="true"
                            class="text-red-600 select-none"
                          >
                            &nbsp;*
                          </span>
                        </label>
                        <div class="flex items-center gap-x-2 px-4 rounded bg-gray-100 border-2 border-gray-100 focus:outline-none focus-within:ring-1 focus-within:ring-gray-400">
                          <input
                            // autocomplete="name"
                            type="text"
                            class="flex-grow h-10 appearance-none border-none m-0 p-0 bg-transparent focus:ring-0"
                            id=":rg:"
                            value={fname}
                            required
                            onChange={(e) => setFname(e.target.value)}
                          />
                        </div>
                        
                      </div>
                      <div class="flex flex-col gap-2">
                        <label for=":rh:" class="font-medium text-gray-600">
                          <span>Last Name</span>
                          <span
                            aria-hidden="true"
                            class="text-red-600 select-none"
                          >
                            &nbsp;*
                          </span>
                        </label>
                        <div class="flex items-center gap-x-2 px-4 rounded bg-gray-100 border-2 border-gray-100 focus:outline-none focus-within:ring-1 focus-within:ring-gray-400">
                          <input
                            // autocomplete="name"
                            type="text"
                            class="flex-grow h-10 appearance-none border-none m-0 p-0 bg-transparent focus:ring-0"
                            id=":rh:"
                            value={lname}
                            required
                            onChange={(e) => setLname(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>


                    <div class="flex flex-col gap-2">
                      <label for=":ri:" class="font-medium text-gray-600">
                        <span>Email</span>
                        <span
                          aria-hidden="true"
                          class="text-red-600 select-none"
                        >
                          &nbsp;*
                        </span>
                      </label>

                      <div class="flex items-center gap-x-2 px-4 rounded bg-gray-100 border-2 border-gray-100 focus:outline-none focus-within:ring-1 focus-within:ring-gray-400">
                        <input
                          // autocomplete="email"
                          type="email"
                          required
                          class="flex-grow h-10 appearance-none border-none m-0 p-0 bg-transparent focus:ring-0"
                          id=":ri:"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>




                    <div>
                      <div class="flex flex-col gap-2">
                        <label for=":rj:" class="font-medium text-gray-900">
                          <span>How many years of experience do you have, and what is your expected salary?</span>
                          <span
                            aria-hidden="true"
                            class="text-red-1000 select-none"
                          >
                            &nbsp;*
                          </span>
                        </label>
                        <div class="flex items-center gap-x-2 px-4 rounded bg-gray-100 border-2 border-gray-100 focus:outline-none focus-within:ring-1 focus-within:ring-gray-400">
                          <input
                            type="text"
                            // autocomplete="new-password"
                            class="flex-grow h-10 appearance-none border-none m-0 p-0 bg-transparent focus:ring-0"
                            id=":rj:"
                            value={exp}
                            onChange={(e) => setExp(e.target.value)}
                          />

                          <div class="flex-shrink-0">
                            <div class="flex items-center gap-x-2">
                              <button
                                class="block w-6 h-6 text-gray-300"
                                type="button"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                  <path
                                    fill-rule="evenodd"
                                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div class="flex flex-col gap-2">
                        <label for=":rj:" class="font-medium text-gray-900">
                          <span>Role for Applying</span>
                          <span
                            aria-hidden="true"
                            class="text-red-1000 select-none"
                          >
                            &nbsp;*
                          </span>
                        </label>
                        <div class="flex items-center gap-x-2 px-4 rounded bg-gray-100 border-2 border-gray-100 focus:outline-none focus-within:ring-1 focus-within:ring-gray-400">
                          <input
                            type="text"
                            // autocomplete="new-password"
                            class="flex-grow h-10 appearance-none border-none m-0 p-0 bg-transparent focus:ring-0"
                            id=":rj:"
                            value={msg}
                            onChange={(e) => setMsg(e.target.value)}
                          />

                          <div class="flex-shrink-0">
                            <div class="flex items-center gap-x-2">
                              <button
                                class="block w-6 h-6 text-gray-300"
                                type="button"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                  <path
                                    fill-rule="evenodd"
                                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="flex flex-col gap-2">
                      <label for=":ri:" class="font-medium text-gray-600">
                        <span>Upload resume Link</span>
                        <span
                          aria-hidden="true"                          
                        >
                          &nbsp;*
                        </span>
                      </label>
                      <div class="flex items-center gap-x-2 px-4 rounded bg-gray-100 border-2 border-gray-100 focus:outline-none focus-within:ring-1 focus-within:ring-gray-400">
                        <input
                          type="text"
                          required
                          class="flex-grow h-10 appearance-none border-none m-0 p-0 bg-transparent focus:ring-0"
                          id=":ri:"
                          value={file}
                          onChange={(e) => setFile(e.target.value)}
                        />
                      </div>
                    </div>

                  </fieldset>

                  {/* <fieldset class="grid gap-y-2"> */}
                  {/* <div class="flex items-start gap-2">
                      <div class="inline-flex py-1">
                        <button
                          class="flex-shrink-0 inline-flex w-4 h-4 rounded border cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 border-gray-300 hover:border-gray-500"
                          id=":rk:"
                          role="switch"
                          type="button"
                          tabindex="0"
                          aria-checked="false"
                          data-headlessui-state=""
                        ></button>
                      </div>
                      <label for=":rk:">
                        I understand and agree to the{" "}
                        <a
                          class="font-semibold text-primary"
                          href="/legal/terms-of-service/"
                        >
                          terms of use
                        </a>{" "}
                        and{" "}
                        <a
                          class="font-semibold text-primary"
                          href="/legal/privacy-policy/"
                        >
                          privacy policy
                        </a>
                        <span
                          aria-hidden="true"
                          class="text-red-600 select-none"
                        >
                          &nbsp;*
                        </span>
                      </label>
                    </div> */}
                  {/* <div class="flex items-start gap-2">
                      <div class="inline-flex py-1">
                        <button
                          class="flex-shrink-0 inline-flex w-4 h-4 rounded border cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 border-gray-300 hover:border-gray-500"
                          id=":rm:"
                          role="switch"
                          type="button"
                          tabindex="0"
                          aria-checked="false"
                          data-headlessui-state=""
                        ></button>
                      </div>
                      <label for=":rm:">
                        Please send me occasional Formspree news updates
                      </label>
                    </div> */}

                  {/* </fieldset> */}
                  {/* <p class="order-last">
                    Already have an account?{" "}
                    <a class="font-semibold text-primary" href="/login">
                      Sign in
                    </a>
                  </p> */}

                  <div class="hidden">
                    <div>
                      {/* <div
                        class="grecaptcha-badge"
                        data-style="inline"
                        style={{
                          width: "256px",
                          height: "60px",
                          boxShadow: "gray 0px 0px 5px",
                        }}
                      >
                        <div class="grecaptcha-logo">
                          <iframe
                            title="reCAPTCHA"
                            width="256"
                            height="60"
                            role="presentation"
                            name="a-73iu85a4mk9h"
                            frameborder="0"
                            scrolling="no"
                            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                            src="https://recaptcha.net/recaptcha/api2/anchor?ar=1&amp;k=6Lcyy6oUAAAAAIbnPbhnPynqPfDrFiT6U77yd6mf&amp;co=aHR0cHM6Ly9mb3Jtc3ByZWUuaW86NDQz&amp;hl=en&amp;type=image&amp;v=vm_YDiq1BiI3a8zfbIPZjtF2&amp;theme=light&amp;size=invisible&amp;badge=inline&amp;cb=w3gig25o4jqz"
                          ></iframe>
                        </div>
                        <div class="grecaptcha-error"></div>
                        <textarea
                          id="g-recaptcha-response-2"
                          name="g-recaptcha-response"
                          class="g-recaptcha-response"
                          style={{
                            width: "250px",
                            height: "40px",
                            border: "1px solid rgb(193, 193, 193)",
                            margin: "10px 25px",
                            padding: "0px",
                            resize: "none",
                            display: "none",
                          }}
                        ></textarea>
                      </div> */}

                      <iframe style={{ display: " none" }}></iframe>
                    </div>
                  </div>

                  <button
                    style={{
                      backgroundColor: "var(--color-primary)",
                      height: "4rem",
                      fontWeight: "700",
                    }}
                    class="buttonPrimary px-6 justify-self-start buttonPrimary"
                    type="submit"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </main>

          <aside class="grid p-6">
            <section
              class="relative grid place-content-center px-8 py-40 text-white bg-secondary rounded-lg"
              style={{
                backgroundImage: `url(${bgfg})`,
                // "url(&quot;https://formspree.io/static/js/../321716598ca0a687d87fb83a0b737452.svg&quot;)",
                backgroundPosition: "-140px -200px",
                backgroundSize: "697px 559px",
                backgroundRepeat: "no-repeat",
              }}
            >
              <ul class="grid gap-y-12 mx-auto w-full max-w-lg">
                <li class="flex items-center gap-x-6">
                  <img
                    class="inline-flex flex-shrink-0"
                    src={check}
                    alt="Block spam with AI"
                    width="48"
                    height="48"
                    aria-hidden="true"
                  />
                  <div class="flex-grow">
                    <h3 class="text-xl leading-8 font-bold">
                      Block spam with AI
                    </h3>
                    <p class="mt-2">
                      With Formshield your forms are protected using a
                      combination of AI, machine learning and matching
                      techniques.
                    </p>
                  </div>
                </li>
                <li class="flex items-center gap-x-6">
                  <img
                    class="inline-flex flex-shrink-0"
                    src={hnd}
                    alt="All your submissions in one place"
                    width="48"
                    height="48"
                    aria-hidden="true"
                  />
                  <div class="flex-grow">
                    <h3 class="text-xl leading-8 font-bold">
                      All your submissions in one place
                    </h3>
                    <p class="mt-2">
                      No more hunting through emails. You can search, sort and
                      filter your form submissions .
                    </p>
                  </div>
                </li>

                {/* <li class="flex items-center gap-x-6">
                  <img
                    class="inline-flex flex-shrink-0"
                    src="https://formspree.io/static/js/../2fbe8e22bd5398cfa6c7e7b1706c55ae.svg"
                    alt="Trigger 3rd party integrations"
                    width="48"
                    height="48"
                    aria-hidden="true"
                  />
                  <div class="flex-grow">
                    <h3 class="text-xl leading-8 font-bold">
                      Trigger 3rd party integrations
                    </h3>
                    <p class="mt-2">
                      Formspree has built dozens of integrations with popular
                      3rd party services. We monitor each plugin to ensure your
                      data is delivered.
                    </p>
                  </div>
                </li> */}
              </ul>
            </section>
          </aside>
        </section>
      </div>
    </>
  );
}
