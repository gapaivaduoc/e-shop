import { products } from "@/utils/products";
import Container from "./components/nav/Container";
import HomeBanner from "./components/nav/HomeBanner";
import { truncateText } from "@/utils/truncateText";

export default function Home() {
  return (
  <div className="p-8">
    <Container>
      <div>
        <HomeBanner/>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2x1:grid-cols-6 grap:8">
        1:13:32
        {products.map((product: any)=>{
          // eslint-disable-next-line react/jsx-key
          return <div>
            {truncateText(product.name) }
          </div>;
        })}
      </div>
    </Container>
  </div>
  );
}
