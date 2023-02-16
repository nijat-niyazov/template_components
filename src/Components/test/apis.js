import axios from 'axios';
import { BASE_API_URL } from './api';

const getStory = async id => {
  try {
    const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    return story;
  } catch (error) {
    console.log('Error while getting a story.');
  }
};

export const getStories = async (type, prevLim, limit) => {
  try {
    const { data: storyIds } = await axios.get(
      `${BASE_API_URL}/${type}stories.json`
    );
    const stories = await Promise.all(
      storyIds.slice(prevLim, limit).map(getStory)
    );
    return stories;
  } catch (error) {
    console.log('Error while getting list of stories.');
  }
};
