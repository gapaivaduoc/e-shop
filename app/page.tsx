/* eslint-disable react/jsx-key */
import { products } from "@/utils/products";
import Container from "./components/nav/Container";
import HomeBanner from "./components/nav/HomeBanner";
import { truncateText } from "@/utils/truncateText";
import ProductCart from "./components/products/ProductCart";

export default function Home() {
  return (
  <div className="p-8">
    <Container>
      <div>
        <HomeBanner/>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2x1:grid-cols-6 gap-8">
        {products.map((product: any)=>{
          return <ProductCart data={product}/>;
        })}
      </div>
    </Container>
  </div>
  );
}
