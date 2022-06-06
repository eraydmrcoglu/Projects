import React from "react";

function Header() {
  return (
    <div className="header bg-color container me-0 ms-0 w-100 mw-100 ">
      <div className="row h-100 align-items-center justify-content-between">
        <div className="col-12 col-md-5 col-lg-4 text-nowrap text-center">
          {" "}
          <a
            href="https://github.com/eraydmrcoglu/Patika-Redux/tree/main/spend-app"
            className="sitelink"
          >
            Spend Bill Gates' Money
          </a>
        </div>
        <div className="col-12 text-center col-md-5 col-lg-4 text-muted text-nowrap">
          <span className="">
            created by{" "}
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="https://github.com/eraydmrcoglu"
              className="sitelink gitlink "
            >
              Eray Demircioğlu
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;