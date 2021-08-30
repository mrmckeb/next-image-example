import Image from "next/image";

const WIDTH = 1320 / 2;
const HEIGHT = 570 / 2;

export default function Home() {
  return (
    <div>
      <h3>Original</h3>
      <p>1x/2x 58.2 kB</p>
      <Image
        src="/static/example.png"
        unoptimized
        alt="Example"
        width={WIDTH}
        height={HEIGHT}
      />
      <h3>Default</h3>
      <p>1x 6.1 kB / 2x 11.4 kB</p>
      <Image
        src="/static/example.png"
        alt="Example"
        width={WIDTH}
        height={HEIGHT}
      />
      <h3>Quality 100</h3>
      <p>1x 13.8 kB / 2x 23.5 kB</p>
      <Image
        src="/static/example.png"
        quality={100}
        alt="Example"
        width={WIDTH}
        height={HEIGHT}
      />
      <h3>Lossless</h3>
      <p>1x/2x 23.5 kB (effort: 9, slight loss: 0)</p>
      <Image
        src="/static/example.webp"
        unoptimized
        alt="Example"
        width={WIDTH}
        height={HEIGHT}
      />
    </div>
  );
}
