import Link from "next/link";

const Menu: React.FC = () => {
  return (
    <div className="mb-5">
      <nav>
        <ul>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">Sobre a empresa</Link>
              </li>
              <li>
                <Link href="/contact">Contato</Link>
              </li>
            </ul>
          </nav>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
