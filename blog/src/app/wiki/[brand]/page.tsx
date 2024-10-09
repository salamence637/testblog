import Image from "next/image";

export default function Page({ params }: { params: { brand: string } }) {
  return <div>My Post: {params.brand}</div>;
}
