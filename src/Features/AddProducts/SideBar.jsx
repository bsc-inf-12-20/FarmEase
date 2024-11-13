import React from 'react';

const Sidebar = () => {
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Add Product", path: "/add-product", isActive: true },
    { label: "Analytics", path: "/analytics" },
    { label: "My Profile", path: "/my-profile" },
    { label: "Account Details", path: "/account-details" },
    { label: "Login", path: "/login" },
    { label: "Logout", path: "/logout" },
    { label: "Delete Account", path: "/delete-account" }
  ];

  return (
    <div className="w-48 min-h-screen bg-white">
      {/* Logo */}
      <div className="px-4 py-6">
        <h1 className="text-lg font-semibold text-green-500">Farmease.</h1>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.path}
                className={`block px-4 py-2 text-sm ${
                  item.isActive ? 'bg-gray-100' : 'hover:bg-gray-50'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;