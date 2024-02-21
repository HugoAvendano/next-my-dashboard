import { CartCounter } from "@/app/shopping-cart";
import { Metadata } from "next";

export const metadata: Metadata = {
	title:'Shopping Cart',
	description:'A simple counter'
}

export default function CounterPage() {
	
	return (
		<div className="flex flex-col items-center justify-center w-full h-full">
			<span>Products in Cart</span>
			<CartCounter value={20}/>			
		</div>
	);
}