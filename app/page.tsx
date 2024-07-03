import Footer from "./components/Footer";
import ParallaxImage from "./components/ParallaxImage";

export default function Home() {
  return (
    <div>
      <header className="bg-blue-600 text-white text-center py-16">
        <h1 className="text-4xl font-bold">Welcome to Recycle Service</h1>
        <p className="mt-4 text-lg">
          Your partner in responsible waste management
        </p>
        <button className="mt-8 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full">
          Get Started
        </button>
      </header>
      <ParallaxImage />
      <main className="container mx-auto p-4">
        <section className="my-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="flex flex-wrap justify-center">
            <div className="max-w-xs bg-white shadow-lg rounded-lg p-6 m-4">
              <h3 className="text-xl font-bold mb-2">Residential Collection</h3>
              <p>
                We offer convenient residential recycling collection services.
              </p>
            </div>
            <div className="max-w-xs bg-white shadow-lg rounded-lg p-6 m-4">
              <h3 className="text-xl font-bold mb-2">Commercial Collection</h3>
              <p>
                Tailored solutions for businesses to manage waste effectively.
              </p>
            </div>
            <div className="max-w-xs bg-white shadow-lg rounded-lg p-6 m-4">
              <h3 className="text-xl font-bold mb-2">Electronic Waste</h3>
              <p>Safe and responsible disposal of electronic waste.</p>
            </div>
          </div>
        </section>
        <section className="my-16 bg-gray-100 py-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            What Our Customers Say
          </h2>
          <div className="flex flex-wrap justify-center">
            <div className="max-w-xs bg-white shadow-lg rounded-lg p-6 m-4">
              <p>"Excellent service and very reliable!"</p>
              <p className="mt-2 text-sm text-gray-500">- Jane Doe</p>
            </div>
            <div className="max-w-xs bg-white shadow-lg rounded-lg p-6 m-4">
              <p>"I love how easy it is to schedule a pickup."</p>
              <p className="mt-2 text-sm text-gray-500">- John Smith</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
