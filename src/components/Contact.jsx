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
    setResult("Sending....");
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
        toast.success("Form submitted successfully!"); // Adjusted toast message
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
        toast.error(`Submission failed: ${data.message}`); // Adjusted toast message
      }
    } catch (error) {
      console.log("Error", error);
      setResult("An error occurred. Please try again.");
      toast.error("An error occurred. Please try again."); // Adjusted toast message
    } finally {
      setLoading(false); // Set loading to false after submission completes
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
              className={`mx-auto inline-block bg-indigo-800 hover:bg-indigo-900 transition-colors duration-300 px-6 py-3 rounded-lg ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="w-4 h-4 border-4 border-t-4 border-white border-opacity-50 border-solid rounded-full animate-spin"></div>
                </div>
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