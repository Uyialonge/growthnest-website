export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-10 font-sans">
      <header className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4">GrowthNest Digital</h1>
        <p className="text-lg">Helping small businesses grow with powerful digital marketing.</p>
      </header>

      <section className="mb-20 text-center">
        <h2 className="text-2xl font-semibold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">Starter Package</h3>
            <p>$499/month – 2 platforms, 8 posts/mo, basic SEO, monthly report.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">Growth Package</h3>
            <p>$999/month – 3 platforms, 12 posts/mo, advanced SEO, blog post, bi-weekly reports.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">Pro Package</h3>
            <p>$1499/month – 4 platforms, 16 posts/mo, full SEO, 2 blogs, newsletter, priority support.</p>
          </div>
        </div>
      </section>

      <section className="mb-20 text-center">
        <h2 className="text-2xl font-semibold mb-6">Why Choose Us?</h2>
        <p className="max-w-2xl mx-auto">
          We’re a results-driven team focused on real business growth. Whether you need more leads, more sales, or more visibility—our team delivers.
        </p>
      </section>

      <section className="mb-20 text-center">
        <h2 className="text-2xl font-semibold mb-6">Testimonials</h2>
        <div className="max-w-2xl mx-auto space-y-6">
          <blockquote className="italic">"GrowthNest Digital transformed our online presence. We've seen a 50% increase in engagement within three months!" – Alex R., FreshBrew Café</blockquote>
          <blockquote className="italic">"Professional, responsive, and results-driven. Their team exceeded our expectations." – Maria L., TechNova</blockquote>
          <blockquote className="italic">"Their SEO strategies boosted our website traffic significantly. Highly recommend!" – James T., EcoHome Solutions</blockquote>
        </div>
      </section>

      <section className="mb-20 text-center">
        <h2 className="text-2xl font-semibold mb-6">Get a Free Consultation</h2>
        <form className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-xl"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-xl"
          />
          <textarea
            placeholder="Tell us what you need..."
            className="w-full px-4 py-2 border rounded-xl"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </section>

      <footer className="text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} GrowthNest Digital. All rights reserved.
      </footer>
    </main>
  );
}
