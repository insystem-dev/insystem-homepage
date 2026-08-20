/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["philip-api.insystem.kr", "localhost"],
    formats: ["image/avif", "image/webp"],
    // 에셋을 WebP 로 사전 최적화했으므로 Vercel Image Optimization 을 사용하지 않는다.
    // (최적화 쿼터 소진 시 /_next/image 가 402 를 반환해 이미지가 깨지던 문제 회피)
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            // SVGO 기본 프리셋은 width/height 가 있으면 viewBox 를 제거한다.
            // viewBox 가 없으면 CSS 로 크기를 줄일 때 좌표가 스케일되지 않아
            // 아이콘이 잘려 보이거나 사라진다.
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: { overrides: { removeViewBox: false } },
                },
              ],
            },
          },
        },
      ],
    });
    return config;
  },
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },
};

module.exports = nextConfig;
