import React from "react";
import Image from "next/image";

const HomePage: React.FC = () => {
  return (
    <div className="bg-blue-200 min-h-screen flex flex-col">
      {/* First Section */}
      <div
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/product1.jpg')" }}
      >
        <div
          className="text-white p-8"
          style={{
            width: "548px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "35px",
          }}
        >
          <h5
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "20px",
              fontWeight: 700,
              lineHeight: "24px",
              textAlign: "left",
            }}
            className="mb-0"
          >
            SUMMER 2020
          </h5>
          <h1
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "58px",
              fontWeight: 700,
              lineHeight: "80px",
              letterSpacing: "0.2px",
              textAlign: "left",
              textDecoration: "none",
            }}
            className="mb-0"
          >
            New Collection
          </h1>
          <h4
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "30px",
              letterSpacing: "0.2px",
              textAlign: "left",
              textDecoration: "none",
            }}
            className="text-white mb-0"
          >
            We know how large objects will act, but things on a small scale.
          </h4>
          <button
            className="bg-green-500 text-white py-4 px-10 rounded hover:bg-green-600 text-2xl"
            style={{
              width: "221px",
              height: "62px",
              marginTop: "10px",
            }}
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* Second Section: Editor's Pick */}
      <div className="bg-white py-12">
        <h3 className="text-center text-xl font-semibold mb-6">EDITOR&apos;S PICK</h3>
        <p className="text-center text-gray-500 mb-8">
          Problems trying to resolve the conflict between
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {/* Men's Section */}
          <div className="flex flex-col items-center relative">
            <Image
              src="/media bg-cover.png"
              alt="Men&apos;s Section"
              width={510}
              height={500}
              className="rounded-lg"
            />
            {/* Button on top of image */}
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-lg font-medium bg-gray-200 px-4 py-2 rounded">
              MEN
            </button>
          </div>

          {/* Women's Section */}
          <div className="flex flex-col items-center relative">
            <Image
              src="/filter.png"
              alt="Women&apos;s Section"
              width={240}
              height={500}
              className="rounded-lg"
            />
            {/* Button on top of image */}
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-lg font-medium bg-gray-200 px-4 py-2 rounded">
              WOMEN
            </button>
          </div>

          {/* Accessories Section */}
          <div className="flex flex-col items-center relative">
            <Image
              src="/filter (1).png"
              alt="Accessories Section"
              width={240}
              height={242}
              className="rounded-lg"
            />
            {/* Button on top of image */}
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-lg font-medium bg-gray-200 px-4 py-2 rounded">
              ACCESSORIES
            </button>
          </div>

          {/* Kids' Section */}
          <div className="flex flex-col items-center relative">
            <Image
              src="/filter (2).png"
              alt="Kids Section"
              width={240}
              height={242}
              className="rounded-lg"
            />
            {/* Button on top of image */}
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-lg font-medium bg-gray-200 px-4 py-2 rounded">
              KIDS
            </button>
          </div>
        </div>
      </div>

      {/* Bestseller Products Section */}
      <div className="bg-white py-12">
        <h4 className="text-center font-montserrat text-gray-500 mb-3">Featured Products</h4>
        <h3 className="text-center text-xl font-semibold mb-6">BESTSELLER PRODUCTS</h3>
        <p className="text-center text-gray-500 mb-8">
          Problems trying to resolve the conflict between
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[{ image: '/product-cover-5.png', title: 'Graphic Design', price: '$16.48 $6.48' }, { image: '/product-cover-5 (1).png', title: 'Graphic Design', price: '$16.48 $6.48' }, { image: '/product-cover-5 (2).png', title: 'Graphic Design', price: '$16.48 $6.48' }, { image: '/product-cover-5 (3).png', title: 'Graphic Design', price: '$16.48 $6.48' }, { image: '/product-cover-5 (4).png', title: 'Graphic Design', price: '$16.48 $6.48' }, { image: '/product-cover-5 (5).png', title: 'Graphic Design', price: '$16.48 $6.48' }, { image: '/product-cover-5 (6).png', title: 'Graphic Design', price: '$16.48 $6.48' }, { image: '/product-cover-5 (7).png', title: 'Graphic Design', price: '$16.48 $6.48' }].map((product, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={300}
                className="rounded-lg"
              />
              <h5 className="mt-4 font-medium text-lg">{product.title}</h5>
              <p className="text-green-500 font-bold">{product.price}</p>
            </div>
          ))}

        </div>

        {/* Promo Banner */}
        <div
          className="relative flex items-center justify-center bg-green-500"
          style={{ height: "600px" }}
        >
          <Image
            src="/shop-hero-2-product-slide-2.jpg"
            alt="Vita Classic Product"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
          />
          <Image
            src="/col-md-6.png"
            alt="Vita Classic Product"
            width={510} // Correct width
            height={685} // Correct height
            className="absolute z-10 right-0" // Ensures it stays on the right side
          />

          <div className="relative z-20 text-center text-white px-8">
            <h5 className="text-lg font-semibold mb-2">SUMMER 2020</h5>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Vita Classic Product</h1>
            <p className="text-base md:text-lg font-light mb-6">
              We know how large objects will act, we know how objects will act, we know.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-lg text-lg font-medium">
              $16.48 | ADD TO CART
            </button>
          </div>
        </div>
      </div>

      {/* Left and Right Section (Responsive) */}
      <div className="flex items-center justify-center min-h-screen bg-white pt-8">
        <div className="flex flex-col md:flex-row" style={{ width: '1439px', height: '682px' }}>
          {/* Left Image Section */}
          <div className="flex-1">
            <Image
              src="/hero-cover-1.png"
              alt="Couple with scarf"
              className="object-cover w-full h-full"
              width={1439}
              height={682}
            />
          </div>

          {/* Right Text Section */}
          <div className="flex-1 p-8">
            <p className="text-gray-500 uppercase text-sm">Summer 2020</p>
            <h1 className="text-2xl font-bold text-gray-900 mt-2">
              Part of the Neural Universe
            </h1>
            <p className="text-gray-600 mt-4">
              We know how large objects will act, but things on a small scale.
            </p>

            <div className="mt-6 flex space-x-4">
              <button className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition">
                Buy Now
              </button>
              <button className="border border-green-300 text-green-300 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 md:px-12">
          {/* Top Section */}
          <div className="flex flex-col items-center space-y-6">
            <h2 className="text-xl font-bold">Bandage</h2>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
              <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
              <Image src="/twitter (1).png" alt="Twitter" width={24} height={24} />
            </div>
          </div>

          {/* Middle Section */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-12">
            {/* Links Columns */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company Info</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-800">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800">Carrier</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800">Privacy Policy</a></li>
              </ul>
            </div>

            {/* More Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-800">FAQ</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800">Shipping</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800">Returns</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800">Payment Options</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
