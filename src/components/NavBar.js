import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksMap = links.map((element)=>{
    return <a key={element} href={"#" + element}>{element}</a>
  })

  return <nav>
    {linksMap}
  </nav>;
}

export default NavBar;
