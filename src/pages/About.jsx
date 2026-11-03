
function About() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-6 text-4xl font-bold text-gray-900">
          About Us
        </h1>

        <p className="mb-6 text-lg leading-8 text-gray-600">
          We are G3 Architects. We believe in creating
          beautiful, functional, and sustainable spaces.
          Our goal is to turn ideas into amazing designs.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="mb-3 text-xl font-semibold">
              Our Mission
            </h2>
            <p className="text-gray-600">
              To create useful and beautiful spaces for everyone.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="mb-3 text-xl font-semibold">
              Our Vision
            </h2>
            <p className="text-gray-600">
              To build a better future through creative design.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="mb-3 text-xl font-semibold">
              Our Team
            </h2>
            <p className="text-gray-600">
              We work together to bring great ideas to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
