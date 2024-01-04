import exp from "constants";
import Link from "next/link";

const Navigation = () => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/docs", label: "Docs" },
    { href: "/todos", label: "Todos" },
  ];

  return (
    <nav>
      <ul className="relative z-[9999] flex items-center">
        {links.map((link) => (
          <li key={link.href} className="mr-6">
            <Link
              href={link.href}
              className="text-blue-500 hover:text-blue-800"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
