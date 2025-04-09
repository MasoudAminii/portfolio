export default function Contact() {
  // make a simple contact us form with name, email, message and a submit button
  return (
    <div className="container mx-auto my-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <form className="mt-8 w-full max-w-lg">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
