const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto flex flex-col items-center">
          <p className="text-center mb-4">Your Footer Content Here</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">Link 1</a>
            <a href="#" className="hover:text-gray-400">Link 2</a>
            <a href="#" className="hover:text-gray-400">Link 3</a>
          </div>
          <p className="mt-4">© 2024 Your Company Name. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  