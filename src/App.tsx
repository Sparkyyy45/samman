import { Layout } from "./components/Layout";
import { NavProvider, routes, useNav } from "./context/NavContext";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Corporate } from "./pages/Corporate";
import { Hamper } from "./pages/Hamper";
import { Home } from "./pages/Home";
import { Privacy, Terms } from "./pages/Legal";
import { Quote } from "./pages/Quote";
import { Shop } from "./pages/Shop";
import { Women } from "./pages/Women";
import { Work } from "./pages/Work";
import { ButtonLink } from "./components/Button";

function NotFound() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-3xl px-5 py-28 text-center sm:px-8">
        <p className="eyebrow">404</p>
        <h1 className="display mt-4 text-4xl sm:text-5xl">This page has not been written.</h1>
        <p className="prose-body mx-auto mt-5 max-w-md">The address does not match a Samman page. Return home, or go to the shop.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <ButtonLink to={routes.home}>Home</ButtonLink>
          <ButtonLink to={routes.shop} variant="secondary">
            Shop
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

function Routes() {
  const { path } = useNav();

  switch (path) {
    case routes.home:
      return <Home />;
    case routes.about:
      return <About />;
    case routes.work:
      return <Work />;
    case routes.women:
      return <Women />;
    case routes.shop:
      return <Shop />;
    case routes.hamper:
      return <Hamper />;
    case routes.corporate:
      return <Corporate />;
    case routes.quote:
      return <Quote />;
    case routes.contact:
      return <Contact />;
    case routes.privacy:
      return <Privacy />;
    case routes.terms:
      return <Terms />;
    default:
      return <NotFound />;
  }
}

export default function App() {
  return (
    <NavProvider>
      <Layout>
        <Routes />
      </Layout>
    </NavProvider>
  );
}
