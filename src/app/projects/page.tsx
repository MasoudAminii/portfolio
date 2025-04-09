export default function Projects() {
  // make the best projext page you can
  return (
    <div className="container mx-auto my-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="mt-4 text-lg text-gray-700">
        Here are some of the projects we have worked on:
      </p>
      <ul className="mt-8 space-y-4">
        <li className="flex flex-col items-start rounded-md bg-gray-100 p-4 shadow-md">
          <h2 className="text-2xl font-semibold">Project 1</h2>
          <p className="mt-2 text-gray-700">
            A brief description of Project 1.
          </p>
        </li>
        <li className="flex flex-col items-start rounded-md bg-gray-100 p-4 shadow-md">
          <h2 className="text-2xl font-semibold">Project 2</h2>
          <p className="mt-2 text-gray-700">
            A brief description of Project 2.
          </p>
        </li>
        <li className="flex flex-col items-start rounded-md bg-gray-100 p-4 shadow-md">
          <h2 className="text-2xl font-semibold">Project 3</h2>
          <p className="mt-2 text-gray-700">
            A brief description of Project 3.
          </p>
        </li>
      </ul>
    </div>
  );
}
