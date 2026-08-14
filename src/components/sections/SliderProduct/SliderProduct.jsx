import React from "react";
import { useTranslation } from "react-i18next";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import "./SliderProduct.css";

import marble from "../../Photos/one.jpg";
import granite from "../../Photos/two.jpg";
import onyx from "../../Photos/one.jpg";
import travertine from "../../Photos/two.jpg";
import limestone from "../../Photos/one.jpg";

const PRODUCTS = [
  { key: "marble", image: marble },
  { key: "granite", image: granite },
  { key: "onyx", image: onyx },
  { key: "travertine", image: travertine },
  { key: "limestone", image: limestone },

  // تكرار للـ Loop
  { key: "marble", image: marble },
  { key: "granite", image: granite },
  { key: "onyx", image: onyx },
  { key: "travertine", image: travertine },
  { key: "limestone", image: limestone },
];

export default function ProductsSlider() {
  const { t } = useTranslation();

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      align: "start",
      direction: "ltr",
    },
    [
      AutoScroll({
        speed: 1,
        direction: "backward",
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ]
  );

  return (
    <section className="products-section" id="collections">
      <div className="products-header">
        <h2>{t("products.title")}</h2>
      </div>

      {/* مهم جداً */}
      <div className="embla" dir="ltr" ref={emblaRef}>
        <div className="embla__container">
          {PRODUCTS.map((item, index) => (
            <div className="embla__slide" key={index}>
              <div className="product-card">
                <img
                  src={item.image}
                  alt={t(`products.items.${item.key}`)}
                />

                <h3 dir="auto">{t(`products.items.${item.key}`)}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}