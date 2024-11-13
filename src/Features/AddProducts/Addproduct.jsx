import React, { useState } from 'react';

const AddProductForm = () => {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setPreviewUrl(fileUrl);
      setImage(file);
    }
  };

  const handleDeleteImage = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl(null);
    setImage(null);
  };

  return (
    <div className="p-3 sm:p-6 w-full max-w-4xl mx-auto bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h1 className="text-lg sm:text-xl font-bold">Add New Product</h1>
        <div className="flex items-center space-x-4">
          <button className="flex items-center text-xs sm:text-sm hover:text-gray-600">
            {/* Bell icon SVG */}
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <button className="flex items-center text-xs sm:text-sm hover:text-gray-600 space-x-2">
            {/* User icon SVG */}
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>My Account</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
        {/* General Information Section remains the same */}
        <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
          <h2 className="text-sm sm:text-base font-medium mb-3 sm:mb-4">General Information</h2>
          <div className="space-y-3 sm:space-y-4">
            <div>
              <label className="block text-xs sm:text-sm mb-1">Product Name</label>
              <input
                type="text"
                placeholder="Add product name"
                className="w-full p-2 border rounded-md bg-white text-sm"
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm mb-1">Product Description</label>
              <textarea
                placeholder="Add product description"
                className="w-full p-2 border rounded-md bg-white text-sm"
                rows={2}
              />
            </div>
          </div>
        </div>

        {/* Upload Image Section */}
        <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
          <h2 className="text-sm sm:text-base font-medium mb-3 sm:mb-4">Upload Image</h2>
          <div className="border border-gray-200 bg-white rounded-lg h-[140px] sm:h-[170px] relative">
            {previewUrl ? (
              <div className="relative w-full h-full">
                <img 
                  src={previewUrl} 
                  alt="Product Preview" 
                  className="w-full h-full object-contain rounded-lg p-2"
                />
                <button
                  onClick={handleDeleteImage}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                >
                  {/* X icon SVG */}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ) : (
              <label className="cursor-pointer flex flex-col items-center justify-center h-full">
                <input
                  type="file"
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                />
                <div className="w-8 h-8 sm:w-12 sm:h-12 mx-auto border-2 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <p className="mt-2 text-sm text-gray-500">Click to upload image</p>
              </label>
            )}
          </div>
        </div>

        {/* Rest of your component remains the same */}
        {/* ... */}
      </div>
    </div>
  );
};

export default AddProductForm;