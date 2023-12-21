import { API_KEY } from "@env";

const baseURL = "https://newsapi.org/v2/";

const fetchNews = async (params) => {
	const response = await fetch(`${baseURL}${params}&apiKey=${API_KEY}`);
	const result = await response.json();
	return result;
};

export const getTopHeadlines = async () => {
	const topHeadlinesParams = "top-headlines?country=us";
	return fetchNews(topHeadlinesParams);
};

export const getBreakingNews = async () => {
	const breakingNewsParams = "top-headlines?country=us&category=health";
	return fetchNews(breakingNewsParams);
};

export const discoverHeadlinesBasedOnCategories = async (category) => {
	const discoveryParams = `top-headlines?country=us&category=${category}`;
	return fetchNews(discoveryParams);
};

export const getSearchNews = async (searchQuery = "bitcoin") => {
	const searchParams = `everything?q=${searchQuery}`;
	return fetchNews(searchParams);
};
