// server.js
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { OpenAI } from "openai";

dotenv.config();

const app = express();
const port = 3000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const productDB = [
  {
    id: "1",
    name: "Kellogg's Frosted Flakes",
    category: "snacks",
    price: 3.99,
    rating: 4.5,
    image: "https://i.ibb.co/G3tkVms5/kellogs.jpg",
    description: "Sweetened cornflake cereal loved by kids and adults.",
  },
  {
    id: "2",
    name: "Roasted Almonds",
    category: "snacks",
    price: 5.49,
    rating: 4.7,
    image: "https://i.ibb.co/rRK74jSJ/almonds.jpg",
    description: "Dry-roasted crunchy almonds lightly salted.",
  },
  {
    id: "3",
    name: "Glucose Energy Bar",
    category: "snacks",
    price: 2.99,
    rating: 4.2,
    image: "https://i.ibb.co/jv30T9rY/glucose-energy-bar.jpg",
    description: "Quick boost energy bar packed with glucose and minerals.",
  },
  {
    id: "4",
    name: "Plain Greek Yogurt",
    category: "snacks",
    price: 1.49,
    rating: 4.6,
    image: "https://i.ibb.co/Rkd5ch1g/yogurt.jpg",
    description: "Low-fat plain Greek yogurt, rich in protein.",
  },
  {
    id: "5",
    name: "Oreo Cookies",
    category: "snacks",
    price: 4.29,
    rating: 4.8,
    image: "https://i.ibb.co/PGtCc8q9/oreo.jpg",
    description: "Chocolate sandwich cookies with creamy filling.",
  },
  {
    id: "6",
    name: "Chips Ahoy",
    category: "snacks",
    price: 4.19,
    rating: 4.3,
    image: "https://i.ibb.co/R4CzMJLj/chips-ahoy.jpg",
    description: "Crunchy chocolate chip cookies in every bite.",
  },
  {
    id: "7",
    name: "Stevia Sweetened Chocolate",
    category: "snacks",
    price: 2.49,
    rating: 4.1,
    image: "https://i.ibb.co/6RpbVMxy/chocolate.jpg",
    description: "Sugar-free chocolate sweetened naturally with stevia.",
  },
  {
    id: "8",
    name: "Diet Soda",
    category: "snacks",
    price: 1.99,
    rating: 4.0,
    image: "https://i.ibb.co/4RGfMd7s/diet-coke.jpg",
    description: "Refreshing zero-calorie carbonated drink with no sugar.",
  },
];

app.post("/search", async (req, res) => {
  const { query, context } = req.body;

  // Return all products if both query and context are empty
  if (!query?.trim() && !context?.trim()) {
    return res.json({ safeProducts: productDB });
  }

  let filteredProducts = productDB;

  // If query is provided, filter by product name containing the query
  if (query?.trim()) {
    filteredProducts = productDB.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  // If context is provided, use AI filtering on the filtered products
  if (context?.trim()) {
    const productNames = filteredProducts.map((p) => p.name);

    const refinementPrompt = `
The user context is: "${context}".

Convert this into a filtering instruction for product selection.

Example:
Input: "I'm buying for a diabetic person"
Output: "Filter out products high in sugar or carbohydrates"

Now generate the filtering instruction:
`;

    try {
      const refinement = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content:
              "You refine user context into clear product filter instructions.",
          },
          { role: "user", content: refinementPrompt },
        ],
        temperature: 0.3,
      });

      const refinedFilter = refinement.choices[0].message.content.trim();

      const filteringPrompt = `
User's context: "${context}"
Filtering rule: "${refinedFilter}"

Below is a list of product names. Based on the filtering rule, return ONLY the product names that are safe or appropriate.

Product names:
${productNames.map((name) => `- ${name}`).join("\n")}

Respond with a JSON array of product names.
`;

      const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { role: "system", content: "You are a product filtering assistant." },
          { role: "user", content: filteringPrompt },
        ],
        temperature: 0.3,
      });

      const raw = completion.choices[0].message.content.trim();
      const cleaned = raw.replace(/^```(?:json)?\n/, "").replace(/\n```$/, "");
      const safeProductNames = JSON.parse(cleaned);

      const safeProducts = filteredProducts.filter((p) =>
        safeProductNames.includes(p.name)
      );

      res.json({ safeProducts });
    } catch (error) {
      console.error("Error in filtering:", error);
      res
        .status(500)
        .json({ error: "Filtering failed", details: error.message });
    }
  } else {
    res.json({ safeProducts: filteredProducts });
  }
});

// --- START SERVER ---
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
