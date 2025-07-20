import Link from 'next/link';

const Logo = ({ isLogoFooter = false }: { isLogoFooter?: boolean }) => {
  return (
    <Link
      href="/"
      className={`text-code font-bold uppercase ${
        isLogoFooter ? 'text-3xl' : 'text-2xl'
      }`}
    >
      <span className="text-valencia">S</span>
      <span className="text-supernova">A</span>
      <span className="text-cerise">Y</span>
      <span className="text-oceangreen">A</span>
      <span className="text-roseofsharon">N</span>
    </Link>
  );
};
export default Logo;
