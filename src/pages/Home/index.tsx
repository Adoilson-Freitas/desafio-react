import { useState, useEffect } from "react";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { ProductList } from "./styles";
import { api } from "../../services/api";
import { formatPrice } from "../../util/format";
import { useCart } from "../../hooks/useCart";

interface Product {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
}

interface ProductFormatted extends Product {
  priceFormatted: string;
}

interface CartItemsAmount {
  [key: number]: number;
}

const Home = (): JSX.Element => {
  const [products, setProducts] = useState<ProductFormatted[]>([]);
  const [filter, setFilter] = useState("");

  const { addProduct, cart } = useCart();

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    const newSumAmount = { ...sumAmount };
    newSumAmount[product.id] = product.amount;

    return newSumAmount;
  }, {} as CartItemsAmount);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get<Product[]>("/products");
      if (filter === "") {
        const data = response.data.map((product) => ({
          ...product,
          priceFormatted: formatPrice(product.price),
        }));
        setProducts(data);
      }
      // Filtrar por preço
      if (filter === "price") {
        const data = response.data
          .sort(
            ({ price: previousPrice }, { price: currentPrice }) =>
              previousPrice - currentPrice
          )
          .map((product) => ({
            ...product,
            priceFormatted: formatPrice(product.price),
          }));
        setProducts(data);
      }
      // Filtrar por popularidade
      if (filter === "score") {
        const data = response.data
          .sort(
            ({ score: previousScore }, { score: currentScore }) =>
              currentScore - previousScore
          )
          .map((product) => ({
            ...product,
            priceFormatted: formatPrice(product.price),
          }));
        setProducts(data);
      }

      // Filtrar por ordem alfabética
      if (filter === "ordemA") {
        const data = response.data
          .sort((a, b) => {
            if (a.name > b.name) {
              return 1;
            }

            if (a.name < b.name) {
              return -1;
            }

            return 0;
          })
          .map((product) => ({
            ...product,
            priceFormatted: formatPrice(product.price),
          }));
        setProducts(data);
      }
    }
    loadProducts();
  }, []);

  function handleAddProduct(id: number) {
    addProduct(id);
  }

  return (
    <ProductList>
      <form>
        <strong>Filtrar: </strong>
        <select
          placeholder="Descrição"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="" disabled></option>
          <option value="">Limpar</option>
          <option value="price">Preço</option>
          <option value="score">popularidade</option>
          <option value="ordemA">Ordem alfabética</option>
        </select>
      </form>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt="Melhores jogos para você!" />
          <strong>{product.name}</strong>
          {(() => {
            if (product.score < 100) {
              return (
                <div className="star">
                  <AiFillStar size={20} color="#ff0" />{" "}
                  <AiOutlineStar size={20} /> <AiOutlineStar size={20} />{" "}
                  <AiOutlineStar size={20} />
                </div>
              );
            } else if (product.score < 200) {
              return (
                <div className="star">
                  <AiFillStar size={20} color="#ff0" />{" "}
                  <AiFillStar size={20} color="#ff0" />{" "}
                  <AiOutlineStar size={20} /> <AiOutlineStar size={20} />
                </div>
              );
            } else if (product.score < 300) {
              return (
                <div className="star">
                  <AiFillStar size={20} color="#ff0" />{" "}
                  <AiFillStar size={20} color="#ff0" />{" "}
                  <AiFillStar size={20} color="#ff0" />{" "}
                  <AiOutlineStar size={20} />
                </div>
              );
            } else if (product.score <= 400) {
              return (
                <div className="star">
                  <AiFillStar size={20} color="#ff0" />{" "}
                  <AiFillStar size={20} color="#ff0" />{" "}
                  <AiFillStar size={20} color="#ff0" />{" "}
                  <AiFillStar size={20} color="#ff0" />
                </div>
              );
            }
          })()}
          <span>{product.priceFormatted}</span>
          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              <img
                className="icon-car"
                src="./assets/cart-icon.svg"
                alt="add item"
              />
              {cartItemsAmount[product.id] || 0}
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
};

export default Home;
