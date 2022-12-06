import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";

//Images
import logolight from "../../../public/assets/img/brand/logo-light.png"
import iconlight from "../../../public/assets/img/brand/icon-light.png"
import logo from "../../../public/assets/img/brand/logo.png"
import icon from "../../../public/assets/img/brand/icon.png"

const SideBar = () => {

	
  
  return (
		<div className="sticky">
			<div className="main-menu main-sidebar main-sidebar-sticky side-menu">
				<div className="main-sidebar-header main-container-1 active">
					<div className="sidemenu-logo">
						<a className="main-logo" href="index.html">
							<img src="../assets/img/brand/logo-light.png" className="header-brand-img desktop-logo" alt="logo"></img>
							<img src="../assets/img/brand/icon-light.png" className="header-brand-img icon-logo" alt="logo"></img>
							<img src="../assets/img/brand/logo.png" className="header-brand-img desktop-logo theme-logo" alt="logo"></img>
							<img src="../assets/img/brand/icon.png" className="header-brand-img icon-logo theme-logo" alt="logo"></img>
						</a>
					</div>
					<div className="main-sidebar-body main-body-1">
						<div className="slide-left disabled" id="slide-left"><i className="fe fe-chevron-left"></i></div>
						<ul className="menu-nav nav">
							<li className="nav-header"><span className="nav-label">Dashboard</span></li>
							<li className="nav-item">
                <Link href={"/"}>
								<a className="nav-link" href="index.html">
									<span className="shape1"></span>
									<span className="shape2"></span>
									<i className="ti-home sidemenu-icon menu-icon "></i>
									<span className="sidemenu-label">Dashboard</span>
								</a>
                </Link>
                <Link href={"authentication/login"}>
								<a className="nav-link" href="index.html">
									<span className="shape1"></span>
									<span className="shape2"></span>
									<i className="ti-home sidemenu-icon menu-icon "></i>
									<span className="sidemenu-label">Login</span>
								</a>
                </Link>
								<Link href={"/authentication/register"}>
								<a className="nav-link" href="index.html">
									<span className="shape1"></span>
									<span className="shape2"></span>
									<i className="ti-home sidemenu-icon menu-icon "></i>
									<span className="sidemenu-label">Register</span>
								</a>
                </Link>
							</li>
						</ul>
						<div className="slide-right" id="slide-right"><i className="fe fe-chevron-right"></i></div>
					</div>
				</div>
			</div>
		</div>
  );
};

export default SideBar;
