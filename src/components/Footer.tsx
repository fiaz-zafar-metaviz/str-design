import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-display font-bold text-xl text-primary mb-4 tracking-wider">STR WEDDING</h3>
          <p className="text-sm text-muted-foreground font-body leading-relaxed">
            Curating the world's finest short-term rental wedding venues for unforgettable celebrations.
          </p>
        </div>
        <FooterColumn title="Explore" links={["Wedding Venues", "Destinations", "Categories", "Featured"]} />
        <FooterColumn title="Company" links={["About Us", "Contact", "Careers", "Press"]} />
        <FooterColumn title="Support" links={["Help Center", "Privacy Policy", "Terms of Service", "Sitemap"]} />
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border text-center">
        <p className="text-sm text-muted-foreground font-body">
          © 2026 STR Wedding. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, links }: { title: string; links: string[] }) => (
  <div>
    <h4 className="font-body font-semibold text-foreground mb-4">{title}</h4>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link}>
          <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">
            {link}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
