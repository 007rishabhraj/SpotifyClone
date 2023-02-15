import React, { useEffect } from "react";

function Menu({ title, menuObject }) {
  useEffect(() => {
    const all_li = document
      .querySelector(".menuContainer ul")
      .querySelectorAll("li");
    // console.log(all_li);
    function changeMenuActive() {
      all_li.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    all_li.forEach((n) => n.addEventListener("click", changeMenuActive));
  
  }, []);
  return (
    <div className="menuContainer">
      <p className="title">{title}</p>
      <ul>
        {menuObject &&
          menuObject.map((menu) => (
            <li key={menu.id}>
              <a href="#">
                <i>{menu.icon}</i>
                <span>{menu.name}</span>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export { Menu };
