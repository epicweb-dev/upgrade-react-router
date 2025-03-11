<div>
  <h1 align="center"><a href="https://www.epicweb.dev/workshops">Upgrade React Router 🔼</a></h1>
  <strong>
    Bring your React app into the modern age
  </strong>
  <p>
    In this workshop, we'll start with an app running React Router v5.0 and incrementally upgrade it to v6 and finally to v7 of React Router which will open up modern React features to our app.
  </p>
</div>

<hr />

<div align="center">
  <a
    alt="Epic Web logo with the words Deployed Version"
    href="https://epicweb-dev-upgrade-react-router.fly.dev/"
  >
    <img
      width="300px"
      src="https://github-production-user-asset-6210df.s3.amazonaws.com/1500684/254000390-447a3559-e7b9-4918-947a-1b326d239771.png"
    />
  </a>
</div>

<hr />

## NOTICE: This is incomplete.

I may finish making it a proper workshop with exercises and all that, but for
now, it's just a couple checkpoints. You can run it locally and check the diff
(or just check the
[diff tab in the deployed version](https://upgrade-react-router.epicweb.dev/diff)).
You'll want to check
[v5 vs v6](https://upgrade-react-router.epicweb.dev/diff?app1=01.01.problem.v5&app2=50.01.problem.v6)
and then
[v6 vs v7](https://upgrade-react-router.epicweb.dev/diff?app1=50.01.problem.v6&app2=99.01.solution.v7).

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![GPL 3.0 License][license-badge]][license]
[![Code of Conduct][coc-badge]][coc]
<!-- prettier-ignore-end -->

## Prerequisites

- Experience with older versions of React Router

## Pre-workshop Resources

Here are some resources you can read before taking the workshop to get you up to
speed on some of the tools and concepts we'll be covering:

- [React Router v6 Upgrade Guide](https://reactrouter.com/6.30.0/upgrading/v5)
- [React Router v7 Upgrade Guide](https://reactrouter.com/upgrading/v6)

## System Requirements

- [git][git] v2.18 or greater
- [NodeJS][node] v18 or greater
- [npm][npm] v8 or greater

All of these must be available in your `PATH`. To verify things are set up
properly, you can run this:

```shell
git --version
node --version
npm --version
```

If you have trouble with any of these, learn more about the PATH environment
variable and how to fix it here for [windows][win-path] or
[mac/linux][mac-path].

## Setup

This is a pretty large project (it's actually many apps in one) so it can take
several minutes to get everything set up the first time. Please have a strong
network connection before running the setup and grab a snack.

> **Warning**: This repo is _very_ large. Make sure you have a good internet
> connection before you start the setup process. The instructions below use
> `--depth` to limit the amount you download, but if you have a slow connection,
> or you pay for bandwidth, you may want to find a place with a better
> connection.

Follow these steps to get this set up:

```sh nonumber
git clone --depth 1 https://github.com/epicweb-dev/upgrade-react-router.git
cd upgrade-react-router
npm run setup
```

If you experience errors here, please open [an issue][issue] with as many
details as you can offer.

## The Workshop App

Learn all about the workshop app on the
[Epic Web Getting Started Guide](https://www.epicweb.dev/get-started).

[![Kent with the workshop app in the background](https://github-production-user-asset-6210df.s3.amazonaws.com/1500684/280407082-0e012138-e01d-45d5-abf2-86ffe5d03c69.png)](https://www.epicweb.dev/get-started)

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[git]: https://git-scm.com/
[build-badge]: https://img.shields.io/github/actions/workflow/status/epicweb-dev/upgrade-react-router/validate.yml?branch=main&logo=github&style=flat-square
[build]: https://github.com/epicweb-dev/upgrade-react-router/actions?query=workflow%3Avalidate
[license-badge]: https://img.shields.io/badge/license-GPL%203.0%20License-blue.svg?style=flat-square
[license]: https://github.com/epicweb-dev/upgrade-react-router/blob/main/LICENSE
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://kentcdodds.com/conduct
[win-path]: https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/
[mac-path]: http://stackoverflow.com/a/24322978/971592
[issue]: https://github.com/epicweb-dev/upgrade-react-router/issues/new
<!-- prettier-ignore-end -->
