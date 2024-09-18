import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/images/common/logo.png";


const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Features", href: "#features" },
  { name: "Team", href: "#team" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQs", href: "#faqs" },
  { name: "Contact", href: "#contact" },
  {
    name: "Others",
    href: "#home",
    submenu: [
      { name: "Sub Menu 1", href: "#home" },
      {
        name: "Sub Menu 2",
        href: "#home",
        submenu: [
          { name: "Sub Menu 1", href: "#home" },
          { name: "Sub Menu 2", href: "#home" },
          { name: "Sub Menu 3", href: "#home" },
        ],
      },
    ],
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null); // Track which submenu is open
  const [innerSubmenuOpen, setInnerSubmenuOpen] = useState(null); // Track which inner submenu is open
  const [hideTimeout, setHideTimeout] = useState(null); // For delaying hiding

  const handleClick = (event, href) => {
    event.preventDefault(); // Prevent default anchor click behavior

    const targetElement = document.querySelector(href); // Find the target section by the href
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth", // Enable smooth scrolling
        block: "start", // Align to the start of the section
      });
    }
  };

  const handleMouseEnter = (menuName) => {
    clearTimeout(hideTimeout); // Clear any existing hide delay
    setSubmenuOpen(menuName); // Open the submenu
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setSubmenuOpen(null); // Hide submenu after delay
    }, 300); // Delay of 300ms to prevent flicker
    setHideTimeout(timeout);
  };

  const handleInnerMouseEnter = (menuName) => {
    clearTimeout(hideTimeout); // Clear any existing hide delay for inner submenu
    setInnerSubmenuOpen(menuName); // Open the inner submenu
  };

  const handleInnerMouseLeave = () => {
    const timeout = setTimeout(() => {
      setInnerSubmenuOpen(null); // Hide inner submenu after delay
    }, 300);
    setHideTimeout(timeout);
  };

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src={logo} className="h-12 w-auto" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={item.submenu ? () => handleMouseEnter(item.name) : null}
                onMouseLeave={item.submenu ? handleMouseLeave : null}
              >
                <a
                  href={item.href}
                  onClick={(event) => handleClick(event, item.href)}
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-purple-700"
                >
                  {item.name}
                </a>
                {item.submenu && submenuOpen === item.name && (
                  <div className="absolute top-full mt-2 w-48 bg-white shadow-lg rounded-lg">
                    {item.submenu.map((subitem) => (
                      <div
                        key={subitem.name}
                        className="relative"
                        onMouseEnter={subitem.submenu ? () => handleInnerMouseEnter(subitem.name) : null}
                        onMouseLeave={subitem.submenu ? handleInnerMouseLeave : null}
                      >
                        <a
                          href={subitem.href}
                          onClick={(event) => handleClick(event, subitem.href)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-500 hover:text-white"
                        >
                          {subitem.name}
                        </a>
                        {subitem.submenu && innerSubmenuOpen === subitem.name && (
                          <div className="absolute top-0 left-full mt-0 w-48 bg-white shadow-lg rounded-lg">
                            {subitem.submenu.map((innerSubitem) => (
                              <a
                                key={innerSubitem.name}
                                href={innerSubitem.href}
                                onClick={(event) => handleClick(event, innerSubitem.href)}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-500 hover:text-white"
                              >
                                {innerSubitem.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
              GET A QUOTE
              <span aria-hidden="true" className="ml-2">
                &rarr;
              </span>
            </button>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img alt="" src={logo} className="h-8 w-auto" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(event) => {
                        handleClick(event, item.href);
                        setMobileMenuOpen(false); // Close the mobile menu after navigation
                      }}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                    GET A QUOTE
                    <span aria-hidden="true" className="ml-2">
                      &rarr;
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
};

export default Header;
