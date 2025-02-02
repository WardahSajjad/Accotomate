"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="We are ready to help"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image src="/images/video/webimg.jpg" alt="image" fill />
                <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                  {/* <button
                    aria-label="video play button"
                    onClick={() => setOpen(true)}
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      className="fill-current"
                    >
                      <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                    </svg>
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />

      {/* Inline SVG Background */}
      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full">
        <svg
          fill="none"
          height="563"
          viewBox="0 0 1440 563"
          width="1440"
          xmlns="http://www.w3.org/2000/svg"
          // xmlns:xlink="http://www.w3.org/1999/xlink"
          className="absolute inset-0 w-full h-full"
        >
          {/* <!-- Define orange gradients --> */}
          <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="720" x2="720" y1="1" y2="562">
            <stop offset="0" stop-color="#fa8705" stop-opacity="0" />
            <stop offset="1" stop-color="#fa8705" />
          </linearGradient>
          <linearGradient id="b">
            <stop offset="0" stop-color="#fa8705" stop-opacity=".5" />
            <stop offset="1" stop-color="#ffa64d" stop-opacity="0" />
          </linearGradient>
          <linearGradient id="c" gradientUnits="userSpaceOnUse" x1="-18.9868" x2="202.082" y1="176.5" y2="533.363" />
          <linearGradient id="d" gradientUnits="userSpaceOnUse" x1="276.308" x2="430.232" y1="609" y2="334.49" />
          <linearGradient id="e" gradientUnits="userSpaceOnUse" x1="1080.2" x2="1132.87" y1="121.062" y2="340.496">
            <stop offset="0" stop-color="#fa8705" stop-opacity=".31" />
            <stop offset="1" stop-color="#ffa64d" stop-opacity="0" />
          </linearGradient>

          {/* <!-- Paths using the updated gradients --> */}
          <path d="m0 87 263.536 174 659.834-260 516.63 224.5m0 76.5-466.409-63.5-696.63 323.5-276.961-187" stroke="url(#a)" />
          <path d="m276.808 561.5-12.991-300.5-263.817-174v288z" fill="url(#c)" />
          <path d="m339.764 231-75.947 30 12.991 301 272.81-127z" fill="url(#d)" />
          <path d="m1439 225-335.77-146v177l335.77 46z" fill="url(#e)" />
        </svg>
      </div>
    </section>
  );
};

export default Video;