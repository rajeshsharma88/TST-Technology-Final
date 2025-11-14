import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold">TST<span className="text-blue-400">Tech</span></h3>
            <p className="mt-2 text-gray-400 text-sm">
              Leading IT solutions and digital transformation services for modern enterprises.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><a href="/admin/index.html" className="text-gray-400 hover:text-white transition-colors">Admin Login</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Legal</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Connect With Us</h4>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="X social media link">
                <span className="sr-only">X</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram social media link">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.315 2zm-1.161 1.045c-2.358 0-2.678.01-3.616.056a3.834 3.834 0 00-1.895.465c-.65.248-1.144.63-1.634 1.123a3.834 3.834 0 00-1.123 1.634c-.248.651-.417 1.245-.465 1.895-.046.938-.056 1.258-.056 3.616s.01 2.678.056 3.616c.049.65.217 1.245.465 1.895a3.834 3.834 0 001.123 1.634c.49.493 1 .875 1.634 1.123.65.248 1.245.417 1.895.465.938.046 1.258.056 3.616.056s2.678-.01 3.616-.056a3.834 3.834 0 001.895-.465c.65-.248 1.144-.63 1.634-1.123a3.834 3.834 0 001.123-1.634c.248-.651.417-1.245.465-1.895.046-.938.056-1.258.056-3.616s-.01-2.678-.056-3.616a3.834 3.834 0 00-.465-1.895 3.834 3.834 0 00-1.123-1.634c-.49-.493-1-.875-1.634-1.123-.65-.248-1.245-.417-1.895-.465C15.138 3.055 14.818 3.045 12.47 3.045h-1.316zm-1.08 3.93a5.166 5.166 0 100 10.332 5.166 5.166 0 000-10.332zM12 15.667a3.667 3.667 0 110-7.334 3.667 3.667 0 010 7.334zM16.949 8.194a1.232 1.232 0 100-2.464 1.232 1.232 0 000 2.464z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube social media link">
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.506 2.506 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418zM9.999 15.199l5.207-3.2-5.207-3.2v6.4z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Google social media link">
                <span className="sr-only">Google</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.22-9.39-.71-.71c-1.04 1.04-1.72 2.45-1.72 4.1 0 1.22.42 2.33 1.13 3.23l.82-.64C6 16.01 5.5 15.1 5.5 14c0-1.2.55-2.28 1.4-3.03l-.12-.36zm9.81 1.17c0-.62-.05-1.22-.16-1.78H12v3.4h4.34c-.18 1.1-.73 2.02-1.58 2.62v2.24h2.88c1.68-1.54 2.66-3.79 2.66-6.48z" /><path d="M12.24 12.24c.11-.56.16-1.16.16-1.78 0-2.69-.98-4.94-2.66-6.48H9.86v2.24c.85-.6 1.4-1.52 1.58-2.62H12v3.4h-1.78c.05.56.09 1.13.09 1.72 0 1.2-.55 2.28-1.4 3.03l.12.36.71.71C11.19 14.28 11.87 12.87 12.24 12.24zM8.35 17.59l-.82.64c-.71-.9-1.13-2.01-1.13-3.23 0-1.65.68-3.06 1.72-4.1l.71.71c-.85.75-1.4 1.83-1.4 3.03 0 1.1.5 2.01 1.25 2.58z" /></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} TST Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;