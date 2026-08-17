import React, { useMemo, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

import "./SliderProduct.css";
import { PRODUCTS } from "../SliderProduct/productsData.js";

const TYPES = [
  "marble",
  "granite",
  "onyx",
  "travertine",
  "limestone",
];

export default function ProductsSlider() {
  const { t, i18n } = useTranslation();

  const [activeType, setActiveType] = useState("marble");

  // Plugin
  const autoScroll = useMemo(
    () =>
      AutoScroll({
              playOnInit: true,
        speed: 1.2,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      stopOnFocusIn: false,
      }),
    []
  );

  // Embla
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      align: "start",
    },
    [autoScroll]
  );

  const currentProducts = useMemo(() => {
  const items = PRODUCTS[activeType] || [];
  return [...items, ...items, ...items];
}, [activeType]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.reInit();
    emblaApi.scrollTo(0);
    autoScroll.play();
  }, [activeType, emblaApi, autoScroll]);

  return (
    <section className="products-section" id="collections">
      <div className="products-header">
        <h2>{t("products.title")}</h2>

        <div className="products-filter">
          {TYPES.map((type) => (
            <button
              key={type}
              className={activeType === type ? "active" : ""}
              onClick={() => setActiveType(type)}
            >
              {t(`products.filter.${type}`)}
            </button>
          ))}
        </div>
      </div>

      <div className="embla" ref={emblaRef} dir="ltr">
        <div className="embla__container">
{currentProducts.map((item, index) => (
  <div className="embla__slide" key={`${item.id}-${index}`}>              <div className="product-card">
                <img
                  src={item.image}
                  alt={
                    i18n.language === "ar"
                      ? item.name.ar
                      : item.name.en
                  }
                  loading="lazy"
                />

                <h3>
                  {i18n.language === "ar"
                    ? item.name.ar
                    : item.name.en}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}