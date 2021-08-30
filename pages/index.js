import Image from "next/image";

const WIDTH = 1860 / 2;
const HEIGHT = 616 / 2;

export default function Home() {
  return (
    <div>
      <h3>Original</h3>
      <p>1x/2x 59.4 kB</p>
      <Image
        src="/static/example.png"
        unoptimized
        alt="Example"
        width={WIDTH}
        height={HEIGHT}
      />
      <h3>Default</h3>
      <p>1x 12.3 kB / 2x 20.8 kB</p>
      <Image
        src="/static/example.png"
        alt="Example"
        width={WIDTH}
        height={HEIGHT}
      />
      <h3>Quality 100</h3>
      <p>1x 28.5 kB / 2x 42.6 kB</p>
      <Image
        src="/static/example.png"
        quality={100}
        alt="Example"
        width={WIDTH}
        height={HEIGHT}
      />
      <h3>Lossless</h3>
      <p>1x/2x 19.8 kB (effort: 9, slight loss: 0)</p>
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
