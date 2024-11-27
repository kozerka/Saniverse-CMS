import { Element, Link as LinkScroll } from 'react-scroll';
import { Button } from '../ui';

export const Hero = () => {
  return (
    <section className="relative pt-52 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-612 max-lg:max-w-488 flex flex-col justify-center items-center">
            <div className="caption small-2 uppercase text-p3">
              Blogging Made Easy
            </div>
            <div className="h1 text-p4 uppercase max-lg:mb-2 max-lg:h2 max-md:mb-1 max-md:text-5xl max-md:leading-12">
              Your Space
            </div>
            <div className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Your Voice
            </div>
            <p className="max-w-640 text-center mb-14 body-1 max-md:mb-10">
              Create your own blog for free. Add more users for only $9/month.
              Welcome to Saniverse — your personalized blogging space.
            </p>
            <LinkScroll
              to="features"
              spy
              offset={-250}
              smooth={true}
              duration={500}
              className="custom-button"
            >
              <Button>See Blog space</Button>
            </LinkScroll>
          </div>
          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1200px] h-[800px] rounded-full bg-p2 blur-[200px] opacity-30 pointer-events-none hero-img_res"></div>
        </div>
      </Element>
    </section>
  );
};
