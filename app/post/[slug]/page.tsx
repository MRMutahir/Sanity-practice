import { Post } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";

async function getdata(slug: String) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`;

  const data = await client.fetch(query);
  return data;
}
const PortableTextComponent = {
  types: {
    image: ({ value }: { value: any }) => {
      <Image />;
    },
  },
};

const Slugpage = async ({ params }: { params: { slug: string } }) => {
  const data = (await getdata(params.slug)) as Post;
  console.log(data, ">>>>>>>>>>>>>>>>>>data");

  return (
    <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
      <header className="pt-6 xl:pb-6">
        <div className="space-y-1 text-center">
          <div className="space-y-10">
            <div>
              <p> {new Date(data._createdAt).toLocaleDateString()}</p>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-extrabold  leading-9  tracking-tight  text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              {data?.title}
            </h1>
          </div>
        </div>
      </header>
      <div className="divide-y divide-gray-200 pb-7 dark:divide-gray-700 xl:divide-y-0">
        <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3  xl:row-span-2 xl:pb-0 ">
          <div className="prose  max-w-none pb-8 pt-10 dark:prose-invert  prose-lg">
            <PortableText value={data?.content} components={{}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slugpage;
