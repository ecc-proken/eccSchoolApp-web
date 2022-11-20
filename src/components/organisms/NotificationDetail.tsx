import { useState, VFC } from 'react';
import { useParams } from 'react-router-dom';
import { NewsDetail } from 'types/news';
import LoadingSpiner from 'components/atoms/LoadingSpiner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import useGetNewsDetail from 'hooks/useGetNewsDetail';

const NotificationDetail: VFC = () => {
  const params = useParams();
  const [news, setNews] = useState<NewsDetail>();
  useGetNewsDetail(params.id || '1').then((d) => {
    setNews(d);
  });

  return (
    <div className='rounded-2xl p-4'>
      {news === undefined && <LoadingSpiner />}
      <div className='px-4 py-8  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='flex flex-col items-start max-w-screen-sm md:flex-row sm:mx-auto'>
          <div>
            <p className='mb-2 text-xs font-semibold tracking-wide text-gray-400 uppercase'>
              {news?.date}
            </p>
            <h2 className='mb-4 text-3xl font-bold tracking-tight text-gray-700 leading-normal md:text-4xl md:leading-relaxed'>
              {news?.title}
            </h2>
            <p className='text-base mb-2 text-gray-500 leading-relaxed md:text-lg md:leading-relaxed'>
              {news?.data}
            </p>
            {news?.attachments.map((url, i) => (
              <a
                href={url}
                target='_blank'
                rel='noreferrer'
                className='text-accent background-transparent font-bold uppercase text-md outline-none focus:outline-none mb-1 ease-linear transition-all duration-150 mr-2'
              >
                <FontAwesomeIcon icon={faFileAlt} className='mr-1' />
                添付ファイル{i + 1}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationDetail;
