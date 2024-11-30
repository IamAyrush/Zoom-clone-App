import { useBackgroundFilters } from '@stream-io/video-react-sdk';
import Image from 'next/image';

export const MyBackgroundFilterSettings = () => {
  const {
    isSupported, // checks if these filters can run on this device
    isReady, // checks if the filters are ready to be enabled
    disableBackgroundFilter, // disables the filter
    applyBackgroundBlurFilter, // applies the blur filter
    applyBackgroundImageFilter, // applies the image filter
    backgroundImages, // list of available images
  } = useBackgroundFilters();

  if (!isSupported) {
    return <div>Background filters are not supported on this device</div>;
  }

  if (!isReady) {
    return <div className="my-loading-indicator" />;
  }

  return (
    <div className="flex flex-col gap-4 justify-center bg-dark-1 rounded-[10px] fixed p-10 top-20 h-[400px] overflow-y-scroll scrollbar scrollbar-track-transparent">
     <div className='pt-[350px] flex flex-row gap-4 font-bold'>
     <button onClick={disableBackgroundFilter}>Disable</button>
      <button onClick={() => applyBackgroundBlurFilter('high')}>Blur-3</button>
      <button onClick={() => applyBackgroundBlurFilter('medium')}>Blur-2</button>
      <button onClick={() => applyBackgroundBlurFilter('low')}>Blur-1</button>
     </div>
     <hr />
      <ul className='relative flex flex-col  justify-center gap-4 font-bold'>
        {backgroundImages.map((image) => (
          <li key={image} className='flex flex-col justify-center gap-4'>
            <Image src={image} alt='background' height={250}  width={300} className='rounded-2xl'/>
            <button onClick={() => applyBackgroundImageFilter(image)}>
              Apply
            </button>
            
          </li>
        ))}
      </ul>
    </div>
  );
};
