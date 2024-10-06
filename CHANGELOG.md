# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.0.1-next.6](https://github.com/novaui-org/nova/compare/v0.0.1-next.5...v0.0.1-next.6) (2024-10-06)


### Features

* **components/NSlideTransition:** add support also for animating gap, when an element is inside flexbox ([d34b8e6](https://github.com/novaui-org/nova/commit/d34b8e6297c586a5cb288de59d1597b5c5e76381))
* **docs/Slide:** add information about animating the gap flexbox property ([1181641](https://github.com/novaui-org/nova/commit/118164111f9d6cb2d8dedbfeccd8774befa8c6a0))





## [0.0.1-next.5](https://github.com/novaui-org/nova/compare/v0.0.1-next.4...v0.0.1-next.5) (2024-10-05)


### Bug Fixes

* **components/NCard:** add also transition for transform when card is flat ([a20c5d4](https://github.com/novaui-org/nova/commit/a20c5d4f30a29695335c5a03d06e053c772707e1))


### Features

* **docs/DisplayContainer:** add support for card variant ([da2882a](https://github.com/novaui-org/nova/commit/da2882a7794a2b57d63067bcdd1e525e84b24fb9))
* **docs/Installation:** add complete installation documentation ([f922309](https://github.com/novaui-org/nova/commit/f9223090eebd0560ff747c2bb255a5043cb18c6c))
* **docs:** extend loading dirs - to load them recursively ([3456d0b](https://github.com/novaui-org/nova/commit/3456d0bec906a4026017d2ab5afe479c9af343fe))
* **docs:** style theme a bit ([b19dbce](https://github.com/novaui-org/nova/commit/b19dbce3315400a9a843f5ee4d1ce4f33cace81d))





## [0.0.1-next.4](https://github.com/novaui-org/nova/compare/v0.0.1-next.3...v0.0.1-next.4) (2024-10-05)


### Features

* remove motion and use only @oku-ui/motion ([74900fa](https://github.com/novaui-org/nova/commit/74900fa703acd14861c4d4fc2445fb652f3ea94d))





## [0.0.1-next.3](https://github.com/novaui-org/nova/compare/v0.0.1-next.2...v0.0.1-next.3) (2024-10-05)


### Bug Fixes

* **@nova-org/components/NButton:** Add default cursor pointer. ([67ca5a1](https://github.com/novaui-org/nova/commit/67ca5a155a879c98d7d72143031708d430398134))
* **@nova-org/components/NDivider:** Explicitly set border to 0. ([c3d583d](https://github.com/novaui-org/nova/commit/c3d583dd35e4b83d16fd3ac24bff475295a473b7))


### Features

* **@nova-org/components/NDivider:** Disable tap highlight color. ([6c740ac](https://github.com/novaui-org/nova/commit/6c740accbb3285b060355a229f8b96801f338aeb))
* **@nova-org/components/normalize:** Remove inherit box-sizing. ([a3c8259](https://github.com/novaui-org/nova/commit/a3c82595f56f645cdac7dbaec0f8537f5647c871))
* **components/NCheckbox, NOption:** make value optional - so when used together with boolean it works correctly ([48f7e44](https://github.com/novaui-org/nova/commit/48f7e44c8a2e6533a5dbe9797a4e2d052e751558))
* **components/NInputMessage, NOptionsGroup:** move slideTransition from top template level to optionsGroup ([3def909](https://github.com/novaui-org/nova/commit/3def9094d59f500a0a7652c37846558db7ff10e9))
* **components/NOptionsGroup:** rename NSlideTransitionVertical to NSlideTransitionHorizontal, update usages and export it as well ([b1fcb34](https://github.com/novaui-org/nova/commit/b1fcb34ed2f9979f20889af57c5ecec0254efc2a))
* **components/NOptionsGroup:** use new slide transition groups, wrap error/success icon with span element, so gap is also animated ([6b35a72](https://github.com/novaui-org/nova/commit/6b35a722864c46dc7e331a9e3c88ebc180c8203f))
* **components/NSlideTransitionsGroup:** create also transition-group component ([f3f835f](https://github.com/novaui-org/nova/commit/f3f835f121bcceb2c4a344bb86d4457edbd794fe))
* **components/NSlideTransitionVertical:** create also slide animation for width, margin/padding/border from left and top ([e9c7d68](https://github.com/novaui-org/nova/commit/e9c7d68db9917f6f7eef4e6bf03ea2db649c81e4))
* **components:** add util for copying text ([d022b6d](https://github.com/novaui-org/nova/commit/d022b6d0e72603f73fdc09be7bab1e9925958ae9))
* **components:** update NInputMessage according to NSlideTransition changes ([dcc5912](https://github.com/novaui-org/nova/commit/dcc5912037a5a100200fa1ea82dad5769481dff3))
* **docs/checkbox:** add modelValue to basicUsage of checkbox ([832b24c](https://github.com/novaui-org/nova/commit/832b24cdbb8923ef966dc9110f88a01aeeda19b3))
* **docs/Icon:** add basic usage as well as search and copying of icons ([d02ae8c](https://github.com/novaui-org/nova/commit/d02ae8ce72a6be2b5f3149e0e2f649f772730978))
* **docs/SlideHorizontal:** add docs for horizontal animation transition ([24142e9](https://github.com/novaui-org/nova/commit/24142e92aab2788597578d31291182aaf63f5857))
* **docs/SlideHorizontal:** add docs for vertical animation transition ([b93490a](https://github.com/novaui-org/nova/commit/b93490a31311c8a3bbb2e94fa020928a88415240))
* **NSlideTransition:** completely rewrite transition component - using raw calculations instead of motion lib ([af98f24](https://github.com/novaui-org/nova/commit/af98f246f2de59da769de42e4626461a28f1ae13))





## [0.0.1-next.2](https://github.com/novaui-org/nova/compare/v0.0.1-next.1...v0.0.1-next.2) (2024-05-12)


### Features

* **@nova-org/components:** Add normalize css. ([9a553e6](https://github.com/novaui-org/nova/commit/9a553e6fe887c9729a56b25ef20d002700f693d6))





## [0.0.1-next.1](https://github.com/novaui-org/nova/compare/v0.0.1-next.0...v0.0.1-next.1) (2024-05-08)

**Note:** Version bump only for package @nova-org/nova
