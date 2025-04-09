export default function About() {
  //make a simple about page with a title and a paragraph
  return (
    <div className="container mx-auto my-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">About Us</h1>
      <p className="mt-4 text-lg text-gray-700">
        We are a team of passionate developers dedicated to creating amazing web
        applications. Our mission is to provide the best user experience and
        deliver high-quality products.
      </p>
    </div>
  );
}
