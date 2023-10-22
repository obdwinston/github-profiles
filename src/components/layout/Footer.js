const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
      <p>Copyright &copy; {currentYear}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
