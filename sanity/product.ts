import { defineField } from "sanity";

export const product = {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Product Title",
    },
    {
      name: "description",
      type: "number",
      title: "Product Description",
    },
    {
      name: "price",
      type: "string",
      title: "Product Price",
    },
    {
      name: "image",
      type: "image",
      title: "Product Image",
    },
    defineField({
      name: "category",
      type: "reference",
      title: "Product Category",
      to: [
        {
          type: "category",
        },
      ],
    }),
  ],
};
