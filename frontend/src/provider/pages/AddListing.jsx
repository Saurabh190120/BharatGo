import { useState } from "react";
import { createListing } from "../services/providerService";

const AddListing = () => {
  const providerId = 1; // TEMP (replace with auth later)

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createListing({ ...formData, provider_id: providerId });
      alert("Listing created successfully");
      setFormData({
        title: "",
        description: "",
        price: "",
        location: "",
      });
    } catch (error) {
      alert("Failed to create listing");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Add New Listing</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow space-y-4"
      >
        <input
          type="text"
          name="title"
          placeholder="Listing Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Create Listing
        </button>
      </form>
    </div>
  );
};

export default AddListing;
