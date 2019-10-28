import { useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [photos, setPhotos] = useState([]);
  const getBussinessPhotos = async (id) => {
    const res = await yelp.get(`/${id}`);
    const { photos } = res.data;
    setPhotos(photos);
  }

  return [getBussinessPhotos, photos];
}
