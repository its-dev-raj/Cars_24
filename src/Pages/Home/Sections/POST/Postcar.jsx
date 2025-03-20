import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Postcar = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      brand: "",
      model: "",
      year: "",
      totalKmDriven: "",
      price: "",
      fuelType: "",
      images: [], // For multiple images
      thumbnail: null, // For single thumbnail file
      owners: "",
      location: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      brand: Yup.string().required("Brand is required"),
      model: Yup.string().required("Model is required"),
      location: Yup.string().required("Location is required"),
      year: Yup.number()
        .required("Year is required")
        .min(1900, "Year must be after 1900")
        .max(new Date().getFullYear(), "Year cannot be in the future"),
      totalKmDriven: Yup.number()
        .required("Total KM Driven is required")
        .min(0, "KM Driven cannot be negative"),
      price: Yup.number()
        .required("Price is required")
        .min(0, "Price cannot be negative"),
      fuelType: Yup.string()
        .required("Fuel Type is required")
        .oneOf(
          ["Petrol", "Diesel", "Electric", "Hybrid", "CNG", "LPG"],
          "Invalid fuel type"
        ),
      owners: Yup.string()
        .required("Owners is required")
        .oneOf(
          ["1st owner", "2nd owner", "3rd owner", "4th owner"],
          "Invalid owner type"
        ),
      images: Yup.array()
        .of(Yup.string())
        .min(1, "At least one image is required"),
      thumbnail: Yup.mixed().required("Thumbnail is required"), // Validate thumbnail file
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const formData = new FormData(); // Use FormData for file uploads

        // Append all fields to FormData
        for (const key in values) {
          if (key === "images") {
            // Append each image file
            values.images.forEach((image) => {
              formData.append("images", image);
            });
          } else if (key === "thumbnail") {
            // Append thumbnail file
            formData.append("thumbnail", values.thumbnail);
          } else {
            formData.append(key, values[key]);
          }
        }

        // Send POST request with FormData
        const response = await axios.post(
          "http://localhost:4000/api/v1/vehicle",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data", // Set content type for file upload
            },
          }
        );

        console.log("Response:", response.data);
        alert("Vehicle added successfully!");
        resetForm();
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Failed to submit, try again.");
      }
    },
  });

  // Handle multiple images upload
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    formik.setFieldValue("images", files); // Set files directly
  };

  // Handle thumbnail upload
  const handleThumbnailChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      formik.setFieldValue("thumbnail", file); // Set thumbnail file
    }
  };

  return (
    <div className="min-h-screen py-12 bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Add Vehicle</h2>

        {/* Name */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter vehicle name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.name}
            </div>
          ) : null}
        </div>

        {/* Brand */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="brand"
          >
            Brand
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            placeholder="Enter vehicle brand"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.brand}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.brand && formik.errors.brand ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.brand}
            </div>
          ) : null}
        </div>

        {/* Model */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="model"
          >
            Model
          </label>
          <input
            type="text"
            id="model"
            name="model"
            placeholder="Enter vehicle model"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.model}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.model && formik.errors.model ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.model}
            </div>
          ) : null}
        </div>

        {/* Location */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="location"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Enter Location"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.location}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.location && formik.errors.location ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.location}
            </div>
          ) : null}
        </div>

        {/* Year */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="year"
          >
            Year
          </label>
          <input
            type="number"
            id="year"
            name="year"
            placeholder="Enter vehicle year"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.year}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.year && formik.errors.year ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.year}
            </div>
          ) : null}
        </div>

        {/* Total KM Driven */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="totalKmDriven"
          >
            Total KM Driven
          </label>
          <input
            type="number"
            id="totalKmDriven"
            name="totalKmDriven"
            placeholder="Enter total KM driven"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.totalKmDriven}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.totalKmDriven && formik.errors.totalKmDriven ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.totalKmDriven}
            </div>
          ) : null}
        </div>

        {/* Price */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Enter vehicle price"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.price && formik.errors.price ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.price}
            </div>
          ) : null}
        </div>

        {/* Fuel Type */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="fuelType"
          >
            Fuel Type
          </label>
          <select
            id="fuelType"
            name="fuelType"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fuelType}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select fuel type</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Electric</option>
            <option value="Hybrid">Hybrid</option>
            <option value="CNG">CNG</option>
            <option value="LPG">LPG</option>
          </select>
          {formik.touched.fuelType && formik.errors.fuelType ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.fuelType}
            </div>
          ) : null}
        </div>

        {/* Owners */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="owners"
          >
            Owners
          </label>
          <select
            id="owners"
            name="owners"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.owners}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select owner type</option>
            <option value="1st owner">1st owner</option>
            <option value="2nd owner">2nd owner</option>
            <option value="3rd owner">3rd owner</option>
            <option value="4th owner">4th owner</option>
          </select>
          {formik.touched.owners && formik.errors.owners ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.owners}
            </div>
          ) : null}
        </div>

        {/* Thumbnail Upload */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="thumbnail"
          >
            Thumbnail
          </label>
          <input
            type="file"
            id="thumbnail"
            name="thumbnail"
            onChange={handleThumbnailChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.thumbnail && formik.errors.thumbnail ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.thumbnail}
            </div>
          ) : null}
        </div>

        {/* Thumbnail Preview */}
        {formik.values.thumbnail && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Thumbnail Preview
            </label>
            <img
              src={URL.createObjectURL(formik.values.thumbnail)}
              alt="Thumbnail Preview"
              className="w-20 h-20 object-cover rounded-lg"
            />
          </div>
        )}

        {/* Images Upload */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="images"
          >
            Images
          </label>
          <input
            type="file"
            id="images"
            name="images"
            multiple
            onChange={handleImageChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.images && formik.errors.images ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.images}
            </div>
          ) : null}
        </div>

        {/* Preview Images */}
        {formik.values.images.length > 0 && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Preview Images
            </label>
            <div className="flex flex-wrap gap-2">
              {formik.values.images.map((image, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(image)}
                  alt={`Preview ${index}`}
                  className="w-20 h-20 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div className="flex ">
          <button
            type="submit"
            className="bg-blue-500 cursor-pointer w-full text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Postcar;
