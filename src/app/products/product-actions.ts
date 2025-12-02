"use server";

import { prisma } from "@/lib/prisma";

export const getProducts = async () => {
  return await prisma.product.findMany({
    orderBy: { name: "asc" },
  });
};

export const getProductById = async (id: string) => {
  return await prisma.product.findUnique({
    where: { id },
  });
};

export const addProduct = async (data: {
  name: string;
  price: number | string;
  description?: string | null;
}) => {
  // Ensure price is a number
  const price =
    typeof data.price === "string" ? parseFloat(data.price) : data.price;

  return await prisma.product.create({
    data: {
      name: data.name,
      price,
      description: data.description || null,
    },
  });
};

export async function updateProduct(
  id: string,
  data: { name?: string; price?: number; description?: string }
) {
  return prisma.product.update({
    where: { id },
    data,
  });
}

export async function deleteProduct(id: string) {
  return prisma.product.delete({
    where: { id },
  });
}
