import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

import { contentfulClient } from "@/helpers/contentful-client";
import SocialShare from "@/components/SocialShare";

export async function generateMetadata({ params }) {
  const recipe = await getRecipe(params.id);
  const { title, description } = recipe.fields;

  return {
    title,
    description,
  };
}

async function getRecipe(id) {
  try {
    const client = contentfulClient();
    const res = await client.getEntry(id);
    return res;
  } catch (error) {
    console.error(error);
  }
}

const options = {
  renderNode: {
    [BLOCKS.HEADING_5]: (node, children) => (
      <h5 className="text-lg font-semibold">{children}</h5>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-4">{children}</p>,
  },
};

export default async function Page({ params }) {
  const recipe = await getRecipe(params.id);
  const {
    title,
    cookingTime,
    ingredients,
    method,
    featuredImage,
    description,
  } = recipe.fields;

  return (
    <section className="mx-auto max-w-4xl">
      <div className="h-80">
        <Image
          src={`https:${featuredImage.fields.file.url}`}
          alt="Featured image."
          width={featuredImage.fields.file.details.image.width}
          height={featuredImage.fields.file.details.image.height}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mx-auto max-w-xl">
        <div className="mt-12">
          <div className="flex items-center justify-between">
            <h3 className="text-4xl font-extrabold">{title}</h3>
            <SocialShare size={25} text="Come try this cuisine!" />
          </div>
          <p className="mt-4 font-semibold">⌛ {cookingTime} minutes to make</p>
          <p className="mt-2">{description}</p>
        </div>
        <div className="mt-6">
          <h4 className="mb-2 text-xl font-extrabold">Ingredients</h4>
          <ul className="pl-4">
            {ingredients.map((ing, index) => (
              <li key={index} className="list-disc">
                {ing}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <h4 className="mb-2 text-xl font-extrabold">Method</h4>
          <div>{documentToReactComponents(method, options)}</div>
        </div>
      </div>
    </section>
  );
}
