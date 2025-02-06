import React, { useState, useEffect } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import axios from "axios";

const CreateProduct = () => {
    const [images, setImages] = useState([]);
    const [previewImages, setPreviewImages] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [tags, setTags] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [email, setEmail] = useState("");

    const categoriesData = [
        "Electronics", "Fashion", "Books", "Home & Garden", "Beauty & Personal Care", "Toys & Games"
    ];

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImages((prevImages) => [...prevImages, ...files]);
        const imagePreviews = files.map((file) => URL.createObjectURL(file));
        setPreviewImages((prevPreviews) => [...prevPreviews, ...imagePreviews]);
    };

    useEffect(() => {
        return () => {
            previewImages.forEach((url) => URL.revokeObjectURL(url));
        };
    }, [previewImages]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting form..."); // ✅ Debugging step

        // Ensure numeric values are properly formatted
        const formattedPrice = parseFloat(price);
        const formattedStock = parseInt(stock, 10);

        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("tags", tags);
        formData.append("price", formattedPrice);
        formData.append("stock", formattedStock);
        formData.append("email", email);

        images.forEach((image) => {
            formData.append("images", image);
        });

        try {
            console.log("Sending request to backend...");
            const response = await axios.post("http://localhost:8000/api/v2/product/create-product", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            console.log("Response:", response.data);

            if (response.status === 201) {
                alert("Product created successfully!");
                setImages([]);
                setPreviewImages([]);
                setName("");
                setDescription("");
                setCategory("");
                setTags("");
                setPrice("");
                setStock("");
                setEmail("");
            }
        } catch (err) {
            console.error("Error creating product:", err.response?.data || err);
            alert("Failed to create product. Please check the data and try again.");
        }
    };

    return (
        <div className="w-[90%] max-w-[500px] bg-white shadow-lg rounded-lg p-6 mx-auto border border-gray-200">
            <h5 className="text-[26px] font-bold text-center text-gray-800 mb-4">Create Product</h5>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="text-gray-700 font-medium">Email <span className="text-red-500">*</span></label>
                    <input
                        type="email"
                        value={email}
                        className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-300"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="text-gray-700 font-medium">Name <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        value={name}
                        className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-300"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter product name"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="text-gray-700 font-medium">Description <span className="text-red-500">*</span></label>
                    <textarea
                        value={description}
                        className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-300"
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter product description"
                        rows="4"
                        required
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label className="text-gray-700 font-medium">Category <span className="text-red-500">*</span></label>
                    <select
                        className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-300"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value="">Choose a category</option>
                        {categoriesData.map((title) => (
                            <option value={title} key={title}>
                                {title}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label className="text-gray-700 font-medium">Tags</label>
                    <input
                        type="text"
                        value={tags}
                        className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-300"
                        onChange={(e) => setTags(e.target.value)}
                        placeholder="Enter product tags"
                    />
                </div>

                <div className="mb-4">
                    <label className="text-gray-700 font-medium">Price <span className="text-red-500">*</span></label>
                    <input
                        type="number"
                        value={price}
                        className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-300"
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Enter product price"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="text-gray-700 font-medium">Stock <span className="text-red-500">*</span></label>
                    <input
                        type="number"
                        value={stock}
                        className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-300"
                        onChange={(e) => setStock(e.target.value)}
                        placeholder="Enter stock quantity"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="text-gray-700 font-medium">Upload Images <span className="text-red-500">*</span></label>
                    <input
                        type="file"
                        id="upload"
                        className="hidden"
                        multiple
                        onChange={handleImageChange}
                        required
                    />
                    <label htmlFor="upload" className="cursor-pointer flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-all">
                        <AiOutlinePlusCircle size={30} />
                        <span className="font-medium">Add Images</span>
                    </label>
                    <div className="flex flex-wrap mt-3 gap-2">
                        {previewImages.map((img, index) => (
                            <img
                                src={img}
                                key={index}
                                alt="Preview"
                                className="w-[100px] h-[100px] object-cover rounded-lg shadow-md border border-gray-200"
                            />
                        ))}
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full mt-4 bg-blue-500 text-white p-2 rounded-lg font-semibold shadow-md hover:bg-blue-600 transition-all"
                >
                    Create Product
                </button>
            </form>
        </div>
    );
};

export default CreateProduct;