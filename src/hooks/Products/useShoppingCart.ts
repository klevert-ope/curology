import { supabase } from "@/utils/Supabase";
import { useEffect, useState } from "react";


interface Product {
	id: string;
	'product name': string;
	'product image': string[];
	price: number;
}

interface CartItem {
	id: string;
	'product name': string;
	'product image': string[];
	price: number;
	quantity: number;
}

export function UseShoppingCart() {
	const [cart, setCart] = useState<Record<string, number>>({});
	const [totalItems, setTotalItems] = useState<number>(0);

	useEffect(() => {
		const total: number = Object.values(cart).reduce((acc: number, quantity: number) => acc + quantity, 0);
		setTotalItems(total);
	}, [cart]);

	const addToCart = async (productId: string): Promise<void> => {
		try {
			const { data}:{ data: Product[]} = await supabase
				.from('products')
				.select('*')
				.eq('id', productId) satisfies { data: Product[] };

			const selectedProduct = data.length > 0 ? data[0] : null;

			setCart((prevCart: Record<string, number>) => {
				const updatedCart:{[p: string]: number} = { ...prevCart, [productId]: (prevCart[productId] || 0) + 1 };

				const cartItem: CartItem = {
					id: selectedProduct.id,
					'product name': selectedProduct['product name'],
					'product image': selectedProduct['product image'],
					price: selectedProduct.price,
					quantity: updatedCart[productId] || 1,
				};
				supabase
					.from('cart')
					.upsert([cartItem])
				return updatedCart;
			});
			return Promise.resolve();
		} catch (error) {
			console.error('Error adding to cart:', error.message);
		}
	};
	return { cart, totalItems, addToCart };
}
