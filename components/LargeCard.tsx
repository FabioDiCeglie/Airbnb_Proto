import Image from "next/image";

interface LargeCard {
  img: string;
  title: string;
  description: string;
  buttonText: string;
}

export default function LargeCard({
  img,
  title,
  description,
  buttonText,
}: LargeCard) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div></div>
    </section>
  );
}
