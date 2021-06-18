/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
        Copyright © R. Lakshmi Reddy All Rights Reserved. | Powered{" "}
        <span className="BsLightning">
          <RiHeart2Line />
        </span>{" "}
        by <Link to="/">Forneu.com</Link>
      </p>
    </div>
  </footer>
)

export default Footer
