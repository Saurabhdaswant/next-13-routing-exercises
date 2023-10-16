"use client";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { ToastContext } from "../../../../components/ToastProvider";

function ContactPage() {
  const router = useRouter();

  const { createToast } = useContext(ToastContext);

  return (
    <main>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          router.push("/exercises/02-flash-messages");

          createToast(
            "thakns for contacting us! , we'll get back to you soon!"
          );
        }}
      >
        <label htmlFor="name">Name:</label>
        <input id="name" required={true} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" />

        <button>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;
