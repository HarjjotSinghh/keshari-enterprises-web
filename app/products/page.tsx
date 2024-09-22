import { ProductCategories } from '@/components/products/product-categories';
import { FeaturedBrands } from '@/components/products/featured-brands';
import { ProductSupport } from '@/components/products/product-support';

export default function ProductsPage() {
  return (
    <main className="pb-16">
      <h1 className="md:text-5xl text-4xl font-bold text-center pt-20 pb-0">
        Products & Solutions
      </h1>
      <ProductCategories />
      <FeaturedBrands />
      <ProductSupport />
    </main>
  );
}
