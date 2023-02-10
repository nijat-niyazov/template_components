import axios from 'axios';
import { BASE_API_URL } from '../utils/api';

const getOneStory = async id => {
  try {
    const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    return story;
  } catch (err) {
    console.log(err.message);
  }
};

export const getALlStories = async type => {
  try {
    const { data: storyIds } = await axios.get(
      `${BASE_API_URL}/${type}stories.json`
    );
    const allStories = await Promise.all(
      storyIds.slice(0, 30).map(getOneStory)
    );
    return allStories;
  } catch (err) {
    console.log(err.message);
  }
};
