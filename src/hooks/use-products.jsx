import { useEffect, useState } from "react";

export default function useProducts({ salesOnly }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${salesOnly ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("π₯ λ¨λν λ°μ΄ν°λ₯Ό λ€νΈμν¬μμ λ°μμ΄");
        setProducts(data);
      })
      .catch((e) => setError("μλ¬κ° λ°μνμ!"))
      .finally(() => setLoading(false));
    // μ»΄ν¬λνΈκ° unmount λ  λ μ€νλλ return
    return () => {
      console.log("π§Ή κΉ¨λνκ² μ²­μνλ μΌλ€μ ν©λλ€.");
    };
  }, [salesOnly]); // checkedκ° λ³κ²½λ  λλ§λ€ useEffect μ€ν

  return [loading, error, products];
}
