import axios from 'axios';
import { BASE_API_URL } from './api';

const getOneStory = async id => {
  try {
    const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    return story;
  } catch (err) {
    console.log(err.message);
  }
};

export const getALlStories = async (type, limit) => {
  try {
    const { data: storyIds } = await axios.get(
      `${BASE_API_URL}/${type}stories.json`
    );
    const allStories = await Promise.all(
      storyIds.slice(0, limit).map(getOneStory)
    );
    // Getting only 30 from all of them
    return allStories;
  } catch (err) {
    console.log(err.message);
  }
};
