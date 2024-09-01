/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import toast from "react-hot-toast";

function Contact() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "2a22a635-d6bf-401b-ac51-bf36d5ec10fe");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        toast.success("Form submitted successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
        toast.error(`Submission failed: ${data.message}`);
      }
    } catch (error) {
      console.log("Error", error);
      setResult("An error occurred. Please try again.");
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:pt-20 px-[5%] text-white">
      <div className="mb-12 text-center">
        <Fade>
          <h2 className="text-base uppercase font-normal text-gray-400 mb-4">
            Get in Touch
          </h2>
        </Fade>
        <Fade>
          <h2 className="text-2xl md:text-5xl font-bold mb-4">Contact Me.</h2>
        </Fade>
        <Fade>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-6">
            {
              " I'm always open to new opportunities and collaborations. Feel free to reach out to me using the form below."
            }
          </p>
        </Fade>
      </div>

      <Fade>
        <form
          onSubmit={onSubmit}
          className="max-w-3xl mx-auto rounded-lg flex flex-col gap-6"
        >
          <Fade triggerOnce delay={100}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="p-3 w-full bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform -translate-y-3"
              required
            />
          </Fade>
          <Fade triggerOnce delay={200}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="p-3 w-full bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform -translate-y-3"
              required
            />
          </Fade>
          <Fade triggerOnce delay={300}>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Message"
              className="p-3 w-full bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform -translate-y-3"
              required
            ></textarea>
          </Fade>
          <Fade triggerOnce delay={400}>
            <button
              type="submit"
              className="mx-auto w-full text-white bg-indigo-800 hover:bg-indigo-900 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-6 py-3 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 inline-flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-4 h-4 mr-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </Fade>
        </form>
      </Fade>
    </section>
  );
}

export default Contact;
