import Card from "./Card";
import Link from "next/link";
export default function Home() {

  const cards=[{
    index:1,
    title: "I saw them",
    link:"/writings/isawthem",
    content:"A look at people chasing hollow highs while you wonder if “I am fine” is true."
  },
  {
    index:2,
    title: "The Thumb",
    link:"/writings/thumb",
    content:"A metaphorical take on being the outlier, the one who dares to chase the sun."
  },
  {
    index:3,
    title: "Splendid Isolation",
    link:"/writings/splendidisolation",
    content:"An ode to solitude, questioning if isolation is a choice or a destiny."
  },
  {
    index:4,
    title: "The Tale of Flower",
    link:"/writings/taleofflower",
    content:"A nurtured life destroyed by a cruel world, leaving only grief and unanswered justice behind..."
  },
  {
    index:5,
    title: "Dwelling amidst War",
    link:"/writings/warhome",
    content:"A reflection on a war-torn land, its enduring spirit, and the hope that persists amidst chaos."
  }
]

  return (
    <div className="bg-base h-screen flex font-headers">
      <div className="mx-auto w-5xl p-6 sm:px-12 lg:px-16 border-x border-neutral-900 flex flex-col h-full overflow-y-hidden">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-accent mt-10 sm:mt-22 lg:mt-30">
          Escape
        </h1>
        <p className="mt-2 text-lg sm:text-xl text-muted">
          Because I write sometimes.
        </p>
        <div className="mt-10 md:mt-16 lg:mt-20 flex gap-8 flex-col justify-center">
          {cards.map((card) => (
            <Link key={card.index} href={card.link}>
              <Card title={card.title} content={card.content} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
