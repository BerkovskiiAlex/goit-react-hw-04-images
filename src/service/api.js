import axios from 'axios';

export const fetchImg = async params => {
  const { data } = await axios.get(`https://pixabay.com/api/`, {
    params: {
      key: '38197359-118db2b85359a92f3105f2f8e',
      orientation: 'horizontal',
      image_type: 'photo',
      per_page: 12,
      ...params,
    },
  });

  return data;
};
