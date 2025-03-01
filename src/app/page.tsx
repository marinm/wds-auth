import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <a href="#">
        <Image src="/discord.svg" alt="Discord logo" width={100} height={100} />
      </a>
    </div>
  );
}
