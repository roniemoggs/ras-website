import { InfiniteSlider } from "@/components/ui/infinite-slider";

type Logo = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
    logos: Logo[];
};

export function LogoCloud({ logos }: LogoCloudProps) {
    return (
        <div className="relative mx-auto w-full py-4 md:py-8">
            <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-[rgba(255,255,255,0.15)]" />

            <InfiniteSlider gap={48} reverse duration={60} durationOnHover={20}>
                {logos.map((logo) => (
                    <img
                        alt={logo.alt}
                        className="pointer-events-none h-4 sm:h-5 select-none md:h-8 opacity-80"
                        height="auto"
                        key={`logo-${logo.alt}`}
                        loading="lazy"
                        src={logo.src}
                        width="auto"
                    />
                ))}
            </InfiniteSlider>

            <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-[rgba(255,255,255,0.15)]" />
        </div>
    );
}
