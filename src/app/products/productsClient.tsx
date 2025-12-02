"use client";

import { useEffect, useState } from "react";

export interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
}

export default function ProductsClient() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [form, setForm] = useState({ name: "", price: 0, description: "" });

  // Fetch products (placeholder)
  const fetchProducts = async () => {
    setLoading(true);
    console.log("Fetching products...");
    // Placeholder: simulate fetched products
    setProducts([
      {
        id: "1",
        name: "Sample Product 1",
        price: 100,
        description: "Sample desc 1",
      },
      { id: "2", name: "Sample Product 2", price: 200 },
    ]);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle form changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Create or update product (placeholder)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProduct) {
      console.log("Updating product:", { ...editingProduct, ...form });
    } else {
      console.log("Creating new product:", form);
    }
    // Reset form
    setForm({ name: "", price: 0, description: "" });
    setEditingProduct(null);
  };

  // Edit product
  const handleEdit = (product: Product) => {
    console.log("Editing product:", product);
    setEditingProduct(product);
    setForm({
      name: product.name,
      price: product.price,
      description: product.description || "",
    });
  };

  // Delete product (placeholder)
  const handleDelete = (id: string) => {
    console.log("Deleting product with id:", id);
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  if (loading) {
    return <p className="p-4">Loading products...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products CRUD</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mb-6 space-y-2 p-4 border rounded"
      >
        <h2 className="font-semibold">
          {editingProduct ? "Edit Product" : "Add Product"}
        </h2>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {editingProduct ? "Update Product" : "Add Product"}
        </button>
      </form>

      {/* Product List */}
      <ul className="space-y-2">
        {products.map((product) => (
          <li
            key={product.id}
            className="border p-4 rounded flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold">{product.name}</h3>
              <p>${product.price}</p>
              {product.description && (
                <p className="text-gray-500">{product.description}</p>
              )}
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(product)}
                className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
