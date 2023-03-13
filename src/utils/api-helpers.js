import axios from "axios";
import { BASE_URL } from "../constants";

/**
 * Sends a get request to github api to retrieve repo data for that organization
 */
export const fetchRepoList = async (
  orgName,
  setLoadingData,
  setRepos,
  setZeroRepos,
  setOrgNotFound
) => {
  try {
    setLoadingData(true);
    const response = await axios.get(`${BASE_URL}/orgs/${orgName}/repos`);
    setLoadingData(false);
    setRepos(response.data);
    if (response.data.length === 0) {
      setZeroRepos(true);
    }
  } catch (err) {
    setLoadingData(false);
    setRepos([]);
    setOrgNotFound(true);
    console.error(err);
  }
};

/**
 * Sends a get request to github api to retrieve commit data for that repo
 */
export const fetchCommitList = async (
  orgName,
  repoName,
  setLoadingData,
  setCommits,
  setZeroCommits,
  setRepoNotFound
) => {
  try {
    setLoadingData(true);
    const response = await axios.get(
      `${BASE_URL}/repos/${orgName}/${repoName}/commits`
    );
    setLoadingData(false);
    setCommits(response.data);
    if (response.data.length === 0) {
      setZeroCommits(true);
    }
  } catch (err) {
    setLoadingData(false);
    setCommits([]);
    setRepoNotFound(true);
    console.error(err);
  }
};
