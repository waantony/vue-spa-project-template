export default router => {
  router.beforeEach((to, from, next) => {
    next()
  })

  router.afterEach(to => {
    document.title = to.query.title || to.meta?.title || ''
  })
}
