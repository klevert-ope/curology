import { UseProductFetcher } from "@/hooks/Products/useProductFetcher";
import { UseShoppingCart } from "@/hooks/Products/useShoppingCart";
import React from "react";
import CustomImage from "@/components/Images/CustomImage";

interface Product {
	id: string;
	'product image': string;
	'product name': string;
	'product details': string;
	price: number;
}

export default function Products(): React.JSX.Element {
	const { products, pending, error, success } = UseProductFetcher();
	const { cart, addToCart } = UseShoppingCart();

	const numberProducts: number = 2;
	const skeletonStyles: {width: string, height: string, background: string, animation: string,aspectRatio: string | number } = {
		width: '100%',
		height: '100%',
		background: 'rgb(245, 245, 245)',
		animation: 'pulse 1s infinite',
		aspectRatio: 10 / 17 !== 0 ? 10 / 17 : 'unset',
	};

	return (
		<>
			{pending && (
				<div className='max-w-[800px] max-[500px]:flex min-[501px]:columns-2 max-[500px]:flex-col min-[501px]:gap-5 max-[500px]:gap-10'>
					{Array.from({ length: numberProducts }).map((_, index: number) => (
						<div key={`loading-placeholder-${[index]}`}>
							<div style={skeletonStyles}></div>
						</div>
					))}
				</div>
			)}

			{error && <div className='errorMessage'>Error fetching products</div>}

			{success && (
				<div className='max-w-[800px] max-[500px]:flex min-[501px]:columns-2 max-[500px]:flex-col min-[501px]:gap-5 max-[500px]:gap-10'>
					{products.map((product: Product) => (
						<figure
							key={product.id}
							className='box-border rounded p-5 shadow-md max-w-[350px] max-[500px]:max-w-[450px] productCard'
						>
							<CustomImage
								src={product['product image']}
								alt={product['product name']}
								aspectRatio={1}
							/>
							<h2 className='my-2 text-blue-600 productName pointer-events-none'>
								{product['product name']}
							</h2>
							<p className='productDetails pointer-events-none'>
								{product['product details']}
							</p>
							<h3 className='productPrice pointer-events-none'>
								${product['price']}
							</h3>
							<button
								type={'submit'}
								onClick={() => addToCart(product.id)}
								className='bg-blue-500 text-white px-4 py-2 mt-2 rounded'
							>
								Add to Cart ({cart[product.id] || 0})
							</button>
						</figure>
					))}
				</div>
			)}
		</>
	);
}
