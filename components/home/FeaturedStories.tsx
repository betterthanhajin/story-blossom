import Link from "next/link";

// Mock data for featured stories
const FEATURED_STORIES = [
  {
    id: "1",
    title: "The Enchanted Forest",
    description:
      "Venture into a magical forest where your choices determine your fate.",
    author: "Emily Chen",
    coverImage: "/images/stories/forest.jpg",
    tags: ["Fantasy", "Adventure"],
  },
  {
    id: "2",
    title: "Space Colony: 2250",
    description: "Survive and thrive in humanity's first interstellar colony.",
    author: "Marcus Johnson",
    coverImage: "/images/stories/space.jpg",
    tags: ["Sci-Fi", "Survival"],
  },
  {
    id: "3",
    title: "The Detective's Dilemma",
    description:
      "Solve a complex murder mystery with multiple suspects and endings.",
    author: "Sophia Lee",
    coverImage: "/images/stories/detective.jpg",
    tags: ["Mystery", "Crime"],
  },
];

const FeaturedStories = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Featured Stories</h2>
          <p className="mt-4 text-xl text-gray-600">
            Explore these handpicked interactive adventures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_STORIES.map((story) => (
            <div
              key={story.id}
              className="card group hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 w-full bg-gray-200">
                <div className="absolute inset-0 bg-gray-900 flex items-center justify-center text-white text-sm">
                  Story Cover Image
                </div>
                {/* In a real app, you'd use actual images */}
                {/* <Image 
                  src={story.coverImage} 
                  alt={story.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                /> */}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-sm text-gray-500">by {story.author}</p>
                  </div>
                </div>
                <p className="mt-3 text-gray-600">{story.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {story.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <Link href={`/stories/${story.id}`}>
                    <div className="text-primary-600 hover:text-primary-700 font-medium">
                      Start Reading →
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/stories">
            <div className="btn btn-outline">Browse All Stories</div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStories;
