import React from "react";
import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Organization from "../components/Organization";

const repositories = [
  {
    id: 6766558,
    node_id: "MDEwOlJlcG9zaXRvcnk2NzY2NTU4",
    name: "Hystrix",
    full_name: "Netflix/Hystrix",
    private: false,
    owner: {
      login: "Netflix",
      id: 913567,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjkxMzU2Nw==",
      avatar_url: "https://avatars.githubusercontent.com/u/913567?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Netflix",
      html_url: "https://github.com/Netflix",
      followers_url: "https://api.github.com/users/Netflix/followers",
      following_url:
        "https://api.github.com/users/Netflix/following{/other_user}",
      gists_url: "https://api.github.com/users/Netflix/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/Netflix/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/Netflix/subscriptions",
      organizations_url: "https://api.github.com/users/Netflix/orgs",
      repos_url: "https://api.github.com/users/Netflix/repos",
      events_url: "https://api.github.com/users/Netflix/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Netflix/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/Netflix/Hystrix",
    description:
      "Hystrix is a latency and fault tolerance library designed to isolate points of access to remote systems, services and 3rd party libraries, stop cascading failure and enable resilience in complex distributed systems where failure is inevitable.",
    fork: false,
    url: "https://api.github.com/repos/Netflix/Hystrix",
    forks_url: "https://api.github.com/repos/Netflix/Hystrix/forks",
    keys_url: "https://api.github.com/repos/Netflix/Hystrix/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/Netflix/Hystrix/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/Netflix/Hystrix/teams",
    hooks_url: "https://api.github.com/repos/Netflix/Hystrix/hooks",
    issue_events_url:
      "https://api.github.com/repos/Netflix/Hystrix/issues/events{/number}",
    events_url: "https://api.github.com/repos/Netflix/Hystrix/events",
    assignees_url:
      "https://api.github.com/repos/Netflix/Hystrix/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/Netflix/Hystrix/branches{/branch}",
    tags_url: "https://api.github.com/repos/Netflix/Hystrix/tags",
    blobs_url: "https://api.github.com/repos/Netflix/Hystrix/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/Netflix/Hystrix/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/Netflix/Hystrix/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/Netflix/Hystrix/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/Netflix/Hystrix/statuses/{sha}",
    languages_url: "https://api.github.com/repos/Netflix/Hystrix/languages",
    stargazers_url: "https://api.github.com/repos/Netflix/Hystrix/stargazers",
    contributors_url:
      "https://api.github.com/repos/Netflix/Hystrix/contributors",
    subscribers_url: "https://api.github.com/repos/Netflix/Hystrix/subscribers",
    subscription_url:
      "https://api.github.com/repos/Netflix/Hystrix/subscription",
    commits_url: "https://api.github.com/repos/Netflix/Hystrix/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/Netflix/Hystrix/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/Netflix/Hystrix/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/Netflix/Hystrix/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/Netflix/Hystrix/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/Netflix/Hystrix/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/Netflix/Hystrix/merges",
    archive_url:
      "https://api.github.com/repos/Netflix/Hystrix/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/Netflix/Hystrix/downloads",
    issues_url: "https://api.github.com/repos/Netflix/Hystrix/issues{/number}",
    pulls_url: "https://api.github.com/repos/Netflix/Hystrix/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/Netflix/Hystrix/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/Netflix/Hystrix/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/Netflix/Hystrix/labels{/name}",
    releases_url: "https://api.github.com/repos/Netflix/Hystrix/releases{/id}",
    deployments_url: "https://api.github.com/repos/Netflix/Hystrix/deployments",
    created_at: "2012-11-19T20:14:46Z",
    updated_at: "2023-03-10T22:01:48Z",
    pushed_at: "2022-11-12T05:34:13Z",
    git_url: "git://github.com/Netflix/Hystrix.git",
    ssh_url: "git@github.com:Netflix/Hystrix.git",
    clone_url: "https://github.com/Netflix/Hystrix.git",
    svn_url: "https://github.com/Netflix/Hystrix",
    homepage: "",
    size: 9784,
    stargazers_count: 23244,
    watchers_count: 23244,
    language: "Java",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    has_discussions: false,
    forks_count: 4681,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 394,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 4681,
    open_issues: 394,
    watchers: 23244,
    default_branch: "master",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
];

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useParams: vi.fn().mockReturnValue({ orgName: "netflix" }),
  };
});

describe("Organization Component Tests", () => {
  test("organization component renders properly", () => {
    render(
      <Router>
        <Organization
          repos={repositories}
          setRepos={vi.fn()}
          orgNotFound={true}
          setOrgNotFound={vi.fn()}
          zeroRepos={false}
          setZeroRepos={vi.fn()}
        />
      </Router>
    );
  });

  test("organization component includes correct text", () => {
    render(
      <Router>
        <Organization
          repos={repositories}
          setRepos={vi.fn()}
          orgNotFound={true}
          setOrgNotFound={vi.fn()}
          zeroRepos={false}
          setZeroRepos={vi.fn()}
        />
      </Router>
    );

    const headerText = screen.getByText("Netflix");
    expect(headerText).toBeInTheDocument();
  });

  test("organization component includes number of repos found", () => {
    render(
      <Router>
        <Organization
          repos={repositories}
          setRepos={vi.fn()}
          orgNotFound={false}
          setOrgNotFound={vi.fn()}
          zeroRepos={false}
          setZeroRepos={vi.fn()}
        />
      </Router>
    );

    const reposFoundText = screen.getByText("1 repository found");
    expect(reposFoundText).toBeInTheDocument();
  });
});
