# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 1.2.0 (2019-07-15)

### Features

- Complete extractFromToSource with unit tests ([4ac3634](https://gitlab.com/codsen/codsen/commit/4ac3634))
- Improvements to multiple CSS rule generation and recognition in config ([b780889](https://gitlab.com/codsen/codsen/commit/b780889))
- Improvements to the padding algorithm ([21ac50f](https://gitlab.com/codsen/codsen/commit/21ac50f))
- Separate extractFromToSource() into a standalone, exported function ([af27f89](https://gitlab.com/codsen/codsen/commit/af27f89))

## 1.1.0 (2019-07-06)

### Bug Fixes

- Don't close the comment blocks above, it's not fully safe ([5ce6230](https://gitlab.com/codsen/codsen/commit/5ce6230))
- Fix cases when there is no \$\$\$ in the input and there are heads/tails ([09ceccd](https://gitlab.com/codsen/codsen/commit/09ceccd))
- Fix the case when the only non-whitespace string is at zero index (falsey value) ([76fd296](https://gitlab.com/codsen/codsen/commit/76fd296))
- More tests and more improvements to edge case recognition ([4721b20](https://gitlab.com/codsen/codsen/commit/4721b20))
- Tightened the whitespace management part on the surrounding areas ([551a851](https://gitlab.com/codsen/codsen/commit/551a851))

### Features

- Add progress-reporting callback function to opts ([82e0d9b](https://gitlab.com/codsen/codsen/commit/82e0d9b))
- Algorithm improvements to cover more dirty input cases ([70190a6](https://gitlab.com/codsen/codsen/commit/70190a6))
- Generated digit padding everywhere if possible ([750e853](https://gitlab.com/codsen/codsen/commit/750e853))
- Make more unit tests pass ([177f05c](https://gitlab.com/codsen/codsen/commit/177f05c))
- opts.pad ([5d3e16a](https://gitlab.com/codsen/codsen/commit/5d3e16a))
- Output the log ([c729689](https://gitlab.com/codsen/codsen/commit/c729689))
- Tackle input without any \$\$\$ ([1dcaee4](https://gitlab.com/codsen/codsen/commit/1dcaee4))

## 1.0.0 (2018-06-28)

- ✨ First public release