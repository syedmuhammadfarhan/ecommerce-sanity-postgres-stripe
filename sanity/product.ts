import { defineField } from "sanity";

export const product = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Product Title",
    },
    defineField({
      name: "generic",
      title: "Product Generic",
      type: "reference",
       to: [
        {
          type: "generic",
        },
      ],
    }),
    {
      name: "description",
      title: "Product Description",
      type: "string",
    },
    {
      name: "price",
      title: "Product Price",
      type: "string",
    },
    defineField({
      name: "image",
      title: "Product Image",
      type: "array",
      of: [{type: "image"}]
    }),
    defineField({
      name: "category",
      title: "Product Category",
      type: "reference",
      to: [
        {
          type: "category",
        },
      ],
    }),
  ],
};
