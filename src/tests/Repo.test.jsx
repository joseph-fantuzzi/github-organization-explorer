import React from "react";
import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Repo from "../components/Repo";

const commits = [
  {
    sha: "3cb21589895e9f8f87cfcdbc9d96d9f63d48b848",
    node_id:
      "MDY6Q29tbWl0Njc2NjU1ODozY2IyMTU4OTg5NWU5ZjhmODdjZmNkYmM5ZDk2ZDlmNjNkNDhiODQ4",
    commit: {
      author: {
        name: "Tim Bozarth",
        email: "tim@zarthsan.com",
        date: "2018-11-19T22:20:36Z",
      },
      committer: {
        name: "GitHub",
        email: "noreply@github.com",
        date: "2018-11-19T22:20:36Z",
      },
      message:
        "Merge pull request #1904 from Netflix/qiangdavidliu-update-hystrix-status\n\nUpdate official Netflix Hystrix Status",
      tree: {
        sha: "3432ce4c1d7ce93fb7e76621ec329f94461484ff",
        url: "https://api.github.com/repos/Netflix/Hystrix/git/trees/3432ce4c1d7ce93fb7e76621ec329f94461484ff",
      },
      url: "https://api.github.com/repos/Netflix/Hystrix/git/commits/3cb21589895e9f8f87cfcdbc9d96d9f63d48b848",
      comment_count: 0,
      verification: {
        verified: true,
        reason: "valid",
        signature:
          "-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJb8zc0CRBK7hj4Ov3rIwAAdHIIAJpVG7NABYTa1CIrBDAX3Gr/\ncsCWuQgPG8Npz1881ql+Lz7WWCN0plDztHT44F6sIvWTfOV9jakddobfcN3eDEKA\ncQdOA17dJn9dAAO+SmpK8s/nGBIXGJdjd9QOk9nw9mUKbRZL4HgT2leyAe0GpTdS\nlDRyef9+s6Mc59prEjygRPQR8AgDXEaSj2eIRhmzFEjRwl/HNwnzhdjSlDM6BRf0\nhd3gztpzonu7jqdkjyMOF/eT3cRPhzbAZaJd25kiffzE5R/jmbz9cZZ/ngdHpTiJ\nWNfwbMMVRtc3MZ0Ge0DsprZJYCcAYFOH+fzzfPkuY4Tawli2j5bh8/mooThTAzk=\n=XFml\n-----END PGP SIGNATURE-----\n",
        payload:
          "tree 3432ce4c1d7ce93fb7e76621ec329f94461484ff\nparent 7f5a0afc23aa5ff82320560a04d4c81a45efd67c\nparent c0aae119c00e2af24015eee8266a7882a89daa58\nauthor Tim Bozarth <tim@zarthsan.com> 1542666036 -0800\ncommitter GitHub <noreply@github.com> 1542666036 -0800\n\nMerge pull request #1904 from Netflix/qiangdavidliu-update-hystrix-status\n\nUpdate official Netflix Hystrix Status",
      },
    },
    url: "https://api.github.com/repos/Netflix/Hystrix/commits/3cb21589895e9f8f87cfcdbc9d96d9f63d48b848",
    html_url:
      "https://github.com/Netflix/Hystrix/commit/3cb21589895e9f8f87cfcdbc9d96d9f63d48b848",
    comments_url:
      "https://api.github.com/repos/Netflix/Hystrix/commits/3cb21589895e9f8f87cfcdbc9d96d9f63d48b848/comments",
    author: null,
    committer: {
      login: "web-flow",
      id: 19864447,
      node_id: "MDQ6VXNlcjE5ODY0NDQ3",
      avatar_url: "https://avatars.githubusercontent.com/u/19864447?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/web-flow",
      html_url: "https://github.com/web-flow",
      followers_url: "https://api.github.com/users/web-flow/followers",
      following_url:
        "https://api.github.com/users/web-flow/following{/other_user}",
      gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/web-flow/subscriptions",
      organizations_url: "https://api.github.com/users/web-flow/orgs",
      repos_url: "https://api.github.com/users/web-flow/repos",
      events_url: "https://api.github.com/users/web-flow/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/web-flow/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [
      {
        sha: "7f5a0afc23aa5ff82320560a04d4c81a45efd67c",
        url: "https://api.github.com/repos/Netflix/Hystrix/commits/7f5a0afc23aa5ff82320560a04d4c81a45efd67c",
        html_url:
          "https://github.com/Netflix/Hystrix/commit/7f5a0afc23aa5ff82320560a04d4c81a45efd67c",
      },
      {
        sha: "c0aae119c00e2af24015eee8266a7882a89daa58",
        url: "https://api.github.com/repos/Netflix/Hystrix/commits/c0aae119c00e2af24015eee8266a7882a89daa58",
        html_url:
          "https://github.com/Netflix/Hystrix/commit/c0aae119c00e2af24015eee8266a7882a89daa58",
      },
    ],
  },
];

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useParams: vi
      .fn()
      .mockReturnValue({ orgName: "netflix", repoName: "hystrix" }),
  };
});

describe("Repository Component Tests", () => {
  test("repository component renders properly", () => {
    render(
      <Router>
        <Repo
          BASE_URL={"https://api.github.com"}
          commits={commits}
          setCommits={vi.fn()}
          repoNotFound={true}
          setRepoNotFound={vi.fn()}
          zeroCommits={false}
          setZeroCommits={vi.fn()}
        />
      </Router>
    );
  });

  test("repository component includes correct text", () => {
    render(
      <Router>
        <Repo
          BASE_URL={"https://api.github.com"}
          commits={commits}
          setCommits={vi.fn()}
          repoNotFound={true}
          setRepoNotFound={vi.fn()}
          zeroCommits={false}
          setZeroCommits={vi.fn()}
        />
      </Router>
    );

    const headerText = screen.getByText("Netflix/Hystrix");
    expect(headerText).toBeInTheDocument();
  });

  test("repository component includes number of commits found", () => {
    render(
      <Router>
        <Repo
          BASE_URL={"https://api.github.com"}
          commits={commits}
          setCommits={vi.fn()}
          repoNotFound={true}
          setRepoNotFound={vi.fn()}
          zeroCommits={false}
          setZeroCommits={vi.fn()}
        />
      </Router>
    );

    const commitsFoundText = screen.getByText("1 commit found");
    expect(commitsFoundText).toBeInTheDocument();
  });
});
