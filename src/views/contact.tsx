"use client";

import MailIcon from "@/ui/icons/mail";
import PersonIcon from "@/ui/icons/person";
import InputBox from "@/ui/InputBox";
import SectionContainer from "@/ui/SectionContainer";
import SubtitleText from "@/ui/SubtitleText";
import TitleText from "@/ui/TitleText";
import { useRouter } from "next/navigation";

const ContactSection = () => {
  const router = useRouter();

  const handleSubmit = (event: { preventDefault: () => void; target: any }) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("_form.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      // @ts-ignore
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => router.push("/success"))
      .catch((error) => alert(error));
  };

  return (
    <SectionContainer
      sectionClasses="text-center pb-6 relative"
      innerContainerClasses="flex flex-col gap-8"
      sectionName="contact"
      isFullWidth
    >
      <div className="flex flex-col gap-4">
        <TitleText>Contact Us</TitleText>
        <SubtitleText>
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </SubtitleText>
      </div>
      <form
        className="flex flex-col gap-4"
        name="contact"
        method="post"
        netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
        action={"/success"}
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <InputBox
          id={"htmlName"}
          field={"name"}
          placeholder={"Your Name"}
          inputType={"text"}
          isRequired
        >
          <PersonIcon />
        </InputBox>
        <p className="hidden">
          <label>
            {"Don’t fill this out if you’re human: "}
            <input name="bot-field" />
          </label>
        </p>
        <input type="hidden" name="form-name" value="contact" />
        <InputBox
          id={"htmlEmail"}
          field={"email"}
          placeholder={"Your Email"}
          inputType={"email"}
          isRequired
        >
          <MailIcon />
        </InputBox>
        <InputBox
          id={"htmlSubject"}
          field={"subject"}
          placeholder={"Subject"}
          inputType={"text"}
        />
        <textarea
          className="input input-bordered flex items-center gap-2 min-h-48 p-4"
          placeholder="Message"
          name="message"
          id="yourmessage"
          required
        />
        <div data-netlify-recaptcha="true"></div>

        <button
          type="submit"
          value="Submit"
          className="btn btn-primary w-40 mb-4 mx-auto"
        >
          Send
        </button>
      </form>
    </SectionContainer>
  );
};

export default ContactSection;
