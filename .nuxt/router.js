import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a030542e = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _f7ed456c = () => interopDefault(import('../pages/apply.vue' /* webpackChunkName: "pages/apply" */))
const _b12efa56 = () => interopDefault(import('../pages/article/index.vue' /* webpackChunkName: "pages/article/index" */))
const _779383f8 = () => interopDefault(import('../pages/case-analysis/index.vue' /* webpackChunkName: "pages/case-analysis/index" */))
const _57c6d3fc = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _79a29a30 = () => interopDefault(import('../pages/events/index.vue' /* webpackChunkName: "pages/events/index" */))
const _547a11f2 = () => interopDefault(import('../pages/faq.vue' /* webpackChunkName: "pages/faq" */))
const _5d2263de = () => interopDefault(import('../pages/inquiry-form.vue' /* webpackChunkName: "pages/inquiry-form" */))
const _1e37026a = () => interopDefault(import('../pages/news/index.vue' /* webpackChunkName: "pages/news/index" */))
const _4c5b93ce = () => interopDefault(import('../pages/rank-boarding.vue' /* webpackChunkName: "pages/rank-boarding" */))
const _e1e7e8de = () => interopDefault(import('../pages/rank-school.vue' /* webpackChunkName: "pages/rank-school" */))
const _3c02aa42 = () => interopDefault(import('../pages/rank-subject.vue' /* webpackChunkName: "pages/rank-subject" */))
const _ab280cdc = () => interopDefault(import('../pages/school-type/index.vue' /* webpackChunkName: "pages/school-type/index" */))
const _4ca480ea = () => interopDefault(import('../pages/subject/index.vue' /* webpackChunkName: "pages/subject/index" */))
const _78561134 = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _923cc288 = () => interopDefault(import('../pages/test2.vue' /* webpackChunkName: "pages/test2" */))
const _afcf11b0 = () => interopDefault(import('../pages/school-type/boarding-school/index.vue' /* webpackChunkName: "pages/school-type/boarding-school/index" */))
const _bb88f034 = () => interopDefault(import('../pages/school-type/foundation/index.vue' /* webpackChunkName: "pages/school-type/foundation/index" */))
const _dd2c0bac = () => interopDefault(import('../pages/school-type/international-one/index.vue' /* webpackChunkName: "pages/school-type/international-one/index" */))
const _6f933c12 = () => interopDefault(import('../pages/school-type/summer-school.vue' /* webpackChunkName: "pages/school-type/summer-school" */))
const _39171801 = () => interopDefault(import('../pages/school-type/university/index.vue' /* webpackChunkName: "pages/school-type/university/index" */))
const _200007fa = () => interopDefault(import('../pages/school-type/foundation/step2.vue' /* webpackChunkName: "pages/school-type/foundation/step2" */))
const _0f2e7a3e = () => interopDefault(import('../pages/school-type/international-one/step2.vue' /* webpackChunkName: "pages/school-type/international-one/step2" */))
const _9248cfd6 = () => interopDefault(import('../pages/school-type/university/step2.vue' /* webpackChunkName: "pages/school-type/university/step2" */))
const _a16f4900 = () => interopDefault(import('../pages/events/page/_page.vue' /* webpackChunkName: "pages/events/page/_page" */))
const _b49c3ce6 = () => interopDefault(import('../pages/article/_slug.vue' /* webpackChunkName: "pages/article/_slug" */))
const _45dbd4fc = () => interopDefault(import('../pages/boarding-school/_slug.vue' /* webpackChunkName: "pages/boarding-school/_slug" */))
const _75dce2b0 = () => interopDefault(import('../pages/case-analysis/_slug.vue' /* webpackChunkName: "pages/case-analysis/_slug" */))
const _4af29b8d = () => interopDefault(import('../pages/category/_slug.vue' /* webpackChunkName: "pages/category/_slug" */))
const _ac404f78 = () => interopDefault(import('../pages/clearing/_slug.vue' /* webpackChunkName: "pages/clearing/_slug" */))
const _77ebf8e8 = () => interopDefault(import('../pages/events/_slug.vue' /* webpackChunkName: "pages/events/_slug" */))
const _2216e602 = () => interopDefault(import('../pages/foundation/_slug.vue' /* webpackChunkName: "pages/foundation/_slug" */))
const _38aa00fe = () => interopDefault(import('../pages/international-one/_slug.vue' /* webpackChunkName: "pages/international-one/_slug" */))
const _1c806122 = () => interopDefault(import('../pages/news/_slug.vue' /* webpackChunkName: "pages/news/_slug" */))
const _5011c37a = () => interopDefault(import('../pages/subject/_slug.vue' /* webpackChunkName: "pages/subject/_slug" */))
const _326361e9 = () => interopDefault(import('../pages/summer-school/_slug.vue' /* webpackChunkName: "pages/summer-school/_slug" */))
const _1f5baeea = () => interopDefault(import('../pages/university-school/_slug.vue' /* webpackChunkName: "pages/university-school/_slug" */))
const _60c09ea4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _a030542e,
    name: "about"
  }, {
    path: "/apply",
    component: _f7ed456c,
    name: "apply"
  }, {
    path: "/article",
    component: _b12efa56,
    name: "article"
  }, {
    path: "/case-analysis",
    component: _779383f8,
    name: "case-analysis"
  }, {
    path: "/contact",
    component: _57c6d3fc,
    name: "contact"
  }, {
    path: "/events",
    component: _79a29a30,
    name: "events"
  }, {
    path: "/faq",
    component: _547a11f2,
    name: "faq"
  }, {
    path: "/inquiry-form",
    component: _5d2263de,
    name: "inquiry-form"
  }, {
    path: "/news",
    component: _1e37026a,
    name: "news"
  }, {
    path: "/rank-boarding",
    component: _4c5b93ce,
    name: "rank-boarding"
  }, {
    path: "/rank-school",
    component: _e1e7e8de,
    name: "rank-school"
  }, {
    path: "/rank-subject",
    component: _3c02aa42,
    name: "rank-subject"
  }, {
    path: "/school-type",
    component: _ab280cdc,
    name: "school-type"
  }, {
    path: "/subject",
    component: _4ca480ea,
    name: "subject"
  }, {
    path: "/test",
    component: _78561134,
    name: "test"
  }, {
    path: "/test2",
    component: _923cc288,
    name: "test2"
  }, {
    path: "/school-type/boarding-school",
    component: _afcf11b0,
    name: "school-type-boarding-school"
  }, {
    path: "/school-type/foundation",
    component: _bb88f034,
    name: "school-type-foundation"
  }, {
    path: "/school-type/international-one",
    component: _dd2c0bac,
    name: "school-type-international-one"
  }, {
    path: "/school-type/summer-school",
    component: _6f933c12,
    name: "school-type-summer-school"
  }, {
    path: "/school-type/university",
    component: _39171801,
    name: "school-type-university"
  }, {
    path: "/school-type/foundation/step2",
    component: _200007fa,
    name: "school-type-foundation-step2"
  }, {
    path: "/school-type/international-one/step2",
    component: _0f2e7a3e,
    name: "school-type-international-one-step2"
  }, {
    path: "/school-type/university/step2",
    component: _9248cfd6,
    name: "school-type-university-step2"
  }, {
    path: "/events/page/:page?",
    component: _a16f4900,
    name: "events-page-page"
  }, {
    path: "/article/:slug",
    component: _b49c3ce6,
    name: "article-slug"
  }, {
    path: "/boarding-school/:slug?",
    component: _45dbd4fc,
    name: "boarding-school-slug"
  }, {
    path: "/case-analysis/:slug?",
    component: _75dce2b0,
    name: "case-analysis-slug"
  }, {
    path: "/category/:slug?",
    component: _4af29b8d,
    name: "category-slug"
  }, {
    path: "/clearing/:slug?",
    component: _ac404f78,
    name: "clearing-slug"
  }, {
    path: "/events/:slug",
    component: _77ebf8e8,
    name: "events-slug"
  }, {
    path: "/foundation/:slug?",
    component: _2216e602,
    name: "foundation-slug"
  }, {
    path: "/international-one/:slug?",
    component: _38aa00fe,
    name: "international-one-slug"
  }, {
    path: "/news/:slug",
    component: _1c806122,
    name: "news-slug"
  }, {
    path: "/subject/:slug",
    component: _5011c37a,
    name: "subject-slug"
  }, {
    path: "/summer-school/:slug?",
    component: _326361e9,
    name: "summer-school-slug"
  }, {
    path: "/university-school/:slug?",
    component: _1f5baeea,
    name: "university-school-slug"
  }, {
    path: "/",
    component: _60c09ea4,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
