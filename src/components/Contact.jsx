import { Fade } from "react-awesome-reveal";

function Contact() {
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
        <form className="max-w-3xl mx-auto rounded-lg flex flex-col gap-6">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Message"
            className="p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
          <button className="mx-auto inline-block bg-indigo-800 hover:bg-indigo-900 transition-colors duration-300 px-6 py-3 rounded-lg">
            Send Message
          </button>
        </form>
      </Fade>
    </section>
  );
}

export default Contact;
