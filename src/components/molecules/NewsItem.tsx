import { tagList } from 'components/organisms/NewsList';
import { VFC } from 'react';
import { Link } from 'react-router-dom';
import colors from 'theme/color';
import type News from 'types/news';

type Props = {
  news: News;
};

const NewsItem: VFC<Props> = ({ news }) => {
  return (
    <li>
      <Link className='block hover:bg-gray-50' to={`/news/${news.id}`}>
        <div className='px-4 py-4 sm:px-6'>
          <div className='flex items-center justify-between'>
            <p className='flex items-center text-[12px] md:text-[12px] xl:text-[14px] font-light text-gray-500'>
              {news.date}
            </p>
            <div className='ml-2 flex-shrink-0 flex'>
              <p
                className={`px-2 py-[2px] md:px-4 md:py-1 inline-flex text-[9px] md:text-[12px] xl:text-[12px] leading-5 font-semibold rounded-full text-gray-50 ${
                  tagList.includes(news.tag)
                    ? colors[tagList.findIndex((t) => t === news.tag)]
                    : colors[colors.length - 1]
                }`}
              >
                {news.tag}
              </p>
            </div>
          </div>
          <div className='mt-2 sm:flex sm:justify-between'>
            <div className='sm:flex'>
              <p className='text-[14px] md:text-[14px] xl:text-[16px] text-gray-700 md:truncate'>
                {news.title}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default NewsItem;
