
function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          Contact Us
        </h1>

        <p className="mb-8 text-gray-600">
          Have a question or project idea? Send us a message.
        </p>

        <form
          className="space-y-5 rounded-xl bg-white p-6 shadow"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you! Your message form is working.");
          }}
        >
          <div>
            <label className="mb-2 block font-medium">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Your Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Message
            </label>
            <textarea
              placeholder="Write your message..."
              rows="5"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
