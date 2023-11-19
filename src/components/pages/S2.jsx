import CustomImage from '@/src/components/Images/CustomImage';
import { VideoLaptop, VideoMobile } from '@/src/components/Videos/S2video';

function S2 () {
  return (
    <section id='S2parent'>
      <div id='S2div1'>
        <blockquote id='quote2'
                    className='object-contain p-5 max-w-[850px]'>
          Welcome to Curology, where skin care becomes a personalized journey. Unveil your skin is true
          potential with our dermatologist-designed, science-based solutions. Say goodbye to generic
          skincare and hello to a world where your unique skin goals take center stage. Whether it is
          conquering acne, banishing dark spots, or embracing firmer skin, Curology is your trusted ally.
          Join us and redefine the future of skincare.
        </blockquote>
      </div>
      <div id='S2div3'
           className='flex flex-col justify-between p-5 min-[501px]:flex-row'>
        <div className='max-w-[350px]'>
          <CustomImage
            src='images/curology-sink%20ad.webp'
            alt='Curology Showcase Ad'
          />
          <figcaption>
            Made for your skin goals
          </figcaption>
        </div>
        <div className='max-w-[300px]'>
          <CustomImage
            src='images/curology-poster.webp'
            alt='Curology Showcase Ad'
          />
        </div>
        <div className='max-w-[350px]'>
          <CustomImage
            src='images/curology-granny%20ad.webp'
            alt='Curology Showcase Ad'
          />
          <figcaption>
            Dermatologist-designed and Science-based
          </figcaption>
        </div>
      </div>
      <div id='S2div6'>
        <VideoLaptop />
        <VideoMobile />
      </div>
    </section>
  );
}

export default S2;
