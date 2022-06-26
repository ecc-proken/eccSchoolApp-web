import LoadingSpiner from 'components/atoms/LoadingSpiner';
import NewsItem from 'components/molecules/NewsItem';
import useGetNews from 'hooks/useGetNews';
import { useState, VFC } from 'react';
import { useQueryClient } from 'react-query';
import colors from 'theme/color';
import News from 'types/news';

export const tagList = [
  'キャリアセンター（旧 進路指導課）より',
  '学校からの連絡',
  'その他',
  '図書室からの連絡',
  '事務局からの連絡',
  'クラブ・サークル',
];

const NewsList: VFC = () => {
  const queryClient = useQueryClient();
  const cacheData = queryClient.getQueryData<News[]>('news');
  const { data, isLoading } = useGetNews();
  const newsData = cacheData || data;

  const [filterName, setFilterName] = useState<string[]>([]);

  const filterHandler = (tagName: string) => {
    setFilterName((prevState) =>
      prevState?.includes(tagName)
        ? prevState?.filter((d) => d !== tagName)
        : [...prevState, tagName],
    );
  };
  const resetFilter = () => {
    setFilterName([]);
  };

  return (
    <>
      {isLoading && <LoadingSpiner />}
      <div className='w-full shadow p-5 rounded-lg bg-white mb-2'>
        <div className='flex items-center justify-between'>
          <p className='font-medium'>絞り込み</p>

          <button
            type='button'
            onClick={resetFilter}
            className='px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md hover:opacity-70'
          >
            絞り込みを解除
          </button>
        </div>

        <div>
          <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4'>
            {tagList.map((tag, i) => (
              <button
                type='button'
                key={tag}
                className={`px-4 py-3 w-full rounded-md text-xs hover:opacity-70 transition-all duration-300 ease-in-out hover:shadow-3xl focus:shadow-3xl ${
                  filterName.includes(tag)
                    ? `${colors[i]} text-gray-50`
                    : 'bg-gray-100'
                } `}
                onClick={() => filterHandler(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className='bg-white shadow overflow-hidden sm:rounded-md'>
        <ul className='divide-y divide-gray-200'>
          {newsData
            ?.filter((d) =>
              filterName.length !== 0 ? filterName.includes(d.tag) : true,
            )
            .map((d) => (
              <NewsItem news={d} key={d.id} />
            ))}
        </ul>
      </div>
    </>
  );
};

export default NewsList;
