import { fetchProduct } from "@/api/products/fetchProduct";
import { QueryFunction, useQuery } from "@tanstack/react-query";

interface Product {
	id: string;
	'product image': string;
	'product name': string;
	'product details': string;
	price: number;
}

interface ProductsData {
	products: Product[];
}
interface UseFetcherResult {
	result: ProductsData['products'];
	pending: boolean;
	error: boolean;
	success: boolean;
}

function useFetcher(
	queryKey: string[],
	fetchDataFn: QueryFunction<ProductsData>
): UseFetcherResult {
	const { data, status } = useQuery({
		queryKey,
		queryFn: fetchDataFn
	});

	const result = data ? data.products : [];
	const pending = status === 'pending';
	const error = status === 'error';
	const success = status === 'success';

	return {
		result,
		pending,
		error,
		success
	};
}

export function UseProductFetcher() {
	const {
		result: products,
		pending,
		error,
		success
	} = useFetcher(['products'], () => fetchProduct());

	return { products, pending, error, success };
}
