import Image from "next/image";
import {
  HeroSection,
  Header,
  Overview,
  ProductDetailsCard,
  FAQ,
  ContactUs,
  Footer,
} from "@/components/index";

const productDetailData = [
  {
    url: "/statera.png",
    name: "The Statera Stablecoin",
    details:
      "Meet sUSD — Stability for the Midnight Economy. sUSD is the overcollateralized stablecoin that powers the Midnight ecosystem. Minted through secure deposits and protected by privacy‑preserving blockchain architecture, sUSD is your gateway to stability, liquidity retention, and cross-protocol liquidity on Midnight.",
  },
  {
    url: "/launch-icon.png",
    name: "Statera Launchpad",
    details:
      "Create Tokens. Launch Sales. Build Communities.     Whether you're a startup raising capital or a creator minting a fun custom token, Statera Launchpad makes token creation instant and accessible.",
  },
  {
    url: "/liquidstakingicon.png",
    name: "Hydra Stake - Liquid Staking Protocol",
    details:
      "Liquid Staking, Reimagined for Privacy. Hydrastake provides dual yield through stTokens that remain spendable across DeFi protocols. Earn staking rewards while keeping liquidity active.",
  },
];

export default function Home() {
  return (
    <div className="relative flex flex-col bg-[#0a0a0a] text-[#ededed] overflow-hidden">
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <Overview />
        <div className="container flex flex-col justify-center items-center gap-16 pt-0!">
          {productDetailData.map((product, idx) => (
            <ProductDetailsCard
              key={idx}
              url={product.url}
              name={product.name}
              details={product.details}
              index={idx}
            />
          ))}
        </div>
        <FAQ />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}
