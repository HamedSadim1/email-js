import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-400 via-pink-500 to-red-500">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Hero />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
