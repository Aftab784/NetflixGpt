const Footer = () => {
  return (
    <footer className="w-full bg-[#161616] text-gray-400 py-10">
  <div className="max-w-6xl mx-auto px-6">
    <p className="mb-6">
      Questions?{" "}
      <a
        href="https://help.netflix.com/contactus"
        className="text-gray-300 hover:underline"
      >
        Contact us
      </a>
      .
    </p>

    <ul className="grid grid-cols-2 sm:grid-cols-4 gap-y-4 text-sm">
      <li>
        <a href="https://help.netflix.com/support/412" className="hover:underline">
          FAQ
        </a>
      </li>
      <li>
        <a href="https://help.netflix.com" className="hover:underline">
          Help Center
        </a>
      </li>
      <li>
        <a href="https://help.netflix.com/legal/termsofuse" className="hover:underline">
          Terms of Use
        </a>
      </li>
      <li>
        <a href="https://help.netflix.com/legal/privacy" className="hover:underline">
          Privacy
        </a>
      </li>
      <li>
        <a href="#" className="hover:underline">
          Cookie Preferences
        </a>
      </li>
      <li>
        <a href="https://help.netflix.com/legal/corpinfo" className="hover:underline">
          Corporate Information
        </a>
      </li>
    </ul>

    <p className="mt-8 text-xs text-gray-500">Netflix Pakistan</p>
  </div>
</footer>
  );
};

export default Footer;
