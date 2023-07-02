import classes from "./Footer.module.scss";

const Footer = () => {
  const today = new Date();
  return (
    <footer className={`${classes.footer}`}>
      <p className={`${classes.paragraph}`}>Morosan Gianina &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
