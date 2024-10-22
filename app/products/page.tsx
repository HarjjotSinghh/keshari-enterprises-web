import Image from 'next/image';

const bearings = [
  {
    name: 'Ball Bearings',
    description:
      'Designed for precision and efficiency, these bearings are perfect for applications where smooth, friction-free motion is essential.',
  },
  {
    name: 'Spherical Roller Bearings',
    description:
      'Built to withstand heavy loads, these bearings provide durability and reliability for high-demand applications.',
  },
  {
    name: 'Angular Contact Bearings',
    description: 'Ideal for high-speed operations, offering superior load handling capabilities.',
  },
  {
    name: 'Slewing Ring Bearings',
    description:
      'Tailored for large machinery, these bearings handle axial, radial, and moment loads effectively.',
  },
  {
    name: 'FAG Super Precision Bearings',
    description:
      'Offering the highest standards in accuracy, these bearings are perfect for the most demanding applications.',
  },
  {
    name: 'INA Bearings',
    description:
      'A versatile choice for a variety of industries and applications, providing reliable performance every time.',
  },
];

const associatedProducts = [
  {
    name: 'Oil Seals, O-Rings & Gaskets',
    description: 'Engineered to deliver leak-proof, secure fittings and extend equipment life.',
  },
  {
    name: 'Linear Products',
    description: 'Precision-engineered for exact linear motion control in demanding environments.',
  },
  {
    name: 'Special Bearings for Steel, Textile, and POY Applications',
    description: 'Custom-designed to meet the unique requirements of specialized industries.',
  },
  {
    name: 'EVO QUICK Gaskets',
    description: 'Fast and reliable sealing solutions for a wide range of industrial applications.',
  },
];

// const refurbishmentProcess = [
//   { name: 'Thorough Inspections', description: 'Identifying wear and tear, corrosion, or damage.' },
//   { name: 'Precision Repairs', description: 'Restoring bearings to their optimal condition.' },
//   { name: 'Advanced Diagnostics', description: 'Ensuring long-term reliability and performance.' },
//   {
//     name: 'Complete Overhauls',
//     description: 'Rejuvenating bearings to meet or exceed original specifications.',
//   },
// ];

function ProductCard({ name, description }: { name: string; description: string }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h4 className="text-lg font-semibold mb-2">{name}</h4>
      <p>{description}</p>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <main className="pb-16 overflow-x-clip">
      <Image
        src="/products.png"
        alt="Keshari Enterprises Products"
        width={1920}
        height={475}
        className="w-full h-auto sm:mb-8 mb-16 select-none sm:scale-100 scale-[115%] overflow-x-clip"
        draggable={false}
      />

      <section className="mb-12 px-4 max-w-4xl mx-auto">
        <p className="mb-4">
          Imagine a world where every machine runs like clockwork – that&apos;s the world we build
          at Keshari Enterprises. We offer an extensive range of bearings and associated products
          that cater to every industrial need.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Bearings:</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {bearings.map((bearing, index) => (
            <ProductCard key={index} name={bearing.name} description={bearing.description} />
          ))}
        </div>

        <h3 className="text-2xl font-semibold mb-4 mt-8">Associated Products:</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {associatedProducts.map((product, index) => (
            <ProductCard key={index} name={product.name} description={product.description} />
          ))}
        </div>

        <p className="mt-8">
          We understand that the right component can make all the difference. That&apos;s why every
          product in our range is meticulously sourced and rigorously tested to ensure it meets the
          highest quality standards. With Keshari Enterprises, you are guaranteed products that keep
          your operations running smoothly, efficiently, and profitably.
        </p>
      </section>

      {/* <section>
        <h2 className="text-3xl font-bold mb-4">Bearing Refurbishments</h2>
        <h3 className="text-2xl font-semibold mb-2">
          Renew, Reuse, Revive – Expert Bearing Refurbishment Services
        </h3>
        <p className="mb-4">
          Why discard when you can refurbish? At Keshari Enterprises, we help extend the life of
          your bearings with our specialized refurbishment services. Our expert technicians use
          state-of-the-art techniques to restore your bearings to their original glory, saving you
          both time and money.
        </p>

        <h4 className="text-xl font-semibold mb-4">Our refurbishment process includes:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          {refurbishmentProcess.map((step, index) => (
            <ProductCard key={index} name={step.name} description={step.description} />
          ))}
        </div>

        <p className="mt-8">
          Keep your business running with confidence, knowing that Keshari Enterprises is here to
          support your every move. Breathe new life into your bearings – reduce downtime, minimize
          costs, and enhance efficiency.
        </p>
      </section> */}
    </main>
  );
}
