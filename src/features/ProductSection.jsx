import Products from '@/components/Products/ProductCard';

export default function ProductSection () {
	return (
		<section className='pt-5 pb-16 products'>
			<div className='p-5'>
				<h1 className='mb-4 text-3xl font-bold'>Shop now</h1>
				<Products />
			</div>
		</section>
	);
}
