import Image from "next/image";

function Intro() {
	return (
		<div>
			<Image
				src="https://essmnbcneybekiriuadi.supabase.co/storage/v1/object/public/curology/images/curology-showcase%20ad.png"
				width={500}
				height={500}
				alt="Picture of the author"
			/>
		</div>
	);
}

export default Intro;
