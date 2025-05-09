function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
       
        <div>
          <div className="text-2xl font-bold text-blue-500 mb-3">My Learning</div>
          <p className="text-gray-400">Your gateway to lifelong learning</p>
        </div>


        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex flex-col space-y-2">
            <a href="https://facebook.com" className="text-gray-400 hover:text-blue-400 transition">Facebook</a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-blue-400 transition">Twitter</a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-pink-400 transition">Instagram</a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-600 transition">LinkedIn</a>
          </div>
        </div>


        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-gray-400">info@mylearning.com</p>
          <p className="text-gray-400">+123 456 7890</p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-3">Address</h3>
          <p className="text-gray-400">123 Learning Street</p>
          <p className="text-gray-400">City, State, 12345</p>
        </div>
      </div>

      <div className="bg-gray-900 text-center py-4 mt-8">
        <p className="text-gray-500 text-sm">© 2025 My Learning. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
